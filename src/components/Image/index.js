import React from 'react'
import GatsbyImage from 'gatsby-image'

const NullComponent = () => null

const parseSource = src => {
	if(typeof src === 'string') return [{src}, Img]
	if(src && src.childImageSharp) return [src.childImageSharp, GatsbyImage]
	if(src && src.fluid && src.fluid.src) return [{fluid: src.fluid}, GatsbyImage]
	if(src && src.fixed && src.fixed.src) return [{fixed: src.fixed}, GatsbyImage]
	return [null, NullComponent]
}

const Img = React.forwardRef(({fixed, fluid, className, style, ...props}, ref) => {
	const divStyle = (
		fluid && {position: 'relative', overflow: 'hidden', ...style} ||
		fixed && {position: 'relative', overflow: 'hidden', display: 'inline-block', ...style}
	) || {}
	const divClassName = `${className ? className : ``} gatsby-image-wrapper`
	return (
		<div className={divClassName} style={divStyle}>
			<picture>
				<img
					{...props}
					ref={ref}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
						...style,
					}}
				/>
			</picture>
		</div>
	)
})

const Image = ({src, ...props} = {}) => {
	const [source, Component] = parseSource(src)
	return <Component {...props} {...source} />
}

export default Image
