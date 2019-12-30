import React, { Component } from 'react';
import {  Navbar, Nav , Image} from 'react-bootstrap';

import './NavTop.scss';

class NavTop extends Component {
	render() {
		return (
			
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home"><Image src={require("./logo_transparent.png")}/></Navbar.Brand>
					<Nav className="ml-auto mr-5">
						<Nav.Link href="#home" className="pr-5">Home</Nav.Link>
						<Nav.Link href="#features" className="pr-5">Sign In</Nav.Link>
						<Nav.Link href="#pricing">Cart</Nav.Link>
					</Nav>
				</Navbar>
	
		);
	}
}

export default NavTop;
