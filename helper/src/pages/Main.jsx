import React from 'react';
//images
import screenshot1 from './images/screenshot1.png';
import screenshot2 from './images/screenshot2.png';
//images

import Bar from "./components/Bar";
import BottomBar from "./components/BottomBar";
import JSBullet from "./components/JSBullet";
const paragraph_array = ["Welcome to Helper, the app that will help the world solve its wealth distribution issue.","We have all done it. We were walking down the street, had someone reach their hand out to just get a few cents for food, and we looked away. We looked down at our phone, we looked up at the city lights, or maybe we even said that we just didn’t have anything. No, I am not giving you a guilt trip at all about not helping that one person. I get it.", 
"We are in an age of not trusting people. The media shows us more and more every day why we shouldn’t trust anyone with anything, let alone a homeless person with any sort of money that we earned just so they can go and ~buy drugs~. But what if we knew that the money that we had in our bank accounts could go into their hands, and it could only do good for them because we could ensure that it would only go to things like food, clothing, and medicine?",
"Introducing Helper, an App that is designated to give you the peace of mind you need to give to those who don’t have, and allow them the ability to pick themselves off the ground, or at least get some food in them.",
"Think of it like this: each person in these major cities often don’t have anything to their name and cant get the aid that they need because nobody is really willing to help them out of either the fact that they can only take cash in an increasingly cashless world, or because people with money just don't trust in the. What if instead of asking for money, they held out a card, similar to a venmo card, that had a QR code on it. This QR could would hold it’s own value to it, and the person with the phone can go, scan it, and add funds to this card for that homeless person. This person can then go to the store, purchase whatever they need, and the card will ensure they can only spend money at places like Ralphs, Target or wherever.","Here is a preview of the App"
];



class PageContent extends React.Component{
	render(){
		return(
			<div>
				<div class="contentBody">	
					<p> {paragraph_array[0]} </p>
					<p> {paragraph_array[1]} </p>
					<p> {paragraph_array[2]} </p>
					<p> {paragraph_array[3]} </p>
					<p> {paragraph_array[4]} </p>
					<p> {paragraph_array[5]} </p>
					<div id="screenshots">
						<JSBullet name="screenshot2" source={screenshot2} />
						<JSBullet name="screenshot1" source={screenshot1} />
					</div>	
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
