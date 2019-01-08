import React from 'react'
import {colors} from '../../constants'
import {withLayout} from '../../components/Layout'
import Link from '../../components/StylableLink'
import MetaTags from '../../components/MetaTags'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Container from '../../components/Container'
import {CardRow} from '../../components/CardGrid'
import PostCard from '../../components/PostCard'

const TagPage = ({tag, posts, totalCount}) => (
	<div
		style={{
			background: colors.base,
			color: 'white',
			marginBottom: '-8rem',
			paddingBottom: '8rem',
		}}
	>
		<MetaTags title={tag} />
		<Navbar
			dark={true}
			style={{
				position: 'fixed',
				top: 0,
				zIndex: 20,
				color: 'white',
				background: colors.base,
			}}
		/>
		<Hero
			title={tag}
			sup={`${totalCount} Matéria${totalCount === 1 ? '' : 's'} com a tag`}
			navbar={false}
		/>
		<section>
			<Container>
				<CardRow>
					{posts.map(post => (
						<PostCard dark alt {...post} key={post.url} size={1} />
					))}
				</CardRow>
				<Link
					style={{
						display: 'block',
						fontSize: '1.125rem',
						lineHeight: '1.5rem',
						marginTop: '4rem',
						color: 'currentColor',
						marginBottom: '2rem',
						textDecoration: 'none',
					}}
					to="/tags/"
				>
					Ver todas as tags
				</Link>
			</Container>
		</section>
	</div>
)

export default withLayout(TagPage)
