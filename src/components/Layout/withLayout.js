import React from 'react'
import Layout from '.'

/* eslint-disable react/display-name */
const withLayout = Component => props => (
	<Layout isPreview={props.isPreview}>
		<Component {...props} />
	</Layout>
)

export default withLayout
