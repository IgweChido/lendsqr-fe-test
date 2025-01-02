import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  label: string;
  link: string;
}

const NavComp: React.FC<Props> = ({ label, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive, isPending }) => {
        return isActive ? "" : isPending ? "" : "";
      }}
    >
      {label}
    </NavLink>
  );
};

export default NavComp;
