import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/users");

    // Clean up the listener when the component unmounts
    return () => {};
  }, []);
  return <div></div>;
};

export default Redirect;
