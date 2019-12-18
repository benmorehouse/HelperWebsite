import React from 'react';
import Image from 'react-image';

class ClickableLogo extends React.Component{
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
				window.location.href = this.props.newUrl;
				return null;
			}
		}
		return(
			<button onClick={this.handleOnClick} class={this.props.buttonClassName} >
				<Image src={this.props.imageSource} class={this.props.imageClassName} /> 
			</button>
		);
	}
}

export default ClickableLogo;
