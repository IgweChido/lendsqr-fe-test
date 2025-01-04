import React from "react";
import { Outlet } from "react-router-dom";
import "./partials.scss";

// components
import Header from "./Header";
import SideNav from "./SideNav";

const ProtectedLayout = () => {
  return (
    <div className="p__layout">
      <Header />
      <div className="pl__body">
        <SideNav />
        <div className="pl__outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
