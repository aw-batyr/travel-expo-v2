import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Carousel, PageContainer, SectionShell } from "@/components/shared";
import { PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type StatItem = {
  id: string;
  value: string;
  label: string;
};

const localLogos = [
  { id: "partner-1", src: "/partners/1.png", alt: "Partner logo 1" },
  { id: "partner-2", src: "/partners/2.png", alt: "Partner logo 2" },
  { id: "partner-3", src: "/partners/3.png", alt: "Partner logo 3" },
];

const videoImageUrl = "/text.jfif";

export function PartnersSection() {
  const { t } = useTranslation();

  const logos = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => {
        const logo = localLogos[index % localLogos.length];
        return { ...logo, id: `${logo.id}-${index}` };
      }),
    []
  );

  const paragraphs = useMemo(
    () => (t("partners.paragraphs", { returnObjects: true }) as string[]) ?? [],
    [t]
  );

  const stats = useMemo(
    () => (t("partners.stats", { returnObjects: true }) as StatItem[]) ?? [],
    [t]
  );

  const statIcons: Record<string, string> = {
    area: "/panel.svg.svg",
    visitors: "/attendee.svg.svg",
    countries: "/workshop.svg.svg",
    topManagement: "/speaker.svg.svg",
  };

  return (
    <SectionShell
      background="base"
      ariaLabel={t("sections.partners")}
      className="pt-10 pb-14"
    >
      <PageContainer className="flex flex-col gap-12">
        <Carousel
          slides={logos}
          ariaLabel={t("partners.logosAria")}
          options={{ loop: true }}
          autoPlayInterval={2600}
          className="w-full"
          containerClassName="items-center gap-[120px] py-[10px]"
          renderSlide={({ id, alt, src }) => (
            <div
              key={id}
              className="flex h-[100px] w-[266px] shrink-0 items-center justify-center"
            >
              <img
                src={src}
                alt={alt}
                className="h-auto max-h-[80px] w-full object-contain"
                loading="lazy"
              />
            </div>
          )}
        />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div className="flex flex-1 flex-col gap-6">
            <h2 className="text-[23px] font-medium uppercase tracking-[0.02em] text-black">
              {t("partners.title")}
            </h2>
            <div className="space-y-4 text-[14px] leading-[24px] text-[#333333]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Button
              className="mt-2 inline-flex w-fit rounded-[3px] bg-[var(--color-secondary)] px-[18px] py-[13px] text-[14px] font-semibold uppercase tracking-[0.02em] text-white hover:bg-[#d73a1f]"
              aria-label={t("partners.cta")}
            >
              {t("partners.cta")}
            </Button>
          </div>

          <div className="flex flex-1 justify-center">
            <div className="relative w-full max-w-[555px]">
              <div className="overflow-hidden rounded-[4px]">
                <img
                  src={videoImageUrl}
                  alt={t("partners.videoAlt")}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 size-[80px] -translate-x-1/2 -translate-y-1/2">
                <PlayCircle className="size-20 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-10 border-t border-[#cccccc] pt-8">
          {stats.map(({ id, value, label }, i) => (
            <div
              key={id}
              className="flex flex-[0_0_20%] items-start justify-center gap-4"
            >
              <span
                className={cn(
                  "size-12 object-contain",
                  (i === 3 && "size-20") || (i === 2 && "size-20")
                )}
                style={{
                  maskImage: `url(${statIcons[id] ?? ""})`,
                  WebkitMaskImage: `url(${statIcons[id] ?? ""})`,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  backgroundColor: "#f5b12a",
                }}
                aria-hidden
              />
              <div className="flex flex-col gap-1 text-left">
                <span className="text-[26px] font-semibold leading-[30px] text-[#0a1e49]">
                  {value}
                </span>
                <span className="text-[16px] leading-[22px] text-[#0a1e49]">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </SectionShell>
  );
}
