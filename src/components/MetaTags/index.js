import React from 'react'
import Helmet from 'react-helmet'
import withRouter from '../../utils/withRouter'
import truncate from '../../utils/truncate'
import {homepage} from '../../../package.json'

const joinURL = (...args) =>
	args
		.reverse()
		.join('/')
		.replace(/([^:])\/+/g, '$1/')

const MetaTags = ({
	title,
	description,
	image,
	authorName,
	siteTitle,
	location: {pathname},
}) => {
	const composedTitle = `${siteTitle} | ${title}`
	// const canonical = joinURL(pathname, homepage)
	const latlng = '-15.760837, -47.8702936'
	const locale = 'pt_BR'
	const truncatedDescription = truncate(description, 120)
	return (
		<Helmet>
			<title>{composedTitle}</title>
			<meta name="description" content={truncatedDescription} />
			<meta name="ICBM" content={latlng} />
			<meta name="geo.position" content={latlng} />
			<meta name="geo.region" content="BR-DF" />
			<meta name="geo.placename" content="Brasília" />

			<meta property="og:url" content={joinURL(pathname, homepage)} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={composedTitle} />
			{image && <meta property="og:image" content={image} />}
			<meta property="og:description" content={truncatedDescription} />
			<meta property="og:site_name" content={siteTitle} />
			<meta property="og:locale" content={locale} />
			{authorName && <meta property="article:author" content={authorName} />}

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@campusitounb" />
			<meta name="twitter:url" content={joinURL(pathname, homepage)} />
			<meta name="twitter:title" content={composedTitle} />
			<meta name="twitter:description" content={truncatedDescription} />
			{image && <meta name="twitter:image" content={image} />}
		</Helmet>
	)
}

MetaTags.defaultProps = {
	title: 'Home',
	description: 'Laboratório de Jornalismo da UnB',
	image: '/assets/images/og-image.png',
	authorName: null,
	siteTitle: 'Campus Online',
}

export default withRouter(MetaTags)
