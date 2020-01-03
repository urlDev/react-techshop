import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import './Details.scss';

class Details extends Component {

	render() { 

		const { id, title, img, price, company, info } = this.props.detailed;
		return (
			<div>
				<Container>
					<Row>
						<Col >
                            Model: {title}
                            
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Details;
