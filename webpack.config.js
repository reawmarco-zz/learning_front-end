// constante que recupera o caminho completo do bundle.js
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom'];

const config = {
  // ponto de entrada do webpack config.
  entry: {
      bundle: './src/index.js',
      vendor: VENDOR_LIBS
  },
  //ponto de saída do webpack config.
  output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'build')
  },
    module: {
          rules:[
              {
                  test: /\.scss$/,
                  // a sequencia importa, e o da direita é executado por primeiro.
                  use: ExtractTextPlugin.extract(['css-loader','sass-loader'])
              },
              {
                  test: /\.js$/,
                  use:'babel-loader',
                  exclude: 'node_modules'
              }
        ]
    },
    plugins: [
       new ExtractTextPlugin('styles.css'),
       new webpack.optimize.CommonsChunkPlugin({
           names:['vendor', 'manifest']
       }),
        new htmlWebpack({
            template: './src/index.html'
        })
    ]
}

module.exports = config;
