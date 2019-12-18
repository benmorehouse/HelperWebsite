import React from 'react';
import Bar from "./components/Bar";
import Form from "./components/Form";
import BottomBar from "./components/BottomBar";

class PageContent extends React.Component{
	render(){
		return(
			<div>
				<div class="contentBody">
					<h2>Login</h2>
					<Form description="Name" />
					<br />
					<br />
					<br />
					<Form description="Email" />
					<input type="submit" value="Login" />
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
