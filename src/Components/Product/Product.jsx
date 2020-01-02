import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Product.scss';

class Product extends Component {

    handleClick = () => {
		this.setState({
			title: this.props.products.title
		});
		console.log(this.props.products.title + ' title is logged');
	};

	render() {
        const { id, title, img, price, inCart } = this.props.products
        return (
			<Col key={id} className="vis m-5 p-0">
				<Link variant="outline-info" to="/details">
					<Card onClick={this.handleClick}>
						<Card.Img variant="top" src={(`./Data/img/product-${id}.png`)} alt={title} />
						<Card.Body>
							<Card.Title>{title}</Card.Title>
							<Card.Text>{`${price}$`}</Card.Text>
						</Card.Body>
					</Card>
				</Link>
			</Col>
        
		);
	}
}

export default Product;
