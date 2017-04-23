import webpack from 'webpack';
import path from 'path';
import { readFileSync } from 'fs';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const ROOT = path.resolve(__dirname);
const bundledPath = path.join(ROOT, 'bundled');
const DEV = process.env.NODE_ENV !== 'production';
const babelrc = JSON.parse(readFileSync('.babelrc'));

babelrc.babelrc = false;
babelrc.presets[0][1].modules = false;

export default {
  entry: {
    commons: ['src/common/beautify.js', 'src/common/debug.js'],
    inject: ['src/inject.js'],
    click: ['src/click.js'],
    options: ['src/options.js'],
  },
  output: {
    path: path.join(ROOT, 'bundled'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(svelte|js)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', query: babelrc }],
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: [{ loader: 'svelte-loader' }],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  devtool: DEV ? 'cheap-module-eval-source-map' : 'source-map',
  resolve: {
    extensions: ['.js', '.css', '.svelte'],
    alias: {
      src: path.join(ROOT, 'src'),
    },
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/options.html', to: bundledPath },
      { from: 'src/background.js', to: bundledPath },
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      chunks: ['inject', 'click'],
    }),
    new ExtractTextPlugin('[name].css'),
  ],
};
