import {graphql} from 'gatsby'
import {map} from 'lodash/fp'
import flattenAuthor from './AuthorInfo'
import flattenEditorial from './EditorialInfo'

export const blogPostCoverImage = graphql`
	fragment BlogPostCoverImage on MarkdownRemark {
		frontmatter {
			cover
		}
	}
`

export const fullsizeCoverThumbnail = graphql`
	fragment BlogPostCoverThumbnail on MarkdownRemark {
		frontmatter {
			cover
		}
	}
`

export const fullsizeCoverThumbnailNoBase64 = graphql`
	fragment BlogPostCoverThumbnail_noBase64 on MarkdownRemark {
		frontmatter {
			cover
		}
	}
`

export const fragment = graphql`
	fragment BlogPostInfo on MarkdownRemark {
		frontmatter {
			title
			headline
			date
			tags
			featured
			editorial { ...EditorialInfo }
			authors { ...AuthorInfo }
		}
		fields {
			url: slug
		}
	}
`

const flatten = ({frontmatter, fields}) => ({
	...frontmatter,
	...fields,
	editorial: flattenEditorial(frontmatter.editorial),
	authors: map(flattenAuthor, frontmatter.authors),
})

export default node => (node ? flatten(node) : null)
