import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PageContainer } from "@/components/shared/page-container";
import { SectionShell } from "@/components/shared/section-shell";

export function WhatToExpectSection() {
  const { t } = useTranslation();

  const focusAreas = useMemo(
    () => (t("expect.focusAreas", { returnObjects: true }) as string[]) ?? [],
    [t]
  );
  const topics = useMemo(
    () => (t("expect.topics", { returnObjects: true }) as string[]) ?? [],
    [t]
  );
  const attendees = useMemo(
    () => (t("expect.attendees", { returnObjects: true }) as string[]) ?? [],
    [t]
  );

  return (
    <SectionShell
      background="primary"
      ariaLabel={t("sections.whatToExpect")}
      className="py-16"
    >
      <PageContainer className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-xl flex-col gap-10">
          <h2 className="text-[24px] font-medium uppercase tracking-[0.02em] text-black">
            {t("expect.title")}
          </h2>

          <div className="flex flex-col gap-10 text-[14px] leading-8 text-[#333333]">
            <div className="space-y-3">
              <p className="text-[14px] font-bold leading-6 text-[#333333]">
                {t("expect.focusTitle")}
              </p>
              <ul className="space-y-2">
                {focusAreas.map((item) => (
                  <li key={item} className="ms-5 list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-[13px] font-bold leading-6 text-[#333333]">
                {t("expect.topicsTitle")}
              </p>
              <ul className="space-y-2">
                {topics.map((item) => (
                  <li key={item} className="ms-5 list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex max-w-lg flex-col gap-10">
          <h2 className="text-[24px] font-medium uppercase tracking-[0.02em] text-black">
            {t("expect.attendTitle")}
          </h2>

          <div className="flex flex-col gap-4 text-[14px] leading-8 text-[#333333]">
            <p className="text-[14px] leading-6 text-[#333333]">
              <span className="font-bold">{t("expect.attendLeadStrong")}</span>{" "}
              <span>{t("expect.attendLeadRest")}</span>
            </p>
            <ul className="space-y-2">
              {attendees.map((item) => (
                <li key={item} className="ms-5 list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>
    </SectionShell>
  );
}
