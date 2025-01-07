import React, { useEffect } from "react";
import "./dashboard.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/slices";
import { AppDispatch } from "../../store/store";

// images
import one from "../../assets/icons/analyticsOne.svg";
import two from "../../assets/icons/analyticsTwo.svg";
import three from "../../assets/icons/analyticsThree.svg";
import four from "../../assets/icons/analyticsFour.svg";

// components
import AnalyticsComp from "../../components/dashboard/AnalyticsComp";
import TableComp from "../../components/tables/TableComp";
import { fetchUsers } from "../../store/slices/usersReducer";
import { fetchDashboardAnalytics } from "../../store/slices/dashboardReducer";
import FilterComp from "../../components/tables/FilterComp";
import LoaderComp from "../../components/partials/LoaderComp";
const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.data);
  const auth = useSelector((state: RootState) => state.auth.data);
  const dashboard = useSelector((state: RootState) => state.dashboard.data);
  const loading_u = useSelector((state: RootState) => state.users.loading);
  const loading_d = useSelector((state: RootState) => state.dashboard.loading);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchDashboardAnalytics());
  }, [dispatch]);

  console.log("auth", auth);

  return (
    <div>
      {/* header */}
      <p className="dashboard__p">Users</p>
      {/* loader */}
      {loading_d || loading_u ? (
        <div className="loading">
          <LoaderComp />
        </div>
      ) : (
        <div>
          {/* dashboard comp */}
          <div className="dashboard__analytics">
            <AnalyticsComp
              label="Users"
              image={one}
              stats={dashboard?.total_users}
              color="#DF18FF1A"
            />
            <AnalyticsComp
              label="Active Users"
              image={two}
              stats={dashboard?.active_users}
              color="#5718FF1A"
            />
            <AnalyticsComp
              label="Users with Loans"
              image={three}
              stats={dashboard?.users_with_loans}
              color="#F55F441A"
            />
            <AnalyticsComp
              label="Users with Savings"
              image={four}
              stats={dashboard?.users_with_savings}
              color="#FF33661A"
            />
          </div>

          {/* table */}
          <TableComp data={users} />
          {/* <FilterComp /> */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
