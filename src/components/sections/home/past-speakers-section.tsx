import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import { PageContainer } from "@/components/shared/page-container";
import { SectionShell } from "@/components/shared/section-shell";

type SpeakerCard = {
  id: string;
  name: string;
  company: string;
  roleLine1: string;
  roleLine2: string;
};

const speakerImageUrl = "/team.jfif";

export function PastSpeakersSection() {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: false,
  });

  const speakers = useMemo(
    () =>
      (t("pastSpeakers.items", { returnObjects: true }) as SpeakerCard[]) ?? [],
    [t]
  );

  return (
    <SectionShell
      background="primary"
      ariaLabel={t("sections.pastSpeakers")}
      className="py-16"
    >
      <PageContainer className="flex flex-col items-center gap-10">
        <h2 className="text-center text-[24px] font-medium uppercase tracking-wide text-black">
          {t("sections.pastSpeakers")}
        </h2>

        <div className="w-full max-w-[1224px]">
          <div
            className="overflow-hidden"
            ref={emblaRef}
            aria-label={t("pastSpeakers.aria")}
            role="region"
          >
            <div className="flex gap-5">
              {speakers.map(({ id, name, company, roleLine1, roleLine2 }) => (
                <article
                  key={id}
                  className="md:h-[401px] md:flex-[0_0_221px] flex-[0_0_335px] shrink-0 overflow-hidden border border-[#cccccc] bg-white"
                >
                  <div className="md:h-[222px] h-[335px] w-full overflow-hidden">
                    <img
                      src={speakerImageUrl}
                      alt={t("pastSpeakers.cardAlt", { name })}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col gap-5 p-5">
                    <div className="text-[18px] font-medium uppercase leading-[19px] text-black">
                      {name}
                    </div>
                    <div className="space-y-3">
                      <div className="text-[18px] font-medium uppercase leading-[19px] text-black">
                        {company}
                      </div>
                      <div className="text-[14px] leading-[24px] text-[#333333]">
                        <p className="mb-0 leading-[24px]">{roleLine1}</p>
                        <p className="leading-[24px]">{roleLine2}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionShell>
  );
}
