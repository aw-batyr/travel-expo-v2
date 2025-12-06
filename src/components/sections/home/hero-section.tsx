import { memo } from "react";
import { useTranslation } from "react-i18next";
import { PageContainer, SectionShell } from "@/components/shared";
import { Button } from "@/components/ui/button";

export const HeroSection = memo(function HeroSection() {
  const { t } = useTranslation();

  return (
    <SectionShell
      background="hero"
      ariaLabel={t("hero.ariaLabel")}
      className="py-0"
    >
      <PageContainer className="flex min-h-[calc(100vh-106px)] flex-col items-center justify-center gap-12 px-6 pb-20 text-center">
        <div className="flex flex-col items-center gap-10">
          <div className="space-y-4">
            <h1 className="text-[40px] font-medium uppercase leading-[1.05] tracking-[0.02em] text-white sm:text-[52px] md:text-[64px] lg:text-[72px]">
              <span className="text-white">{t("hero.titleLine1.normal")}</span>
              <span className="text-[var(--color-primary)]">
                {t("hero.titleLine1.accent")}
              </span>
              <br />
              <span className="text-[var(--color-primary)]">
                {t("hero.titleLine2.accent")}
              </span>
              <span className="text-white">{t("hero.titleLine2.normal")}</span>
            </h1>
            <p className="text-lg font-medium uppercase tracking-[0.02em] text-white sm:text-xl md:text-[23px]">
              {t("hero.subtitle")}
            </p>
          </div>

          <Button
            className="rounded-[3px] bg-[var(--color-secondary)] px-[18px] py-[13px] text-[14px] font-semibold uppercase tracking-[0.02em] text-white hover:bg-[#d73a1f]"
            aria-label={t("hero.ctaAria")}
          >
            {t("hero.cta")}
          </Button>
        </div>

        <p className="max-w-[638px] text-[14px] leading-[24px] text-white/80">
          {t("hero.description")}
        </p>
      </PageContainer>
    </SectionShell>
  );
});
