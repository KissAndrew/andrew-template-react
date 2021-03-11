module.exports = (api) => {
	api.cache(true)
	return {
		presets: [['cv', { envOpt: {} }]],
		plugins: ['babel-plugin-styled-components'],
	}
}
