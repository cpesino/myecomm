import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PHome } from "./pages";
import { AppRoutes } from "./common";

export const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <PHome />,
    children: [],
  },
]);

export const AppRoute: React.FC = () => {
  return <RouterProvider router={router} />;
};
