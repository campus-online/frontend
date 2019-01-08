import {graphql} from 'gatsby'
import {map} from 'lodash/fp'
import {mapProps} from 'recompose'
import flattenBlogPostInfo from '../../fragments/BlogPostInfo'
import flattenAuthorInfo from '../../fragments/AuthorInfo'
import AuthorPage from '.'

const enhance = mapProps(({data: {author}}) => ({
	...flattenAuthorInfo(author),
	posts: map(flattenBlogPostInfo, author.fields.posts),
	content: author.content,
	excerpt: author.excerpt,
}))

export default enhance(AuthorPage)

export const pageQuery = graphql`
	query AuthorByurl($url: String!) {
		author: markdownRemark(fields: {slug: {eq: $url}}) {
			...AuthorInfo
			fields {
				posts {
					...BlogPostInfo
					...BlogPostCoverThumbnail
				}
			}
		}
	}
`
