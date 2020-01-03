import React, { Component } from 'react';
import NavTop from './Components/Navbar/NavTop.jsx';
import ShopItems from './Components/ShopItems/ShopItems.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Details from './Components/Details/Details.jsx';
import Default from "./Components/Default/Default.jsx";
import { storeProducts, detailProduct } from '../src/Components/Product/Data/data';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
   constructor(props) {
		super(props);
		this.state = {
			products: storeProducts,
			detailed: detailProduct
		};
	}
  render() {
    
    return (
      <div className="App">
			<Router>
				<NavTop />
				<Switch>
					<Route exact path="/" render={(props) => <ShopItems {...props}  products={storeProducts}/>} />
					<Route path="/signin" component={SignIn} />
					<Route path="/details" render={(props) => <Details {...props}  detailed={detailProduct}/>} />
					<Route path="/cart" render={(props) => <Cart {...props}  products={storeProducts}/>} />
          <Route component={Default} ></Route>
				</Switch>
			</Router>
		</div>
    );
  }
}

export default App;
