import React from "react";
import {
    BrowserRouterProps,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { PHome } from "./pages";

export const router: BrowserRouterProps = createBrowserRouter([
    {
        path: "/",
        element: <PHome />,
        children: [],
    },
]);

export const AppRoute: React.FC = () => {
    return <RouterProvider router={router} />;
};
