import styled from 'styled-components'
import {breakpoints, columns} from '../../constants'
import {above} from '../../utils/responsive'

const mapBreakpoints = fn =>
	Object.keys(breakpoints).map(label => above[label]`${fn(breakpoints[label])}`)

const mapPropsBreakpoints = fn => props =>
	Object.keys(props)
		.filter(prop => Object.keys(breakpoints).includes(prop))
		.map(label => above[label]`${fn(props[label])}`)

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	box-sizing: border-box;
	align-items: flex-start;
	${mapBreakpoints(
		({gutter}) => `
		margin-left: ${gutter / -2 + 'rem'};
		margin-right: ${gutter / -2 + 'rem'};
	`,
	)};
`

export const Cell = styled.div`
	display: block;
	${mapBreakpoints(
		({gutter}) => `
		padding-left: ${gutter / 2 + 'rem'};
		padding-right: ${gutter / 2 + 'rem'};
	`,
	)} ${mapPropsBreakpoints(
		value => `
		display: ${value > 0 ? 'inherit' : 'none'};
		width: ${(value / columns || 1) * 100 + '%'};
	`,
	)};
`
