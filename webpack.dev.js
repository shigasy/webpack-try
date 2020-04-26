// webpack-dev-serverはビルド結果をメモリに保持
// ブラウザまで制御できる hot-reload

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
    // webpack-dev-serverを立ち上げた時のドキュメントルートを設定
    contentBase: './dist'
  },
  devtool: 'eval-source-map',
})