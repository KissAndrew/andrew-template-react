const path = require('path')

module.exports = {
	resolve: {
		extensions: ['.tsx', '.js', '.json', '.jsx', '.css', '.scss', '.ts'],
		alias: {
			'@src': path.join(__dirname, `../src/`),
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/, // jsx/js文件的正则
				exclude: /node_modules/, // 排除 node_modules 文件夹
				use: 'babel-loader?cacheDirectory=true',
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 81920,
							outputPath: 'static/imgs/',
							name: '[name].[hash:7].[ext]',
						},
					},
				],
			},
		],
	},
}
