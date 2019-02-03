import React, { useRef, useState, useEffect } from 'react'
import ProgressiveImage from 'react-progressive-image'
import { useIntersectionObserver } from 'the-platform'

const WIDTHS = [320, 480, 800, 1024, 1280, 1440, 1920]

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

const generateSrcSet = (base, sizes) => (
	sizes.map(size => (`
		${base}/-/resize/${size}x/-/quality/lighter/ ${size}w,
		${base}/-/resize/${size*2}x/-/quality/lightest/ ${size*2}w,
	`
	)).join('')
)

const getSrcSet = (src, sizes) => {
	if(!src || typeof src !== 'string') return 'none'
	if(!src.includes('ucarecdn.com')) return 'none'
	const clean = (src + '/').replace(/\/+$/, '')
	return generateSrcSet(clean, sizes)
}

const generateSizes = sizes => (
	sizes.slice(0,-1).map(size => `(max-width: ${size}px) ${size-40}px,`).join(', ')+`${sizes.slice(-1)[0]}px`
)

const Progressive = ({src, style = {}}) => {
	const targetRef = useRef(null);
	const [hasIntersected, setIntersected] = useState(false)
	const isIntersecting = useIntersectionObserver(targetRef, typeof document === 'object' ? document.body : targetRef)

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
					srcSet={!loading ? getSrcSet(src, WIDTHS) : 'none'}
					sizes={!loading ? generateSizes(WIDTHS) : 'none'}
					style={{...baseStyle, ...style, filter: loading ? 'blur(4vw)' : 'none'}}
				/>
			)}
		</ProgressiveImage>
	)
}

export default Progressive
