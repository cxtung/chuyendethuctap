import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/Header/index.jsx";
import React from "react";
import "./public/css/frontend.css";
import "./public/bootstrap/css/bootstrap.min.css";
import "./public/js/backend.js";
import MainMenu from "../../pages/frontend/home/mainMenu.jsx";
import Footer from "../../components/Footer/index.jsx";
import ProductDtail from "../../pages/frontend/product/productDetail.jsx";
import Home from "../../components/Home/index.jsx";
import { useNavigate, useLocation } from "react-router-dom";

const LayoutSite = () => {
  // const location = useLocation();
  // const currentPath = location.pathname;
  // const isHomePage = currentPath === "/";
  // const navigate = useNavigate();
  // console.log(isHomePage);
  // if (isHomePage) {
  //   navigate("/home");
  // }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutSite;
