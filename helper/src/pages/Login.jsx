import React from 'react';
import Bar from "./components/Bar";
import Form from "./components/Form";
import BottomBar from "./components/BottomBar";
import {
  Redirect,
} from "react-router-dom";

class PageContent extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			clicked: false
		};
	}

	handleClick(){
		this.setState({clicked: true});
	}

	render(){
		if (this.state.clicked) {
			return <Redirect push to={"/LoggedIn"} />;
		}else{
			return(
				<div>
					<div class="contentBody">
						<h2>Login</h2>
						<Form description="Name" />
						<br />
						<br />
						<br />
						<Form description="Email" className="SignUpForm" />
						<input type="submit" value="Login" onClick={this.handleClick} />
					</div>	
				</div>
			)
		}
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
