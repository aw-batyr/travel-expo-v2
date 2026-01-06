import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Carousel, PageContainer, SectionShell } from "@/components/shared";

type AttendCard = {
  title: string;
  description: string | string[];
  button: {
    text: string;
    link?: string;
  };
};

export function AttendSection() {
  const photos = [
    "/cards/1.jpg",
    "/cards/2.jpg",
    "/cards/3.webp",
    "/cards/4.jpg",
    "/cards/5.jpg",
    "/cards/6.jpg",
  ];

  const { t } = useTranslation();
  const cards = useMemo(() => {
    const result = t("attend.cards", { returnObjects: true });
    return Array.isArray(result) ? (result as AttendCard[]) : [];
  }, [t]);

  return (
    <SectionShell
      background="base"
      ariaLabel={t("attendSection.aria")}
      className="py-14"
    >
      <PageContainer className="flex flex-col items-center gap-10">
        <h2 className="text-center text-2xl font-semibold leading-[24px] tracking-[0.02em] text-[#1c1c24]">
          {t("attend.title")}
        </h2>

        <Carousel
          slides={cards}
          className="w-full max-w-[1224px]"
          containerClassName="gap-5 sm:gap-6"
          options={{
            align: "start",
            dragFree: false,
            containScroll: "trimSnaps",
          }}
          renderSlide={({ title, description, button }, id) => (
            <article
              key={title}
              className="flex flex-[0_0_380px] shrink-0 flex-col overflow-hidden rounded-[3px] border border-[#e4e4e4] bg-white shadow-sm sm:w-[280px] md:w-[300px]"
            >
              <div className="h-[280px] overflow-hidden">
                <img
                  alt={title ?? ""}
                  src={photos[id]}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-lg font-medium leading-[22px] text-[#1c1c24]">
                  {title}
                </h3>
                <p className="text-[13px] leading-[20px] text-muted-foreground">
                  {description}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-auto h-[36px] min-w-20 rounded-[3px] w-fit px-4 text-xs font-semibold uppercase tracking-[0.04em]"
                >
                  {button.text}
                </Button>
              </div>
            </article>
          )}
        />
      </PageContainer>
    </SectionShell>
  );
}
