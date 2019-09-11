import React from 'react'
import styled from 'styled-components'
import {kebabCase} from 'lodash/fp'
import {colors} from '../../constants'
import {above} from '../../utils/responsive'
import Link from '../StylableLink'

const Wrapper = styled(Link)`
	display: block;
	width: auto;
	transition: opacity 0.3s, transform 0.5s;
	font-size: 0.675rem;
	line-height: 1;
	margin: 0.25rem;
	text-transform: uppercase;
	font-weight: 600;
	color: white;
	text-decoration: none;
	border-radius: 2rem;
	padding: 0.5rem 0.75rem;
	position: relative;
	z-index: 2;
	transition: opacity 0.3s, transform 0.5s;
	${above.md`
		opacity: 0;
		transform: translateX(2rem);
		background: rgba(6, 8, 10, 0.88);
	`} .PostCard:hover &, .PostCard:focus & {
		opacity: 1;
		transform: none;
	}
	&:hover {
		background: white;
		color: ${colors.base};
	}
`

const Tag = ({tag, index}) => (
	<Wrapper
		to={`/tags/${kebabCase(tag)}/`}
		style={{transitionDelay: `${index * 0.06}s`}}
	>
		{tag}
	</Wrapper>
)

export default Tag
