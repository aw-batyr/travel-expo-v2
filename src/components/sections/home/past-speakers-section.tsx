import { useTranslation } from "react-i18next";
import { PageContainer } from "@/components/shared/page-container";
import { SectionShell } from "@/components/shared/section-shell";
import { Button } from "@/components/ui/button";

export function PastSpeakersSection() {
  const { t } = useTranslation();

  return (
    <SectionShell background="primary" className="py-10">
      <PageContainer className="flex flex-col items-center gap-8 max-w-[1320px]">
        <h2 className="text-center text-[24px] font-medium uppercase tracking-wide text-black">
          {t("enquire.title")}
        </h2>

        <div
          className="relative w-full max-w-[1224px] overflow-hidden"
          role="region"
          style={{
            backgroundImage: "url('/past-speakers-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative flex h-full min-h-[260px] items-center md:px-20 px-5 py-8 sm:min-h-[320px] md:min-h-[360px] lg:min-h-[414px]">
            <div className="max-w-[515px] rounded-[3px] bg-white/80 p-10 shadow backdrop-blur-sm">
              <p className="text-[22px] font-semibold leading-[30px] text-[#1c1c24] sm:text-[24px] sm:leading-[32px]">
                {t("enquire.title")}
              </p>

              <Button
                variant="secondary"
                size="sm"
                className="mt-14 h-11 rounded-[3px] px-6 text-xs font-semibold uppercase tracking-[0.05em]"
              >
                {t("enquire.button.text")}
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionShell>
  );
}
