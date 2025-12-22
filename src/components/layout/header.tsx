import Logo from "@/assets/travel-expo-logo.svg";
import { PageContainer } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { ChevronDown, type LucideIcon } from "lucide-react";
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

type DropdownMenuKey = "visit" | "exhibit";

type NavItem = {
  key: string;
  dropdownId?: DropdownMenuKey;
};

type DropdownOption = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

const navItems: NavItem[] = [
  { key: "nav.about" },
  { key: "nav.visit", dropdownId: "visit" },
  { key: "nav.exhibit", dropdownId: "exhibit" },
  { key: "nav.media" },
  { key: "nav.agenda" },
  { key: "nav.contact" },
];

const ticketIconUrl = "/ticket.svg";
const HEADER_HEIGHT_CSS_VAR = "--site-header-height";

export const Header = memo(function SiteHeader({ className }: SiteHeaderProps) {
  const { t, i18n } = useTranslation();
  const dropdownMenus: Record<DropdownMenuKey, DropdownOption[]> = useMemo(
    () => ({
      visit: [
        { label: t("navDropdown.visit.why"), href: "#why-visit" },
        {
          label: t("navDropdown.visit.participants"),
          href: "#participants",
        },
        {
          label: t("navDropdown.visit.programme"),
          href: "/programme.pdf",
        },
        {
          label: t("navDropdown.visit.travelGuide"),
          href: "/travel-guide.pdf",
        },
      ],
      exhibit: [
        { label: t("navDropdown.exhibit.about"), href: "#about-exhibition" },
        { label: t("navDropdown.exhibit.media"), href: "#media" },
      ],
    }),
    [t]
  );

  const lang = (i18n.resolvedLanguage || i18n.language || "en").toLowerCase();
  const languageOptions = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "tm", label: "TM" },
  ];
  const languageOrder = languageOptions.map((item) => item.code);
  const currentIndex = Math.max(0, languageOrder.indexOf(lang));
  const nextLang = languageOrder[(currentIndex + 1) % languageOrder.length];
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

  const handleLanguageChange = (code: string) => {
    void i18n.changeLanguage(code);
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
          <ul className="flex flex-wrap items-center justify-center text-sm font-medium uppercase tracking-wide text-white/80">
            {translatedNav.map(({ label, dropdownId, key }) => {
              const dropdownList = dropdownId
                ? dropdownMenus[dropdownId]
                : undefined;
              const hasDropdown = Boolean(dropdownList?.length);

              return (
                <li key={key} className="group relative">
                  <a
                    className="inline-flex items-center gap-1 px-2.5 py-2 text-sm leading-none transition hover:bg-[var(--color-secondary)] hover:text-white focus-visible:bg-[var(--color-background)] focus-visible:text-white"
                    href="#"
                    aria-haspopup={hasDropdown ? "true" : undefined}
                    aria-expanded={hasDropdown ? "false" : undefined}
                  >
                    <span>{label}</span>
                    {hasDropdown && (
                      <ChevronDown
                        aria-hidden
                        className="h-3 w-3 text-white/80 transition duration-150 group-hover:text-white group-focus-within:text-white"
                        strokeWidth={2.5}
                      />
                    )}
                  </a>

                  {dropdownList && (
                    <div
                      role="menu"
                      aria-label={`${label} submenu`}
                      className="pointer-events-none absolute left-0 top-full z-20 w-[220px] bg-transparent opacity-0 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition duration-200 group-focus-within:opacity-100 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:pointer-events-auto pt-2"
                    >
                      <div className="overflow-hidden rounded-[2px] bg-[#F0EFEF] py-2">
                        <ul className="flex flex-col">
                          {dropdownList.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.label}>
                                <a
                                  href={item.href}
                                  role="menuitem"
                                  className="flex items-center justify-between gap-3 px-4 py-4 text-sm font-medium text-[#333333] transition hover:bg-[#26292E]/[8%] lowercase first-letter:uppercase! hover:text-black focus-visible:bg-[var(--color-background)] focus-visible:text-black"
                                >
                                  <span>{item.label}</span>
                                  {Icon && (
                                    <Icon
                                      className="h-4 w-4 text-[#1f1f1f]"
                                      aria-hidden
                                    />
                                  )}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
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
            <div className="group relative">
              <button
                type="button"
                aria-label={switchLangLabel}
                className="inline-flex items-center gap-1 rounded-[2px] bg-[var(--color-primary)] px-3 py-2 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#f3a320]"
              >
                <span>{lang.toUpperCase()}</span>
                <ChevronDown
                  aria-hidden
                  className="h-3 w-3 text-white/80 transition duration-150 group-hover:text-white"
                  strokeWidth={2.5}
                />
              </button>

              <div
                role="menu"
                aria-label={switchLangLabel}
                className="pointer-events-none absolute left-0 top-full z-20 w-[140px] bg-transparent opacity-0 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition duration-200 group-hover:opacity-100 group-hover:pointer-events-auto pt-2"
              >
                <div className="overflow-hidden rounded-[2px] bg-[#F0EFEF] py-2">
                  <ul className="flex flex-col">
                    {languageOptions
                      .filter((item) => item.code !== lang)
                      .map((item) => (
                        <li key={item.code}>
                          <button
                            type="button"
                            onClick={() => handleLanguageChange(item.code)}
                            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-[#333333] transition hover:bg-[#26292E]/[8%] hover:text-black"
                          >
                            <span>{item.label}</span>
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
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
