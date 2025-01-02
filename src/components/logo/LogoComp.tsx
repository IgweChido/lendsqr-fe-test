import React from "react";
import "./logo.scss";
// images
import logo from "../../assets/logo/logo.svg";

const LogoComp = () => {
  return (
    <div className="logo">
      <img src={logo} alt="" className="" />
    </div>
  );
};

export default LogoComp;
