import React from 'react'
import {Link} from 'gatsby'

const StylableLink = ({to, children, className, style}) => {
	const href = (to || {}).pathname || (typeof to === 'string' ? to : '/')
	const props = {className, style, children}
	return /^[./#]/.test(href) ? (
		<Link {...props} to={to} />
	) : (
		<a {...props} href={href} target="_blank" rel="noopener noreferrer" />
	)
}

export default StylableLink
