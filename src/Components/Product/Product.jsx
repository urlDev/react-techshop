import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
import { ProductConsumer } from '../../Context';
import './Product.scss';

class Product extends Component {
	

	render() {
		// product because we set it like that in shopItems
		// like product={product}, thats why
		// props because product is children of shopitems component where we mapped all the items
		const { id, title, price, inCart } = this.props.product;
		return (
			<Col key={id} className="vis m-5 p-0">
				<ProductConsumer>
					{(value) => (
						<Card className="productCard" onClick={() => value.handleDetail(id)}>
							<Link variant="outline-info" to="/details">
								<Card.Img
									variant="top"
									src={require(`../Product/Data/img/product-${id}.png`)}
									alt={title}
									
								/>
							</Link>
							<Card.Body>
								<Card.Title>
									<h2>{title}</h2>
								</Card.Title>
								<div>
									<h3 className="float-left">{`${price}$`}</h3>
									{/* if inCart(boolean value in data) is true, then make the button disabled*/}
									<Button
										className="float-right"
										disabled={inCart ? true : false}
										onClick={() => value.addToCart(id)}
									>
										{/* if in cart is True, write in cart, if not, make it font awesome icon */}
										{inCart ? (
											<p className="mb-0" disabled>
												In Cart
											</p>
										) : (
											<i className="fas fa-cart-plus" />
										)}
									</Button>
								</div>
							</Card.Body>
						</Card>
					)}
				</ProductConsumer>
			</Col>
		);
	}
}

export default Product;
