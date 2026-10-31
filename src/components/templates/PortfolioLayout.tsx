import type { ReactNode } from "react";
import { Header } from "../organisms/Header";
import { Contact } from "../organisms/Contact";
export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        본문으로 건너뛰기
      </a>
      <Header />
      <div className="page-shell">
        <main id="main">
          {children}
          <Contact />
        </main>
      </div>
    </>
  );
}
