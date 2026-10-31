import { useEffect, useRef, useState } from "react";
import { filterProjects, filters } from "../../data/portfolio";
import type { Project, ProjectFilter } from "../../types/portfolio";
import { SectionHeading } from "../atoms/SectionHeading";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
import { ProjectCard } from "../molecules/ProjectCard";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("전체");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const matches = filterProjects(filter);
  const visible = expanded ? matches : matches.slice(0, 4);
  useEffect(() => {
    if (!selected) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);
  return (
    <section className="section projects" id="projects">
      <SectionHeading
        number="02"
        label="프로젝트"
        title="참여한 프로젝트"
        description="각 프로젝트에서 맡은 기능과 해결한 문제를 소개합니다."
      />
      <div className="project-filters" role="group" aria-label="프로젝트 분류">
        {filters.map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            className={filter === item ? "is-active" : ""}
            onClick={() => {
              setFilter(item);
              setExpanded(false);
            }}
          >
            {item}
            <span>
              {filterProjects(item).length.toString().padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {filter} 프로젝트 {matches.length}개 중 {visible.length}개 표시
      </p>
      <div className="project-grid">
        {visible.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelected}
            revealDelay={(index % 2) * 90}
          />
        ))}
      </div>
      {matches.length > 4 && (
        <button
          className="more-projects"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded
            ? "대표 프로젝트만 보기"
            : `프로젝트 ${matches.length}개 모두 보기`}
          <Icon name={expanded ? "close" : "plus"} size={17} />
        </button>
      )}
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onCancel={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              setSelected(null);
          }
        }}
      >
        {selected && (
          <>
            <button
              className="icon-button dialog-close"
              autoFocus
              onClick={() => setSelected(null)}
              aria-label="프로젝트 상세 닫기"
            >
              <Icon name="close" />
            </button>
            <p className="eyebrow">
              {selected.company} / {selected.category}
            </p>
            <h2 id="project-dialog-title">
              {selected.name}
              <span>{selected.subtitle}</span>
            </h2>
            <p className="dialog-role">
              <span>담당 역할</span>
              {selected.role}
            </p>
            {selected.period && (
              <p className="project-period">
                프로젝트 기간 · {selected.period}
              </p>
            )}
            <h3>기술 스택</h3>
            <div className="tags">
              {selected.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              {selected.status && <Tag accent>{selected.status}</Tag>}
            </div>
            <h3>프로젝트 개요</h3>
            <p className="dialog-description">{selected.overview}</p>
            <h3>구현 및 기여</h3>
            <ul>
              {selected.contribution.map((item) => (
                <li key={item}>
                  <Icon name="check" size={17} />
                  {item}
                </li>
              ))}
            </ul>
            {selected.outcomes && (
              <>
                <h3>주요 성과</h3>
                <ul>
                  {selected.outcomes.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={17} />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {selected.links && (
              <div className="project-resources" aria-label="관련 결과물">
                {selected.links.map((link) => (
                  <a
                    className="text-link"
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <Icon name="arrow" size={15} />
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </dialog>
    </section>
  );
}
