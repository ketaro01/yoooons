import { useRef, useState } from "react";
import { capabilities } from "../../data/portfolio";
import { Icon } from "../atoms/Icon";
import { ScrollShine } from "../atoms/ScrollShine";
import { Tag } from "../atoms/Tag";
import { useScrollReveal } from "../../hooks/useScrollReveal";
export function Approach() {
  const introReveal = useScrollReveal<HTMLDivElement>();
  const workspaceReveal = useScrollReveal<HTMLDivElement>(90);
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const capability = capabilities[active];
  return (
    <section
      className="approach section"
      id="approach"
      aria-labelledby="approach-heading"
    >
      <div className="approach-intro" ref={introReveal}>
        <p className="eyebrow">
          <span>03</span> AI 개발 방식
        </p>
        <h2 id="approach-heading">
          AI 도구를
          <br />
          <ScrollShine>이렇게 활용합니다.</ScrollShine>
        </h2>
        <p>
          요구사항과 코드 구조를 먼저 정리해 에이전트에 전달합니다.
          <br />
          생성된 코드는 직접 읽고, 의도대로 동작하는지 확인합니다.
        </p>
        <span className="approach-caption">
          <Icon name="spark" size={16} /> OpenCode · MCP · Skills · GSD
        </span>
      </div>
      <div className="approach-workspace" ref={workspaceReveal}>
        <div
          className="capability-tabs"
          role="tablist"
          aria-label="AI 개발 역량"
        >
          {capabilities.map((item, i) => (
            <button
              ref={(element) => {
                tabs.current[i] = element;
              }}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={active === i}
              aria-controls={`panel-${item.id}`}
              tabIndex={active === i ? 0 : -1}
              key={item.id}
              onClick={() => setActive(i)}
              onKeyDown={(event) => {
                let next = i;
                if (event.key === "ArrowRight")
                  next = (i + 1) % capabilities.length;
                else if (event.key === "ArrowLeft")
                  next = (i + capabilities.length - 1) % capabilities.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = capabilities.length - 1;
                else return;
                event.preventDefault();
                setActive(next);
                tabs.current[next]?.focus();
              }}
            >
              <span>0{i + 1}</span>
              {["에이전트", "맥락 설계", "도구 연결", "명세 중심"][i]}
            </button>
          ))}
        </div>
        <div
          className="capability-panel"
          id={`panel-${capability.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${capability.id}`}
          tabIndex={0}
        >
          <div className="capability-title">
            <span className="capability-icon">
              <Icon name={active === 2 ? "code" : "spark"} size={24} />
            </span>
            <p>{capability.term}</p>
          </div>
          <h3>{capability.title}</h3>
          <p className="capability-description">{capability.description}</p>
          <div className="tags">
            {capability.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
          <div className="workflow" aria-label="개발 방식 예시">
            {capability.steps.map((step, i) => (
              <div className="workflow-step" key={step.label}>
                <span className="workflow-number">0{i + 1}</span>
                <div>
                  <strong>{step.label}</strong>
                  <p>{step.detail}</p>
                </div>
                <code>{step.file}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
