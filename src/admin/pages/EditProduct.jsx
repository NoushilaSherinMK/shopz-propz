import React from "react";
import { Container, Row, Col, Button, InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import * as formik from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import { updateProduct } from "../../redux/productSlice";




function EditProduct() {


    const { Formik } = formik;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    
   const products = useSelector(
  (state) => state.productState.products
);
    const product = products.find(
  (item) => item.id === Number(id)
);


    const schema = yup.object().shape({
        ProductName: yup.string().required("Enter product name").min(2, "product name should contain atleast 2 chatacters"),
        ProductPrice: yup.number().required("enter Product Price"),
        ProductDescription: yup.string().required("Enter Description"),
        Productphoto: yup.string().required("Add Product photo"),

    });

    

    const handleEditProduct = (values) => {
        // values.id = Date.now();  //unique id create// no need of this redux think creating new product

        dispatch(updateProduct(values));
        toast.success("product Updatted Succesfully");
        navigate("/listproduct");

    }
    return (
        <Container className="mt-4">


            <Row className="justify-content-center">
                <Col md={4}>

                    <Row>
                        <Col>
                            <h4>
                                Edit product
                            </h4>
                        </Col>
                    </Row>

             <Formik
    enableReinitialize
    validationSchema={schema}
    // onSubmit={handleEditProduct}
    // initialValues={{
    //     id: product?.id || "",
    //     ProductName: product?.ProductName || "",
    //     ProductPrice: product?.ProductPrice || "",
    //     ProductDescription: product?.ProductDescription || "",
    //     Productphoto: product?.Productphoto || "",
    // }}

     onSubmit={handleEditProduct}
    initialValues={{
        id: product.id,
        ProductName: product.ProductName,
        ProductPrice: product.ProductPrice,
        ProductDescription: product.ProductDescription,
        Productphoto: product.Productphoto
    }}
>



                        {({ handleSubmit, handleChange, values, errors, touched }) => (
                            <Form noValidate onSubmit={handleSubmit}>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control

                                            type="text"
                                            placeholder="ProducctName"
                                            name="ProductName"
                                               value={values.ProductName}
                                            onChange={handleChange}
                                            isValid={touched.ProductName && !errors.ProductName}
                                            isInvalid={touched.ProductName && !!errors.ProductName}
                                           
    

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.ProductName}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>ProductPrice</Form.Label>
                                        <Form.Control

                                            type="number"
                                            placeholder="ProductPrice"
                                            name="ProductPrice"
                                            onChange={handleChange}
                                              value={values.ProductPrice}
                                            isValid={touched.ProductPrice && !errors.ProductPrice}
                                            isInvalid={touched.ProductPrice && !!errors.ProductPrice}

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.ProductPrice}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom02">
                                        <Form.Label>ProductDescription</Form.Label>
                                        <Form.Control

                                            as="textarea"
                                            rows={4}
                                            placeholder=""
                                            name="ProductDescription"
                                            onChange={handleChange}
                                              value={values.ProductDescription}
                                            isValid={touched.ProductDescription && !errors.ProductDescription}
                                            isInvalid={touched.ProductDescription && !!errors.ProductDescription}

                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.ProductDescription}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Row>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom02">
                                        <Form.Label> Productphoto</Form.Label>
                                        <Form.Control

                                            type="text"
                                            placeholder=""
                                            name="Productphoto"
                                            onChange={handleChange}
                                             value={values.Productphoto}
                                            isValid={touched.Productphoto && !errors.Productphoto}
                                            isInvalid={touched.Productphoto && !!errors.Productphoto}



                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.Productphoto}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Row>

                               <div className="d-grid mt-3">
    <Button type="submit">Update Product</Button>
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
export default EditProduct