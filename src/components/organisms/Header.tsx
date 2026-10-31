import { useRef, useState } from "react";
import { Icon } from "../atoms/Icon";
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuToggle.current?.focus();
        }
      }}
    >
      <div className="header-inner page-shell">
        <a
          className="wordmark"
          href="#home"
          aria-label="YOOOONS 처음으로"
          onClick={() => setMenuOpen(false)}
        >
          yoooons<span>포트폴리오</span>
        </a>
        <nav
          id="main-nav"
          aria-label="주 메뉴"
          className={menuOpen ? "nav-open" : ""}
        >
          {[
            ["#about", "소개"],
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
          <a
            className="contact-link"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            연락하기 <Icon name="arrow" size={15} />
          </a>
          <button
            ref={menuToggle}
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
