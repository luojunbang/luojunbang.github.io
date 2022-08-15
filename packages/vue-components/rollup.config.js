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
  ElementPlus({
    // options
  }),
  postcss({
    extensions: ['.css', '.scss'],
  }),
]

const formlistConfig = {
  input: './src/formlist/index.ts',
  output: {
    file: 'dist/formlist/index.js',
    format: 'esm',
  },
  plugins,
}

const swiperConfig = {
  input: './src/swiper/index.ts',
  output: {
    file: 'dist/swiper/index.js',
    format: 'esm',
  },
  plugins,
}

const entryConfig = {
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins,
}

export default [entryConfig, formlistConfig, swiperConfig]
