import React, { Component } from 'react';
import { storeProducts, detailProduct } from './Components/Product/Data/data.js';

const ProductContext = React.createContext();
//context sits on top of all components
//everytime you set create context, it comes with two things;
//Provider(providing state)
//Consumer(consuming state)

class ProductProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: storeProducts,
			detailProduct: detailProduct
		};
	}

	handleDetails = () => {
		console.log('hello from detail');
	};

	addToCart = () => {
		console.log('add to cart');
	};

	render() {
		return (
			//we are creating/returning Contexts Provider, to provide state.
			<ProductContext.Provider
				value={{ ...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart }}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

//Variable for state consumers
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
