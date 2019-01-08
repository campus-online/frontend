import {graphql} from 'gatsby'
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import MetaTags from '../../components/MetaTags'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import Template from '.'

const Semester = ({data: {markdownRemark}}) => {
	const {frontmatter} = markdownRemark || {frontmatter: {}}
	return (
		<Fragment>
			<MetaTags title={frontmatter.title} />
			<Navbar style={{position: 'sticky', top: 0, zIndex: 2}} />
			<Container>
				<Template name={frontmatter.title} />
			</Container>
		</Fragment>
	)
}

Semester.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.shape({
				title: PropTypes.string.isRequired,
			}).isRequired,
		}).isRequired,
	}).isRequired,
}

export default Semester

export const pageQuery = graphql`
	query SemesterByurl($url: String!) {
		markdownRemark(fields: {slug: {eq: $url}}) {
			frontmatter {
				title
			}
		}
	}
`
