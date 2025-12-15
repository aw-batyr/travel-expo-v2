import { useTranslation } from "react-i18next";
import { useNewsQuery } from "../../../hooks/queries/news/use-news-query";
import { Loading, NewsCard, PageContainer, SectionShell } from "../../shared";
import { Button } from "@/components/ui/button";

export const NewsSection = () => {
  const { t, i18n } = useTranslation("index");
  const lang = i18n.language || "ru";
  const { data, isLoading, error } = useNewsQuery(lang);

  const title = t("news");

  const latestNews = data?.data?.slice(0, 3) ?? [];
  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString("ru-RU");

  return (
    <SectionShell background="primary" ariaLabel={t("news")} className="pb-30">
      <PageContainer className="flex flex-col gap-10">
        <h2 className="text-center text-[24px] font-medium uppercase tracking-wide text-black">
          {title}
        </h2>

        {error && (
          <p className="text-center text-destructive text-sm">
            {error.message ?? "Не удалось загрузить новости"}
          </p>
        )}

        {isLoading && !latestNews.length ? (
          <Loading />
        ) : (
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-5">
            {latestNews.map((item) => (
              <NewsCard
                date={formatDate(item.published_at)}
                title={item.title}
                img={item.featured_images?.[0]?.path}
              />
            ))}
          </div>
        )}

        <Button className="w-full max-w-[180px] rounded-[4px] bg-[var(--color-secondary)] px-6 py-3 text-sm font-normal uppercase tracking-[0.04em] text-white hover:bg-[#d73a1f] mx-auto">
          See more
        </Button>
      </PageContainer>
    </SectionShell>
  );
};
