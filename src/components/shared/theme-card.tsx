import { cn } from "@/lib/utils";
import { type FC } from "react";

interface Props {
  image: string;
  title: string;
  className?: string;
  iconClassName?: string;
}

export const ThemeCard: FC<Props> = ({
  className,
  image,
  title,
  iconClassName,
}) => {
  return (
    <div className={cn("relative isolate", className)}>
      <div className="bg-primary absolute inset-0 translate-x-2.5 translate-y-2.5 z-0" />
      <article className="bg-surface-container-low relative z-10 hover:bg-teritary_surface_container transition-all md:px-4 px-2 md:h-[224px] h-[124px]">
        <div className={cn("md:size-[84px] size-12", iconClassName)}>
          <img src={image} alt="theme icon" />
        </div>
        <h3 className="md:mt-6 mt-2 md:text-xl text-sm text-muted-foreground font-medium">
          {title}
        </h3>
      </article>
    </div>
  );
};
