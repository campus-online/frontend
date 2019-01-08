import React from 'react'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors} from '../../constants'
import Link from '../StylableLink'

const Component = props =>
	props.to ? <Link {...props} /> : <button {...props} />
const Button = styled(Component)`
	display: block;
	user-select: none;
	border: 0;
	margin: 0;
	appearance: none;
	text-decoration: none;
	color: ${colors.base44};
	background: ${colors.base88};
	letter-spacing: .025em;
	transition: .2s;
	border: 0;
	padding: 0.875rem 1.25rem;
	font-size: 0.875rem;
	font-weight: 500;
	text-align: left;
	&:hover{
		cursor: pointer;
		background: ${colors.base11};
		color: ${colors.base};
	}
	${p =>
		p['stretch'] &&
		`
		min-width: 100%;
	`}
	cursor: ${p => (!p.disabled && (p.onClick || p.to) ? 'pointer' : 'default')};
	${p =>
		p.disabled &&
		`
		background: ${colors.base44};
		color: ${colors.base11};
		&:hover{
			cursor: not-allowed;
			background: ${colors.base66};
			color: ${colors.base22};
		}
	`}
`

export class FormikSubmit extends React.Component {
	static contextTypes = {formik: PropTypes.object}
	render() {
		const {isLoading, ...props} = this.props
		const {isSubmitting, isValid} = this.context.formik
		const disabled = !isValid || isSubmitting || isLoading
		return <Button {...props} type="submit" disabled={disabled} />
	}
}

export default Button
