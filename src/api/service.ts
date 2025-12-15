import axios from "axios";
import type { NewsResponse } from "./types";

const axios_url = axios.create({
  baseURL: "https://travel.turkmenexpo.com/app/api/v1/",
});

export const getNews = async (lang?: string): Promise<NewsResponse> => {
  const res = await axios_url.get<NewsResponse>("news", {
    headers: lang ? { "Accept-Language": lang } : undefined,
  });

  return res.data;
};
