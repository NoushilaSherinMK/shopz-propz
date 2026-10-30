
import { Button, Col, Card } from "react-bootstrap";


const ProductCard = ({ product, cartCount, setCartCount }) => {


    //let cartCount = 0;





    const handleAddCart = ()=>{
       // CartCount++;
      setCartCount(cartCount + 1);
        console.log("cartcount is.........",cartCount);
    }
    return (
        
        <Col md={6} lg={4} xl={3} className="mt-3">
           {/* <h6 className="mt-3">Cart Item: {cartCount}</h6> */}
           <Card style={{ margin: "20px", border:0}}>
              <Card.Img variant="top" src={product.image} />
             
                <Card.Body>
                    <Card.Title>
                        {product.title}
                    </Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                     <Card.Text>
                        {product.productDescription}
                    </Card.Text>
                    <Button variant="primary" onClick={handleAddCart}>Add Cart</Button>
                </Card.Body>
            </Card>

        </Col>
    );
}
export default ProductCard;