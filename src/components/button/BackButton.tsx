import React from "react";
import "./button.scss";

import back from "../../assets/icons/back.svg";
import { useNavigate } from "react-router-dom";
interface Props {
  label: string;
}

const BackButton = ({ label }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="back__button" onClick={() => navigate(-1)}>
      <img src={back} alt="" />
      <p>{label}</p>
    </div>
  );
};

export default BackButton;
