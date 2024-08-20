const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		main: path.resolve(__dirname, './js/dashboard_main.js'),
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	performance: {
		maxAssetSize: 1000000,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'], // Correctly configured CSS loaders
			},
			{
				test: /\.(gif|svg|png|jpg|jpeg)$/i,
				type: 'asset/resource',
				use: [
					{
						loader: 'file-loader', // Use file-loader first
					},
					{
						loader: 'image-webpack-loader', // Use image-webpack-loader after
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
};

