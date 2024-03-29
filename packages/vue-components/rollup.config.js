import path from 'path'
import { copyFile, mkdir, readFile, writeFile } from 'fs/promises'
import vuePlugin from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import vueJsx from '@vitejs/plugin-vue-jsx'

import esbuild from 'rollup-plugin-esbuild'
import vueCompiler from 'vue/compiler-sfc'
import chalk from 'chalk'
import glob from 'fast-glob'

import { Project } from 'ts-morph'
import ElementPlus from 'unplugin-element-plus/vite'

import AutoImport from 'unplugin-auto-import/rollup'
import Components from 'unplugin-vue-components/rollup'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const { resolve } = path

const outputRoot = resolve(__dirname, './dist')
const entryRoot = resolve(__dirname, './src')
const componentsRoot = resolve(__dirname, './src/components')
const TSCONFIG_PATH = resolve(__dirname, 'tsconfig.json')

const plugins = [
  vuePlugin(),
  // ElementPlus({
  //   useSource: true,
  // }),
  AutoImport({
    resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
  }),
  Components({
    resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
  }),
  postcss({
    config: {
      path: resolve(__dirname, './postcss.config.js'),
    },
    extensions: ['.css', '.scss'],
  }),
  vueJsx(),
  esbuild({
    target: 'es2018',
    loaders: {
      '.vue': 'ts',
    },
  }),
]

const excludeFiles = (files, excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist', 'shims-vue']) => {
  return files.filter(path => !excludes.some(exclude => path.includes(exclude)))
}

const componentsList = excludeFiles(glob.sync('**', { cwd: componentsRoot, onlyFiles: false, deep: 1 }), glob.sync('**', { cwd: componentsRoot, onlyFiles: true, deep: 1 })).map(dir => {
  return {
    input: excludeFiles(
      glob.sync('**/*.{js,ts,vue}', {
        cwd: resolve(componentsRoot, dir),
        absolute: true,
      }),
    ),
    output: [
      {
        dir: resolve(outputRoot + '/components', dir),
        format: 'esm',
        entryFileNames: `[name].js`,
      },
    ],
    plugins,
    external: ['element-plus', 'lo-utils', 'vue'],
    treeshake: false,
  }
})

function copyEntry() {
  mkdir('./dist', { recursive: true }).then(res => {
    copyFile(resolve(entryRoot, './index.ts'), resolve(outputRoot, './index.js'))
  })
}

copyEntry()

async function generateDefination() {
  const compilerOptions = {
    emitDeclarationOnly: true,
    outDir: resolve(outputRoot, 'types'),
    baseUrl: __dirname,
    preserveSymlinks: true,
    skipLibCheck: true,
    noImplicitAny: false,
    typeRoots: resolve(__dirname, './src'),
  }
  const project = new Project({
    compilerOptions,
    tsConfigFilePath: TSCONFIG_PATH,
    skipAddingFilesFromTsConfig: true,
  })
  const fileList = excludeFiles(
    await glob('**/*.{js?(x),ts?(x),vue}', {
      cwd: entryRoot,
      absolute: true,
      onlyFiles: true,
    }),
  )
  const sourceFiles = []

  await Promise.all(
    fileList.map(async file => {
      if (file.endsWith('.vue')) {
        const content = await readFile(file, 'utf-8')
        const hasTsNoCheck = content.includes('@ts-nocheck')

        const sfc = vueCompiler.parse(content)
        const { script, scriptSetup } = sfc.descriptor
        if (script || scriptSetup) {
          let content = (hasTsNoCheck ? '// @ts-nocheck\n' : '') + (script?.content ?? '')

          if (scriptSetup) {
            const compiled = vueCompiler.compileScript(sfc.descriptor, {
              id: 'xxx',
            })
            content += compiled.content
          }
          // if (file.includes('swiper')) {
          //   console.log('---          start          ---')
          //   console.log(content)
          //   console.log('---          end          ---')
          // }
          const lang = scriptSetup?.lang || script?.lang || 'js'
          const sourceFile = project.createSourceFile(`${path.relative(process.cwd(), file)}.${lang}`, content)
          sourceFiles.push(sourceFile)
        }
      } else {
        sourceFiles.push(project.addSourceFileAtPath(file))
      }
    }),
  )
  // typeCheck(project)
  await project.emit({
    emitOnlyDtsFiles: true,
  })

  const tasks = sourceFiles.map(async sourceFile => {
    const relativePath = path.relative(entryRoot, sourceFile.getFilePath())
    console.log(chalk.yellow(`Generating definition for file: ${chalk.bold(relativePath)}`))

    const emitOutput = sourceFile.getEmitOutput()
    const emitFiles = emitOutput.getOutputFiles()
    if (emitFiles.length === 0) {
      throw new Error(`Emit no file: ${chalk.bold(relativePath)}`)
    }

    const subTasks = emitFiles.map(async outputFile => {
      const filepath = outputFile.getFilePath().replace('/types/src', '')
      await mkdir(path.dirname(filepath), {
        recursive: true,
      })
      console.log('filepath:', filepath)
      await writeFile(filepath, outputFile.getText(), 'utf8')

      console.log(chalk.red(filepath), chalk.green(`Definition for file: ${chalk.bold(relativePath)} generated`))
    })

    await Promise.all(subTasks)
  })

  await Promise.all(tasks)
}

generateDefination()

function typeCheck(project) {
  const diagnostics = project.getPreEmitDiagnostics()
  if (diagnostics.length > 0) {
    console.error(project.formatDiagnosticsWithColorAndContext(diagnostics))
    const err = new Error('Failed to generate dts.')
    console.error(err)
    throw err
  }
}

export default componentsList
