const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    path: path.resolve(__dirname, './src/main.js')
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  plugins:[
    new HtmlWebPackPlugin({
      title: 'react project',
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}