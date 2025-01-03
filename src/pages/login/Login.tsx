import React from "react";
import "./login.scss";

// images
import pablo from "../../assets/images/login.svg";

// components
import LogoComp from "../../components/logo/LogoComp";
import ButtonComp from "../../components/button/ButtonComp";
import { Input } from "antd";
const Login = () => {
  return (
    <div className="login">
      {/* left - image */}
      <div className="login__left">
        {/* logo */}
        <div className="logo">
          <LogoComp />
        </div>

        {/* image */}
        <img src={pablo} alt="login-image" className="pablo__image" />
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
            handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
