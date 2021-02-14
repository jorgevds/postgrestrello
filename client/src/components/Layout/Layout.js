import React from "react";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";

const Layout = ({ children }) => {
  return (
    <div className="container mt-5">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
