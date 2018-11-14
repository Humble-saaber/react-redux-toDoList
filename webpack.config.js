var path = require('path');
const webpack = require('webpack');
const publicPath = '/dist';


module.exports = {
  entry: './src/index.jsx',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
},

  devServer: {
    contentBase: path.join(__dirname, publicPath),
    hot: true
  },
  module: {
    rules: [
     { 
      test: /\.(css)$/,
      loader: [ 'style-loader' ,'css-loader'] 
     },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"]
      }]
  },
}