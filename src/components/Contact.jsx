import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="section border-top">
      <Reveal className="container contact-box reveal-item">
        <p className="section-label">CONTACT</p>
        <h2 className="section-title">함께 일할 기회를 기다리고 있습니다</h2>
        <p className="contact-desc">
          서비스 흐름과 구조를 함께 고민하는 개발자로 성장하고 싶습니다.
          <br />
          채용 관련 문의는 언제든지 편하게 연락 부탁드립니다.
        </p>

        <div className="contact-links">
          <a href="https://github.com/moondev0725" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" />
            <span>GitHub</span>
          </a>
          <a href="mailto:moondev0725@gmail.com?subject=포트폴리오를 보고 연락드립니다">
            <i className="fa-solid fa-envelope" />
            <span>moondev0725@gmail.com</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
