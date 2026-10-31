import { PortfolioLayout } from "../components/templates/PortfolioLayout";
import { Hero } from "../components/organisms/Hero";
import { About } from "../components/organisms/About";
import { Projects } from "../components/organisms/Projects";
import { Approach } from "../components/organisms/Approach";
import { Experience } from "../components/organisms/Experience";

export function PortfolioPage() {
  return (
    <PortfolioLayout>
      <Hero />
      <About />
      <Projects />
      <Approach />
      <Experience />
    </PortfolioLayout>
  );
}
