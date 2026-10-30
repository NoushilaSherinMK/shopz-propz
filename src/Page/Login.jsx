import React, { useEffect } from "react";
import { Container, Row, Col, Button, InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/userSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";




function Login() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [updated, setUpdated] = useState(0);
    // const users = useSelector((state) => state.userState);
    const users = useSelector((state) => state.userState.users);


    const handleChange = (event) => {
        setLoginData((Prev) => {
            const UpdatedData = { ...Prev };
            UpdatedData[event.target.name] = event.target.value;
            return UpdatedData;
        })
    }

    // useEffect(() => {
    //     console.log("inside use effect");
    //     
    //     }
    // }, [updated]);
    //the above use Effect code for updating and dependanct=y array hav ethe value
    useEffect(() => {
        console.log("inside use effect");

        return () => {
            console.log("unmounted..");
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {

            event.stopPropagation();
            setValidated(true);

            return;
        }
        const user = users.find((u) => u.email === loginData.email);
        if (!user) {
            toast.error("user not found");
            return;

        }
        if (user.password !== loginData.password) {
            toast.error("Please check the password you enterd");
            return;
        }

        dispatch(userLogin(user));
        toast.success("user logged successfully");
        navigate("/");


        // userLogin(dispatch());

    };
    return (
        <Container className="mt-4">


            <Row className="justify-content-center">
                <Col md={4}>

                    <Row>
                        <Col>
                            <h4>
                                User Login   <button onClick={() => setUpdated(updated + 1)}>
                                    Change update
                                </button>
                            </h4>
                        </Col>
                    </Row>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    onChange={handleChange}

                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Enter a valid email</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="validationCustom02">
                                <Form.Label>password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    onChange={handleChange}

                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Enter valid password
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <div className="d-grid mt-3">

                            <Button type="submit">Submit form</Button>
                        </div>
                        <div className="text-center mt-3">
                            If you dont have an account
                            <Link to="/register">
                                Register Now
                            </Link>
                        </div>


                    </Form>

                </Col>
            </Row>
        </Container>

    )
}
export default Login