import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../Context';
import './NavTop.scss';

class NavTop extends Component {
	render() {
		return (
			<ProductConsumer>
			{value => {
				return (
					<Navbar default collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Navbar.Brand as={Link} to="/">
						<Image src={require('./logo_transparent.png')} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<i className="fas fa-bars" />
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto mr-5 ">
							<Link to="/" className="nav-link pr-5">
								Home
							</Link>
							<Link to="/signin" className="nav-link pr-5">
								Sign In
							</Link>
							<Link to="/cart" className="nav-link">
								{value.cart.length >= 1 ? (<h3 className="text-primary shake"><i className="fas fa-cart-plus" /> {value.cart.length}</h3>) : (<h3><i className="fas fa-cart-plus" /> {value.cart.length}</h3>) }
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				)
			}}
				
			</ProductConsumer>
		);
	}
}

export default NavTop;
