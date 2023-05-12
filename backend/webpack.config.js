const path = require('path');

const {
    WranglerJsCompatWebpackPlugin,
  } = require("wranglerjs-compat-webpack-plugin");

module.exports = {
  plugins: [new WranglerJsCompatWebpackPlugin()],
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'worker.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
};