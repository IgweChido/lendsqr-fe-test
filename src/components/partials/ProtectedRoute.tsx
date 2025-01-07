import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/slices";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const ProtectedRoute = ({ children }: Props) => {
  const auth = useSelector((state: RootState) => state.auth.data);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/");
    } else {
      navigate("/login");
    }

    // Clean up the listener when the component unmounts
    return () => {};
  }, [auth]);

  return children;
};

export default ProtectedRoute;
