import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import {signInWithGoogle} from "../Firebase/firebase.utils.js"
import './SignIn.scss'; 

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Container className="signin">
				<Row>
					<Col className="mt-5">
						<h1>I already have an account</h1>
						<h3>Sign in with your email and password</h3>
						<Form className="mt-5">
							<Form.Group controlId="formGroupEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>
							<Form.Group controlId="formGroupPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<Button
								onClick={this.handleClick}
								onAnimationEnd={this.animationEnd}
								variant="outline-dark"
								className={`${this.state.classNames} btn-lg button2`}
								type="submit"
							>
								LOGIN
							</Button>
							<Button
									onClick={signInWithGoogle}
									onAnimationEnd={this.animationEnd}
									variant="outline-primary"
									className={`${this.state.classNames} btn-lg button2 m-5`}
									type="submit"
								>
									SIGN IN WITH GOOGLE
								</Button>
						</Form>
					</Col>
					<Col className="mt-5">
						<h1>I don't have an account</h1>
						<h3>Sign up with your email and password</h3>
						<Form className="mt-5">
							<Form.Group>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									onChange={this.handleChange}
									value={this.state.firstName}
									name="firstName"
									type="text"
									placeholder="First name"
									className="form-control"
									required
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									onChange={this.handleChange}
									value={this.state.lastName}
									name="lastName"
									type="text"
									placeholder="Last name"
									className="form-control"
								/>
							</Form.Group>
							<Form.Group controlId="formGroupEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>
							<Form.Group controlId="formGroupPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<Col className="p-0">
								<Button
									onClick={this.handleClick}
									onAnimationEnd={this.animationEnd}
									variant="outline-dark"
									className={`${this.state.classNames} btn-lg button2 mt-5`}
									type="submit"
								>
									SIGN UP
								</Button>
								
							</Col>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default SignIn;
