import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../components/partials/Layout";

const Loadable = (Component: React.ComponentType) => (props: any) => {
  return (
    <Suspense fallback={<div className="">...loading</div>}>
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
          element: <Home />,
          index: true,
        },
      ],
    },
  ]);
};

export default Router;
const Home = Loadable(lazy(() => import("../pages/Home")));
