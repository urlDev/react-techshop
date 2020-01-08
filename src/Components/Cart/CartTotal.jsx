import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ProductConsumer } from '../../Context';
import StripeCheckoutButton from './StripeButton';
import './CartTotal.scss';

class CartTotal extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					return (
						<Container className="cart-total">
							<Row>
								<Col>
									<h1 className="float-right text-success mt-3">Cart Total: {value.cartTotal}$</h1>
								</Col>
							</Row>
							<Row>
								<Col>
									<StripeCheckoutButton cartTotal={value.cartTotal} variant="primary">
										Pay with Card
									</StripeCheckoutButton>
									<Button
										variant="warning"
										className="float-right mr-5"
										onClick={() => value.clearCart()}
									>
										Clear Cart
									</Button>
								</Col>
							</Row>
							<Row>
								<Col>
									<h1 className="text-danger mt-5 mb-5">
										*Please use the following test credit card for payments*
										<br />
										4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
									</h1>
								</Col>
							</Row>
						</Container>
					);
				}}
			</ProductConsumer>
		);
	}
}

export default CartTotal;
