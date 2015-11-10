const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './index.js'
	},
	output: {
		path: path.join(__dirname, 'static'),
		filename: 'bundle.js',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: path.join(__dirname, 'node_modules'),
				loader: 'babel',
				query: {
	                cacheDirectory: false,
	                presets: ['es2015']
            	}
			}
		]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
	]
}