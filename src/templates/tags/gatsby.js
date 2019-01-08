import {graphql} from 'gatsby'
import {mapProps} from 'recompose'
import flattenBlogPostInfo from '../../fragments/BlogPostInfo'
import TagPage from '.'

const enhance = mapProps(({pageContext, data: {blog}}) => ({
	tag: pageContext.tag,
	totalCount: blog.totalCount,
	posts: blog.posts.map(({post}) => flattenBlogPostInfo(post)),
}))

export default enhance(TagPage)
export const tagPageQuery = graphql`
	query TagPageQuery($tag: String) {
		blog: allMarkdownRemark(
			limit: 1000
			sort: {fields: [frontmatter___date], order: DESC}
			filter: {frontmatter: {tags: {in: [$tag]}}}
		) {
			totalCount
			posts: edges {
				post: node {
					...BlogPostInfo
					...BlogPostCoverThumbnail
				}
			}
		}
	}
`
