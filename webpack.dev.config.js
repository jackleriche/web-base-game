var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.join(__dirname, "src/index.ts"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "DEV MODE: web games base",
      template: path.join(__dirname, "templates/index.ejs")
    }),
    new CopyPlugin({
      patterns: [
        { from: "./assets", to: "assets" }
      ],
    }),

  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      phaser: path.join(__dirname, "node_modules/phaser/dist/phaser.min.js")
    }
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
