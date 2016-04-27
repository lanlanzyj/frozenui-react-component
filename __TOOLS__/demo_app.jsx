import React, { Component } from 'react'

import DemoButton from './demo_button.jsx'
import DemoPanel from './demo_panel.jsx'

export default class App extends Component{
	render(){
		return (
			<div className="ui-whitespace">
				<DemoButton></DemoButton>
				<DemoPanel></DemoPanel>
				{/* other component */}
			</div>
		)
	}
}