import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
							<React.Fragment>
								<div className="title">
									<h1>Cart</h1>
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

// {(value) => {
// 					// const { id, title, price, company, img, info, inCart } = value.cart;
// 					return (
// 						<Container className="cartWrap mt-5">
// 							<Row>
// 								<Col>
// 									<h1 className="cartHeader">Cart</h1>
// 									<hr />
// 									{value.cart.map((i) => {
// 										return (
// 											<Row key={i.id} className="mb-5">
// 												<img src={require(`../Product/Data/img/product-${i.id}.png`)} alt="" />
// 												<Col>
// 													<h3 className="mt-3">{i.title}</h3>
// 												</Col>
// 												<Col className="mt-3">
// 													<h3>
// 														<i
// 															className="fas fa-angle-left mt-3 float-left"
// 															onClick={() => value.decrement(value.id)}
// 														/>
// 														<h3 className="text">{i.count}</h3>
// 														<i
// 															className="fas fa-angle-right float-right"
// 															onClick={() => value.increment(value.id)}
// 														/>
// 													</h3>
// 												</Col>
// 												<Col>
// 													<h3 className="float-right mt-3"> {i.price}$ </h3>
// 												</Col>
// 											</Row>
// 										);
// 									})}
// 									<hr />
// 									<Button className="buttonCart">Checkout</Button>
// 								</Col>
// 							</Row>
// 						</Container>
// 					);
// 				}}
