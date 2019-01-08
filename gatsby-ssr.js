/* eslint-env commonjs */

const React = require('react')

exports.onRenderBody = ({setPostBodyComponents, setHtmlAttributes}) => {
	setHtmlAttributes({lang: 'pt', style: {background: '#1a1b1c'}})
	setPostBodyComponents([
		React.createElement('div', {id: 'portal-root', key: 'portal-root'}),
	])
}
