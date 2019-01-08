import React from 'react'
import styled from 'styled-components'
import {Row, Cell} from '../../components/Grid'
import {above} from '../../utils/responsive'
import Item from './Item'

const Wrapper = styled.div`
	padding: 3rem 0;
	${above.md`
		padding: 5rem 0;
	`};
`

const Items = ({items}) => (
	<Wrapper>
		<Row>
			{items.map(item => (
				<Cell key={item.title} xs={12} md={6} lg={4}>
					<Item title={item.title} text={item.text} />
				</Cell>
			))}
		</Row>
	</Wrapper>
)

export default Items
