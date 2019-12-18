import React from 'react';
import HelperLogo from './images/HelperLogo.png';

import {
  Redirect,
} from "react-router-dom";

import Bar from "./components/Bar";
import BottomBar from "./components/BottomBar";

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this); 
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});// triggered whenever the value is changed in the textfield
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
				<label class="SignUpForm">
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
					<br/>
					<br/>
					Email:
					<input type="Email" value={this.state.value} onChange={this.handleChange} />
				</label>
			<input type="submit" value="Login" />
			</form>
		);
	}
}
	
class PageContent extends React.Component{
	render(){
		return(
			<div>
				<div class="contentBody">
					<h2>Login</h2>
					<NameForm />
				</div>	
			</div>
		);
	}
}

class MainPage extends React.Component{
	render(){
		return(
			<div>
				<Bar />
				<PageContent />
				<BottomBar />
			</div>
		);
	}
}

export default MainPage;
