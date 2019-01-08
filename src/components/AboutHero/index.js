import React from 'react'
import styled from 'styled-components'
import {colors} from '../../constants'
import Container from '../Container'
import MediaQuery from '../MediaQuery'
import Canvas from './Canvas'
import Letters from './Letters'

const Wrapper = styled.div`
	overflow: hidden;
	position: relative;
`

const AboutHero = ({style, contact, color, background}) => (
	<Wrapper>
		<MediaQuery above='md'>
			<Canvas contact={contact} color={color} background={background}/>
		</MediaQuery>
		<Container style={style}>
			<Letters contact={contact} />
		</Container>
	</Wrapper>
)

AboutHero.defaultProps = {background: colors.base03}
export default AboutHero
