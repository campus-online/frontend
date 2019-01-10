import React from 'react'
import styled from 'styled-components'
import {above} from '../../utils/responsive'
import Image from '../Image'
import {maxHeight} from './constants'

const Inner = styled(Image)`
	display: block;
	object-fit: cover;
	height: 100%;
	min-width: 100%;
	max-height: ${maxHeight};
	flex: 1;
	background: ${p => (p.dark ? '#101112' : '#e5e5e5')};
	${above.md`
		min-height: 100%;
		position: absolute !important;
	`} & img[src^='data:'] {
		filter: blur(1rem) grayscale(25%);
		transform: scale(1.025);
		background: #f0f;
	}
`

const PostCardImage = ({image, position = 'absolute', dark}) => (
	<Inner src={image} dark={dark} style={{position}} position={position} />
)

export default PostCardImage
