import React from 'react'
import PropTypes from 'prop-types'
import Template from '.'

const Preview = ({entry, widgetFor}) => {
	const props = {
		...entry.getIn(['data']).toJS(),
		body: undefined,
		content: widgetFor('body'),
	}

	return <Template {...props} />
}

Preview.propTypes = {
	entry: PropTypes.shape({getIn: PropTypes.func}),
	widgetFor: PropTypes.func,
}

export default Preview
