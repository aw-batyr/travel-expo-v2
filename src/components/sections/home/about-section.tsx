import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PageContainer } from "@/components/shared/page-container";
import { SectionShell } from "@/components/shared/section-shell";

const partnerLogos = [
  "/partners/1.png",
  "/partners/2.png",
  "/partners/3.png",
  "/partners/3.png",
  "/partners/1.png",
  "/partners/2.png",
  "/partners/1.png",
  "/partners/2.png",
  "/partners/3.png",
];

export function AboutSection() {
  const { t } = useTranslation();
  const bullets = t("about.bullets", { returnObjects: true }) as string[];

  const logos = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => ({
        id: index,
        src: partnerLogos[index % partnerLogos.length],
      })),
    []
  );

  return (
    <SectionShell background="base" ariaLabel={t("about.heading")}>
      <PageContainer className="flex max-w-[1224px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-[120px] xl:gap-[183px]">
        <div className="flex max-w-[486px] flex-col gap-10">
          <header className="space-y-5">
            <h2 className="text-[24px] font-medium uppercase leading-[26.4px] text-foreground">
              {t("about.heading")}
            </h2>
            <p className="text-sm leading-6 text-[#333333]">
              {t("about.body")}
            </p>
          </header>

          <div className="space-y-5 text-sm leading-6 text-[#333333]">
            <h3 className="text-sm font-bold leading-6 text-foreground">
              {t("about.subheading")}
            </h3>
            <ul className="w-[240px] list-disc space-y-2 pl-5">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="grid w-full max-w-[555px] grid-cols-3">
            {logos.map(({ id, src }) => (
              <div
                key={id}
                className="flex items-center justify-center size-26"
              >
                <img
                  src={src}
                  alt={t("about.partnersAlt")}
                  className="size-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </SectionShell>
  );
}
