const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: {
    index: './src/index.js'    
  },  
  output: {
    path: path.resolve(__dirname),
    filename: './bundle-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: 'photos/',
            publicPath: 'photos/'
          }
        }
      },
    ]
  },
  devtool: 'source-map',
  watch: false,
  plugins: [
    new UglifyJSPlugin({ 
      sourceMap: false,
      parallel: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.IgnorePlugin(/vertx/)
  ]
};