const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

var rootPath = path.join(__dirname, '../')

const baseConfig = require('./webpack.base.config')

var utils = require('./utils.js')

const config = (env) => {
	var entry_folder = 'entry'

	//入口
	if (env && env['entry_folder'] && env['entry_folder'].length > 0) {
		entry_folder = env['entry_folder']
	}

	var { entrys, htmlPlugin } = utils.getConfig(entry_folder)

	return {
		...baseConfig,
		mode: 'development',

		entry: entrys,

		devServer: {
			hot: true, // 热替换
			contentBase: rootPath + '/example_dist', // server文件的根目录
			compress: true, // 开启gzip
			port: 8088, // 端口
			host: 'localhost',
		},

		plugins: [
			...htmlPlugin,
			new webpack.HotModuleReplacementPlugin(), // HMR允许在运行时更新各种模块，而无需进行完全刷新
		],
	}
}

fs.writeFile(path.join(__dirname, '../log/webpack.dev.json'), JSON.stringify(config, null, '\t'), function () {})

module.exports = config
