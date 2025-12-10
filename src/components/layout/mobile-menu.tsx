import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type MobileMenuItem = {
  key: string;
  label: string;
  href?: string;
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  items: MobileMenuItem[];
  logoSrc: string;
  logoAlt: string;
  ticketIconUrl: string;
  langLabel: string;
  switchLangLabel: string;
  onToggleLang: () => void;
  ctaLabel: string;
  menuLabel?: string;
  closeLabel?: string;
};

export function MobileMenu({
  open,
  onClose,
  items,
  logoSrc,
  logoAlt,
  ticketIconUrl,
  langLabel,
  switchLangLabel,
  onToggleLang,
  ctaLabel,
  menuLabel = "Open menu",
  closeLabel = "Close menu",
}: MobileMenuProps) {
  useEffect(() => {
    if (!open || typeof document === "undefined") {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const overlayClasses = cn(
    "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out",
    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  );

  const panelClasses = cn(
    "absolute right-0 top-0 flex h-full w-[85%] max-w-[360px] flex-col gap-8 bg-[var(--color-hero)] px-6 pb-10 pt-6 shadow-2xl transition-transform duration-300 ease-out will-change-transform",
    open ? "translate-x-0" : "translate-x-full"
  );

  const containerClasses = cn(
    "fixed inset-0 z-[60] overflow-hidden",
    open ? "pointer-events-auto" : "pointer-events-none"
  );

  return (
    <div
      className={containerClasses}
      aria-label={menuLabel}
      aria-hidden={!open}
    >
      <div aria-hidden className={overlayClasses} onClick={onClose} />

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label={menuLabel}
        className={panelClasses}
      >
        <div className="flex items-center justify-between gap-4">
          <img src={logoSrc} alt={logoAlt} className="h-10 w-auto" />
          <Button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="flex size-10 items-center justify-center rounded-md bg-white/10 p-0 text-white transition hover:bg-white/20"
          >
            <span
              aria-hidden
              className="relative flex flex-col top-2 items-center justify-center size-[18px]"
            >
              <span className="absolute inset-0 block h-[2px] w-full rotate-45 rounded-full bg-white" />
              <span className="absolute inset-0 block h-[2px] w-full -rotate-45 rounded-full bg-white" />
            </span>
          </Button>
        </div>

        <ul className="space-y-3 text-base font-semibold uppercase tracking-wide text-white">
          {items.map(({ key, label, href = "#" }) => (
            <li key={key}>
              <a
                className="block rounded-sm px-2 py-2 transition hover:bg-white/5 hover:text-white"
                href={href}
                onClick={onClose}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3">
          <Button
            size="sm"
            onClick={onToggleLang}
            aria-label={switchLangLabel}
            className="w-full rounded-[3px] bg-[var(--color-primary)] px-3 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#f3a320]"
          >
            {switchLangLabel || langLabel}
          </Button>
          <Button
            size="sm"
            className="w-full rounded-[3px] bg-[var(--color-secondary)] px-3 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#d73a1f]"
          >
            <span className="flex items-center justify-center gap-2">
              <img
                src={ticketIconUrl}
                alt=""
                className="h-[16px] w-[16px]"
                aria-hidden
              />
              {ctaLabel}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
