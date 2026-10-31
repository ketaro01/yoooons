import type { Project } from "../../types/portfolio";
import { Icon } from "../atoms/Icon";

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual project-visual--${project.visual}`}
      aria-hidden="true"
    >
      <div className="visual-topline">
        <span>{project.company}</span>
        <span>인터페이스 컨셉</span>
      </div>
      {project.visual === "token" ? (
        <div className="admin-preview">
          <aside>
            <b>
              t<span>f</span>.
            </b>
            <i />
            <i />
            <i />
            <i />
            <i />
          </aside>
          <div className="admin-preview__content">
            <div className="preview-toolbar">
              <span>Platform overview</span>
              <span>↗</span>
            </div>
            <div className="preview-metrics">
              <div>
                <small>Workspace</small>
                <b>Control.</b>
              </div>
              <div>
                <small>AI infrastructure</small>
                <b>Connect.</b>
              </div>
            </div>
            <div className="preview-chart">
              <div className="chart-grid" />
              {[30, 42, 35, 60, 48, 72, 60, 78, 69, 88, 79, 97].map(
                (height, i) => (
                  <i key={i} style={{ height: `${height}%` }} />
                ),
              )}
            </div>
            <div className="preview-footer">
              <span className="status-dot" /> Token Factory{" "}
              <span>Platform Admin</span>
            </div>
          </div>
        </div>
      ) : project.visual === "studio" ? (
        <div className="studio-preview">
          <div className="studio-orbit" />
          <div className="studio-symbol">
            K<span>✳</span>
          </div>
          <span className="studio-node studio-node--one">모델</span>
          <span className="studio-node studio-node--two">아이디어</span>
          <span className="studio-node studio-node--three">경험</span>
          <div className="studio-caption">
            K intelligence <b>studio</b>
          </div>
        </div>
      ) : project.visual === "data" ? (
        <div className="data-preview">
          <div className="data-lines" />
          <div className="data-cube">
            <Icon name="code" size={40} />
          </div>
          <span className="data-name">{project.name}</span>
          <span className="data-subtitle">{project.subtitle}</span>
          <div className="data-terminal">
            <span>● ● ●</span>
            <code>interface → experience</code>
          </div>
        </div>
      ) : (
        <div className="form-preview">
          <div className="paper">
            <small>eForm3</small>
            <h4>연결이 계약이 되는 순간.</h4>
            <i />
            <i />
            <i />
            <div className="signature">Yoons</div>
            <span className="paper-check">
              <Icon name="check" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
