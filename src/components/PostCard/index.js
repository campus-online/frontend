import React from 'react'
import styled from 'styled-components'
import {colors} from '../../constants'
import {above} from '../../utils/responsive'
import * as format from '../../utils/format'
import Link from '../StylableLink'
import {CardCell} from '../CardGrid'
import AuthorCard from '../AuthorCard'
import {minHeight} from './constants'
import Image from './Image'
import Tag from './Tag'

const timing = '0.15s cubic-bezier(0.4, 0, 0.2, 1)'

const StyledCardCell = styled(CardCell)`
	flex-grow: 1;
	${above.lg`
		${p =>
			p.mini &&
			`
			flex: 1;
			max-width: 50%;
			flex-basis: 33.33%;
		`}
	`};
`

export const Wrapper = styled.article.attrs({className: 'PostCard'})`
	flex: 1;
	position: relative;
	margin-bottom: 0.5rem;
	background: ${p => !p.dark ? 'white' : p.alt ? 'rgba(255,255,255,0.03)' : colors.base};
	color: ${p => (p.dark ? 'white' : colors.base)};
	margin: 0.375rem;
	${above.md`
		display: flex;
		align-items: stretch;
		min-height: ${p => (p.compact ? 'auto' : minHeight)};
		flex-direction: ${p =>
			p.size ? (p.reverse ? 'row' : 'row-reverse') : 'column'};
		};
	`};
	${above.xg`
		flex-direction: ${p => (p.reverse ? 'row' : 'row-reverse')};
	`};
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 0 1.5rem 4rem -0.75rem rgba(0,0,0,0.3);
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

const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	object-fit: cover;
	overflow: hidden;
	position: relative;
	flex: 0;
	min-height: 14rem;
	${above.md`
		min-height: ${p => (p.compact ? 'initial' : '12rem')};
		flex: ${p => (!p.size && !p.compact ? 0 : 4)};
		max-width: ${p => (p.compact ? '14rem' : 'initial')};
	`}
	${above.lg`
		flex: ${p => (!p.size && !p.compact ? 0 : 6)};
	`}
	${above.xg`
		flex: 7;
		${p =>
			!p.size &&
			`
			flex: 2.25 !important;
		`}
	`}
`

const Text = styled.div`
	flex: 2;
	padding: 1.5rem 1rem 1rem;
	display: flex;
	flex-direction: column;
	${above.md`
		padding: 2rem 1.875rem 2rem;
		${p =>
			!p.size &&
			`
			flex: 1;
		`}
	`};
	${above.xg`
		flex: 2;
	`};
`

const Meta = styled.div`
	text-transform: uppercase;
	font-size: 11px;
	line-height: 1.25rem;
	font-weight: 600;
	letter-spacing: 0.5px;
	${above.md`
		font-size: 0.75rem;
	`};
`

const PostDate = styled.div`
	opacity: 0.66;
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

const Title = styled.div`
	font-size: 17px;
	line-height: 1.27273;
	font-weight: 500;
	letter-spacing: 0.015em;
	margin: 1rem 0;
	word-wrap: break-word;
	max-width: 32em;
	${above.md`
		font-size: 22px;
		margin: 1.5rem 0 1rem;
	`};
`

const Editorial = styled(({url, color, title, style, ...props}) => (
	<Link to={url} style={{...style, color}} {...props}>
		{title}
	</Link>
))`
	text-decoration: none;
	position: relative;
	z-index: 1;
	color: currentColor;
	display: block;
`

const Author = styled(AuthorCard)`
	z-index: 1;
	padding-top: 0.25rem;
	margin-top: auto;
	${above.md &&
		`
		padding-top: 1rem;
	`};
`

const TagsWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	position: absolute;
	width: 100%;
	max-width: 100%;
	max-height: 100%;
	right: 0;
	bottom: 0;
	padding: 10rem 0.5rem 0.5rem;
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.66) 0%,
		rgba(0, 0, 0, 0.22) 44%,
		rgba(0, 0, 0, 0) 66%
	);
	${above.md`
		width: auto;
		background: none;
		padding: 0.5rem;
		flex-direction: column-reverse;
	`};
`

const PostCard = ({
	url,
	title,
	date,
	editorial,
	cover,
	tags,
	authors = [],
	size = true,
	dark = false,
	alt = false,
	reverse = false,
	compact = false,
	dynamic = false,
}) => (
	<StyledCardCell
		xs={12}
		md={size ? 12 : 6}
		mini={dynamic && !(cover && cover)}
	>
		<Wrapper
			dark={dark}
			alt={alt}
			reverse={reverse}
			size={size}
			compact={compact}
		>
			{cover && (
				<ImageWrapper size={size} compact={compact}>
					<Image image={cover} dark={dark} />
					{tags && (
						<TagsWrapper>
							{tags.map((tag, index) => (
								<Tag key={tag} tag={tag} index={index} />
							))}
						</TagsWrapper>
					)}
				</ImageWrapper>
			)}
			<Text size={size}>
				<Meta>
					{editorial && <Editorial {...editorial} />}
					{date && <PostDate>{format.postDate(date)}</PostDate>}
				</Meta>
				{title && <Title>{title}</Title>}
				{authors && authors.map(author => (
					<Author key={author.url} size='small' {...author} dark={dark} />
				))}
			</Text>
			<Anchor to={url} />
		</Wrapper>
	</StyledCardCell>
)

export default PostCard
export {minHeight, maxHeight} from './constants'
