import React, { Component } from 'react'

/**
 * [Panel]
 * @param  {[String]} children [panel text]
 * @param {[String]} className [panel styles classname]
 */

export default class Panel extends Component{

	static defaultProps = {
		className: 'ui-btn'
	}
	static propTypes = {
		children: React.PropTypes.node.isRequired
	}

	render(){
		return(
			<panel {...this.props}>{this.props.children}</panel>
		)
	}
}
