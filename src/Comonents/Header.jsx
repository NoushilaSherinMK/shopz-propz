
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { GiBeachBag } from "react-icons/gi";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { use } from "react";
import { userLogout } from "../Redux/userSlice";


const Header = ({ CartCount }) => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector(
    (state) => state.userState
  );
  const handleLogout = () => {
    dispatch(userLogout());
  }

  const isAdmin = user?.role === "admin" ? true : false;
  const isAdminSeller = user?.role === "admin" ? true : user?.role === "seller" ? true : false
 
  return (

    <Navbar expand="lg" className="header-bg">

      <Container>
        <Navbar.Brand as={Link} to="/">SHOPZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>

            <Nav.Link as={Link} to="/service">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">ContactUs</Nav.Link>
          </Nav>


          <Nav className="ms-auto">
            {!isAuthenticated && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="#link" className="position-relative"><GiBeachBag size={25} />
              <span className="cart-span">{CartCount}</span>
            </Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">

              <NavDropdown.Item as={Link} to="/addproduct">Add Product</NavDropdown.Item>
              {isAdminSeller && (
                <NavDropdown.Item as={Link} to="/listproduct">List Product</NavDropdown.Item>
              )}

              {isAdmin && (
                <NavDropdown.Item as={Link} to="/listusers">List Users</NavDropdown.Item>
              )}

              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/admin/dashboard">
               Dashboard Admin
              </NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/seller/dashboard">
               Dashboard Seller
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} onClick={handleLogout} to="/login">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;