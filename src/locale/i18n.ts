import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en/index.json";
import ru from "./ru/index.json";
import tm from "./tm/index.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en, contacts: en.contacts },
    ru: { translation: ru, contacts: ru.contacts },
    tm: { translation: tm, contacts: tm.contacts },
  },
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "ru", "tm"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
