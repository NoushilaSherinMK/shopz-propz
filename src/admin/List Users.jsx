import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { toast } from "react-toastify";
import { changeUserRole } from "../Redux/userSlice";

function ListUsers() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [deleteProductId, setDeleteProductId] = useState(null);
    const users = useSelector((state) => state.userState.users);
    //getting products from global store thatvis from redux
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // const handleDeleteProduct = (id) => {
    //     setDeleteProductId(id);
    //     setShow(true);

    // }

    // const confirmDelete = () => {
    //     dispatch(deleteProduct(deleteProductId));
    //     toast.success("product deleted");
    //     setShow(false);
    //     setDeleteProductId(null);
    // };

    const handleRoleChange = (event, userId) => {
        dispatch(
            changeUserRole({ id: userId, role: event.target.value })
           
        );
         toast.success("User role is updated");
    }

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-between">
                    <h1 className="text-center">
                        List Users
                    </h1>

                </Col>
            </Row>
            {users.length > 0 ? (<Row>
                <Col>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>full Name</th>
                                <th>email</th>

                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map((user, index) => (


                                <tr key={user.id}>

                                    <td>{index + 1}</td>

                                    <td>
                                        {user.fullname}
                                    </td>

                                    <td>
                                        {user.email}
                                    </td>

                                    <td>
                                        <Form.Select defaultValue={user.role}
                                            onChange={(event) => handleRoleChange(event, user.id)}>
                                            <option value="admin">Admin</option>
                                            <option value="seller">Seller</option>
                                            <option value="user">User</option>

                                        </Form.Select>
                                    </td>

                                    <td>


                                        {user.status ? "Active" : "Inactive"}
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
                            User not found
                        </h5>
                    </Col>
                </Row>
            )}
            {/* <Modal show={show} onHide={handleClose}>
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
 */}


        </Container>
    )
}
export default ListUsers;