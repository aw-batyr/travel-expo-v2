import { useCallback, useEffect, useMemo, useRef, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { cn } from "@/lib/utils";

type CarouselProps<T> = {
  slides: T[];
  renderSlide: (item: T) => ReactNode;
  options?: EmblaOptionsType;
  autoPlayInterval?: number;
  marqueeSpeed?: number;
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
  marqueeSpeed,
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
        loop: marqueeSpeed != null ? true : false,
        containScroll: "trimSnaps",
        ...options,
      }),
      [options, marqueeSpeed]
    )
  );
  const timerRef = useRef<number | null>(null);
  const marqueeRef = useRef<number | null>(null);
  const useAutoplay = Boolean(autoPlayInterval) && marqueeSpeed == null;

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const stopMarquee = useCallback(() => {
    if (marqueeRef.current) {
      cancelAnimationFrame(marqueeRef.current);
      marqueeRef.current = null;
    }
  }, []);

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

    stopAutoplay();
    tick();
  }, [autoPlayInterval, emblaApi, stopAutoplay]);

  const startMarquee = useCallback(() => {
    if (!emblaApi || marqueeSpeed == null) return;
    if (typeof window === "undefined") return;

    stopMarquee();
    let lastTime = window.performance.now();

    const tick = (time: number) => {
      const deltaSec = (time - lastTime) / 1000;
      lastTime = time;
      emblaApi.scrollBy(marqueeSpeed * deltaSec);
      marqueeRef.current = window.requestAnimationFrame(tick);
    };

    marqueeRef.current = window.requestAnimationFrame(tick);
  }, [emblaApi, marqueeSpeed, stopMarquee]);

  useEffect(() => {
    if (!useAutoplay) return;
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay, useAutoplay]);

  useEffect(() => {
    if (marqueeSpeed == null) return;
    startMarquee();
    return () => {
      stopMarquee();
    };
  }, [marqueeSpeed, startMarquee, stopMarquee]);

  const handleMouseEnter = () => {
    stopAutoplay();
    stopMarquee();
  };

  const handleMouseLeave = () => {
    if (useAutoplay) {
      startAutoplay();
    }
    if (marqueeSpeed != null) {
      startMarquee();
    }
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
