import { useRef, useState } from "react";
import { capabilities } from "../../data/portfolio";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
export function Approach() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const capability = capabilities[active];
  return (
    <section
      className="approach section"
      id="approach"
      aria-labelledby="approach-heading"
    >
      <div className="approach-intro">
        <p className="eyebrow">
          <span>02</span> AI 개발 방식
        </p>
        <h2 id="approach-heading">
          코드를 넘어,
          <br />
          만드는 방식까지<span> 새롭게.</span>
        </h2>
        <p>
          도구의 이름보다 중요한 건, 어떻게 연결하고 사용하는가.
          <br />
          AI에 대한 이해를 개발의 언어로 정리했습니다.
        </p>
        <span className="approach-caption">
          <Icon name="spark" size={16} /> 이해하고 활용하는 개발 방법론
        </span>
      </div>
      <div className="approach-workspace">
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
          <a
            href={capability.reference}
            className="reference-link"
            target="_blank"
            rel="noreferrer"
          >
            관련 공식 문서 <Icon name="arrow" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
