/* eslint-env node */
const path = require('path')
const {createQuery} = require('./helpers')

// [TODO]: create BlogPost node type
// [TODO]: make editorial and author BlogPost GraphQL key

const query = createQuery('CreatePostPages')`
	allMarkdownRemark(
		sort: {order: DESC, fields: [frontmatter___date]},
		filter: {fields: {template: {eq: "article"}}},
	) {
		posts: edges {
			post: node { fields { url: slug } }
			prev: previous { fields { url: slug } }
			next: next { fields { url: slug } }
		}
	}
`

module.exports = async ({graphql, actions: {createPage, deletePage}}) => {
	const {
		allMarkdownRemark: {posts},
	} = await query(graphql)

	posts.forEach(({post, prev, next}) => {
		const {url} = post.fields
		try {
			deletePage(url)
		} catch (e) {
			/* swallow errors */
		}

		createPage({
			path: url,
			component: path.resolve(`src/templates/article/gatsby.js`),
			context: {
				url: url,
				prev: prev && prev.fields.url,
				next: next && next.fields.url,
			},
		})
	})
}
