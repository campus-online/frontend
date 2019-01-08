import styled from 'styled-components'
import {colors, fonts} from '../../constants'
import {above} from '../../utils/responsive'

const lineHeight = 2

const Text = styled.div`
	font-family: ${fonts.serifText};
	line-height: ${lineHeight};
	margin-bottom: 4rem;
	color: ${p => (!p.dark ? colors.base88 : 'white')};
	${above.md`
		font-size: 1.125em;
	`} strong {
		font-weight: bold;
	}

	p {
		opacity: ${p => (!p.dark ? 1 : '0.88')};
	}

	em {
		font-style: italic;
	}

	* + * {
		margin-top: ${0.5 * lineHeight}em;
	}

	h2,
	h3 {
		margin-top: ${lineHeight}em;
		font-family: ${fonts.sans};
	}

	h2 + h3,
	h3 + h2 {
		margin-top: ${lineHeight}em;
	}

	h2 {
		font-size: 1.5em;
		hyphens: none;
		line-height: ${0.75 * lineHeight};
		color: ${p => (!p.dark ? colors.base88 : 'white')};
		opacity: ${p => (!p.dark ? 1 : 0.66)};
	}

	h3 {
		hyphens: none;
		font-size: 1.25em;
		font-weight: 600;
		position: relative;
		line-height: ${0.875 * lineHeight};
	}

	a {
		color: currentColor;
		:hover {
			color: ${p => (!p.dark ? colors.base : 'white')};
			opacity: ${p => (!p.dark ? 1 : 'white')};
		}
	}

	blockquote {
		hyphens: none;
		border-left: 1px solid ${p => (!p.dark ? colors.base22 : 'white')};
		opacity: ${p => (!p.dark ? 1 : 0.22)};
		font-size: 1.125em;
		font-style: italic;
		letter-spacing: -0.25px;
		line-height: ${0.875 * lineHeight};
		color: ${p => (!p.dark ? colors.base66 : 'white')};
		opacity: ${p => (!p.dark ? 1 : 0.66)};
		padding: 1em 0 1em 1.5em;
		${above.lg`
			margin-left: -1.5em;
		`};
	}

	hr {
		margin: 3em 0;
		border: none;
		height: 1px;
		background: ${p => (!p.dark ? colors.base22 : 'white')};
		opacity: ${p => (!p.dark ? 1 : 0.22)};
	}

	img {
		width: 100%;
		display: block;
	}

	ul {
		li {
			list-style: circle;
		}
	}

	.md-figure {
		display: block;
		margin: 3em 0;
		background: ${colors.base06};
	}

	.md-figure-caption {
		margin-top: 0;
		font-size: 0.875rem;
		padding: 0.25rem 0.675rem;
		font-family: ${fonts.sans};
		font-weight: 500;
		background: ${colors.base06};
		color: ${colors.base66};
	}
`

export default Text
