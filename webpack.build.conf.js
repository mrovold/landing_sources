const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpack = require('./webpack.config.js');

const buildWebpackConfig = merge(baseWebpack, {
  mode: 'production'
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
