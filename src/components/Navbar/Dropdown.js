import React from 'react'
import styled from 'styled-components'
import {above} from '../../utils/responsive'
import Link from '../StylableLink'

const Wrapper = styled.ul`
	padding-top: 1rem;
	color: white;
	font-size: 0.75rem;
	display: flex;
	flex-wrap: wrap;
	margin: -0.25rem;
	${above.md`
		font-family: inherit;
		margin: 0;
		padding-top: 0;
		display: block;
		transform: scaleY(0);
		margin-left: -1.25rem;
		margin-right: -1.25rem;
		margin-top: 0.75rem;
		position: absolute;
	`};
`

const ItemAnchor = styled(Link)`
	padding-top: 1rem;
	color: white;
	font-size: 0.75rem;
	display: flex;
	flex-wrap: wrap;
	margin: -0.25rem;
	background: ${above.md`
		font-family: inherit;
		margin: 0;
		padding-top: 0;
		display: block;
		transform: scaleY(0);
		margin-left: -1.25rem;
		margin-right: -1.25rem;
		margin-top: 0.75rem;
		position: absolute;
	`};
`

const DropdownItem = props => (
	<li>
		<ItemAnchor {...props} />
	</li>
)

const Dropdown = ({dropdownItems, ...props}) => (
	<Wrapper {...props}>
		{dropdownItems.map(({label, ...props}) => (
			<DropdownItem key={props.to} {...props}>
				{label}
			</DropdownItem>
		))}
	</Wrapper>
)

export default Dropdown
