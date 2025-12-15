import Logo from "@/assets/travel-expo-logo.png";
import { PageContainer } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { MobileMenu } from "./mobile-menu";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translatedNav = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        label: t(item.key),
      })),
    [t]
  );
  const mobileNavItems = useMemo(
    () => translatedNav.map(({ key, label }) => ({ key, label })),
    [translatedNav]
  );

  const menuLabel = t("header.menu", "Open menu");
  const closeMenuLabel = t("header.closeMenu", "Close menu");
  const switchLangLabel = t("header.switchLang", {
    lang: nextLang.toUpperCase(),
  });
  const logoAlt = t("header.logoAlt", "Travel Expo");
  const ctaLabel = t("header.cta");

  const handleLanguageToggle = () => {
    void i18n.changeLanguage(nextLang);
  };

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

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
        "absolute inset-x-0 top-0 z-50 w-full bg-transparent py-6",
        className
      )}
    >
      <PageContainer className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap md:gap-6">
        <div className="flex items-center gap-3">
          <img src={Logo} alt={logoAlt} className="md:h-[58px] h-10 w-auto" />
        </div>

        <nav
          aria-label={t("header.navLabel")}
          className="hidden flex-1 justify-center md:flex"
        >
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

        <div className="flex items-center gap-3">
          <Button
            type="button"
            aria-label={menuLabel}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={toggleMenu}
            className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-secondary)] p-0 shadow-md transition hover:bg-[#d73a1f] active:scale-95 md:hidden"
          >
            <span
              aria-hidden
              className="flex flex-col items-center justify-center gap-[6px]"
            >
              <span className="block h-[2px] w-[20px] rounded-full bg-white" />
              <span className="block h-[2px] w-[20px] rounded-full bg-white" />
              <span className="block h-[2px] w-[20px] rounded-full bg-white" />
            </span>
          </Button>
          <div className="hidden items-center gap-3 md:flex">
            <Button
              size="sm"
              onClick={handleLanguageToggle}
              aria-label={switchLangLabel}
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
        </div>
      </PageContainer>

      <MobileMenu
        open={isMenuOpen}
        onClose={closeMenu}
        items={mobileNavItems}
        logoSrc={Logo}
        logoAlt={logoAlt}
        ticketIconUrl={ticketIconUrl}
        langLabel={lang.toUpperCase()}
        switchLangLabel={switchLangLabel}
        onToggleLang={handleLanguageToggle}
        ctaLabel={ctaLabel}
        menuLabel={menuLabel}
        closeLabel={closeMenuLabel}
      />
    </header>
  );
});
