const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname),
      filename: './dist/index.bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }]
    },
    devtool: 'source-map',
    mode: 'development'
}
