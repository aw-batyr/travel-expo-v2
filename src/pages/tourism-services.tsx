import { PageContainer } from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useTranslation } from "react-i18next";

export default function TourismServices() {
  useScrollTop();
  const { t } = useTranslation();

  return (
    <PageContainer className="page-padding">
      <div className="mx-auto max-w-[920px] text-on_surface">
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-on_surface_v">
          <p>{t("tourismServices.intro1")}</p>
          <p>{t("tourismServices.intro2")}</p>
        </div>

        <div className="mt-6">
          <img
            src="/example.jpeg"
            alt={t("tourismServices.imageAlt1")}
            className="w-full h-auto rounded-sm object-cover"
          />
        </div>

        <p className="mt-4 text-sm md:text-base leading-relaxed text-on_surface_v">
          {t("tourismServices.hotelYyldyz")}
        </p>

        <div className="mt-6">
          <img
            src="/example-2.jpeg"
            alt={t("tourismServices.imageAlt2")}
            className="w-full h-auto rounded-sm object-cover"
          />
        </div>

        <div className="mt-6 space-y-2 text-sm md:text-base text-on_surface_v">
          <p>
            {t("tourismServices.siteLabel")}{" "}
            <span className="font-medium">www.yyldyzshotel.gov.tm</span>
          </p>
          <p>{t("tourismServices.recommendation")}</p>
          <p>{t("tourismServices.contactNote")}</p>
        </div>
      </div>
    </PageContainer>
  );
}
