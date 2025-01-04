import React from "react";
import "./partials.scss";
import { Input, Space } from "antd";
import type { GetProps } from "antd";

// images
import bell from "../../assets/icons/bell.svg";
import profile from "../../assets/images/profile.svg";
import arrow from "../../assets/icons/triangle-arrow.svg";
// components
import LogoComp from "../logo/LogoComp";

const Header = () => {
  type SearchProps = GetProps<typeof Input.Search>;

  const { Search } = Input;

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="header">
      <div className="h__comp">
        {/* left */}
        <div className="hc__left">
          <div className="hcl__logo">
            <LogoComp />
          </div>
        </div>
        {/* right */}
        <div className="hc__right">
          {/* left */}
          <div className="hcr__left">
            <Search
              size="large"
              placeholder="Search for anything"
              onSearch={onSearch}
              enterButton
            />
          </div>
          {/* right */}
          <div className="hcr__right">
            <p className="hcrr__p">Docs</p>

            <img src={bell} alt="" className="hcrr__img"></img>
            <div className="hcrr__profile">
              <img src={profile} alt="" className="" />
              <div className="hcrrp__flex">
                <p>Adedeji</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
