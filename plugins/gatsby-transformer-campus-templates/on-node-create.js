module.exports = async ({ node, actions }, {templateNameByFolder}) => {
	const { createNodeField } = actions
	if(node.internal.type !== 'MarkdownRemark') return
	const {fileAbsolutePath: path} = node

	const folder = path.replace(/^.+\/([^/]+)\/[^/]+$/, '$1')
	const value = templateNameByFolder[folder] || node.fields.template

	if(!value) throw new Error(`template not found for: "${path}"`)

	createNodeField({ name: 'template', node, value })
}
