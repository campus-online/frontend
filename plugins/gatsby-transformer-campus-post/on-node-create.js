const fp = require('lodash/fp')

const isEditorialNode = fp.isMatch({
	internal: {type: 'MarkdownRemark'},
	fields: {template: 'editorial'},
})

const isPostNode = fp.isMatch({
	internal: {type: 'MarkdownRemark'},
	fields: {template: 'article'},
})

const isAuthorNode = fp.isMatch({
	internal: {type: 'MarkdownRemark'},
	fields: {template: 'author'},
})

const basename = fp.replace(/.+\/(.+)\..+$/, '$1')
const getShortId = fp.flow(fp.getOr('', 'fileAbsolutePath'), basename)

const refs = {editorials: {}, authors: {}}

const reverseRelation = async ({ref, node: {id}, getNode, actions}) => {
	const node = id && ref && await getNode(ref)
	return node && actions.createNodeField({
		node, name: 'posts', value: [...(node.fields.posts || []), id],
	})
}

module.exports = async ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if(node.internal.type !== 'MarkdownRemark') return

	const shortId = getShortId(node)

	if(isEditorialNode(node)){
		refs.editorials[shortId] = node.id
		return await createNodeField({node, name: 'editorial_id', value: shortId})
	}
	if(isAuthorNode(node)){
		refs.authors[shortId] = node.id
		return await createNodeField({node, name: 'author_id', value: shortId})
	}

	if(isPostNode(node)){
		const {editorial, authors} = node.frontmatter
		if(editorial){
			const ref = refs.editorials[editorial]
			reverseRelation({ref, node, getNode, actions})
		}
		if(Array.isArray(authors)){
			authors.forEach(author => {
				const ref = refs.authors[author]
				reverseRelation({ref, node, getNode, actions})
			})
		}
	}
}
