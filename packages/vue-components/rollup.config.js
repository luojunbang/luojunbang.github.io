import ts from 'rollup-plugin-typescript2'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const { terser } = require('rollup-plugin-terser')

const tsPlugin = ts({
  check: true,
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

const emsConfig = {
  input: './src/formlist/index.ts',
  output: {
    file: 'dist/formlist.esm.js',
    format: 'esm',
  },

  plugins: [tsPlugin, vue({})],
}



export default [emsConfig]
