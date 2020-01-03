import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap';
import Product from "../Product/Product";


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
					{this.props.products.map((product) => {
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
