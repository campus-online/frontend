import styled from 'styled-components'
import {above} from '../../utils/responsive'
import {containerWidth} from '../../constants'

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	display: block;
	width: 100%;
	max-width: ${p =>
		(p.small ? containerWidth.small : containerWidth.default) + 'px'};
	padding: 0 1rem;
	${above.md`
		padding: 0;
		width: 90%;
	`} ${above.xg`
		width: 100%;
	`};
`

export default Container
