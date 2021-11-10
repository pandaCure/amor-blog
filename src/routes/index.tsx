import React from "react";
import App from "../App";
import Home from "../pages/home/Home";
const router = [
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
];
export default router;
