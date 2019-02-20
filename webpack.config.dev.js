const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 9000,
    hot: true
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
