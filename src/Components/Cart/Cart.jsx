import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import "./Cart.scss";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="cartWrap">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="cartHeader">
                                Cart
                            </h1>
                            <hr/>
                            <h1>
                            Content
                            </h1>
                            <hr/>
                            <Button className="buttonCart">Checkout</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Cart;