import React from "react";
import "./logo.scss";
// images
import logo from "../../assets/logo/logo.svg";
import logoTwo from "../../assets/logo/logo-icon.svg";

interface Props {
  small?: boolean;
}
const LogoComp = ({ small }: Props) => {
  return (
    <div className="logo">
      {!small ? (
        <img src={logo} alt="" className="logo__big" />
      ) : (
        <img src={logoTwo} alt="" className="logo__small" />
      )}
    </div>
  );
};

export default LogoComp;
