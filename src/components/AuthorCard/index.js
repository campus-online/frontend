import React from 'react'
import styled from 'styled-components'
import {colors} from '../../constants'
import {above} from '../../utils/responsive'
import Link from '../StylableLink'
import Avatar from '../Avatar'

const Wrapper = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: currentColor;
	position: relative;
	color: ${colors.base66};
	&:hover {
		color: ${colors.base88};
	}
	${p =>
		p.dark &&
		`
		color: ${colors.base44};
		&:hover {
			color: ${colors.base11};
		}
	`};
`

const Title = styled.div`
	font-size: 1.25rem;
	line-height: 1.5rem;
	font-weight: 500;
	${p =>
		p.small &&
		`
		font-size: 0.875rem;
		line-height: 1rem;
		font-weight: 600;
	`} ${above.md`
		font-size: 1.25rem;
		line-height: 1.75rem;
		${p =>
			p.small &&
			`
			font-size: 1rem;
			line-height: 1.25rem;
		`}
	`};
`

const AuthorCard = ({url, name, avatar, size, style, dark, className}) => (
	<Wrapper to={url} style={style} className={className} dark={dark}>
		<Avatar avatar={avatar} name={name} size={size} dark={dark} />
		{name && <Title small={size === 'small'}>{name}</Title>}
	</Wrapper>
)

export default AuthorCard
