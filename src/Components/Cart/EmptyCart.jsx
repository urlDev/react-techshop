import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./EmptyCart.scss";

class EmptyCart extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-1 mt-5 text-danger">Your Cart Is Empty</h1>
                        <h1 className="text-success">Lets <Link to="/" className="text-success">Shop!</Link></h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default EmptyCart;