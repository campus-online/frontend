import {css} from 'styled-components'
import {breakpoints} from '../constants'

// Iterate through the breakpoints and create a above template
export const above = Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${breakpoints[label].width}px) {
			${css(...args)};
		}
	`
	return acc
}, {})
