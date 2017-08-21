const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSASS = new ExtractTextPlugin('[name].[hash].css')

const PROD = process.env.NODE_ENV === 'production'

let rules = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader?cacheDirectory',
    exclude: [/node_modules/]
  },
  {
    test: /\.scss$/,
    use: extractSASS.extract(['css-loader', 'sass-loader']),
    exclude: [/node_modules/]
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000',
  },
  {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
]

let plugins = [
  extractSASS
]

const config = {
  module: {
    rules: rules
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: plugins,
  entry: path.resolve(__dirname, 'src/main/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: "bundle.[hash].js"
  },
  devtool: PROD ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  devServer: {
    port: 3000,
    contentBase:  path.resolve(__dirname, 'app'),
    historyApiFallback: true
  },
  plugins: [
    new htmlWebpackPlugin({ filename: 'index.html', template: 'src/main/index.html' })
  ]
}

module.exports = config