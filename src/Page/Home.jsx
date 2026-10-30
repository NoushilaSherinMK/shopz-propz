import { Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductCard from "../Comonents/ProductCard";



const Home = ({ products, cartCount, setCartCount }) => {

    return (
        <Container>
            <Row className="g-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        cartCount={cartCount}
                        setCartCount={setCartCount}
                    />
                ))}
            </Row>
        </Container>
    );
}
export default Home;
