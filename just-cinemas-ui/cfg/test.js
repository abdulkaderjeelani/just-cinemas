const path = require('path');

const srcPath = path.join(__dirname, '/../src/');

const baseConfig = require('./base');
// Add needed plugins here
const BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta-instrumenter-loader',
        include: [
          path.join(__dirname, '/../src'),
        ],
      },
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader',
      },
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [].concat(
          baseConfig.additionalPaths,
          [
            path.join(__dirname, '/../src'),
            path.join(__dirname, '/../test'),
          ]
        ),
      },
    ],
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      actions: `${srcPath}actions/`,
      helpers: path.join(__dirname, '/../test/helpers'),
      components: `${srcPath}components/`,
      containers: `${srcPath}containers/`,
      sources: `${srcPath}sources/`,
      stores: `${srcPath}stores/`,
      styles: `${srcPath}styles/`,
      config: `${srcPath}config/${process.env.REACT_WEBPACK_ENV}`,
    },
  },
  plugins: [
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false,
    }),
  ],
};
