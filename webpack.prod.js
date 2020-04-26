const merge = require('webpack-merge')
const common = require('./webpack.common.js')
// optiomization.minimizerを上書きするためのプラグイン
const terserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new terserPlugin({
        terserOptions: {
          // console を 消す
          compress: { drop_console: true }
        }
      })
    ]
  }
})