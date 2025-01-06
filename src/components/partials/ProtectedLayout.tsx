import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./partials.scss";

// components
import Header from "./Header";
import SideNav from "./SideNav";
import SiteWrapper from "./SiteWrapper";

const ProtectedLayout = () => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div className="p__layout">
      <Header setDisplay={setDisplay} display={display} />
      <div className="pl__body">
        <SideNav setDisplay={setDisplay} display={display} />

        <div className="pl__outlet">
          <SiteWrapper>
            <Outlet />
          </SiteWrapper>
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
