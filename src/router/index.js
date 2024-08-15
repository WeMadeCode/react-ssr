import React from "react";
import Home from "../pages/home.jsx";
import About from "../pages/about.jsx";
import Person from "../pages/person.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/person",
    element: <Person />,
  },
];

export default routes;
