import React from "react";
import "./login.scss";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/slices";
import { AppDispatch } from "../../store/store";

// images
import pablo from "../../assets/images/login.svg";

// components
import LogoComp from "../../components/logo/LogoComp";
import ButtonComp from "../../components/button/ButtonComp";
import { setDataSuccess } from "../../store/slices/authReducer";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth.data);
  return (
    <div className="login">
      {/* left - image */}
      <div className="login__left">
        <div className="ll__div">
          {/* logo */}
          <div className="logo">
            <LogoComp />
          </div>

          {/* image */}
          <img src={pablo} alt="login-image" className="pablo__image" />
        </div>
      </div>
      {/* right - form */}
      <div className="login__right">
        <div className="form">
          <p className="welcome">Welcome!</p>
          <p className="text">Enter details to login.</p>
          {/* input  */}
          <div className="input">
            <Input size="large" placeholder="Email" />
            <Input.Password
              size="large"
              placeholder="Password"
              iconRender={(visible) => (visible ? "HIDE" : "SHOW")}
            />
          </div>
          <p className="forgot__password">FORGOT PASSWORD?</p>

          {/* button */}
          <ButtonComp
            label="LOG IN"
            width="100%"
            background="#39CDCC"
            borderColor="transparent"
            py="14px"
            color="white"
            handleClick={() => {
              dispatch(setDataSuccess(true));
              navigate("/users");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
