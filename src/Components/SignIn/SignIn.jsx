import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import './SignIn.scss';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Form>
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
						</Form>
					</Col>
					<Col>
						<Form>
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
							<Col>
								<Button
									onClick={this.handleClick}
									onAnimationEnd={this.animationEnd}
									variant="outline-dark"
									className={`${this.state.classNames} btn-lg button2 m-5`}
									type="submit"
								>
									SIGN UP
								</Button>
								<Button
									onClick={this.handleClick}
									onAnimationEnd={this.animationEnd}
									variant="outline-primary"
									className={`${this.state.classNames} btn-lg button2 m-5`}
									type="submit"
								>
									SIGN UP WITH GOOGLE
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
