import React from "react";
// images
import user from "../../assets/icons/user_nav.svg";

// components
import NavComp from "./NavComp";

interface NavLinks {
  label: string;
  link: string;
  icon: string;
  isDrop: boolean;
}

interface Props {
  header: string;
  navLinks: NavLinks[];
}

const NavCategory = ({ header, navLinks }: Props) => {
  return (
    <div className="nav__category">
      <p className="nc__header">{header}</p>
      <div className="nc__map">
        {navLinks.map((nav, index) => (
          <NavComp
            label={nav.label}
            link={nav.link}
            icon={nav.icon}
            isDrop={nav.isDrop}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default NavCategory;
