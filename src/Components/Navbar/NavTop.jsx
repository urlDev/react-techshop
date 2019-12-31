import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavTop.scss';

class NavTop extends Component {
	render() {
		return (
			<Navbar default collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<Image src={require('./logo_transparent.png')} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<i className="fas fa-bars" />
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto mr-5 ">
						<Nav.Link href="#home" className="pr-5">
							<Link to="/">Home</Link>
						</Nav.Link>
						<Nav.Link href="#signin" className="pr-5">
							<Link to="/signin">Sign In</Link>
						</Nav.Link>
						<Nav.Link href="#cart">
							<Link to="/cart">Cart</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavTop;
