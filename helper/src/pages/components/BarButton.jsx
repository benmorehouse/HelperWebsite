import React from 'react';
import {
  Redirect,
} from "react-router-dom";

class Barbutton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			redirect: false,
			clicked: false,
		};
	}

	handleOnClick = () => {
		this.setState({redirect: true});
	}

	render() {
		if (this.state.redirect) {
			if(!this.state.clicked){
				this.setState({clicked: true});
				return <Redirect push to={this.props.url} />;
			}
		}
		return <button class="Barbutton" onClick={this.handleOnClick} type="button">{this.props.description} </button>;
	}
}

export default Barbutton;
