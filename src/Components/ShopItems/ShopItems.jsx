import React, { Component } from 'react';
import storeProducts from './Data/data.js';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './ShopItems.scss';

class ShopItems extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		// const { img, title, price, id } = storeProducts;
		return (
			<Container className="p-0">
				<Row className="m-0 p-0">
					{/* {storeProducts.map(({img, title, id, price}) => { 
                    //     console.log(<Col key={id} title={title} img={img} price={`${price}$`} xs={4} className="vis" />)
					// 	return <Col key={id} title={title} img={img} price={`${price}$`} xs={4} className="vis" />
                        
					// })}*/}
					{storeProducts.map(({ title, id, img, price }) => {
						return (
							<Col key={id}  className="vis m-5 p-0">
								<Card>
									<Card.Img variant="top" src={require(`./Data/img/product-${id}.png`)} alt={title} />
									<Card.Body>
										<Card.Title>{title}</Card.Title>
										<Card.Text>
											{`${price}$`}
										</Card.Text>
									</Card.Body>
									
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		);
	}
}

export default ShopItems;
