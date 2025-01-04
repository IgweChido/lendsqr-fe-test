import React from "react";

import "./userDetails.scss";

interface Props {
  label: string;
  details: string;
}

const UserDetailsComp = ({ label, details }: Props) => {
  return (
    <div className="userd__comp">
      <p className="udc__label">{label}</p>
      <p className="udc__details">{details}</p>
    </div>
  );
};

export default UserDetailsComp;
