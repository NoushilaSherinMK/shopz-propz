import React from "react";
import { Container, Row, Col, Button, InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import * as formik from 'formik';
import * as yup from 'yup';
import { userRegister } from "../Redux/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";



function Register() {


    const { Formik } = formik;

    const dispatch = useDispatch();

    const schema = yup.object().shape({
        fullname: yup.string().required("Enter full name").min(2, "Full name should contain atleast 2 chatacters"),
        email: yup.string().required("Enter email").email("Enter a valid email"),
        password: yup.string().required("Enter password"),
        confirmPassword: yup.string().required("Confirm password").oneOf([yup.ref("password")], "password and confirm password are not same"),

    });


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {

    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    // };


    const handleChange = (event) => {
        SetLoginData((Prev) => {
            const UpdatedData = { ...Prev };
            UpdatedData[event.target.name] = event.target.value;
            return UpdatedData;
        })
    }

    const handleRegister = (values) => {
        values.id = Date.now();  //unique id create
        values.role = "user";
        values.status = true;
       // console.log("values", values)
            dispatch(userRegister(values));
            toast.success("user Registerd Succesfully");
            navigate("/login");

    }
    return (
        <Container className="mt-4">


            <Row className="justify-content-center">
                <Col md={4}>

                    <Row>
                        <Col>
                            <h4>
                                Register
                            </h4>
                        </Col>
                    </Row>

                    <Formik
                        validationSchema={schema}
                        onSubmit={handleRegister}
                        initialValues={{
                            fullname: '',
                            email: '',
                            password: '',
                            confirmPassword: '',

                        }}
                    >




                        {({ handleSubmit, handleChange, values, errors, touched }) => (
                            <Form noValidate onSubmit={handleSubmit}>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>Full name</Form.Label>
                                        <Form.Control

                                            type="text"
                                            placeholder="Full name"
                                            name="fullname"
                                            onChange={handleChange}
                                            isValid={touched.fullname && !errors.fullname}
                                            isInvalid={touched.fullname && !!errors.fullname}

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.fullname}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>email</Form.Label>
                                        <Form.Control

                                            type="email"
                                            placeholder="email"
                                            name="email"
                                            onChange={handleChange}
                                            isValid={touched.email && !errors.email}
                                            isInvalid={touched.email && !!errors.email}

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom02">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control

                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            onChange={handleChange}
                                            isValid={touched.password && !errors.password}
                                            isInvalid={touched.password && !!errors.password}

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Row>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom02">
                                        <Form.Label>Confirm password</Form.Label>
                                        <Form.Control

                                            type="password"
                                            placeholder="Confirm password"
                                            name="confirmPassword"
                                            onChange={handleChange}
                                            isValid={touched.confirmPassword && !errors.confirmPassword}
                                            isInvalid={touched.confirmPassword && !!errors.confirmPassword}



                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.confirmPassword}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Row>

                                <div className="d-grid mt-3">

                                    <Button type="submit">Submit form</Button>
                                </div>
                                <div className="d-grid mt-3">
                                </div>
                            </Form>
                        )}
                    </Formik>

                </Col>
            </Row>
        </Container>

    )
}
export default Register