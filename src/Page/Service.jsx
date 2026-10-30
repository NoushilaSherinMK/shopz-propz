import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";



const Service = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <Card className="text-center p-3 mt-4">
                        <Card.Body>
                            <h3>Call</h3>
                            <Card.Title>Customer Support</Card.Title>
                            <Card.Text>
                                Our support team is always ready to help you.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col md={3}>
                    <Card className="text-center p-3 mt-4">
                        <Card.Body>

                           

                            <Card.Title>
                                Fast Delivery
                            </Card.Title>

                            <Card.Text>
                                Get your products delivered quickly and safely
                                right to your doorstep.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

                  <Col md={3}>
                    <Card className="text-center p-3 mt-4">
                        <Card.Body>

                           

                            <Card.Title>
                               Easy Returns
                            </Card.Title>

                            <Card.Text>
                                Simple And quick return policy
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

                 <Col md={3}>
                    <Card className="text-center p-3 mt-4">
                        <Card.Body>

                           

                            <Card.Title>
                              Customer Support 
                            </Card.Title>

                            <Card.Text>
                                24 hr customer support.Get the support whenever you need.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Service