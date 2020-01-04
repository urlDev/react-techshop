import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ProductConsumer } from '../../Context';
import { Link } from 'react-router-dom';
import './Details.scss';

class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { id, title, price, company, img, info, inCart } = value.detailProduct;
					return (
						<Container className="mt-5">
							<Row>
								<h1 className="display-1 m-auto pb-5">{title}</h1>
							</Row>

							<Row>
								<Col>
									<Card>
										<a>
											<Card.Img
												variant="top"
												src={require(`../Product/Data/img/product-${id}.png`)}
												alt={title}
											/>
										</a>
									</Card>
								</Col>

								<Col className="details">
									<h1 className="text-capitalize">Brand: {company}</h1>
									<h3>Price: {price}$</h3>
									<h3>Product Info:</h3>
									<p>{info}</p>
									<Col className="mt-5 p-0">
										<Link to="/">
											<Button variant="outline-primary" className="mr-5 p-2">
												Back To Products
											</Button>
										</Link>
										<Link to="/cart">
											<Button
												variant="outline-warning"
												className="p-2"
												disabled={inCart ? true : false}
                                                //  onClick method will go to context in here(with value) and use that function to get the value 
                                                // thats the id from value.detailproduct
                                                onClick={() => {
                                                    value.addToCart(id)
                                                }}
											>
												{inCart ? (
													<h5 className="mb-0">In Cart</h5>
												) : (
													<h5 className="mb-0">Add To Cart</h5>
												)}
											</Button>
										</Link>
									</Col>
								</Col>
							</Row>
						</Container>
					);
				}}
			</ProductConsumer>
		);
	}
}

export default Details;
