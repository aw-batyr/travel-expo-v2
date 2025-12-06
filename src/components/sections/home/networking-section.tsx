import { useTranslation } from "react-i18next";
import { PageContainer } from "@/components/shared/page-container";
import { SectionShell } from "@/components/shared/section-shell";

export function NetworkingSection() {
  const { t } = useTranslation();

  return (
    <SectionShell background="base" ariaLabel={t("sections.networking")}>
      <PageContainer className="flex flex-col gap-8">
        <h2 className="sr-only">{t("sections.networking")}</h2>
        <div className="min-h-[360px]" aria-hidden />
      </PageContainer>
    </SectionShell>
  );
}
