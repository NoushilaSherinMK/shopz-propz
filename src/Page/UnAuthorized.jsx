import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const UnAuthorized = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <Card className="border-0">
                        <Card.Header className="fw-bold text-center fs-4">403:UnAuthorized</Card.Header>
                        <Card.Body>
                            <Card.Title className="display-1 text-danger text-center">403</Card.Title>
                            <Card.Text className="text-center">
                               You dont have access to this resource.
                            </Card.Text>
                           <div className="text-center">
                             <Link to="/" className="btn bg-primary" variant="primary">Go back to home page</Link>
                           </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
};
export default UnAuthorized