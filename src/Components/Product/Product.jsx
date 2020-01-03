import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import Details from "../Details/Details";
import './Product.scss';

class Product extends Component {
	handleClick = () => {
		this.setState({
			title: this.props.products.title
		});
		console.log(this.props.products.title + ' title is logged');
	};

	render() { 
		const { id, title, price } = this.props.products;
		return (
			<Col key={id} className="vis m-5 p-0">
				<Card onClick={this.handleClick}>
					<Link variant="outline-info" to="/details" >
						<Card.Img variant="top" src={require(`../Product/Data/img/product-${id}.png`)} alt={title}/>
					</Link>
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{`${price}$`}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default Product;
