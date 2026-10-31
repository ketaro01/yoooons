import { careers } from "../../data/portfolio";
import { SectionHeading } from "../atoms/SectionHeading";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
import { useScrollReveal } from "../../hooks/useScrollReveal";
export function Experience() {
  const timelineReveal = useScrollReveal<HTMLDivElement>();
  const toolboxReveal = useScrollReveal<HTMLElement>(90);
  return (
    <section className="section experience" id="experience">
      <SectionHeading
        number="04"
        label="경력과 기술"
        title="주요 경력과 사용 기술"
      />
      <div className="experience-layout">
        <div className="career-timeline" ref={timelineReveal}>
          <article className="career-company career-company--current">
            <div className="company-meta">
              <span className="timeline-dot" />
              <span>현재</span>
            </div>
            <div>
              <div className="company-title">
                <h3>KT</h3>
                <Tag accent>현재 소속</Tag>
              </div>
              <p>세 프로젝트의 레이아웃·권한 관리 등 공통 프레임워크 개발</p>
              <p>Token Factory · 대시보드 및 모델 원가 관리 UI</p>
              <p>AX Works Internal Portal · MCP Hub</p>
              <p>K intelligence studio · 플레이그라운드</p>
              <div className="company-projects">
                <span>AI 플랫폼</span>
                <span>관리자 UI · B2E 포털</span>
              </div>
            </div>
          </article>
          <article className="career-company">
            <div className="company-meta">
              <span className="timeline-dot" />
              <span>데이터 플랫폼</span>
            </div>
            <div>
              <h3>KT NexR</h3>
              <p>NDAP · React 전환 및 핵심 기능 마이그레이션</p>
              <p>NEB (NexR Bookshelf) · 분석환경 UI 및 공통 컴포넌트</p>
              <p>Constantine · Dashboard, Notebook, Workbench</p>
              <div className="company-projects">
                <span>프레임워크 개발</span>
                <span>npm 라이브러리 배포</span>
              </div>
            </div>
          </article>
          <article className="career-company">
            <div className="company-meta">
              <span className="timeline-dot" />
              <span>전자계약 서비스</span>
            </div>
            <div>
              <h3>I-ON Communications</h3>
              <p>eForm3 전자계약 서비스 프론트엔드 개발</p>
              <p>에디터 저장 구조 개선 · 서명/도장 모듈 개발</p>
            </div>
          </article>
          <article className="career-company">
            <div className="company-meta">
              <span className="timeline-dot" />
              <span>입시·채용 서비스</span>
            </div>
            <div>
              <h3>진학어플라이</h3>
              <p>원서접수 · 평가 · 채용 솔루션 개발</p>
              <p>API 개발과 데이터 연동 자동화</p>
            </div>
          </article>
        </div>
        <aside className="toolbox" ref={toolboxReveal}>
          <p className="eyebrow">기술 스택</p>
          <h3>
            개발에 사용해온
            <br />
            기술과 도구입니다.
          </h3>
          <div className="toolbox-group">
            <h4>프론트엔드 경험</h4>
            <div className="tags">
              {[
                "React",
                "TypeScript",
                "Vite",
                "CRA",
                "Vue",
                "Vuex",
                "JavaScript",
                "React Query",
                "Zustand",
                "Redux",
                "Redux-Saga",
                "Sass",
              ].map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
          <div className="toolbox-group">
            <h4>서버와 데이터 경험</h4>
            <div className="tags">
              {[
                "Node.js",
                "Express",
                "REST API",
                "C# / ASP.NET",
                "MSSQL",
                "PostgreSQL",
              ].map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
          <div className="toolbox-group">
            <h4>AI 개발 워크플로</h4>
            <div className="tags">
              {["OpenCode", "MCP", "Agent Skills", "GSD"].map((item) => (
                <Tag key={item} accent>
                  {item}
                </Tag>
              ))}
            </div>
          </div>
          <div className="toolbox-footnote">
            <Icon name="code" size={18} />
            <p>
              이 포트폴리오는
              <br />
              <strong>React · Vite · TypeScript · Bun · Sass</strong>로
              만들었습니다.
            </p>
          </div>
        </aside>
      </div>
      <details className="archive-details">
        <summary>
          <span>
            <span className="archive-marker">↳</span> 더 많은 프로젝트{" "}
            <small>{careers.length.toString().padStart(2, "0")}</small>
          </span>
          <Icon name="plus" size={20} />
        </summary>
        <div className="archive-content">
          {careers.map((career, index) => (
            <details className="career-detail" key={career.project}>
              <summary>
                <span className="career-detail__index">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="career-detail__title">
                  {career.project}
                  <small>{career.company}</small>
                </span>
                <span className="career-detail__date">{career.date}</span>
                <Icon name="plus" size={16} />
              </summary>
              <div className="career-detail__body">
                <p>{career.description}</p>
                {career.result && (
                  <p>
                    <strong>기여 및 결과</strong> {career.result}
                  </p>
                )}
                <div className="tags">
                  {career.useSkills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </details>
    </section>
  );
}
