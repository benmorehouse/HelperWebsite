import React from 'react';
//images
//images

import Bar from "./components/Bar";
import BottomBar from "./components/BottomBar";


class PageContent extends React.Component{
	render(){
		return(
			<div>
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
