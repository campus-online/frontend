import {graphql} from 'gatsby'
import React, {Fragment} from 'react'
import {mapProps, compose} from 'recompose'
import flattenBlogPostInfo from '../fragments/BlogPostInfo'
import {withLayout} from '../components/Layout'
import MetaTags from '../components/MetaTags'
import Container from '../components/Container'
import {CardRow} from '../components/CardGrid'
import Navbar from '../components/Navbar'
import FixedTitle from '../components/FixedTitle'
import HomeHero from '../components/HomeHero'
import PostCard from '../components/PostCard'

const PageComponent = ({posts: [hero, ...posts]}) => (
	<Fragment>
		<MetaTags title="Home" />
		<Navbar style={{position: 'fixed', top: 0, zIndex: 3}} />
		<main style={{paddingBottom: '8rem'}}>
			{hero && <HomeHero {...hero} />}
			<Container>
				<FixedTitle
					title="Publicações recentes"
					label="Ver todas"
					url="/materias"
				/>
				<CardRow>
					{posts.map((post, index) => (
						<PostCard
							{...post}
							dynamic
							dark={post.featured}
							key={post.url}
							size={!(index % 3) % 2}
						/>
					))}
				</CardRow>
			</Container>
		</main>
	</Fragment>
)

const enhance = compose(
	withLayout,
	mapProps(({data: {blog: {posts}}}) => ({
		posts: posts.map(({post}) => flattenBlogPostInfo(post)),
	})),
)

const IndexPage = enhance(PageComponent)

export default IndexPage

export const pageQuery = graphql`
	query IndexQuery {
		blog: allMarkdownRemark(
			sort: {order: DESC, fields: [frontmatter___date]}
			filter: {fields: {template: {eq: "blog-post"}}}
		) {
			# [TODO]: separate hero
			# [TODO]: fetch CoverImage for hero, CoverThumbnail for the rest
			posts: edges {
				post: node {
					...BlogPostInfo
					...BlogPostCoverImage
					...BlogPostCoverThumbnail
				}
			}
		}
	}
`
