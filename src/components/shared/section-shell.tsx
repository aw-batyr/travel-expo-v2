import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import { cn } from "@/lib/utils";

type SectionShellProps<T extends ElementType = "section"> = PropsWithChildren<{
  as?: T;
  background?: "base" | "hero" | "primary" | "secondary" | "muted";
  className?: string;
  id?: string;
  ariaLabel?: string;
}>;

const backgroundStyles: Record<
  NonNullable<SectionShellProps["background"]>,
  string
> = {
  base: "bg-background text-foreground",
  hero: "bg-[var(--color-hero)] text-white",
  primary: "bg-[var(--color-primary)] text-foreground",
  secondary: "bg-[var(--color-secondary)] text-white",
  muted: "bg-[var(--color-surface)] text-foreground",
};

export function SectionShell<T extends ElementType = "section">({
  as,
  background = "base",
  className,
  children,
  ariaLabel,
  ...props
}: SectionShellProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof SectionShellProps>) {
  const Tag = as ?? "section";

  return (
    <Tag
      aria-label={ariaLabel}
      className={cn("py-16 sm:py-20", backgroundStyles[background], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
