import { PageContainer } from "@/components/shared";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

type FooterProps = {
  className?: string;
};

const navItems = [
  { key: "nav.about" },
  { key: "nav.visit" },
  { key: "nav.exhibit" },
  { key: "nav.media" },
  { key: "nav.agenda" },
  { key: "nav.contact" },
];

const footerLogoUrl = "/footer-logo.svg";

export const Footer = memo(function Footer({ className }: FooterProps) {
  const { t } = useTranslation();

  const translatedNav = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        label: t(item.key),
      })),
    [t]
  );

  return (
    <footer
      className={cn(
        "w-full bg-[var(--color-primary)] py-8 border-t border-white/50",
        className
      )}
    >
      <PageContainer className="flex max-w-[1224px] flex-col items-center gap-6">
        <nav aria-label={t("header.navLabel")} className="w-full">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-[13px] font-medium uppercase tracking-wide text-white">
            {translatedNav.map(({ key, label, hasDropdown }) => (
              <li key={key} className="flex items-center gap-1">
                <a className="transition hover:text-white/90" href="#">
                  {label}
                </a>
                {hasDropdown && (
                  <ChevronDown
                    aria-hidden
                    className="h-3 w-3 text-white"
                    strokeWidth={2.5}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="h-[61px] w-[238px]">
          <img
            src={footerLogoUrl}
            alt="Travel Expo"
            className="h-full w-full object-contain"
          />
        </div>
      </PageContainer>
    </footer>
  );
});
