import { Icon } from "../atoms/Icon";
import { ScrollShine } from "../atoms/ScrollShine";
import { profile } from "../../data/portfolio";
import { useAmbientMotion } from "../../hooks/useAmbientMotion";

export function Hero() {
  const artMotion = useAmbientMotion<HTMLDivElement>();
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">웹 서비스 · 데이터 플랫폼 · AI 플랫폼</p>
        <h1 id="hero-heading">
          서비스를 만들고,
          <br />
          <ScrollShine>더 나은 구조를 고민합니다.</ScrollShine>
        </h1>
        <p className="hero-description">
          화면과 API부터 공통 프레임워크와 라이브러리까지.
          <br />
          서비스를 만들고 개선하는 개발자 {profile.fullName}입니다.
        </p>
        <div className="hero-actions">
          <a className="button button--dark" href="#projects">
            프로젝트 살펴보기 <Icon name="arrow" size={17} />
          </a>
          <a className="text-link" href="#about">
            저를 소개합니다 <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
      <div className="hero-art" ref={artMotion} aria-hidden="true">
        <div className="horizon-glow" />
        <div className="metal-ring metal-ring--outer" />
        <div className="metal-ring metal-ring--inner" />
        <div className="hero-monogram">y.</div>
        <span className="art-label art-label--left">프론트엔드 개발</span>
        <span className="art-label art-label--right">
          공통 프레임워크 · 라이브러리
        </span>
        <span className="art-caption">{profile.englishName} · Portfolio</span>
      </div>
      <div className="hero-bottom">
        <p>
          현재 KT에서
          <br />
          <strong>플랫폼 UI를 개발합니다.</strong>
        </p>
        <div className="hero-stack">
          <span>React</span>
          <span>TypeScript</span>
          <span>AI Agents</span>
          <span>MCP</span>
        </div>
        <a
          className="scroll-cue"
          href="#projects"
          aria-label="프로젝트 영역으로 이동"
        >
          프로젝트 탐색 <Icon name="down" size={16} />
        </a>
      </div>
    </section>
  );
}
