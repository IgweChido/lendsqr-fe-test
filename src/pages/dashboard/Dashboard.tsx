import React from "react";
import "./dashboard.scss";

// images
import one from "../../assets/icons/analyticsOne.svg";
import two from "../../assets/icons/analyticsTwo.svg";
import three from "../../assets/icons/analyticsThree.svg";
import four from "../../assets/icons/analyticsFour.svg";

// components
import AnalyticsComp from "../../components/dashboard/AnalyticsComp";
import TableComp from "../../components/tables/TableComp";
const Dashboard = () => {
  return (
    <div>
      {/* header */}
      <p className="dashboard__p">Users</p>
      {/* dashboard comp */}
      <div className="dashboard__analytics">
        <AnalyticsComp
          label="Users"
          image={one}
          stats="2,453"
          color="#DF18FF1A"
        />
        <AnalyticsComp
          label="Active Users"
          image={two}
          stats="2,453"
          color="#5718FF1A"
        />
        <AnalyticsComp
          label="Users with Loans"
          image={three}
          stats="2,453"
          color="#F55F441A"
        />
        <AnalyticsComp
          label="Users with Savings"
          image={four}
          stats="2,453"
          color="#FF33661A"
        />
      </div>

      {/* table */}
      <TableComp />
    </div>
  );
};

export default Dashboard;
