import React from "react";
import { Outlet } from "react-router-dom";
import "./partials.scss";

const Layout = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default Layout;
