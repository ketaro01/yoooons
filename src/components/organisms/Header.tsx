import { useState } from "react";
import { Icon } from "../atoms/Icon";
export function Header({
  dark,
  onToggleTheme,
}: {
  dark: boolean;
  onToggleTheme: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="YOOOONS 처음으로">
        yoooons<span>®</span>
      </a>
      <nav
        id="main-nav"
        aria-label="주 메뉴"
        className={menuOpen ? "nav-open" : ""}
      >
        {[
          ["#projects", "프로젝트"],
          ["#approach", "AI 개발 방식"],
          ["#experience", "경력"],
        ].map(([href, text]) => (
          <a href={href} key={href} onClick={() => setMenuOpen(false)}>
            {text}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="icon-button theme-toggle"
          onClick={onToggleTheme}
          aria-label={dark ? "밝은 테마로 변경" : "어두운 테마로 변경"}
        >
          <Icon name={dark ? "sun" : "moon"} size={18} />
        </button>
        <a className="contact-link" href="#contact">
          연결하기 <Icon name="arrow" size={15} />
        </a>
        <button
          className="icon-button menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
