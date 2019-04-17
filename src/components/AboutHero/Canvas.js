import React, {createRef} from 'react'
import styled from 'styled-components'
import Container from '../Container'

const Wrapper = styled.div`
	overflow: hidden;
	position: absolute;
	height: 100%;
	width: 100%;
	${p => p.contact && `opacity: 0.06;`}
`

const HtmlCanvas = styled.canvas`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: ${p => p.background || 'black'};
`

const color = 'rgba(230, 230, 230, 1)'
const retina = [
	'(min-resolution: 1.5dppx)',
	'(-webkit-min-device-pixel-ratio: 1.5)',
].join(',')

if (typeof CanvasRenderingContext2D !== 'undefined') {
	CanvasRenderingContext2D.prototype.circle = function(x, y, r, fill) {
		this.beginPath()
		this.arc(x, y, r, 0, 2 * Math.PI, false)
		this.closePath()
		if (fill) this.fill()
	}
}

const range = length => Array.from({length}, (_, i) => i)
const getAngle = (p1, p2) =>
	(Math.atan2(p2.y - p1.y, p2.x - p1.x) / Math.PI) * 180
const getDistance = (p1, p2) =>
	Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
const getV = (dot, mouse, ratio = 1) => {
	const d = getDistance(dot, mouse)
	const angle = getAngle(dot, mouse)
	return {
		size: Math.max((200 * ratio - d) / 30, 2 * ratio),
		x: (d > 15 ? 15 : d) * Math.cos((angle * Math.PI) / 180) * ratio,
		y: (d > 15 ? 15 : d) * Math.sin((angle * Math.PI) / 180) * ratio,
	}
}

const render = ({width, height, ratio, mouse, grid, gridOffset}) => {
	const dots = []
	const cols = (width - Math.abs(gridOffset)) / grid + 2
	const rows = height / grid
	range(cols).forEach(i => {
		range(rows).forEach(j => {
			if (j / 0.15 < height / grid) return
			if (j / 0.85 > height / grid) return
			const {x, y} = {x: gridOffset + i * grid, y: j * grid}
			const v = getV({x, y}, mouse, ratio)
			dots.push({
				x: x + v.x,
				y: y + v.y,
				size: v.size,
			})
		})
	})
	return dots
}

const loop = ({color, width, height, ratio, mouse, grid, gridOffset, ctx}) => {
	const result = render({width, height, ratio, mouse, grid, gridOffset})
	ctx.clearRect(0, 0, width, height)
	ctx.fillStyle = color
	result.forEach(({x, y, size}) => {
		ctx.circle(x, y, size, true)
	})
}

class CanvasComponent extends React.Component {
	canvas = createRef()
	wrapper = createRef()
	container = createRef()
	onResize = () => {
		const {
			current: {offsetWidth, offsetHeight},
		} = this.wrapper
		const {
			current: {offsetWidth: containerWidth},
		} = this.container
		const {
			current: {style},
		} = this.canvas

		const rect = this.canvas.current.getBoundingClientRect()
		this.canvasOffset = {x: rect.left, y: rect.top}
		this.ratio = window.devicePixelRatio || 1
		this.grid = 16 * this.ratio
		this.minSize = 2 * this.ratio

		const inv = this.props.bleed === 'left' ? -0.5 : 1
		this.gridOffset = (offsetWidth / 2 - containerWidth / 2) * this.ratio * inv

		this.width = offsetWidth * this.ratio
		this.height = offsetHeight * this.ratio

		this.ctx.canvas.width = this.width
		this.ctx.canvas.height = this.height

		style.width = `${offsetWidth}px`
		style.height = `${offsetHeight}px`

		this.onMouseMove({pageX: 0, pageY: 0})
	}
	onMouseMove = ({pageX, pageY}) => {
		const {ratio, grid, ctx, width, height, gridOffset, canvasOffset} = this
		const mouse = {
			x: (pageX - canvasOffset.x) * ratio,
			y: (pageY - canvasOffset.y) * ratio,
		}
		loop({color, width, height, ratio, mouse, grid, gridOffset, ctx})
	}
	componentDidMount() {
		const {current: canvas} = this.canvas
		this.ctx = canvas.getContext('2d')
		this.mediaQueryList = window.matchMedia(retina)

		this.mediaQueryList.addListener(this.onResize)
		window.addEventListener('resize', this.onResize)
		window.addEventListener('mousemove', this.onMouseMove)

		this.onResize()
	}
	componentWillUnmount() {
		this.mediaQueryList.removeListener(this.onResize)
		window.removeEventListener('resize', this.onResize)
		window.removeEventListener('mousemove', this.onMouseMove)
	}
	static defaultProps = {
		background: '#ffffff',
		color: 'rgba(230, 230, 230, 1)',
	}
	render() {
		return (
			<Wrapper ref={this.wrapper} {...this.props}>
				<Container ref={this.container} />
				<HtmlCanvas ref={this.canvas} {...this.props} />
			</Wrapper>
		)
	}
}

export default CanvasComponent
