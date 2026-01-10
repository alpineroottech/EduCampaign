import { useCallback } from "react";

export function useScrollToOffset(offset = 80){
  return useCallback((element: HTMLElement | null) => {
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, [offset]);
}