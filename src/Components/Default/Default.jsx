import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./Default.scss";

class Default extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Page Not Found</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Default;