import {graphql} from 'gatsby'
import React from 'react'
import {mapProps, compose, withState, lifecycle} from 'recompose'
import {get, kebabCase, groupBy} from 'lodash/fp'
import styled from 'styled-components'
import {colors} from '../constants'
import {above} from '../utils/responsive'
import flattenBlogPostInfo from '../fragments/BlogPostInfo'
import flattenAuthorInfo from '../fragments/AuthorInfo'
import flattenEditorialInfo from '../fragments/EditorialInfo'
import timesince from '../utils/timesince'
import {withLayout} from '../components/Layout'
import MetaTags from '../components/MetaTags'
import Container from '../components/Container'
import {Row, Cell} from '../components/Grid'
import {CardRow} from '../components/CardGrid'
import Navbar from '../components/Navbar'
import TitleBar from '../components/TitleBar'
import PostCard from '../components/PostCard'
import Editorials from '../components/Editorials'
import ScrollList from '../components/ScrollList'

const LayoutGrid = styled(Row)`
	justify-content: space-between;
`

const DateWrapper = styled.div`
	display: none;
	position: absolute;
	text-align: right;
	width: 100%;
	position: sticky;
	top: 7rem;
	height: 0;
	${above.lg`
		display: block;
	`}
`

const DateInner = styled.div`
	border-top: 1px solid ${colors.base88};
	background: ${colors.base};
	display: inline-block;
	font-size: 0.875rem;
	margin-top: 0.25rem;
	padding: 0.125rem 0 0.125rem 2.5rem;
	line-height: 1.25rem;
	letter-spacing: 0.05rem;
	font-weight: 500;
	color: ${colors.base22};
`

const DateMarker = ({children, ...props}) => (
	<DateWrapper {...props}>
		<DateInner>
			{children}
		</DateInner>
	</DateWrapper>
)

const enhanceAuthor = ({name, url}) => ({url, label: name})
const enhanceTag = tag => ({url: `/tags/${kebabCase(tag)}/`, label: tag})
const groupByDate = currentDate => (
	groupBy(({date}) => timesince(currentDate)(new Date(date)))
)

const PageComponent = ({posts, tags, authors, editorials, currentDate}) => (
	<div
		style={{
			background: colors.base,
			color: 'white',
			marginBottom: '-8rem',
			paddingBottom: '8rem',
		}}
	>
		<MetaTags title="Todos as matérias" />
		<Navbar style={{position: 'fixed', top: 0, zIndex: 3}} dark={true} />
		<main style={{padding: '8rem 0'}}>
			<Container>
				<section style={{marginBottom: '4rem'}}>
					<Editorials editorials={editorials} style={{marginBottom: '2rem'}} />
					<ScrollList
						title="Repórteres"
						url="/reporteres"
						list={authors.map(enhanceAuthor)}
					/>
					<ScrollList title="Tags" url="/tags" list={tags.map(enhanceTag)} />
				</section>
				<section>
					<TitleBar dark title="Todas as publicações" />
						{Object.entries(groupByDate(currentDate)(posts)).map(([distance, posts]) => (
							<div style={{position: 'relative'}} key={distance}>
								<DateMarker>
									{distance}
								</DateMarker>
								<LayoutGrid>
									<Cell xs={12} lg={8} xg={8}>
										<div style={{width: '100%'}}>
											<CardRow>
												{posts
													.map(post => (
														<PostCard
															key={post.url}
															{...post}
															dark={!post.featured}
															alt={true}
															compact={true}
														/>
													))}
											</CardRow>
										</div>
									</Cell>
								</LayoutGrid>
							</div>
					))}
				</section>
			</Container>
		</main>
	</div>
)

const enhance = compose(
	withLayout,
	mapProps(
		({
			data: {
				blog: {posts = [], tags = []},
				allAuthors: {authors = []},
				allEditorials: {editorials = []},
			},
		}) => ({
			tags,
			editorials: editorials.map(get('editorial')).map(flattenEditorialInfo),
			authors: authors.map(get('author')).map(flattenAuthorInfo),
			posts: posts.map(get('post')).map(flattenBlogPostInfo),
		}),
	),
	withState('currentDate', 'setCurrentDate', new Date),
	lifecycle({
		componentDidMount(){
			const {setCurrentDate} = this.props
			setCurrentDate(new Date())
		},
	}),
)

const BlogPage = enhance(PageComponent)

export default BlogPage

export const pageQuery = graphql`
	query BlogQuery {
		# [TODO]: filter author on current semester
		allAuthors: allMarkdownRemark(
			sort: {order: DESC, fields: [frontmatter___title]}
			filter: {fields: {template: {eq: "author"}}}
		) {
			authors: edges {
				author: node {
					...AuthorInfo
				}
			}
		}

		# [TODO]: filter editorial on current semester
		allEditorials: allMarkdownRemark(
			sort: {order: DESC, fields: [frontmatter___title]}
			filter: {fields: {template: {eq: "editorial"}}}
		) {
			editorials: edges {
				editorial: node {
					...EditorialInfo
				}
			}
		}

		# [TODO]: filter posts on current semester
		# [TODO]: add infinite-scrolling
		blog: allMarkdownRemark(
			sort: {order: DESC, fields: [frontmatter___date]}
			filter: {fields: {template: {eq: "article"}}}
		) {
			tags: distinct(field: frontmatter___tags)
			posts: edges {
				post: node {
					...BlogPostInfo
					...BlogPostCoverThumbnail
				}
			}
		}
	}
`
