import { memo } from "react";
import { useTranslation } from "react-i18next";
import { PageContainer, SectionShell } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = memo(function HeroSection() {
  const { t } = useTranslation();

  return (
    <>
      <SectionShell
        background="hero"
        ariaLabel={t("hero.ariaLabel")}
        className="relative z-2 overflow-hidden py-0 before:absolute before:inset-0 before:z-2 before:bg-black/70 before:pointer-events-none before:content-[''] hidden md:block"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover z-1"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          // style={{ transform: "translateZ(0)" }}
          src="https://travel.turkmenexpo.com/app/storage/app/media/video/IMG_9811.mp4"
        />
        <PageContainer className="relative z-10 flex min-h-[calc(100vh-var(--site-header-height,106px))] flex-col items-center justify-center gap-12 px-6 pb-20 text-center">
          <div className="flex flex-col items-center gap-10">
            <div className="space-y-4">
              <h1 className="text-[40px] font-medium uppercase leading-[1.05] tracking-[0.02em] text-white sm:text-[52px] md:text-[64px] lg:text-[72px]">
                <span className="text-white">
                  {t("hero.titleLine1.normal")}
                </span>
                <span className="text-[var(--color-primary)]">
                  {t("hero.titleLine1.accent")}
                </span>
                <br />
                <span className="text-[var(--color-primary)]">
                  {t("hero.titleLine2.accent")}
                </span>
                <span className="text-white">
                  {t("hero.titleLine2.normal")}
                </span>
              </h1>
              <p className="text-lg font-medium uppercase tracking-[0.02em] text-white sm:text-xl md:text-[23px]">
                {t("hero.subtitle")}
              </p>
            </div>

            <Link
              to="https://travel.turkmenexpo.com/stand-form"
              target="_blank"
            >
              <Button
                className="rounded-[3px] bg-[var(--color-secondary)] px-[18px] py-[13px] text-[14px] font-semibold uppercase tracking-[0.02em] text-white hover:bg-[#d73a1f]"
                aria-label={t("hero.ctaAria")}
              >
                {t("hero.cta")}
              </Button>
            </Link>
          </div>

          <p className="max-w-[638px] text-[14px] leading-[24px] text-white/80">
            {t("hero.description")}
          </p>
        </PageContainer>
      </SectionShell>

      {/* MOBILE */}

      <SectionShell
        background="hero"
        ariaLabel={t("hero.ariaLabel")}
        className="relative z-1 overflow-hidden py-0 before:absolute before:inset-0 before:z-2 before:bg-black/70 before:pointer-events-none before:content-[''] md:hidden"
      >
        <video
          className="absolute size-full w-full object-cover z-1"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          style={{ transform: "translateZ(0)" }}
          src="https://travel.turkmenexpo.com/app/storage/app/media/video/IMG_9811.mp4"
        />

        <PageContainer className="relative z-10 flex min-h-[calc(100vh-var(--site-header-height,72px))] flex-col px-5 text-center">
          <div className="flex pt-16 pb-10 flex-col items-center justify-center gap-5">
            <div className="space-y-5">
              <h1 className="text-[32px] font-semibold uppercase leading-[1.2] tracking-[0.05em] text-white">
                <span className="text-white">
                  {t("hero.titleLine1.normal")}
                </span>{" "}
                <span className="text-[var(--color-primary)]">
                  {t("hero.titleLine1.accent")}
                </span>
                <br />
                <span className="text-[var(--color-primary)]">
                  {t("hero.titleLine2.accent")}
                </span>{" "}
                <span className="text-white">
                  {t("hero.titleLine2.normal")}
                </span>
              </h1>
              <p className="text-base font-medium uppercase tracking-[0.05em] text-white">
                {t("hero.subtitle")}
              </p>
            </div>

            <Link
              to="https://travel.turkmenexpo.com/stand-form"
              target="_blank"
            >
              <Button
                className="w-full max-w-[180px] rounded-[4px] bg-[var(--color-secondary)] px-6 py-3 text-sm font-normal uppercase tracking-[0.04em] text-white hover:bg-[#d73a1f]"
                aria-label={t("hero.ctaAria")}
              >
                {t("hero.cta")}
              </Button>
            </Link>
          </div>

          <p className="text-sm leading-6 relative text-white/80">
            {t("hero.description")}
          </p>
        </PageContainer>
      </SectionShell>
    </>
  );
});
