import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

interface Props {
  className?: string;
}

export const Loading = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "container w-full h-full py-20 flex items-center justify-center",
        className
      )}
    >
      <Loader2 className="animate-spin mx-auto text-secondary size-16" />
    </div>
  );
};
