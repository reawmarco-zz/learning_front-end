// constante que recupera o caminho completo do bundle.js
const path = require('path');

const config = {
  // ponto de entrada do webpack config.
  entry: './src/index.js',
  //ponto de saída do webpack config.
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
  }
}

module.exports = config;
