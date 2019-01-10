import {graphql} from 'gatsby'
import React, {Fragment} from 'react'
import {mapProps, compose} from 'recompose'
import flattenEditorialInfo from '../../fragments/EditorialInfo'
import {withLayout} from '../../components/Layout'
import MetaTags from '../../components/MetaTags'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'

export const Editorials = ({editorials}) =>
	editorials.map(({title, color, content, excerpt, url}) => (
		<Fragment key={url}>
			<MetaTags title={title} description={excerpt} />
			<div style={{position: 'relative', overflow: 'hidden'}}>
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						clip: 'rect(auto, auto, auto, auto)',
						clipPath: 'inset(0px)',
						zIndex: '4',
						pointerEvents: 'none',
					}}
				>
					<Navbar
						background={color}
						dark={true}
						style={{position: 'fixed', top: 0, pointerEvents: 'auto'}}
					/>
				</div>
				<Hero
					sup="Editoria"
					url={url}
					title={title}
					navbar={false}
					background={color}
					bodyText={content}
				/>
			</div>
		</Fragment>
	))

const enhance = compose(
	withLayout,
	mapProps(({data: {editorialList: {editorials = []}}}) => ({
		editorials: editorials.map(({editorial}) => ({
			...flattenEditorialInfo(editorial),
			content: editorial.content,
			excerpt: editorial.excerpt,
		})),
	})),
)

export default enhance(Editorials)
export const editorialsQuery = graphql`
	query EditorialsQuery {
		editorialList: allMarkdownRemark(
			sort: {order: ASC, fields: [frontmatter___title]}
			filter: {fields: {template: {eq: "editorial"}}}
		) {
			editorials: edges {
				editorial: node {
					...EditorialInfo
					content: html
					excerpt(pruneLength: 120)
				}
			}
		}
	}
`
