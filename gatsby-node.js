/* eslint-env node, es6 */
const fp = require('lodash/fp')
const {createFilePath} = require('gatsby-source-filesystem')

const trans = {
	authors: 'reporteres',
	articles: 'materias',
	editorials: 'editorias',
	about: 'sobre',
}

const createUrl = fp.flow(
	createFilePath,
	fp.replace(/(^\/|\/$)/g, ''),
	fp.split('/'),
	array => array.reduce((url, segment, index) => {
		if(index === 0 && segment === 'docs') return url
		if(index === 1) return [...url, trans[segment] || segment]
		return [...url, segment]
	}, []),
	fp.join('/'),
	string => `/${string}/`.replace(/\/+/, '/')
)

exports.createPages = async (...args) => {
	await require('./gatsby/create-default-pages')(...args)
	await Promise.all([
		require('./gatsby/create-tag-pages')(...args),
		require('./gatsby/create-post-pages')(...args),
	])
}

exports.onCreateNode = ({node, actions: {createNodeField}, getNode}) => {
	if (node.internal.type !== 'MarkdownRemark') return
	createNodeField({name: 'slug', node, value: createUrl({node, getNode})})
}
