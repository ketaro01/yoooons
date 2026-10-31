import type { ReactNode } from "react";
import { Header } from "../organisms/Header";
import { Contact } from "../organisms/Contact";
export function PortfolioLayout({
  children,
  dark,
  onToggleTheme,
}: {
  children: ReactNode;
  dark: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <>
      <a className="skip-link" href="#main">
        본문으로 건너뛰기
      </a>
      <div className="page-shell">
        <Header dark={dark} onToggleTheme={onToggleTheme} />
        <main id="main">
          {children}
          <Contact />
        </main>
      </div>
    </>
  );
}
