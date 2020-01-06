import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ProductConsumer } from '../../Context';

import './CartItems.scss';

class CartItems extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					return (
						<Container>
							{value.cart.map((i) => {
								return (
									<Row key={i.id}>
										<Col><img src={require(`../Product/Data/img/product-${i.id}.png`)} width="100px" height="100%" alt=""/></Col>
										<Col><h3 className="text-capitalize">{i.title}</h3></Col>
										<Col><h3>{i.price}$</h3></Col>
										<Col><h3><i className="fas fa-angle-left btn btn-outline-warning" onClick={() => value.decrement(i.id)}></i> {i.count} <i className="fas fa-angle-right btn btn-outline-warning" onClick={() => value.increment(i.id)}></i></h3></Col>
										<Col><h3><i className="fas fa-trash btn btn-warning" onClick={() => value.remove(i.id)}></i></h3></Col>
										<Col><h3>{i.total}$</h3></Col>
									</Row>
								);
							})}
						</Container>
					);
				}}
			</ProductConsumer>
		);
	}
}

export default CartItems;
