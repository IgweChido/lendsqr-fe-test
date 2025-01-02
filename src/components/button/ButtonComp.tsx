import React from "react";

import "./button.scss";

interface Props {
  background: string;
  borderColor?: string;
  width: string;
  py: string;
  color: string;
  label: string;
  handleClick: () => void;
}
const ButtonComp = ({
  background,
  borderColor,
  width,
  py,
  color,
  label,
  handleClick,
}: Props) => {
  return (
    <button
      className="general__button"
      onClick={() => handleClick()}
      style={{
        width,
        background,
        border: `1px solid ${borderColor}`,
        paddingTop: py,
        paddingBottom: py,
        color,
      }}
    >
      {label}
    </button>
  );
};

export default ButtonComp;
