import ts from 'rollup-plugin-typescript2'
// import vue from '@vitejs/plugin-vue'
import path from 'path'
import vuePlugin from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import ElementPlus from 'unplugin-element-plus/rollup'

import esbuild from 'rollup-plugin-esbuild'

const tsPlugin = ts({
  check: false,
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  // cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
  tsconfigOverride: {
    compilerOptions: {
      rootDir: __dirname,
      declaration: false,
      declarationMap: false,
      outDir: path.resolve(__dirname, './dist/'),
    },
    exclude: ['__tests__', 'test-dts'],
  },
})

const plugins = [
  // tsPlugin,
  vuePlugin(),
  ElementPlus({}),
  postcss({
    extensions: ['.css', '.scss'],
  }),
  // vue({
  //   isProduction: false,
  // }),
  vueJsx(),
  esbuild({
    target: 'es2018',
    loaders: {
      '.vue': 'ts',
    },
  }),
]

import glob from 'fast-glob'

export const excludeFiles = (files, excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist', 'shims-vue']) => {
  return files.filter(path => !excludes.some(exclude => path.includes(exclude)))
}

const dirList = glob.sync('**', { cwd: path.resolve(__dirname, './src'), onlyFiles: false, deep: 1 })
const dirList2 = glob.sync('**', { cwd: path.resolve(__dirname, './src'), onlyFiles: true, deep: 1 })

const componentsList = excludeFiles(dirList, dirList2)

console.log(componentsList.join('\n'))
console.log('------')

const input = excludeFiles(
  glob.sync('**/*.{js,ts,vue}', {
    cwd: path.resolve(__dirname, './src'),
    absolute: true,
  }),
)

export default componentsList.map(dir => {
  return {
    input: excludeFiles(
      glob.sync('**/*.{js,ts,vue}', {
        cwd: path.resolve(__dirname, './src', dir),
        absolute: true,
      }),
    ),
    output: [
      {
        // preserveModules: true,
        // preserveModulesRoot: path.resolve(__dirname, './src', dir),
        dir: path.resolve(__dirname, './dist', dir),
        format: 'esm',
        entryFileNames: `[name].mjs`,
      },
    ],
    plugins,
    external: ['element-plus', 'lo-utils', 'vue'],
    treeshake: false,
  }
})
