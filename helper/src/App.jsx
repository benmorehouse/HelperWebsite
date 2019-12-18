import React, {Component} from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch, 
	Redirect,
} from "react-router-dom";
import MainPage from "./pages/Main";
import Login from "./pages/Login";
import HelpUs from "./pages/HelpUs";
import LoggedIn from "./pages/LoggedIn";

class App extends Component{
	//Note that we have the redirect, which if no exact paths are found we go to this one
	render(){
		return <Router>
				<Switch>
					<Route exact path="/" component={MainPage} />	
					<Route exact path="/Login" component={Login} />	
					<Route exact path="/HelpUs" component={HelpUs} />	
					<Route exact path="/LoggedIn" component={LoggedIn} />	
					<Redirect to="/" />
				</Switch>
			</Router>
	}
}

export default App;
