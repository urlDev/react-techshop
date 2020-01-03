import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
import Details from '../Details/Details';
import { ProductConsumer } from '../../Context';
import './Product.scss';

class Product extends Component {
	handleClick = () => {
		console.log('added to the cart');
	};

	render() {
		// product because we set it like that in shopItems
		// like product={product}, thats why
		const { id, title, price, img, inCart } = this.props.product;
		return (
			<Col key={id} className="vis m-5 p-0">
				<Card>
					<Link variant="outline-info" to="/details">
						<Card.Img variant="top" src={require(`../Product/Data/img/product-${id}.png`)} alt={title} />
					</Link>
					<Card.Body>
						<Card.Title>
							
							<h2>{title}</h2>
						</Card.Title>
						<Card.Text>
							
							<h3 className="float-left">{`${price}$`}</h3>
							<Button onClick={this.handleClick} className="float-right" disabled={inCart ? true : false}>
								{inCart ? ( <p className="mb-0" disabled>In Cart</p> ) : (<i className="fas fa-cart-plus" />)}
							</Button>
							
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default Product;
