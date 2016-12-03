import svelte from 'rollup-plugin-svelte';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/options.js',
  dest: 'bundled/options.bundle.js',
  format: 'iife',
  plugins: [
    nodeResolve(),
    commonjs(),
    svelte(),
  ],
};
