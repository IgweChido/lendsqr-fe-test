import React from "react";

import loader from "../../assets/images/loading-gif.gif";
const LoaderComp = () => {
  return (
    <div className="loader">
      <img src={loader} alt=""></img>
    </div>
  );
};

export default LoaderComp;
