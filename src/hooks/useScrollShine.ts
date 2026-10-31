import { useEffect, useRef } from "react";

// One scroll listener and one frame for all highlighted text on the page.
const targets = new Set<HTMLElement>();
let frame = 0;
let motion: MediaQueryList | null = null;

function update() {
  frame = 0;
  if (motion?.matches) return;
  const height = window.innerHeight;
  // Read geometry first, then write styles to avoid layout thrashing.
  const positions = [...targets].map((element) => {
    const rect = element.getBoundingClientRect();
    const progress = Math.max(
      0,
      Math.min(1, (height * 0.92 - rect.top) / (height * 0.7 + rect.height)),
    );
    return { element, position: `${((1 - progress) * 100).toFixed(2)}%` };
  });
  positions.forEach(({ element, position }) => {
    if (element.style.getPropertyValue("--shine-position") !== position) {
      element.style.setProperty("--shine-position", position);
    }
  });
}

function schedule() {
  if (!frame && !motion?.matches && !document.hidden) {
    frame = window.requestAnimationFrame(update);
  }
}

export function useScrollShine() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    targets.add(element);
    if (targets.size === 1) {
      motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      document.addEventListener("visibilitychange", schedule);
      motion.addEventListener("change", schedule);
    }
    const resize =
      "ResizeObserver" in window ? new ResizeObserver(schedule) : null;
    resize?.observe(element);
    schedule();
    return () => {
      resize?.disconnect();
      targets.delete(element);
      element.style.removeProperty("--shine-position");
      if (targets.size === 0) {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        document.removeEventListener("visibilitychange", schedule);
        motion?.removeEventListener("change", schedule);
        motion = null;
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    };
  }, []);
  return ref;
}
