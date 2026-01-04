import { useTranslation } from "react-i18next";
import { PageContainer } from "@/components/shared/page-container";
import { SectionShell } from "@/components/shared/section-shell";

export interface CardType {
  title: string;
  description: string[];
  button: {
    text: string;
    link?: string;
  };
}

export function WhatToExpectSection() {
  const { t } = useTranslation();

  const data = t("expect", { returnObjects: true }) as {
    title?: string;
    cards?: CardType[];
  };
  const cards = Array.isArray(data?.cards) ? data.cards : [];

  return (
    <SectionShell background="primary" className="py-16">
      <PageContainer className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {cards.map((item) => (
          <div key={item.title} className="space-y-6">
            <h3 className="text-[20px] font-semibold leading-[26px] text-black">
              {item.title}
            </h3>
            <ul className="space-y-3 text-[14px] leading-7 text-muted-foreground">
              {item.description.map((item) => (
                <li key={item} className="ms-5 list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </PageContainer>
    </SectionShell>
  );
}
