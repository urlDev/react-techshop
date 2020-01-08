import React, { Component } from 'react';
import NavTop from './Components/Navbar/NavTop.jsx';
import ShopItems from './Components/ShopItems/ShopItems.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Details from './Components/Details/Details.jsx';
import Default from './Components/Default/Default.jsx';

import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="App">
				{/* navbar is always on top */}
				<NavTop />
				<Switch>
					<Route exact path="/" component={ShopItems} />
					<Route path="/signin" component={SignIn} />
					<Route path="/details" component={Details} />
					<Route path="/cart" component={Cart} />
					{/* 404 page */}
					<Route component={Default} />
				</Switch>
			</div>
		);
	}
}

export default App;
