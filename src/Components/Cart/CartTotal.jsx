import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ProductConsumer } from '../../Context';
import './CartTotal.scss';

class CartTotal extends Component {
	render() {
		return (
			<ProductConsumer>
            {value => {
                return (
                    <Container className="cart-total">
                    <Row>
                        <Col >
                            <h1 className="float-right text-success">Cart Total: {value.cartTotal}$</h1>
                        </Col>
                    </Row>
					<Row>
						<Col>
                            <Button variant="primary" className="float-right ml-5">
                                Pay with Card
                            </Button>
							<Button variant="warning" className="float-right " onClick={() => value.clearCart()}>
								Clear Cart
							</Button>
                            
						</Col>
					</Row>
				</Container>
                )
            }}
				
			</ProductConsumer>
		);
	}
}

export default CartTotal;
