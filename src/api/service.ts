import axios from "axios";
import type { ContactsFormType, NewsResponse } from "./types";

const axios_url = axios.create({
  baseURL: "https://travel.turkmenexpo.com/app/api/v1/",
});

export const getNews = async (lang?: string): Promise<NewsResponse> => {
  const res = await axios_url.get<NewsResponse>("news", {
    headers: lang ? { "Accept-Language": lang } : undefined,
  });

  return res.data;
};

export const postContact = async (data: ContactsFormType): Promise<boolean> => {
  const res = await axios_url.post("contact_form", data);

  return res.status === 201;
};

export const postStand = async (
  data: StandFormType,
  lang: string
): Promise<boolean> => {
  const res = axios_url.post(`book_stand_form`, data, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return (await res).status === 201;
};
