import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'hitchup',
  plugins: [
    resolve(),
    commonjs(),
    babel()
  ],
  dest: 'dist/hitchup.js'
};
