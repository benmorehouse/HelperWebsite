import React from 'react';
//images
import HelperLogo from './images/HelperLogo.png';
//images

import BarButton from "./components/BarButton";
import BottomBar from "./components/BottomBar";
import JSBullet from "./components/JSBullet";

const pages = ["Main","Login","Help Us",]; // these are the descriptions of the links
const pageLinks = ["/Main","/Login","/HelpUs"];// these are the links to the different pages we want.
const paragraph_array = ["Welcome to Helper"];

class PageContent extends React.Component{
	render(){
		return(
			<div>
				<div class="contentBody">	
					<p> {paragraph_array[0]} </p>
					<JSBullet name="Logo" source={HelperLogo} />
				</div>	
			</div>
		);
	}
}

class MainPage extends React.Component{
	render(){
		return(
			<div>
				<div class="UpperBar">
					<div class="Title">
						<h1> Helper </h1>
						<BarButton description={pages[0]} url={pageLinks[0]}/>
						<BarButton description={pages[1]} url={pageLinks[1]}/>
						<BarButton description={pages[2]} url={pageLinks[2]}/>
					</div>
				</div>
				
				<PageContent />
				<BottomBar />
			</div>
		);
	}
}

export default MainPage;
