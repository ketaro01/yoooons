import type { ReactNode } from "react";
export function Tag({
  children,
  accent = false,
}: {
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <span className={`tag${accent ? " tag--accent" : ""}`}>{children}</span>
  );
}
