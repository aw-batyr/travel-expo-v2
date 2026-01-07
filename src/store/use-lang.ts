import { create } from "zustand";
import { persist } from "zustand/middleware";
import i18n from "../locale/i18n";

type Language = "en" | "ru" | "tm";

interface LanguageOption {
  value: Language;
  label: string;
}

interface LanguageState {
  locale: LanguageOption;
  setLocale: (locale: LanguageOption) => void;
}

const languages: Record<Language, LanguageOption> = {
  en: { value: "en", label: "English" },
  ru: { value: "ru", label: "Русский" },
  tm: { value: "tm", label: "Türkmençe" },
};

export const useLang = create<LanguageState>()(
  persist(
    (set) => ({
      locale: languages.en,
      setLocale: (locale) => {
        set({ locale });
        void i18n.changeLanguage(locale.value);
      },
    }),
    {
      name: "language-storage",
      onRehydrateStorage: () => (state) => {
        if (state?.locale) {
          void i18n.changeLanguage(state.locale.value);
        }
      },
    }
  )
);

export { languages };
export type { Language, LanguageOption };
