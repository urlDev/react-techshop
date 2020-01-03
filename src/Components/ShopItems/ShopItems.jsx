import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from "../Product/Product";
import { ProductConsumer } from "../../Context";

import './ShopItems.scss';

class ShopItems extends Component {
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
					{/* we get state as a consumer from context. */}
					<ProductConsumer>
					{/* we are returning a function here. it can be value, hello, can. Anything you want.
					key is needed for react
					product={product} means we are iterating through all the elements in data.js and getting them
					since in map function we called it product, we are writing here as product
					also, this can be anything too. 
					 */}
					{value => {
						return value.products.map(product => {
							return	<Product key={product.id} product={product} ></Product>
						})
					}}
					</ProductConsumer>
				</Row>
			</Container>
		);
	}
}

export default ShopItems;
