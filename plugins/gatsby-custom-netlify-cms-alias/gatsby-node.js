exports.onCreateWebpackConfig = ({actions: {setWebpackConfig}}, options) => {
	if(!options.package || typeof options.package !== 'string') return
	setWebpackConfig({resolve: {alias: {'netlify-cms': options.package}}})
}
