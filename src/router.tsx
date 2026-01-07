import App from "./App";
import Contacts from "./pages/contacts";
import { Home } from "./pages/home";
import { News } from "./pages/news";
import About from "./pages/about";
import Media from "./pages/media";
import { CoverRouteLayout } from "./components/layout/cover-route-layout";
import ParticipationOptions from "./pages/participation-options";
import PartnerOpportunities from "./pages/partner-opportunities";
import TourismServices from "./pages/tourism-services";
import StandForm from "./pages/stand-form";

export const router = [
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "",
      },
      {
        element: <News />,
        path: "news",
      },
      {
        element: <CoverRouteLayout />,
        children: [
          {
            element: <About />,
            path: "about",
          },
          {
            element: <Media />,
            path: "media",
          },
          {
            element: <ParticipationOptions />,
            path: "participation-options",
          },
          {
            element: <PartnerOpportunities />,
            path: "partner-opportunities",
          },
          {
            element: <TourismServices />,
            path: "tourism-services",
          },
          {
            element: <StandForm />,
            path: "stand-form",
          },
        ],
      },
      {
        element: <Contacts />,
        path: "contact-us",
      },
    ],
  },
];
