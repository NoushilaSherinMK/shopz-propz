import { Container, Row, Col } from "react-bootstrap"

const About = () => {
    return (
        <Container>
            <Row>
                <Col>

                    <h2 className="text-center">Welcome to Shopz</h2>
                    <p className="mt-5">
                        Welcome to Shopz!
                        Shopz is an online shopping platform where you can discover quality products
                        at affordable prices.
                        We aim to make your shopping experience simple, convenient, and enjoyable.
                    </p>
                    <h2 className="text-center">Our Mission</h2>

                    <p>
                        Our mission is to provide customers with quality products, affordable prices, fast delivery, and excellent customer service.
                    </p>

                    <h2 className="text-center mt-5">Why Choose Us?</h2>
                    <Row className="mt-4">

                        <Col md={6} className="mb-4">
                            <h4>Quality Products</h4>
                            <p>
                                We provide carefully selected products that offer
                                good quality and value.
                            </p>
                        </Col>

                        <Col md={6} className="mb-4">
                            <h4>Affordable Prices</h4>
                            <p>
                                Our products are available at reasonable prices
                                so you can shop within your budget.
                            </p>
                        </Col>

                        <Col md={6} className="mb-4">
                            <h4>Fast Delivery</h4>
                            <p>
                                We make sure your orders are delivered quickly
                                and safely to your doorstep.
                            </p>
                        </Col>

                        <Col md={6} className="mb-4">
                            <h4>Easy Shopping</h4>
                            <p>
                                Our website provides a simple and convenient
                                shopping experience.
                            </p>
                        </Col>

                        <Col md={6} className="mb-4">
                            <h4>Customer Support</h4>
                            <p>
                                Our support team is always ready to help you
                                with your questions and concerns.
                            </p>
                        </Col>

                    </Row>

                </Col>
            </Row>
        </Container>
    )
}
export default About