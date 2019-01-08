import React from 'react'
import styled from 'styled-components'
import {colors} from '../../constants'
import {above} from '../../utils/responsive'
import Link from '../StylableLink'

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: baseline;
	position: relative;
	position: sticky;
	top: 3.5rem;
	z-index: 2;
	background: ${colors.base03};
	color: ${colors.base88};
	box-shadow: -6rem 0 0 ${colors.base03}, 6rem 0 0 ${colors.base03};
	${p =>
		p.dark &&
		`
		background: ${colors.base};
		color: ${colors.white};
		box-shadow: -6rem 0 0 ${colors.base}, 6rem 0 0 ${colors.base};
	`} ${above.md`
		top: 4rem;
		margin-bottom: 1rem;
	`};
`

const Title = styled.div`
	font-size: 1.25rem;
	font-weight: 600;
	line-height: 3rem;
	position: relative;
	${above.md`
		font-size: 1.5rem;
		line-height: 3.5rem;
	`};
`

const Anchor = styled(Link)`
	display: block;
	font-size: 0.875rem;
	line-height: 1.5rem;
	opacity: 0.66;
	font-weight: 600;
	text-decoration: none;
	padding-top: 1rem;
	padding-bottom: 1rem;
	color: currentColor;
	:hover {
		opacity: 1;
	}
	${above.md`
		font-size: 1rem;
	`};
`

const FixedTitle = ({title, label, url, dark, style}) => (
	<Wrapper dark={dark} style={style}>
		<Title>{title}</Title>
		{url && <Anchor to={url}>{label}</Anchor>}
	</Wrapper>
)

export default FixedTitle
