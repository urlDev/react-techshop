import React from 'react';
import NavTop from './Components/Navbar/NavTop.jsx';
import ShopItems from './Components/ShopItems/ShopItems.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Details from './Components/Details/Details.jsx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<NavTop />
				<Switch>
					<Route exact path="/" component={ShopItems} />
					<Route path="/signin" component={SignIn} />
					<Route path="/details" component={Details} />
					<Route path="/cart" component={Cart} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
