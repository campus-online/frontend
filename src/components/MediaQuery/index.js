import {Component} from 'react'
import _windowSize from 'react-window-size'
import {breakpoints} from '../../constants'

const windowSize = typeof window !== 'undefined' ? _windowSize : a => a

class MediaQuery extends Component {
	state = {visible: false, mounted: false}
	static defaultProps = {above: 0, inverse: false}
	static getDerivedStateFromProps({above, windowWidth = -1, inverse}, state) {
		const {width: min} = breakpoints[above] || {width: above || 0}
		let visible = windowWidth >= min
		if(inverse){
			visible = !visible
		}else if(!state.mounted){
			visible = false
		}
		return state.visible === visible ? null : {visible}
	}
	componentDidMount(){
		this.setState(state => ({...state, mounted: true}))
	}
	render() {
		const {visible} = this.state
		const {render, children = render} = this.props
		if (typeof children === 'function') return children(visible)
		return visible ? children || null : null
	}
}

// [TODO]: move window width to global context
export default windowSize(MediaQuery)
