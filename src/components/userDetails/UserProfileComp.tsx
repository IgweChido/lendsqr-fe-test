import React, { useState } from "react";
import "./userDetails.scss";

// images
import userP from "../../assets/icons/userP.svg";
import aStar from "../../assets/icons/aStar.svg";
import nStar from "../../assets/icons/nStar.svg";
import { UserProfile } from "../../types/profile";

interface Props {
  data: UserProfile | null;
}

const UserProfileComp = ({ data }: Props) => {
  const [nav, setNav] = useState<string>("general");
  // console.log("nav", nav);
  return (
    <div className="userp__comp">
      {/* top */}
      <div className="userp__top">
        <div className="userp__top__left">
          <img src={userP} alt="" className="" />
          <div className="utl">
            <p className="utl__name">{data?.personal_information.full_name}</p>
            <p className="utl__code">{data?.personal_information.bvn}</p>
          </div>
        </div>
        <div className="userp__top__middle">
          <p className="utm__p">User’s Tier</p>
          <div className="utm__stars">
            <img src={aStar} alt="" />
            <img src={nStar} alt="" />
            <img src={nStar} alt="" />
          </div>
        </div>
        <div className="userp__top__right">
          <p className="utr__p">
            ₦{data?.education_and_employment.loan_repayment}
          </p>
          <p className="utr__num">
            {data?.bank_information.account_number}/
            {data?.bank_information.bank_name}
          </p>
        </div>
      </div>
      {/* bottom */}
      <div className="user__bottom">
        {[
          { label: "General Details", key: "general" },
          { label: "Documents", key: "documents" },
          { label: "Bank Details", key: "bank" },
          { label: "Loans", key: "loans" },
          { label: "Savings", key: "savings" },
          { label: "App and System", key: "app" },
        ].map((data) => (
          <BottomNav
            label={data.label}
            navs={nav}
            keys={data.key}
            setNav={setNav}
          />
        ))}
      </div>
    </div>
  );
};

export default UserProfileComp;

interface BottomNav {
  label: string;
  navs: string;
  keys: string;
  setNav: (val: string) => void;
}

const BottomNav = ({ label, navs, keys, setNav }: BottomNav) => {
  // console.log("key", keys);
  // console.log("nav", navs);
  return (
    <div
      className={
        navs == keys ? `user__bottom__nav--active` : `user__bottom__nav`
      }
      onClick={() => {
        setNav(keys);
      }}
    >
      <p className="">{label}</p>
    </div>
  );
};
