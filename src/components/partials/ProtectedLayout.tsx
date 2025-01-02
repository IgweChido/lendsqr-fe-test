import React from "react";
import { Outlet } from "react-router-dom";
import "./partials.scss";

// components
import Header from "./Header";
import SideNav from "./SideNav";

const ProtectedLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <SideNav />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
