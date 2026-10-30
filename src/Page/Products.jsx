import { Container, Row, Col, Form } from "react-bootstrap"
import { useSelector } from "react-redux"

const Products = () => {
    const { products } = useSelector((state) => state.productState);

    if (!products) {
        return (
            <h4 className=" text-center">
                Products not Found
            </h4>
        )
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h4>
                        Products
                    </h4>
                    <Form.Control type="text" placeholder="search........" />
                </Col>

            </Row>
            {/* <Row>
                {products.map((product, i) => (
                   
                        <ProductCard product={product}  key={i} />
                   
                ))}
            </Row> */}
        </Container>
    )
}
export default Products