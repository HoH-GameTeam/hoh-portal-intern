// const webpack = require('webpack');

// module.exports = function override(config) {
//   config.resolve.fallback = {
//     crypto: require.resolve("crypto-browserify"),
//     process: require.resolve('process/browser'),
//     stream: require.resolve('stream-browserify'),
//     http: require.resolve('stream-http'),
//     https: require.resolve('https-browserify'),
//     util: require.resolve('util'),
//     buffer: require.resolve('buffer'),
//     assert: require.resolve('assert'),
//   };

//   config.plugins.push(
//     new webpack.ProvidePlugin({
//       process: 'process/browser.js',
//       Buffer: ['buffer', 'Buffer'],
//     })
//   );

//   return config;
// };

const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  config.ignoreWarnings = [/Failed to parse source map/];
  config.module.rules.push({
    test: /\.(js|mjs|jsx)$/,
    enforce: 'pre',
    loader: require.resolve('source-map-loader'),
    resolve: {
      fullySpecified: false,
    },
  });
  return config;
};
