import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import "./EmptyCart.scss";

class EmptyCart extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-1 mt-5">Your Cart Is Empty</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default EmptyCart;