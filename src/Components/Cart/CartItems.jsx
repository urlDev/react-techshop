import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
										<Col xs={12} sm={2}>
											<img
												src={require(`../Product/Data/img/product-${i.id}.png`)}
												width="100px"
												height="100%"
												alt=""
											/>
										</Col>
										<Col  xs={12} sm={2}>
											<h3 className="text-capitalize">{i.title}</h3>
										</Col>
										<Col  xs={12} sm={2}>
											<h3>{i.price}$</h3>
										</Col>
										<Col  xs={12} sm={2}>
											<h3>
												<i
													className="fas fa-angle-left btn btn-outline-warning"
													onClick={ i.count > 1 ? () => value.decrement(i.id) : () => value.remove(i.id)}
												/>{' '}
												{i.count}{' '}
												<i
													className="fas fa-angle-right btn btn-outline-warning"
													onClick={() => value.increment(i.id)}
												/>
											</h3>
										</Col>
										<Col  xs={6} sm={2}>
											<h3>
												<i
													className="fas fa-trash btn btn-warning"
													onClick={() => value.remove(i.id)}
												/>
											</h3>
										</Col>
										<Col  xs={6} sm={2}>
                                            
											<h3> <span className="d-block d-sm-none">Total:</span> {i.total}$</h3>
										</Col>
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
