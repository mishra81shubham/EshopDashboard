import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Login from "../pages/Login/Login";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register/Register";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ProductUpload from "../pages/ProductUpload/ProductUpload";
const PublicRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log("Is logged in:", isLoggedIn);
  const { isToggleSidebar } = useSelector((state) => state.common);
  return (
    <>
      <BrowserRouter>
        {isLoggedIn && <Header />}
        <div className="main d-flex">
          {isLoggedIn && (
            <div
              className={`sidebarWrapper ${
                isToggleSidebar == true ? "toggle" : ""
              }`}
            >
              <Sidebar />
            </div>
          )}
          <div
            className={`content ${!isLoggedIn && "full"} ${
              isToggleSidebar == true ? "toggle" : ""
            }`}
          >
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<Register />} />
              <Route path="/" element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard /></PrivateRoute>}/>
              <Route path="/products" element={<PrivateRoute isLoggedIn={isLoggedIn}><ProductList /></PrivateRoute>}/>
              <Route path="/product/details" element={<PrivateRoute isLoggedIn={isLoggedIn}><ProductDetails /></PrivateRoute>}/>
              <Route path="/product/upload" element={<PrivateRoute isLoggedIn={isLoggedIn}><ProductUpload /></PrivateRoute>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default PublicRoutes;
