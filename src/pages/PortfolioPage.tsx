import { useEffect, useState } from "react";
import { PortfolioLayout } from "../components/templates/PortfolioLayout";
import { Hero } from "../components/organisms/Hero";
import { Projects } from "../components/organisms/Projects";
import { Approach } from "../components/organisms/Approach";
import { Experience } from "../components/organisms/Experience";

export function PortfolioPage() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("yoooons-theme") === "dark";
    } catch {
      return false;
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#151c18" : "#f5f6f2");
    try {
      localStorage.setItem("yoooons-theme", dark ? "dark" : "light");
    } catch {
      /* Storage may be unavailable in private browsers. */
    }
  }, [dark]);
  return (
    <PortfolioLayout
      dark={dark}
      onToggleTheme={() => setDark((value) => !value)}
    >
      <Hero />
      <Projects />
      <Approach />
      <Experience />
    </PortfolioLayout>
  );
}
