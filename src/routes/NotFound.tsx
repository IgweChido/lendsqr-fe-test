import React from "react";
import "./routes.scss";
import BackButton from "../components/button/BackButton";

const NotFound = () => {
  return (
    <div className="not__found">
      <div className="nf__comp">
        <p>Not Found</p>
        {/* <p className="nf__p">
          The page you are looking for has not been developed or does not exist.
        </p> */}
        <BackButton label="Go Back" />
      </div>
    </div>
  );
};

export default NotFound;
