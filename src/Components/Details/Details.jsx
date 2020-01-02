import React, { Component } from 'react';
import storeProducts from "../ShopItems/Data/data.js";
import { Container, Row, Col, Card } from 'react-bootstrap';

import "./Details.scss";

class Details extends Component {
    render() {
        // const { id, title, img, price, company, info } = this.props.products;
        return (
            <div>
                <Container>
                    <Row>
                        <Col >
                            Model : 
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Details;