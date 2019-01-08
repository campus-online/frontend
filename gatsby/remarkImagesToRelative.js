/* eslint-env node */
const {join} = require('path')
const deepMap = require('deep-map')

const imageRegex = /\.(?:gif|png|jpe?g|webp)$/
const uploadRegex = /^\/uploads\//
const isUploadedImage = path => imageRegex.test(path) && uploadRegex.test(path)

// Convert paths in frontmatter to relative
const makeRelative = value => {
	if (typeof value !== 'string') return value
	if (!isUploadedImage(value)) return value
	return join('../../../static', value)
}

module.exports = node => {
	if (node.internal.type !== 'MarkdownRemark') return
	deepMap(node.frontmatter, makeRelative, {inPlace: true})
}
