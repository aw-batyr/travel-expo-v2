import { useTranslation } from "react-i18next";
import { useNewsQuery } from "@/hooks/queries/news/use-news-query";
import {
  Loading,
  NewsCard,
  PageContainer,
  SectionShell,
} from "@/components/shared";

export function News() {
  const { t, i18n } = useTranslation("index");
  const lang = i18n.language || "ru";
  const { data, isLoading, error } = useNewsQuery(lang);

  const title = t("news");
  const newsItems = data?.data ?? [];
  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString("ru-RU");

  return (
    <SectionShell background="base" ariaLabel={title} className="pb-30 mt-32">
      <PageContainer className="flex flex-col gap-10">
        <h2 className="text-center text-2xl font-medium uppercase tracking-wide text-black">
          {title}
        </h2>

        {error && (
          <p className="text-center text-destructive text-sm">
            {error.message ?? "Не удалось загрузить новости"}
          </p>
        )}

        {isLoading && !newsItems.length ? (
          <Loading />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <NewsCard
                key={item.id ?? item.title}
                date={formatDate(item.published_at)}
                title={item.title}
                img={item.featured_images?.[0]?.path}
              />
            ))}
          </div>
        )}
      </PageContainer>
    </SectionShell>
  );
}
