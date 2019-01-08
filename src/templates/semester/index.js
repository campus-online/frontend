import React from 'react'
import PropTypes from 'prop-types'
import {withLayout} from '../../components/Layout'

// [TODO]: move markup to this file, from ./gatsby.js
// i've ported the earlier structure, it's probably wrong though,
// most styling and structure should be inside this file,
// and general page layout must be inside a layout, in layouts folder
// https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#choosing-the-page-layout

const Semester = ({name}) => (
	<section>
		<h1>{name}</h1>
	</section>
)

Semester.propTypes = {name: PropTypes.string}

export default withLayout(Semester)
