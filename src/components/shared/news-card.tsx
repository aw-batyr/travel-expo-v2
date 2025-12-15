import clsx from "clsx";
import { ArrowRight } from "lucide-react";

interface Props {
  className?: string;
  date?: string;
  title: string;
  img?: string;
}

export const NewsCard = ({ className, date, title, img }: Props) => {
  const formattedDate = date ?? "";
  const image = img ?? "";

  return (
    <article
      className={clsx("bg-secondary flex flex-col justify-between", className)}
    >
      <div className="flex flex-col gap-3 md:py-10 pt-10 pb-5 md:px-5 px-3 text-white">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium">{formattedDate}</span>
          <ArrowRight className="size-4" />
        </div>
        <hr />
        <p className="p text-ellipsis line-clamp-3">{title}</p>
      </div>

      {image ? (
        <img
          src={image}
          alt={title}
          className="h-[280px] w-full object-cover"
        />
      ) : (
        <div className="h-[280px] w-full bg-white/10" />
      )}
    </article>
  );
};
