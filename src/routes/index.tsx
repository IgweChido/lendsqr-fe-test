import React, { lazy, Suspense } from "react";
import "./routes.scss";
import { useRoutes } from "react-router-dom";
import Layout from "../components/partials/Layout";
import ProtectedLayout from "../components/partials/ProtectedLayout";
import Login from "../pages/login/Login";
import LoaderComp from "../components/partials/LoaderComp";
import IsAuth from "../components/partials/IsAuth";
import ProtectedRoute from "../components/partials/ProtectedRoute";

const Loadable = (Component: React.ComponentType) => (props: any) => {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <LoaderComp />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};
const Router = () => {
  return useRoutes([
    {
      path: "/users",
      element: <Layout />,
      children: [
        {
          element: <ProtectedLayout />,
          children: [
            {
              // path: "",
              element: (
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              ),
              index: true,
            },
            {
              path: "users/:id",
              element: (
                <ProtectedRoute>
                  <UserDetails />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "login",
          element: (
            <IsAuth>
              <Login />
            </IsAuth>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
};

export default Router;
const Dashboard = Loadable(lazy(() => import("../pages/dashboard/Dashboard")));
// const Login = Loadable(lazy(() => import("../pages/login/Login")));
const UserDetails = Loadable(
  lazy(() => import("../pages/userDetails/UserDetails"))
);
const NotFound = Loadable(lazy(() => import("./NotFound")));
