import {graphql} from 'gatsby'
import {map} from 'lodash/fp'
import {mapProps} from 'recompose'
import flattenEditorialInfo from '../../fragments/EditorialInfo'
import flattenBlogPostInfo from '../../fragments/BlogPostInfo'
import EditorialPage from '.'

const enhance = mapProps(({data: {editorial}}) => ({
	...flattenEditorialInfo(editorial),
	posts: map(flattenBlogPostInfo, editorial.fields.posts),
	content: editorial.content,
	excerpt: editorial.excerpt,
}))

export default enhance(EditorialPage)

export const pageQuery = graphql`
	query EditorialByurl($url: String!) {
		editorial: markdownRemark(fields: {slug: {eq: $url}}) {
			...EditorialInfo
			content: html
			excerpt(pruneLength: 120)
			fields {
				posts {
					...BlogPostInfo
					...BlogPostCoverThumbnail
				}
			}
		}
	}
`
