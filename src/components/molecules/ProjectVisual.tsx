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
                <small>Platform UI</small>
                <b>대시보드</b>
              </div>
              <div>
                <small>Model Cost</small>
                <b>모델 원가</b>
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
          <span className="studio-node studio-node--one">레이아웃</span>
          <span className="studio-node studio-node--two">권한 관리</span>
          <span className="studio-node studio-node--three">플레이그라운드</span>
          <div className="studio-caption">
            K intelligence <b>studio</b>
          </div>
        </div>
      ) : project.visual === "hub" ? (
        <div className="hub-preview">
          <div className="hub-connections" />
          <span className="hub-resource hub-resource--mcp">
            <Icon name="code" size={19} />
            MCP
          </span>
          <span className="hub-resource hub-resource--skills">
            <Icon name="spark" size={19} />
            Skills
          </span>
          <div className="hub-core">
            AX<span>Works</span>
          </div>
          <span className="hub-approval">
            <Icon name="check" size={14} />
            관리 · 승인
          </span>
          <span className="hub-caption">Internal Portal · KT B2E</span>
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
            <code>{project.tags.slice(0, 2).join(" / ")}</code>
          </div>
        </div>
      ) : (
        <div className="form-preview">
          <div className="paper">
            <small>eForm3</small>
            <h4>전자계약서</h4>
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
