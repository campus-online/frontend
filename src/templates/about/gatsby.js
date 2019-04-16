import {graphql} from 'gatsby'
import React from 'react'
import {compose, mapProps} from 'recompose'
import PropTypes from 'prop-types'
import flattenAuthorInfo from '../../fragments/AuthorInfo'
import Template from '.'

const AboutPage = ({frontmatter, html, authors}) => {
	return <Template {...frontmatter} content={html} authors={authors}/>
}

AboutPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.shape({
				title: PropTypes.string,
			}).isRequired,
			html: PropTypes.node.isRequired,
		}),
	}),
	markdownRemark: PropTypes.shape({
		authors: PropTypes.array,
	}),
}

const enhance = compose(
	mapProps(({data}) => ({
		frontmatter: data.markdownRemark.frontmatter,
		html: data.markdownRemark.html,
		authors: data.authorList.authors
			.map(x => x.author)
			.map(flattenAuthorInfo)
	})),
)

export default enhance(AboutPage)

// [TODO]: pick active semester dinamically @leonardodino
export const aboutPageQuery = graphql`
	query AboutPage($url: String!) {
		markdownRemark(fields: {slug: {eq: $url}}) {
			html
			frontmatter {
				title
			}
		}
		authorList: allMarkdownRemark(
			sort: {order: ASC, fields: [frontmatter___title]}
			filter: {
				fields: {template: {eq: "author"}},
				frontmatter: {semester:{eq: "2019/1"}},
			}
		) {
			authors: edges {
				author: node {
					...AuthorInfo
				}
			}
		}
	}
`
