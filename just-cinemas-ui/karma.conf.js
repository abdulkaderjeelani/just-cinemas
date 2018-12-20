const webpackCfg = require('./webpack.config');

// Set node environment to testing
process.env.NODE_ENV = 'test';

module.exports = (config) => {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    files: [
      'test/loadtests.js',
    ],
    port: 8080,
    captureTimeout: 60000,
    frameworks: ['mocha', 'chai'],
    client: {
      mocha: {},
    },
    singleRun: true,
    reporters: ['mocha', 'coverage', 'threshold'],
    preprocessors: {
      'test/loadtests.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackCfg,
    webpackServer: {
      noInfo: true,
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' },
      ],
    },
    thresholdReporter: {
      statements: 80,
      branches: 95,
      functions: 78,
      lines: 70,
    },
  });
};
