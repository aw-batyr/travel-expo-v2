import { useEffect } from "react";

export const useScrollLock = (state: boolean) => {
  useEffect(() => {
    if (state) document.querySelector("body")?.classList.add("overflow-hidden");
    else document.querySelector("body")?.classList.remove("overflow-hidden");
  }, [state]);
};
