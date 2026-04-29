import { Reveal } from './Reveal';

const infoItems = [
  { icon: 'fa-solid fa-user', label: '이름', value: '문성훈' },
  { icon: 'fa-solid fa-calendar', label: '생년월일', value: '1994.07.25' },
  { icon: 'fa-solid fa-location-dot', label: '위치', value: '남양주시' },
  { icon: 'fa-solid fa-phone', label: '연락처', value: '010-4441-5442' },
  {
    icon: 'fa-solid fa-envelope',
    label: '이메일',
    value: <a href="mailto:moondev0725@gmail.com">moondev0725@gmail.com</a>,
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    label: '최종학력',
    value: (
      <>
        상지대학교
        <br />
        컴퓨터데이터정보학과 (중퇴)
      </>
    ),
  },
  {
    icon: 'fa-brands fa-github',
    label: '깃허브',
    value: (
      <a href="https://github.com/moondev0725" target="_blank" rel="noopener noreferrer">
        github.com/moondev0725
      </a>
    ),
  },
];

export function About() {
  return (
    <>
      <section id="about" className="section border-top about-section">
        <div className="container">
          <Reveal className="about-heading reveal-item">
            <span className="about-heading-icon" aria-hidden="true">
              <i className="fa-solid fa-link" />
            </span>
            <div className="about-heading-text">
              <h2 className="section-title">ABOUT ME</h2>
              <div className="about-line" />
            </div>
          </Reveal>

          <div className="about-info-grid">
            {infoItems.map((item) => (
              <Reveal key={item.label} className="about-info-item reveal-item">
                <div className="about-icon">
                  <i className={item.icon} />
                </div>
                <div className="about-text-box">
                  <h3>{item.label}</h3>
                  <p>{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-top">
        <div className="container grid-2">
          <Reveal className="reveal-item">
            <p className="section-label">ABOUT ME</p>
            <h2 className="section-title">기능을 넘어 서비스 흐름과 구조를 설계하는 개발자</h2>
          </Reveal>
          <Reveal className="about-text reveal-item">
            <p>
              웹 서비스를 만들 때 단순히 기능 하나를 구현하는 데서 그치지 않고, 사용자가 어떤 흐름으로 서비스를 이용하는지부터
              먼저 정리합니다.
            </p>
            <p>
              팀 프로젝트를 통해 인증, 결제, 실시간 채팅, 지도, 커뮤니티 기능을 구현했고, 여기에 상태 기반 게임 로직, 도감,
              뽑기, 카드 강화, 관리자 페이지, ML 기반 입력 처리, 포터블 런처 구성까지 확장하며 여러 기능이 하나의 서비스 경험으로
              연결되도록 설계하는 중요성을 배웠습니다.
            </p>
            <p>
              그래서 저는 아이디어를 단순히 화면과 기능으로 나열하기보다, 사용자 흐름과 도메인 구조로 풀어내고 유지보수와 실행
              환경까지 고려해 서비스를 완성하는 개발자가 되고자 합니다.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section border-top">
        <div className="container grid-2">
          <Reveal className="reveal-item">
            <p className="section-label">WHAT I LEARNED</p>
            <h2 className="section-title">
              프로젝트를 하며
              <br />
              중요하게 느낀 것
            </h2>
          </Reveal>
          <Reveal className="about-text reveal-item">
            <p>
              프로젝트를 진행하며 단순히 기능을 하나씩 구현하는 것보다, 사용자가 로그인하고, 플레이하고, 수집하고, 결제하고,
              커뮤니티를 이용하는 전 과정이 하나의 흐름으로 자연스럽게 이어지도록 설계하는 일이 더 중요하다는 점을 체감했습니다.
            </p>
            <p>
              특히 기능이 늘어날수록 코드와 설정, 도메인 책임이 뒤섞이며 관리와 확장이 어려워지는 문제를 경험했고, 이를 통해
              역할과 책임을 분리하는 구조 설계의 중요성을 분명히 이해하게 되었습니다.
            </p>
            <p>
              이 경험 이후에는 기능 구현 이전에 서비스 흐름, 도메인 구조, 예외 상황, 실행 환경까지 먼저 정리하고, 이를 유지보수
              가능한 형태로 연결하는 방식을 개발의 기준으로 삼게 되었습니다.
            </p>
            <p>
              그래서 저는 단순히 기능을 구현한 경험보다, 아이디어를 실제 사용자 경험과 구조로 구체화하고 끝까지 완성해낸 경험을
              제 강점으로 보여주고 싶습니다.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
