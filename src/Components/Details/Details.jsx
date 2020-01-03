import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import './Details.scss';

class Details extends Component {

	render() { 

		return (
			<div>
				<Container>
					<Row>
						<Col >
                           <h1>hello from details</h1>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Details;
