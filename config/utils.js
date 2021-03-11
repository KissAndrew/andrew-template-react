const path = require('path')
const fs = require('fs-extra')
const HtmlWebPackPlugin = require('html-webpack-plugin')

/**
 * 动态查找所有入口文件
 */
function GetFolderNameArr(path, bool) {
	let components = []
	const files = fs.readdirSync(path)
	//console.log(files, "========files==========");
	files.forEach(function (item, index) {
		let stat = fs.lstatSync(path + item)
		if (stat.isDirectory() === bool) {
			components.push(item)
		}
	})

	components = components.filter(function (item) {
		// return item == "login" || item == "index";
		// return item != "demo";
		// return item != "login";
		return true
	})

	return components
}

const HTML_META = {
	charset: { charset: 'utf-8' },
	'Content-Security-Policy': {
		'http-equiv': 'Content-Security-Policy',
		content:
			"default-src *;style-src 'self' 'unsafe-inline';script-src 'self' 'unsafe-inline' 'unsafe-eval';img-src 'self' data: http: https:;",
	},
	'X-UA-Compatible': { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
	viewport: 'width=device-width, initial-scale=1,minimum-scale=1.0, maximum-scale=1.0, shrink-to-fit=no',
	renderer: 'webkit',
	'format-detection': 'telephone=no',
}

// 最原始可用的
function getConfig(prePath, entry_folder) {
	let entrys = {} //设置多页面入口
	let htmlPlugin = []

	entry_folder = entry_folder || 'entry'

	var folderNameArr = GetFolderNameArr(`./${entry_folder}/`, true)

	folderNameArr.forEach((key) => {
		entrys[key] = `./${entry_folder}/${key}/index.jsx`

		let plugin = new HtmlWebPackPlugin({
			template: `./${entry_folder}/${key}/index.html`,
			filename: `${key}.html`,
			chunks: [key],
			meta: HTML_META,
			// favicon: './favicon.ico',
			minify: {
				// 压缩 HTML 的配置
				collapseWhitespace: true,
				removeComments: true,
				useShortDoctype: true,
			},
		})

		htmlPlugin.push(plugin)
	})

	return { entrys, htmlPlugin }
}

fs.writeFile(path.join(__dirname, '../log/util.json'), JSON.stringify(getConfig(), null, '\t'), function () {})

module.exports = {
	getConfig: getConfig,
}
