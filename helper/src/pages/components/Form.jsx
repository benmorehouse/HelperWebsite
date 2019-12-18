import React from 'react';
import {
  Redirect,
} from "react-router-dom";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value:''};
		this.handleChange = this.handleChange.bind(this); 
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value,
		});// triggered whenever the value is changed in the textfield
	}

	handleSubmit(event) { // triggered everytime we submit
		alert("Thanks for Signing up for Helper, we have sent you an email!");
		return <Redirect push to={"/Main"} />;
	}

	sendFeedback (templateId, variables) {
		window.emailjs.send(
		'gmail', templateId,
		variables
		).then(res => {
			console.log('Email successfully sent!')
		})
		// Handle errors here however you like, or use a React error boundary
	.catch(err => console.error('Email failed with error:', err))
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label class={this.props.className}>
					{this.props.description}
					<input type="text" value={this.state.name} onChange={this.handleChange} />
					<br/>
				</label>
			</form>
		);
	}
}

export default Form;
