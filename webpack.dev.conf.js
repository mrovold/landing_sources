const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpack = require('./webpack.config.js');

const devWebpackConfig = merge(baseWebpack, {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    hotOnly: true,
    inline: true,
    lazy: false,
    contentBase: baseWebpack.externals.paths.dist,
    port: 8080,
    overlay: true, // будет выводить ошибки на экран в браузере
    liveReload: true,
    watchContentBase: true,
    writeToDisk: true,
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
      ignored: '/node_modules/'
    },
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
