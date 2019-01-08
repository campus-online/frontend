import React from 'react'
import styled from 'styled-components'
import Link from '../StylableLink'

const Wrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-left: -0.5em;
	margin-right: -0.5em;
	position: relative;
`

const Editorial = styled(Link)`
	display: block;
	color: currentColor;
	text-decoration: none;
	font-weight: 600;
	letter-spacing: 0.025em;
	line-height: 1em;
	padding: 1em 2em 1em 0.5em;
	position: relative;
	transition: 0.2s all;
	&:before {
		transition: 0.2s all;
		content: '';
		background: ${p => p.color};
		position: absolute;
		top: 0.75em;
		left: 0;
		width: 1.5em;
		bottom: 1.5em;
	}
	&:hover,
	&:focus,
	&:active {
		&:before {
			/* [TODO]: make animation great performance */
			width: 100%;
			width: calc(100% - 1.5em);
			height: 100%;
			height: calc(100% - 1.5em);
		}
	}
	& > span {
		position: relative;
	}
`

const Editorials = ({editorials, style, className}) => (
	<Wrapper style={style} className={className}>
		{editorials.map(({url, color, title}) => (
			<li key={url}>
				<Editorial to={url} color={color}>
					<span>{title}</span>
				</Editorial>
			</li>
		))}
	</Wrapper>
)

export default Editorials
