import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from '../../constants'
import {above} from '../../utils/responsive'

const initials = name =>
	(name.includes(' ')
		? name
				.split(' ')
				.slice(0, 2)
				.map(word => word[0])
				.join('')
		: name.slice(0, 2)
	).toUpperCase()

const getBackgroundColor = p => (p.dark ? colors.base88 : colors.base11)

const sizeOverride = {
	small: css`
		margin-right: 0.75rem;
		width: 2rem;
		height: 2rem;
		font-size: 0.75rem;
	`,
	large: css`
		width: 4rem;
		height: 4rem;
		font-size: 1rem;
		${above.md`
			width: 5.5rem;
			height: 5.5rem;
			font-size: 1.25rem;
		`}
	`,
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	object-fit: cover;
	overflow: hidden;
	background: ${getBackgroundColor};
	font-weight: 700;
	color: ${p => (p.dark ? colors.base66 : colors.base44)};
	text-align: center;
	border-radius: 50%;
	margin-right: 1rem;
	width: 3rem;
	height: 3rem;
	letter-spacing: 0.1em;
	font-size: 0.875rem;
	user-select: none;
	flex-shrink: 0;
	${p => sizeOverride[p.size] || ''}
`

const UnstyledImage = ({src, ...props} = {}) => {
	if (src) return <img {...props} src={src} />
	return null
}

const Image = styled(UnstyledImage)`
	user-select: auto;
	display: block !important;
	object-fit: cover;
	min-height: 100%;
	max-height: 100%;
	min-width: 100%;
	flex: 1;
`

const getProps = ({avatar} = {}) => {
	if (!avatar) return null
	if (typeof avatar === 'string') return {src: avatar}
	return null
}

const Avatar = ({avatar, dark, size, name = null, ...props}) => {
	const avatarProps = getProps({avatar, size})
	return (
		<Wrapper dark={dark} size={size} {...props}>
			{avatarProps ? <Image {...avatarProps} /> : name && initials(name)}
		</Wrapper>
	)
}

export default Avatar
