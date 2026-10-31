import type { ReactNode } from "react";
import { useScrollShine } from "../../hooks/useScrollShine";

export function ScrollShine({ children }: { children: ReactNode }) {
  const ref = useScrollShine();
  return (
    <span className="scroll-shine" ref={ref}>
      {children}
    </span>
  );
}
