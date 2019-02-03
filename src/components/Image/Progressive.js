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
const getPlaceholder = ({src}) => {
	// if(!inView) return EMPTY_SVG
	if(!src || typeof src !== 'string') return 'none'
	if(!src.includes('ucarecdn.com')) return src
	return (src + '/').replace(/\/+$/, placeholderSettings)
}

const getSrcSet = ({src}) => {
	if(!src || typeof src !== 'string') return 'none'
	if(!src.includes('ucarecdn.com')) return src
	const clean = (src + '/').replace(/\/+$/, '')
	return `
		${clean}/-/resize/320x/-/quality/lightest/ 320w,
		${clean}/-/resize/640x/-/quality/lightest/ 320w 2x,
		${clean}/-/resize/480x/-/quality/lightest/ 480w,
		${clean}/-/resize/960x/-/quality/lightest/ 480w 2x,
		${clean}/-/resize/800x/-/quality/lightest/ 800w,
		${clean}/-/resize/1600x/-/quality/lightest/ 800w 2x
		${clean}/-/resize/1024x/-/quality/lightest/ 1024w,
		${clean}/-/resize/2048x/-/quality/lightest/ 1024w 2x
	`
}

const sizes = `
	(max-width: 320px) 280px,
	(max-width: 480px) 440px,
	(max-width: 480px) 440px,
	(max-width: 800px) 760px,
	1024px
`


const Progressive = ({src, style = {}}) => {
	const targetRef = useRef(null);
	const [hasIntersected, setIntersected] = useState(false)
	const isIntersecting = useIntersectionObserver(targetRef, typeof document === 'object' && document.body)

	useEffect(() => (
		isIntersecting && !hasIntersected && setIntersected(true)
	), [isIntersecting])


	if(!hasIntersected) return (
		<img ref={targetRef} src={getPlaceholder({src})} style={{...baseStyle, ...style, filter: 'blur(4vw)'}}/>
	)

	return (
		<ProgressiveImage ref={targetRef} src={src} placeholder={getPlaceholder({src})}>
			{(src, loading) => (
				<img
					src={src}
					srcSet={!loading && getSrcSet({src})}
					sizes={!loading && sizes}
					style={{...baseStyle, ...style, filter: loading ? 'blur(4vw)' : 'none'}}
				/>
			)}
		</ProgressiveImage>
	)
}

export default Progressive
