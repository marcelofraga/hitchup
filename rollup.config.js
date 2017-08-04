import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/pike.js',
  format: 'umd',
  moduleName: 'pike',
  plugins: [
    resolve(),
    commonjs(),
    babel()
  ],
  dest: 'dist/pike.js'
};
