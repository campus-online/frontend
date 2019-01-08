const visit = require('unist-util-visit')

module.exports = ({markdownAST}) => {
	visit(markdownAST, 'image', node => {
		if(String(node.alt) === 'null') delete node.alt
		if(String(node.alt) === 'undefined') delete node.alt
		if(!node.alt) return delete node.alt
	})
}
