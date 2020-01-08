import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../Context';
import { auth } from "../Firebase/firebase.utils.js";
import './NavTop.scss';

class NavTop extends Component {
	render() {
		return (
			<ProductConsumer>
			{value => {
				return (
					<Navbar default collapseOnSelect expand="lg" bg="dark" variant="dark" >
					<Navbar.Brand as={Link} to="/">
						<Image src={require('./logo_transparent.png')} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<i className="fas fa-bars" />
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav" className="">
						<Nav className="ml-auto ">
							<Link to="/" className="nav-link pl-5 pr-5">
								Home
							</Link>
							<Link to="/signin" className="nav-link pl-5 pr-5">
							{/* if currentUser has a user, it will return true. If its null(initial state) it will return false(null is falsy value) */}
								{ value.currentUser ? <div onClick={() => auth.signOut()} className="text-warning">Sign Out</div> : <div>Sign In</div> }
							</Link>
							<Link to="/cart" className="nav-link pl-5 pr-5">
								{value.cart.length >= 1 ? (<h3 className="text-warning shake"><i className="fas fa-cart-plus" /> {value.cartCountTotal}</h3>) : (<h3><i className="fas fa-cart-plus" /> {value.cartCountTotal}</h3>) }
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
