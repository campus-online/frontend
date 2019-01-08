import React from 'react'
import {colors} from '../../constants'
import {withLayout} from '../../components/Layout'
import MetaTags from '../../components/MetaTags'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import {Row, Cell} from '../../components/Grid'
import Text from '../../components/Text'
import Content from '../../components/Content'
import AboutHero from '../../components/AboutHero'
import AuthorCard from '../../components/AuthorCard'

const AboutPage = ({title, content, authors}) => (
	<div style={{overflowX: 'hidden', position: 'relative'}}>
		<MetaTags title={title} />
		<Navbar
			style={{
				position: 'fixed',
				top: 0,
				zIndex: 2,
				background: colors.base03,
			}}
		/>
		<AboutHero style={{marginTop: '7rem'}} />
		<Container>
			{content && (
				<section style={{margin: '2rem 0'}}>
					<Row>
						<Cell xs={12} lg={8}>
							<Text>
								<Content>{content}</Content>
							</Text>
						</Cell>
					</Row>
				</section>
			)}
			<section style={{padding: '2rem 0 8rem', overflow: 'hidden'}}>
				<Row>
					{authors.map(author => (
							<Cell key={author.url} xs={12} sm={6} md={4} lg={3}>
								<div style={{padding: '1rem 0'}}>
									<AuthorCard {...author} />
								</div>
							</Cell>
					))}
				</Row>
			</section>
		</Container>
	</div>
)

export default withLayout(AboutPage)
