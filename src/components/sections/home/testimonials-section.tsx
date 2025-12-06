import { useTranslation } from "react-i18next";
import { PageContainer } from "@/components/shared/page-container";
import { SectionShell } from "@/components/shared/section-shell";

export function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <SectionShell background="base" ariaLabel={t("sections.testimonials")}>
      <PageContainer className="flex flex-col gap-8">
        <h2 className="sr-only">{t("sections.testimonials")}</h2>
        <div className="min-h-[320px]" aria-hidden />
      </PageContainer>
    </SectionShell>
  );
}
