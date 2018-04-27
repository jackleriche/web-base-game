var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
	mode: "development",
    devtool: 'inline-source-map',
    entry: path.join(__dirname, "src/index.ts"),
    watch: true,
	output: {
        path: path.join(__dirname, "dist"),
		filename: 'index.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
            title: 'DEV MODE: web games base',
            template: path.join(__dirname, 'templates/index.ejs')
        })
	],
	devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        inline: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true,
            ignored: /node_modules/
        }
    },
    module: {
        rules: [
           // { test: /\.ts$/, enforce: 'pre', loader: 'tslint-loader' },
            { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
            { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            phaser: path.join(__dirname, 'node_modules/phaser/dist/phaser.js'),
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};