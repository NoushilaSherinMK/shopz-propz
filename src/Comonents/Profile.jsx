
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { updateUser } from "../Redux/userSlice";
import { Card } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { editUserProfile } from "../Redux/userSlice";
import { toast } from "react-toastify";


const Profile = () => {

    const { user } = useSelector((state) => state.userState);
    const [isEdit, setIsEdit] = useState(false);
   
    const dispatch = useDispatch();





    const schema = yup.object().shape({
        fullname: yup.string().required("Enter full name").min(2, "Full name should contain atleast 2 chatacters"),
        email: yup.string().required("Enter email").email("Enter a valid email"),

    });

    const handleEditProfile = (values) => {

        dispatch(editUserProfile({...values, id:user.id }));
        toast.success("user profile updated")
        setIsEdit(false);

    };



    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>

                        <FaUserCircle size={100}  />
                        {!isEdit ? (
                            <Card.Body>
                                <Card.Title>
                                    {user?.fullname}
                                </Card.Title>

                                <Card.Text>
                                    Email : {user?.email}
                                </Card.Text>

                                <Card.Text>
                                    Role: {user?.role}
                                </Card.Text>

                                <Card.Text>
                                    Status:{user?.status ? "Active" : "Inactive"}
                                </Card.Text>



                                <div className="text-center">
                                    <Button
                                        variant="primary"
                                        onClick={() => setIsEdit(true)}
                                    >
                                        Edit
                                    </Button>
                                </div>
                            </Card.Body>

                        ) : (
                            // edit form
                            <Card.Body>
                                <Card.Title>
                                    Edit User
                                </Card.Title>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleEditProfile}
                                    initialValues={{
                                        fullname: user?.fullname || "",
                                        email: user?.email || "",

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
                                                        value={values.fullname}
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
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        isValid={touched.email && !errors.email}
                                                        isInvalid={touched.email && !!errors.email}

                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.email}</Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>




                                            {/* <div className="d-grid mt-3">

                                                <Button type="submit">Submit form</Button>
                                            </div> */}
                                            <div className=" mt-3 text-center">
                                                <Button variant="primary" type="submit">
                                                    Update Profile
                                                </Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>



                            </Card.Body>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container >

    )
}
export default Profile



// const Profile = () => {

//     const dispatch = useDispatch();

//     const [isEditing, setIsEditing] = useState(false);


//     const user = useSelector((state) => state.userState.user);
// console.log("Logged in user:", user);


//     const [fullName, setFullName] = useState(user?.fullname || "");
//     const [email, setEmail] = useState(user?.email || "");


//     useEffect(() => {
//     if (user) {
//         setFullName(user.fullname);
//         setEmail(user.email);
//     }
// }, [user]);

//     const handleSave = () => {

//         dispatch(updateUser({
//             fullName: fullName,
//             email: email
//         }));

//         setIsEditing(false);
//     };


//     return (
//         <Container>
//             <Row>



//                 <Col md={6}>
//                     <h2 className="text-center"> Who is shopping?</h2>


//                     <div className="text-center mb-3">
//                         <FaUserCircle size={80} />
//                     </div>


//                     <>
//                         <Form.Label htmlFor="fullName">Full Name(Account Holder)</Form.Label>

//                         <Form.Control
//                             type="text"
//                             id="fullname"
//                             value={fullName}
//                             onChange={(e) => setFullName(e.target.value)}
//                             readOnly={!isEditing}

//                         />



//                         <Form.Label htmlFor="email">Signed in as</Form.Label>

//                         <Form.Control
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             readOnly={!isEditing}
//                         />


//                         <div className="d-flex justify-content-center gap-3 mt-4">
//                             {isEditing ? (
//                                 <Button
//                                     variant="success"
//                                     onClick={handleSave}
//                                 >
//                                     Save Changes
//                                 </Button>
//                             ) : (
//                                 <Button
//                                     variant="primary"
//                                     onClick={() => setIsEditing(true)}
//                                 >
//                                     Edit Profile
//                                 </Button>
//                             )}


//                             <Button>
//                                 Delete Account
//                             </Button>
//                         </div>





//                     </>


//                 </Col>
//             </Row>
//         </Container>
//     );

// };
// export default Profi