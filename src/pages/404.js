import React from 'react'
import {colors} from '../constants'
import {withLayout} from '../components/Layout'
import MetaTags from '../components/MetaTags'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const NotFoundPage = () => (
	<div
		style={{
			background: colors.base,
			position: 'absolute',
			minHeight: '100vh',
			width: '100%',
			zIndex: '0',
		}}
	>
		<MetaTags title="404" />
		<Navbar style={{position: 'fixed', top: 0, zIndex: 2}} />
		<Hero title="404" sub="Página não encontrada" />
	</div>
)

export default withLayout(NotFoundPage)
