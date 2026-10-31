import { careers, profile } from "../../data/portfolio";
import { SectionHeading } from "../atoms/SectionHeading";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
export function Experience() {
  return (
    <section className="section experience" id="experience">
      <SectionHeading
        number="03"
        label="경력과 기술"
        title="경험은 쌓이고, 방식은 진화합니다."
      />
      <div className="experience-layout">
        <div className="career-timeline">
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
              <p>Token Factory Platform Admin UI 개발</p>
              <p>K intelligence studio 개발</p>
              <div className="company-projects">
                <span>AI 플랫폼</span>
                <span>관리자 UI</span>
              </div>
            </div>
          </article>
          <article className="career-company">
            <div className="company-meta">
              <span className="timeline-dot" />
              <span>이전 경력</span>
            </div>
            <div>
              <h3>KT NexR</h3>
              <p>Constantine · NEB (NE Bookshelf)</p>
              <p>NDAP 신규 버전 프론트엔드 개발</p>
              <div className="company-projects">
                <span>프론트엔드</span>
                <span>플랫폼</span>
              </div>
            </div>
          </article>
          <article className="career-company">
            <div className="company-meta">
              <span className="timeline-dot" />
              <span>
                2019.05 ~<small>종료 시점 미기재</small>
              </span>
            </div>
            <div>
              <h3>I-ON Communications</h3>
              <p>eForm3 전자계약 서비스 프론트엔드 개발</p>
              <p>에디터 개선 · 서명/도장 모듈 개발</p>
            </div>
          </article>
          <article className="career-company">
            <div className="company-meta">
              <span className="timeline-dot" />
              <span>
                2014 — 2019<small>프로젝트 기록 기준</small>
              </span>
            </div>
            <div>
              <h3>진학어플라이</h3>
              <p>원서접수 · 평가 · 채용 솔루션 개발</p>
              <p>API 개발과 데이터 연동 자동화</p>
            </div>
          </article>
        </div>
        <aside className="toolbox">
          <p className="eyebrow">개발 도구 상자</p>
          <h3>
            상황에 맞는 도구로,
            <br />
            필요한 경험을.
          </h3>
          <div className="toolbox-group">
            <h4>프론트엔드 경험</h4>
            <div className="tags">
              {["React", "Vue.js", "JavaScript", "Redux", "Sass"].map(
                (item) => (
                  <Tag key={item}>{item}</Tag>
                ),
              )}
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
            <span className="archive-marker">↳</span> 이전 프로젝트 기록{" "}
            <small>{careers.length.toString().padStart(2, "0")}</small>
          </span>
          <Icon name="plus" size={20} />
        </summary>
        <div className="archive-content">
          <p className="archive-note">
            기존 포트폴리오의 기록을 보존했습니다. 아래 기간은 당시 프로젝트
            기준이며 ‘현재’는 최신 재직 상태를 뜻하지 않습니다.
          </p>
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
                <span className="career-detail__date">
                  {career.date.replace("현재", "당시 기록")}
                </span>
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
          <a
            className="text-link"
            href={profile.source}
            target="_blank"
            rel="noreferrer"
          >
            경력 데이터 원문 <Icon name="arrow" size={14} />
          </a>
        </div>
      </details>
    </section>
  );
}
