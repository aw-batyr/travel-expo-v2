import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PageContainer, SectionShell } from "@/components/shared";

const photoUrl = "/gallery.jfif";

type GalleryImage = {
  id: string;
  alt: string;
};

export function GallerySection() {
  const { t } = useTranslation();
  const images = useMemo(
    () =>
      (t("gallerySection.images", { returnObjects: true }) as GalleryImage[]) ??
      [],
    [t]
  );

  return (
    <SectionShell
      background="base"
      ariaLabel={t("sections.gallery")}
      className="pt-14"
    >
      <PageContainer className="flex flex-col items-center gap-10">
        <div className="space-y-2 text-center">
          <p className="text-[23px] font-medium uppercase tracking-[0.02em] text-[#1c1c24] leading-[46px]">
            {t("gallerySection.date")}
          </p>
          <p className="text-[13.8px] leading-[24px] text-[#333333]">
            {t("gallerySection.venue")}
          </p>
        </div>

        <div className="flex w-full max-w-[1224px] flex-wrap justify-center gap-6 md:gap-6 lg:flex-nowrap">
          {images.map(({ id, alt }) => (
            <div
              key={id}
              className="relative md:size-[392px] size-[335px] overflow-hidden"
            >
              <img
                src={photoUrl}
                alt={alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </PageContainer>
    </SectionShell>
  );
}
