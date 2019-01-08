import React from 'react'
import styled from 'styled-components'
import Image from '../Image'

const ImageWrapper = styled(Image)`
	height: 100%;
	min-width: 100%;
	background: #e5e5e5;
	& img[src^='data:'] {
		filter: blur(1rem) grayscale(25%);
		transform: scale(1.025);
		background: #f0f;
	}
`

const ArticleHeroImage = ({image, position = 'relative'}) => (
	<ImageWrapper src={image} style={{position}} position={position} />
)

export default ArticleHeroImage
