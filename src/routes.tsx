import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Layout from "./components/Layout";

// Use lazy loading for better performance
const HomePage = lazy(() => import("./pages/HomePage"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />, // This will contain all sections
      },
    ],
  },
];
