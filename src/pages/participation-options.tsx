import { PageContainer } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useTranslation } from "react-i18next";

const exampleImage = "/about-place.jpg";

const ArrowIcon = () => (
  <svg
    width="14"
    height="20"
    viewBox="0 0 14 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7 1V15M7 15L2 10M7 15L12 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ParticipationOptions() {
  useScrollTop();
  const { t } = useTranslation();
  const exampleLabel = t("participationOptions.example");

  return (
    <PageContainer className="page-padding">
      <div className="mx-auto max-w-[900px] text-on_surface">
        <p className="mb-10 text-3xl font-medium">
          {t("participationOptions.title")}
        </p>

        <Button className="mb-2 bg-primary md:text-base w-full">
          1. {t("participationOptions.exhibitionSpace")}
        </Button>

        <Button
          variant={"outline"}
          className="w-full mb-10 border border-primary py-1 text-center text-base text-primary md:text-base"
        >
          {t("participationOptions.spaceOnly")}
        </Button>

        <p className="mb-5 text-center text-lg">{exampleLabel}</p>

        <div className="mx-auto h-[180px] w-full max-w-[754px] md:h-[377px]">
          <img
            src={exampleImage}
            alt={exampleLabel}
            className="size-full rounded-sm object-cover"
          />
        </div>

        <div className="mt-5 text-center text-base leading-relaxed">
          <p>{t("participationOptions.spaceOnlyDescription")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="w-full flex flex-col items-center gap-2 text-primary">
            <ArrowIcon />
            <div className="w-full border border-primary py-1 text-center text-base text-primary md:text-base">
              {t("participationOptions.standardBooth")}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 text-primary">
            <ArrowIcon />
            <div className="w-full border border-primary py-1 text-center text-base text-primary md:text-base">
              {t("participationOptions.customBooth")}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="mb-5 text-base">{exampleLabel}:</p>
            <img
              src={"/example.jpeg"}
              alt={exampleLabel}
              className="h-[160px] w-full rounded-sm object-cover md:h-[190px]"
            />
            <p className="mt-2 text-base leading-relaxed">
              {t("participationOptions.boothExampleDescription")}
            </p>
          </div>
          <div>
            <p className="mb-5 text-base">{exampleLabel}:</p>
            <img
              src={"/example-2.jpeg"}
              alt={exampleLabel}
              className="h-[160px] w-full rounded-sm object-cover md:h-[190px]"
            />
            <p className="mt-2 text-base leading-relaxed">
              {t("participationOptions.boothExampleDescription")}
            </p>
          </div>
        </div>

        <p className="mt-6 text-2xl">
          {t("participationOptions.registrationFee")}
        </p>
        <p className="text-base mt-3">
          {t("participationOptions.pricingNote")}
        </p>
      </div>
    </PageContainer>
  );
}
