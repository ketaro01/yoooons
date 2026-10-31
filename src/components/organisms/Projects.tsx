import { useEffect, useRef, useState } from "react";
import { filterProjects, filters, profile } from "../../data/portfolio";
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
        number="01"
        label="프로젝트"
        title="만들어온 경험들."
        description="AI 플랫폼부터 데이터 서비스까지. 제품의 접점에서 화면과 사용 경험을 만들어왔습니다."
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
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelected}
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
      <p className="visual-note">
        프로젝트 이미지는 역할을 표현한 컨셉 그래픽이며, 실제 서비스 화면이
        아닙니다.
      </p>
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
            <div className="tags">
              {selected.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              {selected.status && <Tag accent>{selected.status}</Tag>}
            </div>
            <p className="dialog-description">{selected.description}</p>
            <h3>담당한 일</h3>
            <ul>
              {selected.contribution.map((item) => (
                <li key={item}>
                  <Icon name="check" size={17} />
                  {item}
                </li>
              ))}
            </ul>
            {selected.source === "기존 포트폴리오" && (
              <a
                className="text-link"
                href={profile.source}
                target="_blank"
                rel="noreferrer"
              >
                기존 경력 기록 <Icon name="arrow" size={15} />
              </a>
            )}
            <p className="dialog-note">
              공개 가능한 참여 범위를 중심으로 소개합니다.
            </p>
          </>
        )}
      </dialog>
    </section>
  );
}
