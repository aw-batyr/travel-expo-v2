import App from "./App";
import { Home } from "./pages/home";

export const router = [
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "",
      },
    ],
  },
];
