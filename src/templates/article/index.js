import React, {Fragment} from 'react'
import {get} from 'lodash/fp'
import {withLayout} from '../../components/Layout'
import MetaTags from '../../components/MetaTags'
import Content from '../../components/Content'
import Container from '../../components/Container'
import {Row, Cell} from '../../components/Grid'
import Navbar from '../../components/Navbar'
import ArticleHero from '../../components/ArticleHero'
import Text from '../../components/Text'
import Tags from '../../components/Tags'
import AuthorCard from '../../components/AuthorCard'
import SideSection from '../../components/SideSection'
import {CardRow} from '../../components/CardGrid'
import PostCard from '../../components/PostCard'

const isPlainObject = value => {
	if(!value) return false
	if(value === null) return false
	if(typeof value !== 'object') return false
	if(Array.isArray(value)) return false
	return true
}


const getCoverImageSrc = cover => {
	if(!cover) return null
	if(typeof cover === 'string') return cover
	if(typeof cover.image === 'string') return cover.image
	if(typeof cover.src === 'string') return cover.src
	return get('image.sizes.src')(cover) || null
}

const BlogPost = ({
	content,
	excerpt,
	headline,
	tags,
	date,
	cover,
	editorial,
	title,
	authors,
	prev,
	next,
}) => {
	return (
		<Fragment>
			<MetaTags
				title={title}
				description={headline ? headline : excerpt}
				image={getCoverImageSrc(cover)}
			/>
			<Navbar style={{position: 'fixed', top: 0, zIndex: 2}} />
			<ArticleHero
				headline={headline}
				title={title}
				date={date}
				cover={cover}
				editorial={editorial}
			/>
			<Container style={{paddingBottom: '8rem'}}>
				<Row>
					<Cell xs={12} lg={8}>
						<Text>
							<Content>{content}</Content>
						</Text>
					</Cell>
					<Cell xs={0} lg={1} />
					<Cell xs={12} lg={3} style={{position: 'sticky', top: '6rem'}}>
						<div style={{width: '100%'}}>
							{Array.isArray(tags) && tags.length > 0 && (
								<Fragment>
									<SideSection title="Tags" to="/tags" count={tags.length} />
									<Tags tags={tags} style={{marginBottom: '3em'}} />
								</Fragment>
							)}
							{(authors || []).filter(isPlainObject).length > 0 && (
								<Fragment>
									<SideSection title="Repórteres" to="/reporteres" count={authors.length} />
									{(authors || []).filter(isPlainObject).map(author => (
										<AuthorCard key={author.url} {...author} size='small' />
									))}
								</Fragment>
							)}
						</div>
					</Cell>
				</Row>
				<CardRow style={{paddingTop: '3rem'}}>
					{isPlainObject(prev) && <PostCard {...prev} size={0} />}
					{isPlainObject(next) && <PostCard {...next} size={0} />}
				</CardRow>
			</Container>
		</Fragment>
	)
}

export default withLayout(BlogPost)
