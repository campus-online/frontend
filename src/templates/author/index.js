import React, {Fragment} from 'react'
import {withLayout} from '../../components/Layout'
import MetaTags from '../../components/MetaTags'
import Container from '../../components/Container'
import Hero from '../../components/Hero'
import PostCard from '../../components/PostCard'

const getAvatarImageSrc = avatar => {
	if(!avatar) return null
	if(typeof avatar === 'string') return avatar
	if(typeof avatar.image === 'string') return avatar.image
	if(typeof avatar.src === 'string') return avatar.src
	return null
}

const Author = ({name, semester, avatar, content, excerpt, posts}) => (
	<Fragment>
		<MetaTags
			title={name}
			image={getAvatarImageSrc(avatar)}
			description={excerpt}
		/>
		<Hero
			title={name}
			sub={semester}
			author={{name, avatar}}
			bodyText={content}
		/>
		<Container style={{paddingTop: '6rem', paddingBottom: '8rem'}}>
			{posts.map(post => (
				<PostCard {...post} key={post.url} authors={[]} />
			))}
		</Container>
	</Fragment>
)

export default withLayout(Author)
