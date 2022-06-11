const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|png|gif|jpg)/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './src/assets/icons/favicon.png',
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/assets', to: './assets' },
        { from: './public/*.png', to: './' },
        { from: './public/manifest.json', to: './' },
        { from: "./public/sw.js", to: "./" }
      ],
    }),
    new Dotenv({
      systemvars: true
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
