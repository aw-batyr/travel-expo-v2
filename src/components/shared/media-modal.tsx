import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollLock } from "@/hooks/use-scroll-lock";

export type MediaModalItem = {
  type: "photo" | "video";
  src: string;
  alt?: string;
  poster?: string;
};

type MediaModalProps = {
  isOpen: boolean;
  items: MediaModalItem[];
  activeIndex: number;
  onIndexChange?: (index: number) => void;
  onClose: () => void;
  className?: string;
};

export function MediaModal({
  isOpen,
  items,
  activeIndex,
  onIndexChange,
  onClose,
  className,
}: MediaModalProps) {
  useScrollLock(isOpen);
  const [internalIndex, setInternalIndex] = useState(activeIndex);
  const currentIndex =
    typeof onIndexChange === "function" ? activeIndex : internalIndex;
  const activeItem = items[currentIndex];

  useEffect(() => {
    if (isOpen) {
      setInternalIndex(activeIndex);
    }
  }, [activeIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        setIndex(currentIndex - 1);
      }
      if (event.key === "ArrowRight") {
        setIndex(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, isOpen, onClose]);

  const totalItems = items.length;
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < totalItems - 1;

  const setIndex = (index: number) => {
    if (index < 0 || index >= totalItems) return;
    if (onIndexChange) {
      onIndexChange(index);
      return;
    }
    setInternalIndex(index);
  };

  const display = useMemo(() => {
    if (!activeItem) return null;
    if (activeItem.type === "video" && activeItem.src) {
      return (
        <video
          src={activeItem.src}
          poster={activeItem.poster}
          controls
          className="max-h-[80vh] max-w-[90vw] object-contain"
        />
      );
    }
    return (
      <img
        src={activeItem.poster ?? activeItem.src}
        alt={activeItem.alt ?? "media"}
        className="max-h-[80vh] max-w-[90vw] object-contain"
      />
    );
  }, [activeItem]);

  if (!isOpen || totalItems === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={cn(
        "fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-6 py-10",
        className
      )}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 text-white p-2 hover:scale-110 transition-transform"
        aria-label="Close"
      >
        <X className="h-8 w-8" />
      </button>

      <button
        type="button"
        onClick={() => setIndex(currentIndex - 1)}
        className={cn(
          "absolute left-6 md:left-10 text-white p-2 transition-transform hover:scale-110",
          !canPrev && "opacity-30 pointer-events-none"
        )}
        aria-label="Previous"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>

      <button
        type="button"
        onClick={() => setIndex(currentIndex + 1)}
        className={cn(
          "absolute right-6 md:right-10 text-white p-2 transition-transform hover:scale-110",
          !canNext && "opacity-30 pointer-events-none"
        )}
        aria-label="Next"
      >
        <ChevronRight className="h-10 w-10" />
      </button>

      {display}
    </div>
  );
}
