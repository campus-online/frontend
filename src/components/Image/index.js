import React from 'react'
import Progressive from './Progressive'

const NullComponent = () => null

const parseSource = src => {
	if(typeof src === 'string') return [{src}, Img]
	return [null, NullComponent]
}

const Img = ({fixed, fluid, className, style, ...props}, ref) => {
	const divStyle = (
		fluid && {position: 'relative', ...style} ||
		fixed && {position: 'relative', display: 'inline-block', ...style}
	) || {}
	const divClassName = `${className ? className : ``} gatsby-image-wrapper`
	return (
		<div className={divClassName} style={{overflow: 'hidden', ...divStyle}}>
			<picture>
				<Progressive {...props} ref={ref} style={style}/>
			</picture>
		</div>
	)
}

const Image = ({src, ...props} = {}) => {
	const [source, Component] = parseSource(src)
	return <Component {...props} {...source} />
}

export default Image
