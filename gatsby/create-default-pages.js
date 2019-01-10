/* eslint-env node */
const path = require('path')
const {createQuery} = require('./helpers')

const resolveComponent = (template = 'missing-template') =>
	path.resolve(`src/templates/${template}/gatsby.js`)

const query = createQuery('CreateDefaultPages')`
	allMarkdownRemark {
		pages: edges {
			node {
				fields { url: slug, template }
			}
		}
	}
`

module.exports = async ({graphql, actions: {createPage}}) => {
	const {
		allMarkdownRemark: {pages},
	} = await query(graphql)

	pages.forEach(({node: {fields: {url, template}}}) => {
		createPage({
			path: url,
			context: {url},
			component: resolveComponent(template),
		})
	})
}
