const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

var rootPath = path.join(__dirname, '../')

const baseConfig = require('./webpack.base.config')

var utils = require('./utils.js')

module.exports = (env) => {
	var entry_folder = 'entry'

	//入口
	if (env && env['entry_folder'] && env['entry_folder'].length > 0) {
		entry_folder = env['entry_folder']
	}

	var { entrys, htmlPlugin } = utils.getConfig(entry_folder)

	return {
		...baseConfig,
		mode: 'production',
		entry: entrys,

		plugins: [
			...htmlPlugin,
			new webpack.HotModuleReplacementPlugin(), // HMR允许在运行时更新各种模块，而无需进行完全刷新
		],
	}
}
