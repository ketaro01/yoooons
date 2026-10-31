import type { Project } from "../../types/portfolio";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
import { ProjectVisual } from "./ProjectVisual";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProjectCard({
  project,
  onSelect,
  revealDelay = 0,
}: {
  project: Project;
  onSelect: (project: Project) => void;
  revealDelay?: number;
}) {
  const reveal = useScrollReveal<HTMLElement>(revealDelay);
  return (
    <article className="project-card" ref={reveal}>
      <button
        className="project-card__button"
        onClick={() => onSelect(project)}
        aria-label={`${project.name} ${project.subtitle} 프로젝트 상세 보기`}
      >
        <ProjectVisual project={project} />
        <div className="project-card__body">
          <div className="project-card__meta">
            <span>
              {project.company} <span className="meta-divider">/</span>{" "}
              {project.category}
            </span>
            {project.status && (
              <span className="project-status">
                <span className="status-dot" />
                {project.status}
              </span>
            )}
          </div>
          <div className="project-card__title">
            <h3>
              {project.name}
              <span>{project.subtitle}</span>
            </h3>
            <span className="circle-arrow">
              <Icon name="arrow" />
            </span>
          </div>
          <p>{project.description}</p>
          {project.period && <p className="project-period">{project.period}</p>}
          <p className="project-role">
            <span>담당 역할</span>
            {project.role}
          </p>
          <div className="tags">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </button>
    </article>
  );
}
