import React from 'react'
import styled from 'styled-components'
import {links} from '../../siteMetadata.json'
import {colors} from '../../constants'
import {above} from '../../utils/responsive'
import {Row, Cell} from '../Grid'
import Link from '../StylableLink'
import Container from '../Container'
import LogoIcon from '../LogoIcon'
import UnB from './unb'
import FAC from './fac'

const Wrapper = styled.footer`
	padding-top: 2rem;
	padding-bottom: 3rem;
	background: ${colors.base};
	min-height: 12rem;
	color: white;
	@media print {
		display: none;
	}
`

const Left = styled(Cell)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 1rem;
	${above.md`
		margin-bottom: 0;
	`};
`

const Right = styled(Cell)`
	display: flex;
`

const Logo = styled(props => (
	<Link to="/" style={{marginBottom: '2rem'}} {...props}>
		<LogoIcon />
	</Link>
))`
	display: block;
	margin-right: 3rem;
	height: 1.5rem;
	color: ${colors.base22};
	&:hover,
	&:focus,
	&:active {
		color: ${colors.base03};
	}
`

const SectionTitle = styled.div`
	display: block;
	font-size: 0.675rem;
	margin-top: 0.375rem;
	line-height: 1.125rem;
	text-transform: uppercase;
	color: ${colors.base44};
	font-weight: 700;
	letter-spacing: 0.75px;
	margin-bottom: 0.5rem;
	user-select: none;
	${above.md`
		font-size: 0.75rem;
		margin-bottom: 1rem;
	`};
`

const LinkNav = styled.nav`
	margin-right: auto;
	${above.md`
		margin-left: auto;
		margin-right: initial;
	`};
`

const LinkSection = ({title, children, style, className}) => (
	<LinkNav style={style} className={className}>
		<SectionTitle>{title}</SectionTitle>
		{children}
	</LinkNav>
)

const LinkList = styled.ul`
	list-style: none;
`

const LinkItem = styled(props => (
	<li>
		<Link {...props} />
	</li>
))`
	color: ${colors.base22};
	text-decoration: none;
	display: block;
	text-transform: lowercase;
	letter-spacing: 0.5px;
	line-height: 1.5rem;
	margin-bottom: 0.5rem;
	${above.md`
		font-size: 1.125rem;
		line-height: 1.125rem;
		margin-bottom: 1rem;
	`} & svg {
		color: ${colors.base66};
		height: 1.25rem;
		width: auto;
		margin-right: 1rem;
	}
	&:hover,
	&:focus,
	&:active {
		color: ${colors.white};
		& svg {
			color: ${colors.base11};
		}
	}
`

const Footer = () => (
	<Wrapper>
		<Container>
			<Row style={{justifyContent: 'space-between', alignItems: 'stretch'}}>
				<Left>
					<Logo />
					<div>
						<LinkList style={{display: 'flex', marginTop: 'auto'}}>
							<LinkItem to="https://unb.br/">
								<UnB />
							</LinkItem>
							<LinkItem to="https://fac.unb.br/">
								<FAC />
							</LinkItem>
						</LinkList>
					</div>
				</Left>
				<Right xs={12} md={8} lg={6}>
					<LinkSection title="Seções">
						<LinkList>
							<LinkItem to="/materias">Matérias</LinkItem>
							<LinkItem to="/reporteres">Repórteres</LinkItem>
							<LinkItem to="/editorias">Editorias</LinkItem>
							<LinkItem to="/tags">Tags</LinkItem>
						</LinkList>
					</LinkSection>
					<LinkSection title="Links">
						<LinkList>
							{/* {JSON.stringify(links)} */}
							{!!links.length > 0 &&
								links.map(link => (
									<LinkItem key={link.url} to={link.url}>
										{link.label}
									</LinkItem>
								))}
						</LinkList>
					</LinkSection>
				</Right>
			</Row>
		</Container>
	</Wrapper>
)

export default Footer
