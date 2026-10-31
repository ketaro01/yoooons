import { useLayoutEffect, useRef } from "react";

/** Reveal once; content stays readable without observer or motion support. */
export function useScrollReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);
  const revealed = useRef(false);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || revealed.current) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const rect = element.getBoundingClientRect();
    // Never hide content already in view (including restored scroll positions).
    if (
      motion.matches ||
      !("IntersectionObserver" in window) ||
      (rect.top < window.innerHeight && rect.bottom > 0)
    ) {
      revealed.current = true;
      return;
    }

    const show = (instant = false) => {
      revealed.current = true;
      element.dataset.reveal = instant ? "instant" : "visible";
      observer.disconnect();
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) show();
      },
      { threshold: 0.05, rootMargin: "0px 0px -24px 0px" },
    );
    const onFocus = () => show(true);
    const onMotionChange = () => {
      if (motion.matches) show(true);
    };

    element.style.setProperty("--reveal-delay", `${delay}ms`);
    element.dataset.reveal = "pending";
    observer.observe(element);
    element.addEventListener("focusin", onFocus);
    motion.addEventListener("change", onMotionChange);

    return () => {
      observer.disconnect();
      element.removeEventListener("focusin", onFocus);
      motion.removeEventListener("change", onMotionChange);
      delete element.dataset.reveal;
      element.style.removeProperty("--reveal-delay");
    };
  }, [delay]);

  return ref;
}
