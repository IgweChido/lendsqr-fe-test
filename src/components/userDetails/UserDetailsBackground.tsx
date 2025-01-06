import React, { ReactNode } from "react";
import "./userDetails.scss";

interface Props {
  children: ReactNode;
  label: string;
  grid?: boolean;
  last?: boolean;
}

const UserDetailsBackground = ({ label, children, grid, last }: Props) => {
  return (
    <div className={last ? `userd__background--last` : `userd__background`}>
      <p className="ub__header">{label}</p>
      <div className={grid ? `ub__children--grid` : `ub__children`}>
        {children}
      </div>
    </div>
  );
};

export default UserDetailsBackground;
