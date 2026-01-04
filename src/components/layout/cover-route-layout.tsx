import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";
import { CoverLayout } from "./cover-layout";

export function CoverRouteLayout() {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const titleMap: Record<string, string> = {
    "/about": "nav.about",
    "/media": "nav.media",
    "/participation-options": "nav.participation-options",
    "/partner-opportunities": "nav.partners-opportunities",
    "/tourism-services": "nav.tourism-services",
  };
  const titleKey = titleMap[pathname];
  const title = titleKey ? t(titleKey) : "";

  return (
    <>
      <CoverLayout title={title} />
      <div className="page-p">
        <Outlet />
      </div>
    </>
  );
}
