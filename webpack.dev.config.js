var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	devtool: 'source-map',
    entry: path.join(__dirname, "src/index.js"),
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
};