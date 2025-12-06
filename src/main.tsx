import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { router } from "./router";
import { i18n } from "./locale";

const routerGlobal = createBrowserRouter(router);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={routerGlobal} />
    </I18nextProvider>
  </StrictMode>
);
