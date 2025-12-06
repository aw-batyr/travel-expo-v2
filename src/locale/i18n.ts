import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en/index.json";
import ru from "./ru/index.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "ru"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
