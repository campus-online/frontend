import '../../reset.css'
import '../../fonts.css'
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {colors, fonts} from '../../constants'
import {Provider as MenuProvider} from '../../components/Navbar'
import Footer from '../../components/Footer'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	color: ${colors.base};
	font-family: ${fonts.sans};
	background: ${colors.base03};
`

const Inner = styled.div`
	flex: 1 0 auto;
	width: 100%;
`

const Layout = ({children, isPreview}) => (
	<MenuProvider>
		<Helmet>
			<link rel="icon" sizes="16x16" href="/assets/images/favicon-16.png" />
			<link rel="icon" sizes="32x32" href="/assets/images/favicon-32.png" />
			<link rel="icon" sizes="128x128" href="/assets/images/favicon-128.png" />
			<link rel="icon" sizes="256x256" href="/assets/images/favicon-256.png" />
		</Helmet>
		<Wrapper>
			<Inner>{typeof children === 'function' ? children() : children}</Inner>
			{!isPreview && <Footer style={{flex: 'none'}} />}
		</Wrapper>
	</MenuProvider>
)

export default Layout
export {default as withLayout} from './withLayout'
