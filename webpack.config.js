const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist/esm'),
    filename: 'index.js',
    library: {
      type: 'module'
    }
  },
  module: {
    rules: [
      {
        test: /\.(m?js|ts)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /output\.wasm$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  experiments: {
    outputModule: true,
    topLevelAwait: true
  }
}
