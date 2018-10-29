const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const config = {
	context: path.resolve(__dirname, 'src/js'),
	entry: {
		main: './index.js'
	},
	devServer: {
		contentBase: DIST_DIR,
		port: 9000,
		open: true
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true // set to true if you want JS source maps
			}),
			new OptimizeCssAssetsPlugin({})
		]
	},
	output: {
		path: DIST_DIR,
		filename: './assets/js/[name].bundle.js'
	},
	module: {
		rules: [{
				test: /\.html$/,
				use: [{
					loader: "html-loader",
					options: {
						minimize: false
					}
				}]
			},
			{
				test: require.resolve('jquery'),
				use: [{
					loader: 'expose-loader',
					options: 'jQuery'
				}, {
					loader: 'expose-loader',
					options: '$'
				}]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: '/assets/fonts/'
					}
				}
			},
			{
				test: /\.(png|jpe?g|gif)/i,
				use: [{
					loader: 'url-loader',
					options: {
						name: '/img/[name].[ext]',
						limit: 200000
					}
				},
				{
					loader: 'img-loader'
				}]
			}	
		]
	},
	plugins: [new HtmlWebpackPlugin({
			template: SRC_DIR + '/index.html',
			filename: DIST_DIR + '/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: "assets/css/bundle.css"
		})
	]
}

module.exports = config;