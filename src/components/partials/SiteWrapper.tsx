import React, { ReactNode } from "react";
import "./partials.scss";
interface Props {
  children: ReactNode;
}
const SiteWrapper: React.FC<Props> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default SiteWrapper;
