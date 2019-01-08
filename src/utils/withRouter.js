import React from 'react'
import {Location} from '@reach/router'

/* eslint-disable react/display-name */
const withRouter = Component => props => (
	<Location>
		{routerProps => <Component {...props} {...routerProps} />}
	</Location>
)

export default withRouter
