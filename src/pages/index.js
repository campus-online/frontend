import {graphql} from 'gatsby'
import React, {Fragment} from 'react'
import styled from 'styled-components'
import {mapProps, compose} from 'recompose'
import flattenBlogPostInfo from '../fragments/BlogPostInfo'
import {colors} from '../constants'
import {withLayout} from '../components/Layout'
import MetaTags from '../components/MetaTags'
import Container from '../components/Container'
import Link from '../components/StylableLink'
import {CardRow} from '../components/CardGrid'
import Navbar from '../components/Navbar'
import TitleBar from '../components/TitleBar'
import HomeHero from '../components/HomeHero'
import PostCard from '../components/PostCard'

const Button = styled(Link)`
	display: flex;
	align-items: center;
	position: relative;
	justify-content: space-between;
	padding: 1.75rem 2rem;
	background: ${colors.white};
	color: ${colors.base};
	font-weight: 600;
	text-decoration: none;
	color: ${colors.base88};
	&:after {
		content: '→';
		font-size: 2em;
		font-weight: 300;
	}
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 0 0.75rem 2rem -0.375rem rgba(0,0,0,0.1);
		opacity: 0;
		transition: all .6s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	&:hover, &:focus, &:active{
		z-index: 1;
		&:before {
			opacity: 1;
		}
	}
`

const PageComponent = ({posts: [hero, ...posts]}) => (
	<Fragment>
		<MetaTags title="Home" />
		<Navbar style={{position: 'fixed', top: 0, zIndex: 3}} />
		<main style={{paddingBottom: '8rem'}}>
			{hero && <HomeHero {...hero} />}
			<Container>
				<TitleBar
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
				<Button to='/materias'>Ver todas as matérias</Button>
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
			filter: {fields: {template: {eq: "article"}}}
			limit: 16
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
