import React from 'react'
import styled from 'styled-components'
import {above} from '../../utils/responsive'

const HamburguerWrapper = styled.div`
	cursor: pointer;
	pointer-events: all;
	transform: translateY(2px);
	opacity: 0.88;
	color: currentColor;
	padding: 1rem 2rem 1rem 1rem;
	&:hover,
	&:focus,
	&:active {
		opacity: 1;
	}

	${above.md`
		display: none;
	`} span {
		display: block;
		width: 26px;
		height: 2px;
		margin-bottom: 5px;
		background: currentColor;
		position: relative;
		border-radius: 3px;
		transform-origin: 4px 0%;
		transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
		&:first-child {
			transform-origin: 0% 100%;
		}
		&:nth-child(3) {
			transform-origin: 50% 50%;
		}
	}
	${p =>
		p.isOpen &&
		`
		span{
			opacity: 1;
			transform: rotate(45deg) translate(1px, -3px);
			&:nth-child(2){
				opacity: 0;
				transform: rotate(0deg) scale(0.2, 0.2);
			}
			&:nth-child(3){
				transform: rotate(-45deg) translate(4px, -4px);
			}
		}
	`};
`

const Hamburguer = ({isOpen, onClick}) => (
	<HamburguerWrapper isOpen={isOpen} onClick={onClick}>
		<span />
		<span />
		<span />
	</HamburguerWrapper>
)

export default Hamburguer
