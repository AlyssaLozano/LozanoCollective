import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import VenturePage from "../pages/ventures/page";
import InnerEmpirePage from "../pages/ventures/InnerEmpire";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ventures/inner-empire-consulting",
    element: <InnerEmpirePage />,
  },
  {
    path: "/ventures/:id",
    element: <VenturePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
