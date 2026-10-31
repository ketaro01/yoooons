type IconName =
  | "arrow"
  | "down"
  | "plus"
  | "close"
  | "code"
  | "spark"
  | "moon"
  | "sun"
  | "github"
  | "check"
  | "menu";
const paths: Record<IconName, string> = {
  arrow: "M6 18 18 6M6 6h12v12",
  down: "M12 4v16m-6-6 6 6 6-6",
  plus: "M12 5v14M5 12h14",
  close: "m6 6 12 12M6 18 18 6",
  code: "m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16",
  spark: "m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6Z",
  moon: "M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z",
  sun: "M12 3v1m0 16v1M3 12h1m16 0h1M5.6 5.6l.7.7m11.4 11.4.7.7m0-12.8-.7.7M6.3 17.7l-.7.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  github:
    "M9 19c-4 1-4-2-6-2m12 5v-4a3 3 0 0 0-1-2.3c3.3-.4 6.8-1.6 6.8-7.3A5.7 5.7 0 0 0 19.3 4 5.3 5.3 0 0 0 19.2 0S18 0 15 1.6a15.4 15.4 0 0 0-8 0C4 0 2.8 0 2.8 0A5.3 5.3 0 0 0 2.7 4 5.7 5.7 0 0 0 1.2 8.4c0 5.7 3.5 6.9 6.8 7.3A3 3 0 0 0 7 18v4",
  check: "m5 12 4 4L19 6",
  menu: "M4 7h16M4 12h16M4 17h16",
};
export function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
