import {graphql} from 'gatsby'

export const fragment = graphql`
	fragment EditorialInfo on MarkdownRemark {
		frontmatter {
			title
			color
		}
		fields {
			url: slug
		}
	}
`

const flatten = ({frontmatter, fields}) => ({...frontmatter, ...fields})
export default node => (node ? flatten(node) : null)
