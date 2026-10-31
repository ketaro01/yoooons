import { profile } from "../../data/portfolio";
import { Icon } from "../atoms/Icon";
export function Contact() {
  return (
    <>
      <section className="contact section" id="contact">
        <p className="eyebrow">
          <span>04</span> 다음 연결
        </p>
        <div className="contact-main">
          <h2>
            좋은 경험은,
            <br />
            함께 만드는 거니까요<span>↗</span>
          </h2>
          <div>
            <p>
              제품을 만드는 이야기,
              <br />
              AI와 함께 개발하는 이야기를 나눠요.
            </p>
            <a
              className="button button--dark"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub에서 연결하기 <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
        <div className="contact-wordmark" aria-hidden="true">
          yoooons<span>®</span>
        </div>
      </section>
      <footer className="footer">
        <span>© {new Date().getFullYear()} YOOOONS</span>
        <p>생각을 구조로. 구조를 경험으로.</p>
        <div>
          <a href={profile.archive} target="_blank" rel="noreferrer">
            이전 포트폴리오 <Icon name="arrow" size={13} />
          </a>
          <a href="#home">
            맨 위로 <Icon name="arrow" size={13} />
          </a>
        </div>
      </footer>
    </>
  );
}
