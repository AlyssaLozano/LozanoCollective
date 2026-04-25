import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import VenturePage from "../pages/ventures/page";
import InnerEmpirePage from "../pages/ventures/InnerEmpire";
import ImageCatalog from "../pages/ImageCatalog";
import LCCAPage from "../pages/lcca/page";
import PracticeExamsPage from "../pages/lcca/PracticeExams";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <ImageCatalog />,
  },
  {
    path: "/lcca",
    element: <LCCAPage />,
  },
  {
    path: "/lcca/practice-exams",
    element: <PracticeExamsPage />,
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
