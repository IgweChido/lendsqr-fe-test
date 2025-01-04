import React from "react";
import "./partials.scss";
import { NavLink } from "react-router-dom";

// images
import drop from "../../assets/icons/drop.svg";

interface Props {
  label: string;
  link: string;
  isDrop?: boolean;
  icon: string;
}

const NavComp: React.FC<Props> = ({ label, link, isDrop, icon }) => {
  return (
    <NavLink to={link} className={"nav"}>
      {({ isActive, isPending }) => (
        <div className={isActive ? `nav__comp--active` : `nav__comp`}>
          {isActive && <div className="nc__div"></div>}
          <div className="nc__flex">
            <img src={icon} alt="" className="nc__icon"></img>
            <p className="nc__p"> {label}</p>
            {/* dropdown */}

            {isDrop && <img src={drop} alt="" className="nc__drop"></img>}
          </div>
        </div>
      )}
    </NavLink>
  );
};

export default NavComp;
