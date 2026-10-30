import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';

const DashBoardSeller = () => {
    const {products} = useSelector((state) => state.productState)
      const {users} = useSelector((state) => state.userState)
      const inactiveUsersCounts = users?.filter((u) => u.status === true);
       const sellerUsers = users?.filter((u) => u.role === "seller");
       
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text text-center">Seller DashBoard</h1>
                </Col>
            </Row>
            <Row className="gap-3">
                <Col md={3}>
                    <Card
                        bg="primary"
                        text='light' 
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>Total Products</Card.Title>
                            <Card.Text className="display-5">
                                {products?.length}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card
                        bg="primary"
                        text='light' 
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title> Total users</Card.Title>
                            <Card.Text className="display-5">
                                {users?.length}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                 <Col md={3}>
                    <Card
                        bg="success"
                        text='light' 
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>active users who bought </Card.Title>
                            <Card.Text className="display-5">
                                {inactiveUsersCounts?.length}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                 <Col md={3}>
                    <Card
                        bg="success"
                        text='light' 
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        
                    </Card>
                </Col>
                
            </Row>
        </Container>

    );
};
export default DashBoardSeller