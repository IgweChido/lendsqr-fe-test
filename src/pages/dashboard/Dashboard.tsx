import React from "react";
import "./dashboard.scss";

// images
import one from "../../assets/icons/analyticsOne.svg";

// components
import AnalyticsComp from "../../components/dashboard/AnalyticsComp";
const Dashboard = () => {
  return (
    <div>
      {/* dashboard comp */}
      <AnalyticsComp
        label="Users"
        image={one}
        stats="2,453"
        color="#DF18FF1A"
      />
    </div>
  );
};

export default Dashboard;
