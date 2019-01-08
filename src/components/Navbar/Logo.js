import React from 'react'
import styled from 'styled-components'
import {colors} from '../../constants'
import {above} from '../../utils/responsive'
import Link from '../StylableLink'
import LogoIcon from '../LogoIcon'

const LogoWrapper = styled(Link)`
	display: block;
	cursor: pointer;
	display: block;
	padding-right: 2rem;
	height: 3.5rem;
	color: currentColor;
	padding-top: 1rem;
	padding-bottom: 1rem;
	position: relative;
	:before {
		content: '';
		position: absolute;
		top: 1rem;
		left: 1rem;
		right: 1.25rem;
		bottom: 1rem;
		z-index: -1;
		transition: all 0.2s ease-out;
		background-position: 0 -0.25rem;
		background-size: 0 3.25em;
		background-repeat: no-repeat;
		background-image: linear-gradient(
			180deg,
			transparent 37.5%,
			${colors.base06} 0
		);
		${p =>
			p.shadow &&
			`
			pointer-events: auto;
			background-image: linear-gradient(180deg, transparent 37.5%, ${colors.base} 0);
		`};
		${p =>
			p.dark &&
			`
			background-image: linear-gradient(180deg, transparent 37.5%, ${
				colors.base88
			} 0);
		`};
	}

	${above.md`
		height: 4rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		:hover{
			:before{
				background-size: 100% 3.25em;
			}
		}
	`};
`

const Logo = ({shadow, dark}) => (
	<LogoWrapper to="/" shadow={shadow} dark={dark}>
		<LogoIcon />
	</LogoWrapper>
)

export default Logo
