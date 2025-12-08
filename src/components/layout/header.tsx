import Logo from "@/assets/travel-expo-logo.png";
import { PageContainer } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { memo, useLayoutEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type SiteHeaderProps = {
  className?: string;
};

const navItems = [
  { key: "nav.about", hasDropdown: true },
  { key: "nav.pastSpeakers" },
  { key: "nav.agenda" },
  { key: "nav.partners" },
  { key: "nav.news" },
  { key: "nav.contact" },
];

const ticketIconUrl = "/ticket.svg";
const HEADER_HEIGHT_CSS_VAR = "--site-header-height";

export const Header = memo(function SiteHeader({ className }: SiteHeaderProps) {
  const { t, i18n } = useTranslation();

  const lang = (i18n.resolvedLanguage || i18n.language || "en").toLowerCase();
  const nextLang = lang === "ru" ? "en" : "ru";

  const translatedNav = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        label: t(item.key),
      })),
    [t]
  );

  const handleLanguageToggle = () => {
    void i18n.changeLanguage(nextLang);
  };

  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = headerRef.current;
    if (!element || typeof document === "undefined") {
      return;
    }

    const updateHeight = () => {
      const height = Math.round(element.getBoundingClientRect().height);
      document.documentElement.style.setProperty(
        HEADER_HEIGHT_CSS_VAR,
        `${height}px`
      );
    };

    updateHeight();

    const handleResize = () => {
      updateHeight();
    };

    window.addEventListener("resize", handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => updateHeight());
      resizeObserver.observe(element);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "absolute inset-x-0 top-0 z-50 w-full bg-[var(--color-hero)] py-6",
        className
      )}
    >
      <PageContainer className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Travel Expo" className="h-[58px] w-auto" />
        </div>

        <nav aria-label={t("header.navLabel")} className="flex-1">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-[13px] font-medium uppercase tracking-wide text-white/80">
            {translatedNav.map(({ label, hasDropdown, key }) => (
              <li key={key} className="flex items-center gap-1">
                <a className="transition hover:text-white" href="#">
                  {label}
                </a>
                {hasDropdown && (
                  <ChevronDown
                    aria-hidden
                    className="h-3 w-3 text-white/80"
                    strokeWidth={2.5}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-wrap items-center justify-end gap-3">
          <Button
            size="sm"
            onClick={handleLanguageToggle}
            aria-label={t("header.switchLang", {
              lang: nextLang.toUpperCase(),
            })}
            className="rounded-[2px] bg-[var(--color-primary)] px-3 py-2 text-[13px] font-semibold uppercase tracking-wide text-white hover:bg-[#f3a320]"
          >
            {lang.toUpperCase()}
          </Button>
          <Button
            size="sm"
            className="rounded-[2px] bg-[var(--color-secondary)] px-3 py-2 text-[13px] font-semibold uppercase tracking-wide text-white hover:bg-[#d73a1f]"
          >
            <span className="flex items-center gap-2">
              <img
                src={ticketIconUrl}
                alt=""
                className="h-[14px] w-[14px]"
                aria-hidden
              />
              {t("header.cta")}
            </span>
          </Button>
        </div>
      </PageContainer>
    </header>
  );
});
