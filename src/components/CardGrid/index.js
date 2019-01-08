import styled from 'styled-components'
import {breakpoints, columns} from '../../constants'
import {above} from '../../utils/responsive'

const mapPropsBreakpoints = fn => props =>
	Object.keys(props)
		.filter(prop => Object.keys(breakpoints).includes(prop))
		.map(label => above[label]`${fn(props[label])}`)

export const CardRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	box-sizing: border-box;
	align-items: stretch;
	margin-left: -6px;
	margin-right: -6px;
`

export const CardCell = styled.div`
	display: block;
	${mapPropsBreakpoints(
		value => `
		display: ${value > 0 ? 'inherit' : 'none'};
		width: ${(value / columns || 1) * 100 + '%'};
	`,
	)};
`
