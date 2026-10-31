import type { Project } from "../../types/portfolio";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <article className="project-card">
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
