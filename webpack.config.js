const path = require('path');

const config = {
  entry: {
    background: path.resolve(__dirname, 'src', 'background.js'),
    prettify: path.resolve(__dirname, 'src', 'prettify.js'),
  },
  output: {
    filename: 'src/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = (env, argv) => {
  switch (argv.mode) {
    case 'production':
      break;
    case 'development':
    default:
      break;
  }
  return config;
};
