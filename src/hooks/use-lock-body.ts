import { useLayoutEffect } from "react";

export function useLockBody(condition: boolean): void {
  useLayoutEffect(() => {
    if (condition) {
      const originalStyle: string = window.getComputedStyle(
        document.body
      ).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [condition]);
}
