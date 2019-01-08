import React from 'react'
import styled from 'styled-components'
import {withState} from 'recompose'
import {kebabCase} from 'lodash/fp'
import {colors} from '../../constants'
import Link from '../StylableLink'

const Wrapper = styled.div`
	display: flex;
	line-height: 1.5rem;
	height: ${p => p.expanded ? 'auto' : '3.5rem'};
	align-items: baseline;
	margin-left: -1rem;
	margin-right: -1rem;
	overflow: hidden;
`

const Title = styled(Link)`
	display: block;
	position: relative;
	z-index: 1;
	font-weight: 500;
	color: currentColor;
	text-decoration: none;
	padding: 1rem 0.5rem 1rem 1rem;
	&:after {
		content: '';
		background: linear-gradient(to left, transparent, ${colors.base});
		position: absolute;
		height: 100%;
		left: 100%;
		width: 3rem;
		pointer-events: none;
		transition: all 0.2s ease-out;
		opacity: ${p => p.expanded ? 0 : 1};
	}
`

const List = styled.ul`
	display: flex;
	overflow: scroll hidden;
	height: 6rem;
	flex: 1;
	${p =>
		p.expanded && `
		height: auto;
		overflow: initial;
		flex-wrap: wrap;
	`}
`

const Item = styled(Link)`
	color: currentColor;
	display: block;
	text-decoration: none;
	font-size: 0.75rem;
	text-transform: uppercase;
	font-weight: 600;
	padding: 0.25rem 0.75rem;
	white-space: nowrap;
	opacity: 0.66;
	&:hover {
		opacity: 1;
	}
`

const ShowMore = styled.div`
	display: block;
	cursor: pointer;
	position: relative;
	padding: 1rem 1rem 0.5rem 1rem;
	user-select: none;
	&:before {
		content: '';
		background: linear-gradient(to right, transparent, ${colors.base});
		position: absolute;
		height: 100%;
		right: 100%;
		width: 3rem;
		pointer-events: none;
	}
	&:after {
		content: '···';
		line-height: 1rem;
		${p =>
			p.expanded &&
			`
			content: '×';
			font-size: 1.5rem;
		`} position: relative;
	}
`

const enhance = withState('expanded', 'onExpand', false)
const byLabel = ({label: _a}, {label: _b}) => {
	const {a, b} = {a: kebabCase(_a), b: kebabCase(_b)}
	if (a < b) return -1
	if (a > b) return 1
	return 0
}

const ScrollList = enhance(
	({title, url, list, style, className, expanded, onExpand}) => (
		<Wrapper style={style} className={className} expanded={expanded}>
			<Title to={url} expanded={expanded}>{title}</Title>
			<List expanded={expanded}>
				{list.sort(byLabel).map(({label, url}) => (
					<li key={url}>
						<Item to={url}>{label}</Item>
					</li>
				))}
			</List>
			<ShowMore
				expanded={expanded}
				onClick={() => onExpand(expanded => !expanded)}
			/>
		</Wrapper>
	),
)

export default ScrollList
