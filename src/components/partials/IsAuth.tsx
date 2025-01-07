import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/slices";

interface Props {
  children: ReactNode;
}

const IsAuth = ({ children }: Props) => {
  const auth = useSelector((state: RootState) => state.auth.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/");
    }

    // Clean up the listener when the component unmounts
    return () => {};
  }, [auth]);

  return children;
};

export default IsAuth;
