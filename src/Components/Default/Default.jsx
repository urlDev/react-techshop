import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Default.scss";

class Default extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="default">
                        <h1 className="text-light">Broken phone, or link. <Link  variant="light"  to="/">Back to products?</Link></h1>
                        <img src={require("./pagenotfound.jpg")} alt="broken phone"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Default;