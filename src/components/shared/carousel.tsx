import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { cn } from "@/lib/utils";

type CarouselProps<T> = {
  slides: T[];
  renderSlide: (item: T) => ReactNode;
  options?: EmblaOptionsType;
  autoPlayInterval?: number;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
  role?: string;
};

export function Carousel<T>({
  slides,
  renderSlide,
  options,
  autoPlayInterval,
  className,
  containerClassName,
  ariaLabel,
  role = "region",
}: CarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    useMemo(
      () => ({
        align: "start",
        dragFree: true,
        loop: false,
        containScroll: "trimSnaps",
        ...options,
      }),
      [options]
    )
  );
  const timerRef = useRef<number | null>(null);

  const startAutoplay = useCallback(() => {
    if (!emblaApi || !autoPlayInterval) return;

    const tick = () => {
      timerRef.current = window.setTimeout(() => {
        if (!emblaApi) return;
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
        tick();
      }, autoPlayInterval);
    };

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    tick();
  }, [emblaApi, autoPlayInterval]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [startAutoplay]);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    startAutoplay();
  };

  return (
    <div
      ref={emblaRef}
      className={cn("overflow-hidden", className)}
      role={role}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn("flex", containerClassName)}>
        {slides.map((item) => renderSlide(item))}
      </div>
    </div>
  );
}
