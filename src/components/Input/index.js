import React from 'react'
import styled from 'styled-components'
import {withStateHandlers} from 'recompose'
import {Field as FormikFieldWrapper} from 'formik'
import {colors} from '../../constants'

const noop = () => undefined

const Wrapper = styled.label`
	display: block;
	font-size: 0.625rem;
	width: 100%;
	margin-bottom: 0.5rem;
	position: relative;
	letter-spacing: 0.25px;
	padding-bottom: 0.75rem;
	padding-top: 1rem;
	color: ${p => p.color};
	* + &{
		margin-top: 0.5rem;
	}
`

const FloatingLabel = styled.span`
	pointer-events: none;
	user-select: none;
	position: absolute;
	display: block;
	transition all 250ms ease-in-out;
	font-size: 1rem;
	line-height: 1.5rem;
	padding: 2px 0;
	transform-origin: 0 50%;
	color: ${colors.base44};
	transform: scale(1) translateY(0) translateY(0);
	${p => p.isFloating && `
		opacity: 0.66;
		transition all 250ms ease-out;
		transform: scale(0.625) translateY(-100%) translateY(-0.25rem);
	`}
`

const Field = styled.input`
	background: transparent;
	border-radius: 0;
	text-indent: 0;
	padding: 2px 0;
	font-size: 1rem;
	display: block;
	width: 100%;
	appearance: none;
	border: none;
	line-height: 1.5rem;
	color: currentColor;
	border-bottom: 1px solid ${colors.base22};
	position: relative;
	&:focus{
		 outline: 0px solid transparent;
		 box-shadow: none;
	}
	${p => p.hasError && `
		color: red;
		border-bottom-color: currentColor;
	`}
`

const ErrorMessage = styled.div`
	color: red;
	font-size: 0.625rem;
	font-weight: 500;
	text-align: right;
	position: absolute;
	margin-top: 4px;
	user-select: none;
	right: 0;
`

const Input = ({label, className, style, isFocused, error, ...props}) => (
	<Wrapper className={className} style={style} color={props.color}>
		<FloatingLabel isFloating={!!(isFocused || props.value)}>
			{label}
		</FloatingLabel>
		<Field {...props} hasError={!!error}/>
		{error && <ErrorMessage>{error}</ErrorMessage>}
	</Wrapper>
)

/* eslint-disable no-sequences */
const ConnectedInput = withStateHandlers({isFocused: false}, {
	onFocus: (_, {onFocus = noop}) => e => (onFocus(e), ({isFocused: true})),
	onBlur: (_, {onBlur = noop}) => e => (onBlur(e), ({isFocused: false})),
})(Input)

export default ConnectedInput

const normalize = value => (
	(typeof value === 'string' || typeof value === 'number') ? value : ''
)

export const FormikField = ({name, ...props}) => (
	<FormikFieldWrapper name={name}>
		{({field, form}) => (
			<ConnectedInput
				{...field}
				{...props}
				value={normalize(props.value || field.value)}
				error={form.touched[name] && form.errors[name]}
			/>
		)}
	</FormikFieldWrapper>
)
