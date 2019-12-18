import React from 'react';
import Bar from "./components/Bar";
import BottomBar from "./components/BottomBar";

class PageContent extends React.Component{
	render(){
		return(
			<div>
				<div class="contentBody">
					<br />
					<br />
					<p> Sorry, but we were unable to perform your request, as we are unable to authenticate users on desktop yet! </p>
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
