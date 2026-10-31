import { Icon } from "../atoms/Icon";
export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> 프론트엔드 개발자 · YOOOONS
          </p>
          <h1 id="hero-heading">
            생각을 구조로,
            <br />
            구조를{" "}
            <span>
              경험으로<span className="hero-period">.</span>
            </span>
          </h1>
          <p className="hero-description">
            서비스를 만드는 경험에 AI의 가능성을 더합니다.
            <br />
            사용자에게 닿는 화면부터, 더 나은 개발 방식까지.
          </p>
          <div className="hero-actions">
            <a className="button button--dark" href="#projects">
              프로젝트 살펴보기 <Icon name="arrow" size={18} />
            </a>
            <a className="text-link" href="#approach">
              AI와 함께 일하는 방식 <Icon name="down" size={16} />
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-grid" />
          <div className="orbit orbit--one" />
          <div className="orbit orbit--two" />
          <span className="art-coordinate art-coordinate--top">
            01 / HUMAN × AI
          </span>
          <div className="floating-label floating-label--top">
            <span className="status-dot" /> 사람의 생각으로 시작해
          </div>
          <div className="sculpture">
            <div className="sculpture-layer sculpture-layer--back" />
            <div className="sculpture-layer sculpture-layer--middle" />
            <div className="sculpture-layer sculpture-layer--front">
              <Icon name="spark" size={92} />
            </div>
          </div>
          <div className="floating-label floating-label--bottom">
            <Icon name="code" size={16} /> 코드로 경험을 만듭니다
          </div>
          <span className="art-coordinate art-coordinate--bottom">
            DESIGN → BUILD → REFINE
          </span>
          <span className="art-cross">+</span>
        </div>
      </div>
      <div className="hero-bottom">
        <p>
          제품을 이해하고.
          <br />
          <strong>경험을 구현합니다.</strong>
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
          <span>아래로 탐색</span>
          <Icon name="down" size={17} />
        </a>
      </div>
    </section>
  );
}
