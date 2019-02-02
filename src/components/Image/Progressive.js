import React, { useRef, useState, useEffect } from 'react'
import ProgressiveImage from 'react-progressive-image'
import { useIntersectionObserver } from 'the-platform'

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


const Progressive = ({src, style = {}}) => {
	const targetRef = useRef(null);
	const [hasIntersected, setIntersected] = useState(false)
	const isIntersecting = useIntersectionObserver(targetRef, document.body)

	useEffect(() => (
		isIntersecting && !hasIntersected && setIntersected(true)
	), [isIntersecting])


	if(!hasIntersected) return (
		<img ref={targetRef} src={getPlaceholderSrc({src})} style={{...baseStyle, ...style, filter: 'blur(4vw)'}}/>
	)

	return (
		<ProgressiveImage ref={targetRef} src={src} placeholder={getPlaceholderSrc({src})}>
			{(src, loading) => (
				<img src={src} style={{...baseStyle, ...style, filter: loading ? 'blur(4vw)' : 'none'}}/>
			)}
		</ProgressiveImage>
	)
}

export default Progressive
