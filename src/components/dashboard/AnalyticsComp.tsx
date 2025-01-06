import React from "react";
import "./dashboard.scss";

interface Props {
  image: string;
  label: string;
  stats: string | null | undefined;
  color: string;
}

const AnalyticsComp = ({ image, label, stats, color }: Props) => {
  return (
    <div className="dash__comp">
      <div
        className="dash__img"
        style={{
          backgroundColor: color,
        }}
      >
        <img src={image} alt="" className="" />
      </div>

      <p className="dashp__small">{label}</p>
      <p className="dashp__large">{stats}</p>
    </div>
  );
};

export default AnalyticsComp;
