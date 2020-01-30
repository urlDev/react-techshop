import React, { Component } from 'react';
import { ProductConsumer } from '../../Context';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';
import CartTotal from "./CartTotal"
import './Cart.scss';

class Cart extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { cart } = value;
					if (cart.length > 0) {
						return (
							<React.Fragment className="cart">
								<div className="title mt-5">
									<h1 className="cart-title text-danger"><span className="text-success">Your</span> Cart</h1>
								</div>
								<CartColumns />
								<CartItems />
								<CartTotal/>
							</React.Fragment>
						);
					} else {
						return <EmptyCart />;
					}
				}}
			</ProductConsumer>
		);
	}
}

export default Cart;

