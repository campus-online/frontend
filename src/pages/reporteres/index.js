import {graphql} from 'gatsby'
import React, {Fragment} from 'react'
import {map, get, flow, uniq} from 'lodash/fp'
import {mapProps, compose} from 'recompose'
import flattenAuthorInfo from '../../fragments/AuthorInfo'
import {withLayout} from '../../components/Layout'
import MetaTags from '../../components/MetaTags'
import Container from '../../components/Container'
import {Row, Cell} from '../../components/Grid'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import FixedTitle from '../../components/FixedTitle'
import AuthorCard from '../../components/AuthorCard'

const getAllSemesters = flow([
	map(x => x.semester),
	uniq,
])


const AuthorsPage = ({authors}) => (
	<React.Fragment>
		<Navbar style={{position: 'fixed', top: 0, zIndex: 2}} />
		<Hero title="Repórteres" sub={`${authors.length} repórteres no total`} />
		<Container>
			<MetaTags title="Repórteres" />
			<section style={{padding: '6rem 0 4rem'}}>
				{getAllSemesters(authors).map((semester, index) => (
					<Fragment key={semester}>
						<FixedTitle
							title={!index ? `Semestre atual (${semester})` : semester}
							label={!index && 'Expediente'}
							url={!index && '/reporteres'}
						/>
						<div style={{marginBottom: '8rem'}}>
							<Row>
								{authors.filter(x => x.semester == semester).map(author => (
									<Cell
										key={author.url}
										xs={!index ? 12 : 6}
										sm={!index ? 6 : 4}
										md={!index ? 4 : 3}
										lg={!index ? 3 : 2}
									>
										<div style={{padding: '1rem 0'}}>
											<AuthorCard size={!!index && 'small'} {...author} />
										</div>
									</Cell>
								))}
							</Row>
						</div>
					</Fragment>
				))}
			</section>
		</Container>
	</React.Fragment>
)

const enhance = compose(
	withLayout,
	mapProps(
		flow([
			get('data.authorList.authors'),
			map(flow([get('author'), flattenAuthorInfo])),
			authors => ({authors}),
		]),
	),
)

export default enhance(AuthorsPage)
export const authorsPageQuery = graphql`
	query AuthorsQuery {
		authorList: allMarkdownRemark(
			sort: {order: DESC, fields: [frontmatter___semester, frontmatter___title]}
			filter: {fields: {template: {eq: "author"}}}
		) {
			authors: edges {
				author: node {
					...AuthorInfo
				}
			}
		}
	}
`
