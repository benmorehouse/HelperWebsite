import React from 'react';
import BarButton from './BarButton';
import AppStoreLogoImage from '../images/appstore.png';
import HelperLogoImage from '../images/HelperLogo.png';
import InstagramLogoImage from '../images/instagramLogo.jpg';
import ClickableLogo from "./ClickableLogo";

const pages = ["Main","Login","Help Us",]; // these are the descriptions of the links
const pageLinks = ["/Main","/Login","/HelpUs"];// these are the links to the different pages we want.

class Bar extends React.Component{
	render(){
		return(
			<div class="UpperBar">
				<ClickableLogo imageSource={HelperLogoImage} newUrl="google.com" buttonClassName="HelperLogoButton" imageClassName="HelperLogoImage"/>
				<ClickableLogo imageSource={InstagramLogoImage} newUrl="https://www.instagram.com" buttonClassName="InstagramLogoButton" imageClassName="InstagramLogoImage"/>
				<ClickableLogo imageSource={AppStoreLogoImage} newUrl="https://www.apple.com/ios/app-store/" buttonClassName="AppStoreLogoButton" imageClassName="AppStoreLogoImage"/>
				<div class="Title">
					<h1> Helper </h1>
					<BarButton description={pages[0]} url={pageLinks[0]}/>
					<BarButton description={pages[1]} url={pageLinks[1]}/>
					<BarButton description={pages[2]} url={pageLinks[2]}/>
				</div>
			</div>
		);
	}
}

export default Bar;
