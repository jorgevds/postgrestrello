import React from "react";

const Footer = () => {
  return (
    <div className="container text-center mt-5">
      &copy; {new Date().getUTCFullYear()}
    </div>
  );
};

export default Footer;
