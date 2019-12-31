import React from 'react';
import NavTop from './Components/Navbar/NavTop.jsx';
import ShopItems from './Components/ShopItems/ShopItems.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import Cart from './Components/Cart/Cart.jsx';

import { Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
	return (
		<div className="App">
			<NavTop />
      <ShopItems />
			<Switch>
				<Route path="/signin" component={SignIn}/>
				<Route path="/cart" component={Cart}/>
			</Switch>
		</div>
	);
}

export default App;
