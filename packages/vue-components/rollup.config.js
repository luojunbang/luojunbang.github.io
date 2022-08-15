import ts from 'rollup-plugin-typescript2'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vuePlugin from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'

import AutoImport from 'unplugin-auto-import/rollup'
import Components from 'unplugin-vue-components/rollup'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/rollup'
const tsPlugin = ts({
  check: false,
  // tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  // cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
  tsconfigOverride: {
    compilerOptions: {
      declaration: true,
      declarationMap: true,
    },
    exclude: ['__tests__', 'test-dts'],
  },
})

const plugins = [
  tsPlugin,
  vuePlugin(),
  ElementPlus({}),
  postcss({
    extensions: ['.css', '.scss'],
  }),
]

const entryConfig = {
  input: ['./src/index.ts'],
  output: [
    {
      file: 'dist/index.mjs',
      format: 'esm',
    },
  ],
  plugins,
}

export default [entryConfig]
