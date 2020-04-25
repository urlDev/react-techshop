import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ProductConsumer } from '../../Context';
import { Link } from 'react-router-dom';
import './Details.scss';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            price,
            company,
            info,
            inCart,
          } = value.detailProduct;

          return (
            <Container className="mt-5">
              <Row>
                <h1 className="display-1 m-auto pb-5 text-primary">{title}</h1>
              </Row>

              <Row>
                <Col sm={12} md={6}>
                  <Card className="imageCard">
                    <Card.Img
                      variant="top"
                      src={require(`../Product/Data/img/product-${id}.png`)}
                      alt={title}
                    />
                  </Card>
                </Col>

                <Col className="details" sm={12} md={6}>
                  <h1 className="text-capitalize text-danger">
                    Brand: {company}
                  </h1>
                  <h3 className="text-success">Price: {price}$</h3>
                  <h3 className="text-info">Product Info:</h3>
                  <p className="text-secondary">{info}</p>
                  <Col className="mt-5 mb-5 p-0">
                    <Link to="/">
                      <Button
                        variant="outline-primary productsButton"
                        className="mr-5 p-2"
                      >
                        Back To Products
                      </Button>
                    </Link>
                    <Button
                      variant="outline-warning"
                      className="p-2"
                      disabled={inCart ? true : false}
                      //  onClick method will go to context in here(with value) and use that function to get the value
                      // thats the id from value.detailproduct
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? (
                        <h5 className="mb-0">In Cart</h5>
                      ) : (
                        <h5 className="mb-0 ">Add To Cart</h5>
                      )}
                    </Button>
                  </Col>
                </Col>
              </Row>
            </Container>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
