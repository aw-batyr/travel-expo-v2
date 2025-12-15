import { getNews } from "@/api/service";
import type { NewsResponse } from "@/api/types";
import { useQuery } from "@tanstack/react-query";

export const useNewsQuery = (lang: string) =>
  useQuery<NewsResponse, Error>({
    queryKey: ["news", lang],
    queryFn: () => getNews(lang),
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });
