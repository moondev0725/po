export function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-inner">
        <p className="eyebrow">SERVICE-DRIVEN DEVELOPER / BACKEND</p>

        <h1 className="hero-title">
          안녕하세요.
          <br />
          <span>
            서비스 아이디어를 사용자 흐름과 <br />
            구조로 구체화하는
          </span>
          <span className="hero-intro-line">
            <span className="hero-name">개발자 문성훈</span>입니다.
          </span>
        </h1>

        <p className="hero-desc">
          Spring Boot와 Django 기반 팀 프로젝트에서 로그인, 결제, 실시간 채팅, 커뮤니티, 상태 기반 게임 로직, Python ML 기반
          사용자 입력 해석, 관리자 기능까지 직접 구현했습니다. 기능을 개별적으로 만드는 것보다, 여러 기능이 하나의 서비스
          경험으로 이어지도록 사용자 흐름과 도메인 구조를 먼저 설계하고 이를 실제 동작하는 형태로 완성하는 데 집중해왔습니다.
        </p>

        <div className="hero-links custom-links">
          <a href="https://github.com/moondev0725" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" />
            <span>GitHub</span>
          </a>
          <a href="#projects">
            <i className="fa-solid fa-folder-open" />
            <span>Projects</span>
          </a>
          <a href="#contact">
            <i className="fa-solid fa-envelope" />
            <span>Contact</span>
          </a>
        </div>

        <div className="hero-mini-stats">
          <div className="mini-stat">
            <strong>2+</strong>
            <span>팀 프로젝트에서 기획부터 구현까지 수행</span>
          </div>
          <div className="mini-stat">
            <strong>Flow Design</strong>
            <span>서비스 흐름과 구조를 먼저 설계하는 개발 방식</span>
          </div>
          <div className="mini-stat">
            <strong>OAuth2 · KakaoPay · WebSocket · Python ML</strong>
            <span>인증, 결제, 실시간 기능과 ML 연동 구현</span>
          </div>
        </div>
      </div>
    </section>
  );
}
