import React from 'react'
import styled from 'styled-components'
import {colors} from '../../constants'
import {above} from '../../utils/responsive'

const Wrapper = styled.div`
	margin: 1.5rem 0;
	${above.md`
		margin: 2.5rem 0;
	`};
`

const Title = styled.h2`
	font-size: 1.25rem;
	line-height: 1.75rem;
	margin-bottom: 0.5rem;
	font-weight: 500;
	color: ${colors.base88};
	${above.md`
		font-size: 1.5rem;
		line-height: 2rem;
		margin-bottom: 1rem;
		font-weight: 500;
	`};
`

const Body = styled.div`
	font-size: 1.125rem;
	line-height: 2rem;
	color: ${colors.base66};
	${above.md`
		font-size: 1.25rem;
		line-height: 1.75rem;
	`};
`

const Item = ({title, text}) => (
	<Wrapper>
		{title && <Title>{title}</Title>}
		{text && <Body>{text}</Body>}
	</Wrapper>
)

export default Item
