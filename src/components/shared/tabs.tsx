import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TabItem = {
  id: string;
  label: string;
};

type TabsProps = {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
};

export function Tabs({ items, activeId, onChange, className }: TabsProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const updateIndicator = useCallback(() => {
    const list = listRef.current;
    const activeEl = tabRefs.current[activeId];
    if (!list || !activeEl) return;

    const left = activeEl.offsetLeft - list.scrollLeft;
    const width = activeEl.offsetWidth;

    setIndicatorStyle({ left, width, opacity: 1 });
  }, [activeId]);

  useEffect(() => {
    updateIndicator();
  }, [items, updateIndicator]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const handleScroll = () => updateIndicator();
    const handleResize = () => updateIndicator();

    list.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => updateIndicator());
      observer.observe(list);
    }

    return () => {
      list.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [updateIndicator]);

  return (
    <div
      className={cn("relative mx-auto", className)}
      style={{ width: "fit-content", maxWidth: "100%" }}
    >
      <div
        ref={listRef}
        className="flex items-center gap-8 overflow-x-auto md:overflow-visible"
        role="tablist"
      >
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[item.id] = el;
              }}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(item.id)}
              className={cn(
                "shrink-0 relative h-12 text-center px-2 py-2 text-sm md:text-base whitespace-nowrap transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        className="absolute bottom-0 h-[3px] rounded-t-[2px] bg-primary transition-all duration-200"
        style={indicatorStyle}
      />
    </div>
  );
}
