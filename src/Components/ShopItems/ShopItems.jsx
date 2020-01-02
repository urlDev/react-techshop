import React, { Component } from 'react';
import storeProducts from './Data/data.js';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from "../Product/Product";

import './ShopItems.scss';

const { id, title, img, price, company, info } = storeProducts;

class ShopItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: storeProducts
		};
	}

	

	render() {
		return (
			<Container className="p-0">
				<Row className="m-0 p-0">
					{/* 	{storeProducts.map(({ title, id, img, price }) => {
						return (
							<Col key={id} className="vis m-5 p-0">
								<Link variant="outline-info" to="/details">
									<Card onClick={this.handleClick} >
										<Card.Img
											variant="top"
											src={require(`./Data/img/product-${id}.png`)}
											alt={title}
										/>
										<Card.Body>
											<Card.Title>{title}</Card.Title>
											<Card.Text>{`${price}$`}</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>
						);
					})} */}
					{this.state.products.map((product) => {
						return (
							<Product key={product.id} products={product} ></Product>
						);
					})}
				</Row>
			</Container>
		);
	}
}

export default ShopItems;
