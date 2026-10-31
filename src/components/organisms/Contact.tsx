import { profile } from "../../data/portfolio";
import { Icon } from "../atoms/Icon";
import { ScrollShine } from "../atoms/ScrollShine";
import { useScrollReveal } from "../../hooks/useScrollReveal";
export function Contact() {
  const contactReveal = useScrollReveal<HTMLDivElement>();
  return (
    <>
      <section className="contact section" id="contact">
        <p className="eyebrow">
          <span>05</span> 연락처
        </p>
        <div className="contact-main" ref={contactReveal}>
          <h2>
            편하게
            <br />
            <ScrollShine>연락 주세요.</ScrollShine>
            <span className="contact-arrow">↗</span>
          </h2>
          <div>
            <a className="button button--dark" href={`mailto:${profile.email}`}>
              이메일 보내기 <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.englishName} · YOOOONS
        </span>
        <p>
          {profile.role} {profile.fullName}
        </p>
        <div>
          <a href={profile.archive} target="_blank" rel="noreferrer">
            이전 포트폴리오 소스 <Icon name="arrow" size={13} />
          </a>
          <a href="#home">
            맨 위로 <Icon name="arrow" size={13} />
          </a>
        </div>
      </footer>
    </>
  );
}
