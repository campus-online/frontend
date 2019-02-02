import React from 'react'
import ProgressiveImage from 'react-progressive-image'

const baseStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	objectPosition: 'center',
	transition: '0.5s all',
}

// const EMPTY_SVG = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>'
const placeholderSettings = '/-/scale_crop/24x24/-/quality/lightest/'
const getPlaceholderSrc = ({src}) => {
	// if(!inView) return EMPTY_SVG
	if(!src || typeof src !== 'string') return 'none'
	if(!src.includes('ucarecdn.com')) return src
	return (src + '/').replace(/\/+$/, placeholderSettings)
}

const Progressive = ({src, style = {}}) => (
	<ProgressiveImage
		src={src}
		placeholder={getPlaceholderSrc}
	>
		{(src, loading) => (
			<img
				src={src}
				style={{...baseStyle, ...style, filter: loading ? 'blur(4vw)' : 'none'}}
			/>
		)}
	</ProgressiveImage>
)

export default Progressive
