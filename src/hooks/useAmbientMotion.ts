import { useEffect, useRef } from "react";

/** Run decorative motion only while the artwork is visible and motion is allowed. */
export function useAmbientMotion<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const rect = element.getBoundingClientRect();
    let inView = rect.bottom > 0 && rect.top < window.innerHeight;
    const sync = () => {
      element.dataset.motion =
        inView && !document.hidden && !motion.matches ? "active" : "paused";
    };
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
            sync();
          })
        : null;

    sync();
    observer?.observe(element);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);

    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
      delete element.dataset.motion;
    };
  }, []);

  return ref;
}
