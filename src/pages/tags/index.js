import {graphql} from 'gatsby'
import React, {Fragment} from 'react'
import {withLayout} from '../../components/Layout'
import MetaTags from '../../components/MetaTags'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import {TagsCounter} from '../../components/Tags'

const TagsPage = ({
	data: {
		blog: {tags},
	},
}) => (
	<Fragment>
		<MetaTags title="Tags" />
		<Navbar style={{position: 'fixed', top: 0, zIndex: 2}} />
		<Hero title="Navegar por tags" sub={`${tags.length} tags no total`} />
		<Container>
			<section style={{padding: '6rem 0 8rem'}}>
				<TagsCounter tags={tags} />
			</section>
		</Container>
	</Fragment>
)

export default withLayout(TagsPage)

export const tagPageQuery = graphql`
	query TagsQuery {
		blog: allMarkdownRemark(limit: 1000) {
			tags: group(field: frontmatter___tags) {
				label: fieldValue
				totalCount
			}
		}
	}
`
