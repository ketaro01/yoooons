import { profile } from "../../data/portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Icon } from "../atoms/Icon";
import { ScrollShine } from "../atoms/ScrollShine";

export function About() {
  const identityReveal = useScrollReveal<HTMLDivElement>();
  const storyReveal = useScrollReveal<HTMLDivElement>(90);

  return (
    <section
      className="section about"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="about-identity" ref={identityReveal}>
        <p className="eyebrow">
          <span>01</span> 소개
        </p>
        <h2 id="about-heading">
          안녕하세요.
          <br />
          <ScrollShine>{profile.fullName}</ScrollShine>입니다.
        </h2>
        <p className="about-english-name">{profile.englishName}</p>
        <dl className="about-facts">
          <div>
            <dt>하는 일</dt>
            <dd>{profile.role}</dd>
          </div>
          <div>
            <dt>현재</dt>
            <dd>KT · 플랫폼 UI 개발</dd>
          </div>
        </dl>
        <div className="about-links">
          <a href={`mailto:${profile.email}`} className="text-link">
            {profile.email}
            <Icon name="arrow" size={14} />
          </a>
          <a
            href={profile.github}
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <Icon name="arrow" size={14} />
          </a>
        </div>
      </div>
      <div className="about-story" ref={storyReveal}>
        <h3>
          화면을 만들고,
          <br />
          <ScrollShine>개발의 기반을 다집니다.</ScrollShine>
        </h3>
        {profile.introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
