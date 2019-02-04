import React from 'react'
import styled from 'styled-components'
import {colors} from '../../constants'
import {above} from '../../utils/responsive'
import Link from '../StylableLink'
import Navbar from '../Navbar'
import Container from '../Container'
import Content from '../Content'
import Text from '../Text'
import Avatar from '../Avatar'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	background: ${p => (p.background ? p.background : colors.base)};
	color: white;
	position: relative;
	overflow: hidden;
	z-index: 3;
`

const ImageWrapper = styled.figure`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	align-items: center;
	justify-content: center;
	object-fit: cover;
`

const Image = styled.img`
	display: block;
	overflow: hidden;
	object-fit: cover;
	height: 100%;
	min-width: 100%;
	flex: 1;
`

const ContentWrapper = styled.div`
	margin-top: 6rem;
	margin-bottom: 3rem;
	${above.md`
		display: flex;
		align-items: center;
		margin-top: 10rem;
		margin-bottom: 6rem;
	`};
`

const AvatarWrapper = styled.div`
	margin-bottom: 0.5rem;
	${above.md`
		margin-bottom: 0;
		margin-right: 1rem;
	`};
`

const HeroAvatar = props => <Avatar {...props} dark size='large'/>

const TextWrapper = styled.div``

const Sup = styled.div`
	display: block;
	font-size: 0.75rem;
	text-transform: uppercase;
	font-weight: 500;
	margin-bottom: 0.5rem;
	opacity: 0.66;
`

const Sub = styled(Sup)`
	margin-top: 0.5rem;
`

const Title = styled.div`
	font-size: 2rem;
	line-height: 2.5rem;
	text-transform: capitalize;
	font-weight: 300;
	${above.md`
		font-size: 3rem;
		line-height: 3.5rem;
	`};
`

const BodyText = styled(Text)`
	display: block;
	max-width: 40em;
	margin: 2rem 0 0;
`

const Anchor = styled(Link)`
	display: block;
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`

const Hero = ({
	url,
	sup,
	title,
	sub,
	bodyText,
	cover,
	background,
	shadow,
	author, // this one is sigular
	dark = true,
	navbar = true,
}) => (
	<Wrapper background={background}>
		<div
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				clip: 'rect(auto,auto,auto,auto)',
				clipPath: 'inset(0)',
				zIndex: 4,
				pointerEvents: 'none',
			}}
		>
			{navbar && (
				<Navbar
					shadow={shadow}
					dark={dark}
					style={{
						position: 'fixed',
						pointerEvents: 'all',
					}}
				/>
			)}
		</div>
		{cover && (
			<ImageWrapper>
				<Image src={cover} />
			</ImageWrapper>
		)}
		<Container>
			<ContentWrapper>
				{author && (
					<AvatarWrapper>
						<HeroAvatar name={author.name} avatar={author.avatar} />
					</AvatarWrapper>
				)}
				<TextWrapper>
					{sup && <Sup>{sup}</Sup>}
					{title && <Title>{title}</Title>}
					{sub && <Sub>{sub}</Sub>}
					{bodyText && (
						<BodyText dark={dark}>
							<Content>{bodyText}</Content>
						</BodyText>
					)}
				</TextWrapper>
			</ContentWrapper>
		</Container>
		{url && <Anchor to={url} />}
	</Wrapper>
)

export default Hero
