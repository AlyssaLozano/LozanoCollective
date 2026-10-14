import { Navigate, type RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import VenturePage from "../pages/ventures/page";
import InnerEmpirePage from "../pages/ventures/InnerEmpire";
import ImageCatalog from "../pages/ImageCatalog";
import LCCAPage from "../pages/lcca/page";
import PracticeExamsPage from "../pages/lcca/PracticeExams";
import LCPAAPage from "../pages/lcpaa/page";
import LCPAAPracticeExamsPage from "../pages/lcpaa/PracticeExams";
import AdminChooser from "../pages/tracks/AdminChooser";
import { TrackGame, TrackGamesHub } from "../pages/tracks/TrackPages";

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
    path: "/lcca/game",
    element: <Navigate to="/lcca/games/sprint" replace />,
  },
  {
    path: "/lcpaa",
    element: <LCPAAPage />,
  },
  {
    path: "/lcpaa/practice-exams",
    element: <LCPAAPracticeExamsPage />,
  },
  {
    path: "/admin",
    element: <AdminChooser />,
  },
  {
    path: "/:track/games",
    element: <TrackGamesHub />,
  },
  {
    path: "/:track/games/:game",
    element: <TrackGame />,
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
