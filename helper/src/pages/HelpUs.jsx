import React from 'react';
import Bar from "./components/Bar";
import Form from "./components/Form";
import BottomBar from "./components/BottomBar";

class PageContent extends React.Component{
	render(){
		return(
			<div>
				<div class="contentBody">
					<p>Help Us Help The world and leave suggestions! </p>
					<Form description="" className="suggestions"/>
					<input type="submit" value="Submit" />
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
