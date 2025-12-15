import { useMemo } from "react";
import { useNewsQuery } from "./use-news-query";

export const useNewsItem = (id: number | undefined, lang: string) => {
  const { data, isLoading, isFetching, error } = useNewsQuery(lang);

  const item = useMemo(() => {
    if (!data?.data || !id) return undefined;
    return data.data.find((news) => news.id === id);
  }, [data?.data, id]);

  return {
    news: item,
    pagination: data?.pagination,
    isLoading,
    isFetching,
    error,
  };
};
