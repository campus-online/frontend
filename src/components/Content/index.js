import React from 'react'

const Content = ({children, ...props}) => {
	if (typeof children === 'string') {
		return <div {...props} dangerouslySetInnerHTML={{__html: children}} />
	}
	return <div {...props}>{children}</div>
}

export default Content
