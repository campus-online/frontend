import React from 'react'
import styled from 'styled-components'
import {colors, breakpoints} from '../../constants'
import {above} from '../../utils/responsive'
import * as format from '../../utils/format'
import Navbar from '../Navbar'
import Container from '../Container'
import {Row, Cell} from '../Grid'
import Image from './Image'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	background: ${colors.base};
	color: white;
	position: relative;
	z-index: 2;
	min-height: 24rem;
	${above.md`
		min-height: 32rem;
	`};
`

const ClipPath = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	clip: rect(auto auto auto auto);
	clip-path: inset(0);
	z-index: 1;
	pointer-events: none;
`

const Text = styled.div`
	background: white;
	color: ${colors.base};
	position: relative;
	z-index: 4;
	margin: 0 ${-breakpoints.xs.gutter}rem ${1.5*breakpoints.xs.gutter}rem;
	padding: 2rem ${breakpoints.xs.gutter}rem;
	${above.sm`
		margin: ${-1.25*breakpoints.sm.gutter}rem ${-breakpoints.sm.gutter}rem ${1.5*breakpoints.sm.gutter}rem;
		padding: 2rem ${breakpoints.sm.gutter}rem;
	`}
	${above.md`
		margin: ${-1.25*breakpoints.md.gutter}rem ${-breakpoints.md.gutter}rem ${1.5*breakpoints.md.gutter}rem;
		padding: 2rem ${breakpoints.md.gutter}rem;
	`}
	${above.lg`
		margin: ${-1.25*breakpoints.lg.gutter}rem ${-breakpoints.lg.gutter}rem ${1.5*breakpoints.lg.gutter}rem;
		padding: 2rem ${breakpoints.lg.gutter}rem;
	`}
	${above.xg`
		margin: ${-1.25*breakpoints.xg.gutter}rem ${-breakpoints.xg.gutter}rem ${1.5*breakpoints.xg.gutter}rem;
		padding: 2rem ${breakpoints.xg.gutter}rem;
	`}
`

const Meta = styled.div`
	display: flex;
	flex-wrap: wrap;
	text-transform: uppercase;
	font-size: 11px;
	line-height: 1.25rem;
	font-weight: 600;
	letter-spacing: 0.5px;
	margin-bottom: 0.5rem;
	${above.md`
		font-size: 0.75rem;
	`};
`

const Editorial = styled.div`
	display: block;
	margin-right: 0.5rem;
`

const PostDate = styled.div`
	opacity: 0.66;
`

const Title = styled.div`
	font-size: 1.5rem;
	line-height: 2.25rem;
	font-weight: 500;
	letter-spacing: 0.015em;
	word-wrap: break-word;
	${above.md`
		font-size: 2rem;
		max-width: 56rem;
		line-height: 2.5rem;
	`};
`

const Headline = styled.div`
	font-size: 0.875rem;
	line-height: 1.75rem;
	word-wrap: break-word;
	margin-top: 0.75rem;
	font-weight: 600;
	color: ${colors.base66};
	${above.md`
		margin-top: 1.5rem;
		font-size: 1rem;
		max-width: 56rem;
		line-height: 1.625rem;
	`};
`

const ArticleHero = ({title, date, editorial, headline, cover}) => (
	<div>
		<Wrapper>
			<ClipPath><Navbar shadow={true} /></ClipPath>
			{cover && <Image image={cover} position='absolute'/>}
		</Wrapper>
		<div style={{position: 'relative', marginTop: 'auto'}}>
			<Container>
				<Row>
					<Cell xs={12} md={10} lg={8}>
						<div style={{width: '100%'}}>
							<Text>
								<Meta>
									{editorial && <Editorial>{editorial.title}</Editorial>}
									{date && <PostDate>{format.postDate(date)}</PostDate>}
								</Meta>
								{title && <Title>{title}</Title>}
								{headline && <Headline>{headline}</Headline>}
							</Text>
						</div>
					</Cell>
				</Row>
			</Container>
		</div>
	</div>
)

export default ArticleHero
