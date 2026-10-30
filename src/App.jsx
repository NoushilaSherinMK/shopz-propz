import Header from "./Components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCarousel from "./Components/HomeCarousel";
import Home from "./Page/Home";
import { useState } from "react";
import Footer from "./Components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Page/Login";
import Service from "./Page/Service";
import Register from "./Page/Register";
import { ToastContainer } from "react-toastify";
import AddProduct from "./admin/pages/AddProduct";
import ListProduct from "./admin/pages/ListProduct";
import EditProduct from "./admin/pages/EditProduct";
import ListUsers from "./admin/List Users";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./Components/Profile";
import UnAuthorized from "./Page/UnAuthorized";
import DashBoard from "./Page/DashBoard";
import Products from "./Page/Products";
import About from "./Page/About";
import Contact from "./Page/Contact";
import DashBoardSeller from "./Page/DashboardSeller";



function App() {

  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const headerTop = { backgroundColor: "grey", textAlign: "center", padding: "10px", color: "white" };


  // const products = [
  //   {
  //     id: 1,
  //     productName: "WaterPurifier",
  //     productPrice: 15000,
  //     productDescription: "UV water purifier with double filteration",
  //     productPhoto: "https://aqua-ro.com/wp-content/uploads/2020/02/8.jpg"
  //   },
  //   {
  //     id: 2,
  //     productName: "Aircooler",
  //     productPrice: 30000,
  //     productDescription: "High cooling capacity",
  //     productPhoto: "https://assets.nikshanonline.com/wp-content/uploads/2025/03/222222.png"
  //   },
  //   {
  //     id: 3,
  //     productName: "Airconditioner",
  //     productPrice: 55000,
  //     productDescription: "High cooling power",
  //     productPhoto: "https://www.shutterstock.com/image-vector/air-conditioner-ad-template-realistic-260nw-2442996975.jpg"
  //   }, {
  //     id: 4,
  //     productName: "vaccum cleaner",
  //     productPrice: 55000,
  //     productDescription: "high suction power",
  //     productPhoto: "https://m.media-amazon.com/images/I/61Hcd+x5i5L._AC_UF350,350_QL80_.jpg"
  //   }, {
  //     id: 5,
  //     productName: "Deebot",
  //     productPrice: 55000,
  //     productDescription: "large cleaning area",
  //     productPhoto: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4h9AvKI8BG0Vf-ceRVp7oRnqQlCpCHli9gojpzf0pIKRzViYlnvN0eqbDv7MO6COlQyc_Oe664xV52jKsUCGnjry3UNBa-8LDujtzZ5vJ-77WE3gYP595ikEgcCh_5AokOBWf3V9sjGE&usqp=CAc"
  //   }, {
  //     id: 6,
  //     productName: "Refrigerator",
  //     productPrice: 95000,
  //     productDescription: "High cooling capacity",
  //     productPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XUn-iL3HqKyrlq_51BZwuIu3cJj8U9tcD0uIXRYqqg&s=10"
  //   }, {
  //     id: 7,
  //     productName: "TV",
  //     productPrice: 55000,
  //     productDescription: "high picture clarity",
  //     productPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QmqiT2PN3xDzHrfVBQXX_wHS0LS-qCzknvraqcTLqg&s=10"
  //   }, {
  //     id: 8,
  //     productName: "Fan",
  //     productPrice: 5000,
  //     productDescription: "High  capacity",
  //     productPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg1MHPaAz7LTboEK5JNpss6UJrWAtyQwS8hfviEk-yA&s=10"
  //   }, {
  //     id: 9,
  //     productName: "Kettle",
  //     productPrice: 5000,
  //     productDescription: "Less electric usage",
  //     productPhoto: "https://th.bing.com/th/id/OIP.MqMCBOWvaELBH_pg97jeigHaEK?w=306&h=180&c=7&r=0&o=7&pid=1.7&rm=3"

  //   }, {

  //     id: 10,
  //     productName: "Electic Stove",
  //     productPrice: 35000,
  //     productDescription: "low energy consumption",
  //     productPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZFE9Q6z5C_4aJY4QBwGOkohknc6iAIAcy_oDl-Wl7A&s=10"
  //   }
  // ]

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }
  fetchProducts();

  return (
    <BrowserRouter>
      <div style={headerTop}>
        Buy 2 Get 1 Free
      </div>

      <Header CartCount={cartCount} />
      <ToastContainer autoClose={2000} position="top-right" />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeCarousel />

              <Home
                products={products}
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addproduct" element={<ProtectedRoute requiredRole={["admin", "seller"]}><AddProduct /> </ProtectedRoute>} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/listproduct" element={<ProtectedRoute requiredRole={["admin", "seller"]}><ListProduct /> </ProtectedRoute>} />
        <Route path="/editproduct/:id" element={<ProtectedRoute requiredRole={["admin", "seller"]}> <EditProduct /> </ProtectedRoute>} />
        <Route path="/listusers" element={<ProtectedRoute requiredRole={["admin"]}> <ListUsers /> </ProtectedRoute>} />
        <Route path="/admin/dashboard" element={<ProtectedRoute requiredRole={["admin"]}><DashBoard /> </ProtectedRoute>} />
          <Route path="/seller/dashboard" element={<ProtectedRoute requiredRole={["admin","seller"]}><DashBoardSeller /> </ProtectedRoute>} />
        <Route path="/unauthorized" element={<ProtectedRoute><UnAuthorized /> </ProtectedRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}
export default App;
