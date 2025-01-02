import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const SiteWrapper: React.FC<Props> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default SiteWrapper;
