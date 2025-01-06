import React, { lazy, Suspense } from "react";
import "./routes.scss";
import { useRoutes } from "react-router-dom";
import Layout from "../components/partials/Layout";
import ProtectedLayout from "../components/partials/ProtectedLayout";

const Loadable = (Component: React.ComponentType) => (props: any) => {
  return (
    <Suspense fallback={<div className="loading">...loading</div>}>
      <Component {...props} />
    </Suspense>
  );
};
const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <ProtectedLayout />,
          children: [
            {
              // path:"",
              element: <Dashboard />,
              index: true,
            },
            {
              path: "user-details",
              element: <UserDetails />,
            },
          ],
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
};

export default Router;
const Dashboard = Loadable(lazy(() => import("../pages/dashboard/Dashboard")));
const Login = Loadable(lazy(() => import("../pages/login/Login")));
const UserDetails = Loadable(
  lazy(() => import("../pages/userDetails/UserDetails"))
);
