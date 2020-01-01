import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavTop.scss';

class NavTop extends Component {
	render() {
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
						<Link  to="/signin" className="nav-link pr-5">
							Sign In
						</Link>
						<Link to="/cart" className="nav-link">Cart</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavTop;
