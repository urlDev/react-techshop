import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import "./CartColumns.scss";

class CartColumns extends Component {
    render() {
        return (
            <Container className="d-none d-sm-block">
                <Row>
                    <Col><h2>PRODUCTS</h2></Col>
                    <Col><h2>NAME OF PRODUCT</h2></Col>
                    <Col><h2>PRICE</h2></Col>
                    <Col><h2>QUANTITY</h2></Col>
                    <Col><h2>REMOVE</h2></Col>
                    <Col><h2>TOTAL</h2></Col>
                </Row>
            </Container>
        );
    }
}

export default CartColumns;