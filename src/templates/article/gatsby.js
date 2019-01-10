import {graphql} from 'gatsby'
import {mapProps} from 'recompose'
import flattenBlogPostInfo from '../../fragments/BlogPostInfo'
import BlogPost from '.'

const fromGraphql = ({data: {post, prev, next}}) => ({
	...flattenBlogPostInfo(post),
	content: post.content,
	excerpt: post.excerpt,
	prev: prev && flattenBlogPostInfo(prev),
	next: next && flattenBlogPostInfo(next),
})

const enhance = mapProps(fromGraphql)
export default enhance(BlogPost)
export const pageQuery = graphql`
	query BlogPostTemplate($url: String!, $prev: String, $next: String) {
		prev: markdownRemark(fields: {slug: {eq: $prev}}) {
			...BlogPostInfo
			...BlogPostCoverThumbnail_noBase64
		}
		next: markdownRemark(fields: {slug: {eq: $next}}) {
			...BlogPostInfo
			...BlogPostCoverThumbnail_noBase64
		}
		post: markdownRemark(fields: {slug: {eq: $url}}) {
			...BlogPostInfo
			...BlogPostCoverImage
			content: html
			excerpt(pruneLength: 120)
		}
	}
`
