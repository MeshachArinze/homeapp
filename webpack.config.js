const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};