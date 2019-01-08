import React, {createContext, Component} from 'react'
import {noop} from 'lodash/fp'

const MenuContext = createContext({open: false, toggle: noop})
const getDisplayName = C => C.displayName || C.name || 'Component'

export class Provider extends Component {
	static displayName = 'MenuProvider'
	toggle = () => {
		this.setState(state => ({open: !state.open}))
	}
	state = {open: false, toggle: this.toggle}
	render() {
		return (
			<MenuContext.Provider value={this.state}>
				{this.props.children}
			</MenuContext.Provider>
		)
	}
}

export const withMenu = BaseComponent =>
	class WithMenu extends Component {
		static displayName = `WithMenu(${getDisplayName(BaseComponent)})`
		render() {
			const {props} = this
			return (
				<MenuContext.Consumer>
					{({open, toggle}) => (
						<BaseComponent {...props} isMenuOpen={open} onMenuClick={toggle} />
					)}
				</MenuContext.Consumer>
			)
		}
	}

export default MenuContext.Consumer
