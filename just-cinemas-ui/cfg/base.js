const path = require('path');
const defaultSettings = require('./defaults');
const sass = require('./sass');

const sassMixins = [
  'vendor-prefixes',
  'forms',
  'buttons',
  'clearfix',
  'grid',
];

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
const additionalPaths = [];

module.exports = {
  additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath,
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/api': '' },
      },
    },
    quiet: false,
    noInfo: false,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      containers: `${defaultSettings.srcPath}/containers/`,
      reducers: `${defaultSettings.srcPath}/reducers/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      config: `${defaultSettings.srcPath}/config/${process.env.REACT_WEBPACK_ENV}`,
    },
  },
  sassResources: [sass.loadVariables(), ...sass.loadMixins(sassMixins)],
  module: {},
};
