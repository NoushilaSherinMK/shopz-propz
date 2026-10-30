import { useSelector,useDispatch } from "react-redux";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { deleteProduct } from "../../redux/productSlice";
import { toast } from "react-toastify";

function ListProduct() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [deleteProductId, setDeleteProductId] = useState(null);
    const products = useSelector((state) => state.productState.products);
    //getting products from global store thatvis from redux
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDeleteProduct = (id) => {
        setDeleteProductId(id);
        setShow(true);

    }

    const confirmDelete = () => {
    dispatch(deleteProduct(deleteProductId));
    toast.success("product deleted");
    setShow(false);
    setDeleteProductId(null);
};
   

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-between">
                    <h1 className="text-center">
                        List Products
                    </h1>
                    <Link to="/addproduct" className="btn btn-primary m-2">
                        Add Product
                    </Link>
                </Col>
            </Row>
            {products.length > 0 ? (<Row>
                <Col>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Photo</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {products.map((product, index) => (


                                <tr key={product.id}>

                                    <td>{index + 1}</td>

                                    <td>
                                        <img
                                            src={product.Productphoto}
                                            alt={product.ProductName}
                                            width="80"
                                        />
                                    </td>

                                    <td>
                                        {product.ProductName}
                                    </td>

                                    <td>
                                        ₹{product.ProductPrice}
                                    </td>

                                    <td>


                                        <Link to={`/editproduct/${product.id}`}>
                                            <button className="btn btn-primary">
                                                <CiEdit />
                                            </button>
                                        </Link>
                                    </td>

                                    <td>
                                        <button className="btn btn-danger"
                                            onClick={() => handleDeleteProduct(product.id)}
                                        >
                                            <MdDeleteSweep />

                                        </button>
                                    </td>


                                </tr>

                            ))}

                        </tbody>

                    </Table>




                </Col>
            </Row>) : (
                <Row>
                    <Col>
                        <h5 className="text-center">
                            Product not found
                        </h5>
                    </Col>
                </Row>
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete</Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-info" variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn btn-danger" variant="primary" onClick={confirmDelete}>
                    Delete
                    </Button>
                </Modal.Footer>
            </Modal>



        </Container>
    )
}
export default ListProduct;