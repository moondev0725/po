/** @typedef {{ title: string; desc: string; tags: string[]; image: string; alt: string; thumbLabel?: string }} Slide */

export const projectFilterOptions = [
  { id: 'all', label: '전체' },
  { id: 'Backend', label: 'Backend' },
  { id: 'Frontend', label: 'Frontend' },
  { id: 'AI/ML', label: 'AI/ML' },
  { id: 'Payment', label: 'Payment' },
  { id: 'Realtime', label: 'Realtime' },
];

/** @type {Slide[]} */
const nextDebutSlides = [
  {
    title: '메인 홈 화면',
    desc: '세계관 소개와 주요 진입 버튼을 한 화면에 배치한 메인 랜딩 화면입니다.',
    tags: ['랜딩', '세계관', 'CTA'],
    image: '/images/01_cover_main_hero.png',
    alt: 'NEXT DEBUT 메인 화면',
    thumbLabel: '메인',
  },
  {
    title: '연습생 인덱스 화면',
    desc: '카드형 UI로 연습생 목록과 능력치를 빠르게 탐색할 수 있도록 구성한 화면입니다.',
    tags: ['카드 UI', '인덱스', '능력치'],
    image: '/images/03_trainee_index_overview.png',
    alt: 'NEXT DEBUT 연습생 인덱스 화면',
    thumbLabel: 'Index',
  },
  {
    title: '인게임 선택 장면',
    desc: '선택지와 멤버 반응을 기반으로 플레이 흐름이 이어지는 게임 핵심 장면입니다.',
    tags: ['게임 UX', '선택지', '반응'],
    image: '/images/04_ingame_choice_scene.png',
    alt: 'NEXT DEBUT 인게임 선택 장면',
    thumbLabel: 'Scene',
  },
  {
    title: '팬미팅 지도 게시판',
    desc: '지도 위 위치 정보와 게시글 목록을 한 화면에 연결해 팬미팅 참여 흐름을 설계한 화면입니다.',
    tags: ['지도', '팬미팅', '게시판'],
    image: '/images/19_fanmeeting_board_map.png',
    alt: 'NEXT DEBUT 팬미팅 지도 게시판',
    thumbLabel: 'Map',
  },
  {
    title: '잠금 해제형 연습생 카드',
    desc: '보유 여부와 잠금 상태를 카드 UI로 구분해 수집 구조와 성장 동기를 동시에 보여주는 화면입니다.',
    tags: ['카드 UI', '보유 상태', '수집'],
    image: '/images/24_1_trainee_locked_cards.png',
    alt: 'NEXT DEBUT 잠금 연습생 카드 화면',
    thumbLabel: 'Cards',
  },
  {
    title: '상점 메인 화면',
    desc: '아이템 구매 흐름과 코인 보유 상태를 직관적으로 연결한 상점 메인 화면입니다.',
    tags: ['상점', '아이템', '코인'],
    image: '/images/30_shop_main.png',
    alt: 'NEXT DEBUT 상점 메인 화면',
    thumbLabel: 'Shop',
  },
  {
    title: '코인 충전 패널',
    desc: '결제 금액 선택과 카카오페이 연결 버튼을 한 흐름으로 정리한 충전 UI입니다.',
    tags: ['충전', '결제 UI', '카카오페이'],
    image: '/images/32_shop_coin_charge.png',
    alt: 'NEXT DEBUT 코인 충전 패널',
    thumbLabel: 'Charge',
  },
  {
    title: '카카오페이 결제 흐름',
    desc: '외부 결제 완료 후 다시 서비스 흐름으로 복귀하도록 연결한 카카오페이 안내 화면입니다.',
    tags: ['카카오페이', '결제 흐름', '외부 연동'],
    image: '/images/33_kakaopay_flow.png',
    alt: 'NEXT DEBUT 카카오페이 흐름 화면',
    thumbLabel: 'KakaoPay',
  },
  {
    title: '관리자 대시보드',
    desc: '회원, 게시판, 플레이 현황을 한 번에 파악할 수 있도록 정리한 관리자 메인 화면입니다.',
    tags: ['관리자', '대시보드', '운영'],
    image: '/images/51_admin_dashboard_overview.png',
    alt: 'NEXT DEBUT 관리자 대시보드',
    thumbLabel: '관리',
  },
  {
    title: '관리 KPI 패널',
    desc: '운영 지표와 코인 흐름을 그래프로 시각화해 서비스 상태를 빠르게 읽을 수 있게 구성한 화면입니다.',
    tags: ['KPI', '그래프', '운영 지표'],
    image: '/images/52_admin_kpi_panels.png',
    alt: 'NEXT DEBUT 관리자 KPI 패널',
    thumbLabel: 'KPI',
  },
  {
    title: '회원 관리 목록',
    desc: '회원 상태, 가입일, 코인, 연습생 보유 현황을 목록형으로 관리할 수 있게 만든 관리자 화면입니다.',
    tags: ['회원 관리', '목록', '운영'],
    image: '/images/53_admin_member_list.png',
    alt: 'NEXT DEBUT 관리자 회원 목록',
    thumbLabel: 'Members',
  },
  {
    title: '회원 상세 모달',
    desc: '회원 등급, 코인, 보유 연습생 정보를 상세 수정할 수 있도록 구성한 관리자 상세 화면입니다.',
    tags: ['상세 모달', '회원 관리', '운영 도구'],
    image: '/images/54_admin_member_detail_modal.png',
    alt: 'NEXT DEBUT 관리자 회원 상세 모달',
    thumbLabel: 'Detail',
  },
];

/** @type {Slide[]} */
const momsLogSlides = [
  {
    title: '메인 커뮤니티 홈',
    desc: '메인 홈 화면에서 육아 정보, 커뮤니티 진입, 로그인 유도, 캘린더 위젯을 한 흐름으로 보여줍니다.',
    tags: ['메인', '커뮤니티', '캘린더'],
    image: '/images/momslog-main.png',
    alt: 'Moms Log main home screen',
    thumbLabel: '메인',
  },
  {
    title: '커뮤니티 유도 모달',
    desc: '실제 이용 후기 중심의 모달로 사용자가 메인 화면에서 커뮤니티 핵심 경험으로 자연스럽게 이동하도록 구성했습니다.',
    tags: ['모달', '커뮤니티', '유도'],
    image: '/images/momslog-main-modal.png',
    alt: 'Moms Log community modal',
    thumbLabel: '모달',
  },
  {
    title: '실시간 채팅방',
    desc: '카테고리별 실시간 채팅방으로 일상적인 육아 고민과 감정 공유가 가볍게 이어지도록 구성했습니다.',
    tags: ['채팅', '실시간', '채널'],
    image: '/images/momslog-chat-room.png',
    alt: 'Moms Log chat room',
    thumbLabel: '채팅',
  },
  {
    title: 'AI 챗봇 위젯',
    desc: '플로팅 AI 챗봇이 서비스 안에서 육아 질문을 빠르게 물어볼 수 있는 진입점을 제공합니다.',
    tags: ['AI', '챗봇', '상담'],
    image: '/images/momslog-chatbot.png',
    alt: 'Moms Log chatbot widget',
    thumbLabel: '챗봇',
  },
  {
    title: '관리자 대시보드',
    desc: '커스텀 관리자 대시보드에서 가입자, 게시글, 신고, 마켓 상태를 KPI 패널로 한눈에 확인할 수 있습니다.',
    tags: ['관리자', '대시보드', 'KPI'],
    image: '/images/momslog-admin-dashboard.png',
    alt: 'Moms Log admin dashboard',
    thumbLabel: '대시',
  },
  {
    title: '관리 데이터 테이블',
    desc: '관리 테이블에서 레시피 게시글과 동네마켓 신고 내역을 빠르게 검토할 수 있도록 최근 데이터와 처리 상태를 정리했습니다.',
    tags: ['관리자', '테이블', '운영'],
    image: '/images/momslog-admin-table.png',
    alt: 'Moms Log admin tables',
    thumbLabel: '관리',
  },
  {
    title: 'Django 관리자 페이지',
    desc: '기본 Django 관리자 페이지도 함께 사용해 전반적인 콘텐츠 관리와 계정 운영을 보조하도록 구성했습니다.',
    tags: ['Django', '관리자', '운영'],
    image: '/images/momslog-admin-django.png',
    alt: 'Moms Log Django admin',
    thumbLabel: 'Django',
  },
  {
    title: '지도 기반 동네마켓',
    desc: '동네마켓 화면에서 상품 목록과 지도 기반 거래 장소 탐색을 연결해 지역 거래 흐름을 직관적으로 만들었습니다.',
    tags: ['동네마켓', '지도', '위치'],
    image: '/images/momslog-market.png',
    alt: 'Moms Log local market map',
    thumbLabel: '마켓',
  },
  {
    title: '발달 영역 레이더 차트',
    desc: '레이더 차트로 인지, 언어, 신체, 사회성 발달 균형을 한눈에 파악할 수 있도록 시각화했습니다.',
    tags: ['차트', '발달', '레이더'],
    image: '/images/momslog-radar-chart.png',
    alt: 'Moms Log radar chart',
    thumbLabel: '레이더',
  },
  {
    title: '월령별 성장 그래프',
    desc: '월령별 그래프 화면에서 색상 구분과 요약 카드를 통해 발달 추이를 시간 흐름에 따라 확인할 수 있습니다.',
    tags: ['성장', '추이', '분석'],
    image: '/images/momslog-growth-chart.png',
    alt: 'Moms Log growth chart',
    thumbLabel: '성장',
  },
];

/** @type {Slide[]} */
const portfolioSlides = [
  {
    title: '포트폴리오 메인 화면',
    desc: '전체 레이아웃과 프로젝트 3번 카드가 포함된 화면 구성입니다.',
    tags: ['메인', '레이아웃', '프로젝트'],
    image: '/images/portfolio-p1.png',
    alt: '포트폴리오 메인 화면 스크린샷',
    thumbLabel: 'P1',
  },
  {
    title: '기술 스택 섹션',
    desc: '주요 사용 기술 태그와 Frontend 그룹에 React가 반영된 화면입니다.',
    tags: ['Skills', 'React', '태그 UI'],
    image: '/images/portfolio-p2.png',
    alt: '포트폴리오 기술 스택 화면 스크린샷',
    thumbLabel: 'P2',
  },
];

export const projects = [
  {
    id: 'next-debut',
    indexLabel: 'PROJECT 01',
    title: 'NEXT DEBUT',
    subtitle:
      '사용자 선택이 연습생 성장과 결과에 반영되는 K-POP 아이돌 육성 시뮬레이션 웹 서비스',
    facts: ['2026.03 ~ 2026.04', '3인 팀 프로젝트', '팀장', '기획 · 아키텍처 설계 · 핵심 기능 주도 구현'],
    links: {
      github: 'https://github.com/moondev0725/nextdebut',
      demo: '/demo-nextdebut.html',
    },
    filters: ['Backend', 'Frontend', 'AI/ML', 'Payment', 'Realtime'],
    previewToolbarTitle: 'NEXT DEBUT UI Showcase',
    slides: nextDebutSlides,
    implementationItems: [
      '프로젝트 초기 아이디어 기획 및 전체 서비스 흐름 설계',
      '메인/게임 시작 화면, 홈페이지 기본 틀, 주요 진입 흐름 구현',
      '사용자 선택에서 상태 변화, 이벤트, 결과 반영으로 이어지는 핵심 게임 진행 구조 설계',
      '로스터 선정, 리롤, 능력치 변화, 팬 수 반영 등 인게임 진행 로직 구현',
      'Python FastAPI 기반 자연어 선택지 해석 기능 및 Gemini API 기반 AI 챗봇 구현',
      '연습생 정보, 능력치, 등급, 도감, 포토카드 보유/상세/강화 기능 구현',
      '코인 시스템과 연동된 가챠, 확률 기반 결과 처리, 상점 구매 및 보상 지급 흐름 구현',
      '일반 회원가입/로그인, Spring Security 인증/인가, OAuth2 소셜 로그인 구현',
      'WebSocket 실시간 채팅, 팬미팅, 게시판, 신고 처리 기능 구현',
      '회원, 코인 흐름, 연습생, 게시판, 신고, 팬미팅, 게임/ML 예측 통계 관리자 기능 구현',
      'Windows 포터블 실행 번들 및 PowerShell 런처 스크립트 제작',
    ],
    techStackTags: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'OAuth2',
      'JPA',
      'JSP',
      'JSTL',
      'JavaScript',
      'jQuery',
      'CSS',
      'Gradle',
      'WebSocket',
      'KakaoPay',
      'H2',
      'FastAPI',
      'scikit-learn',
      'Gemini API',
      'Python ML',
      'PowerShell',
    ],
    rightSections: [
      {
        title: '프로젝트 개요',
        paragraphs: [
          {
            segments: [
              { code: 'NEXT DEBUT' },
              {
                text:
                  '는 사용자의 개입이 연습생의 성장과 데뷔 결과에 직접 영향을 주는 참여형 K-POP 아이돌 육성 시뮬레이션 웹 서비스입니다.',
              },
            ],
          },
          {
            segments: [
              {
                text:
                  '연습생 육성 게임, 도감, 포토카드, 가챠, 상점, 결제, 팬미팅, 실시간 채팅, 커뮤니티, 관리자 기능을 하나의 서비스 흐름으로 연결했습니다.',
              },
            ],
          },
          {
            segments: [
              {
                text:
                  '프로젝트 초기 아이디어 기획부터 전체 서비스 흐름과 핵심 게임 진행 구조 설계, 주요 기능 구현까지 주도했습니다.',
              },
            ],
          },
        ],
      },
      {
        title: '담당 역할',
        paragraphs: [
          {
            segments: [
              {
                text:
                  '팀장으로서 프로젝트 방향과 화면 흐름을 정리하고, 메인/게임 시작 화면과 홈페이지 기본 틀을 구현했습니다.',
              },
            ],
          },
          {
            segments: [
              {
                text:
                  '사용자 선택, 상태 변화, 이벤트 처리, 결과 반영, 다음 단계 이동으로 이어지는 핵심 게임 진행 구조를 설계했으며, 로스터 선정, 리롤, 능력치 변화, 팬 수 반영 등 인게임 로직을 구현했습니다.',
              },
            ],
          },
          {
            segments: [
              {
                text:
                  '또한 Spring Security 기반 인증/인가, OAuth2 소셜 로그인, WebSocket 실시간 채팅, KakaoPay 결제, Python FastAPI 기반 선택지 해석, Gemini API 기반 챗봇, 관리자 페이지와 Windows 포터블 실행 번들까지 구현했습니다.',
              },
            ],
          },
        ],
      },
      {
        title: '핵심 기여',
        highlight: true,
        paragraphs: [
          {
            segments: [
              { text: '가장 큰 기여는 복잡한 게임 상태와 서비스 기능을 ' },
              { code: '사용자 선택 → 상태 변경 → 이벤트 처리 → 결과반영 → 다음 단계 이동' },
              {
                text:
                  ' 흐름으로 정리한 점입니다.',
              },
            ],
          },
          {
            segments: [
              {
                text:
                  '회원, 연습생, 게임 로그 등 여러 도메인이 얽힌 구조에서도 데이터 정합성을 유지하도록 서비스 계층과 트랜잭션 흐름을 설계했고, ML 예측 결과가 불안정할 때는 규칙 기반 Fallback 처리를 적용해 실제 플레이 흐름이 끊기지 않도록 보완했습니다.',
              },
            ],
          },
        ],
      },
      {
        title: '배포 / 실행 환경 구성',
        paragraphs: [
          {
            segments: [
              {
                text:
                  '단순히 기능 구현에 그치지 않고, 사용자가 별도의 Java나 Python 실행 환경을 직접 설치하지 않아도 프로젝트를 실행할 수 있도록 Windows 포터블 실행 번들과 런처 스크립트를 구성했습니다.',
              },
            ],
          },
          {
            segments: [
              {
                text:
                  '이를 통해 서비스 구현뿐 아니라 실행 편의성과 운영 환경까지 고려한 완성도를 높이고자 했습니다.',
              },
            ],
          },
        ],
      },
      {
        title: '트러블슈팅 / 설계 포인트',
        list: [
          '사용자 선택 하나가 능력치, 팬 수, 이벤트, 다음 페이즈에 영향을 주는 구조를 단방향 파이프라인으로 재설계했습니다.',
          '회원, 연습생, 게임 로그 등 복잡한 도메인 간 데이터 정합성을 유지하기 위해 서비스 계층과 트랜잭션 흐름을 정리했습니다.',
          'Spring Boot 서버와 Python FastAPI ML 서버를 분리해 역할을 나누고, 자연어 선택 해석 기능을 서비스 흐름에 연결했습니다.',
          '예측 신뢰도가 낮거나 의도가 모호한 입력은 규칙 기반 Fallback 처리로 보완해 초기 서비스 안정성을 확보했습니다.',
          '초기 학습 데이터 200건에서 시작해 사용자 입력 로그를 정제하며 2,000건의 고품질 학습 데이터를 확보했습니다.',
          '관리자 페이지에서 학습 데이터 수, 예측 신뢰도, Fallback 비율을 확인할 수 있도록 운영 모니터링 환경을 구성했습니다.',
        ],
      },
    ],
    enhancementDemo: true,
  },
  {
    id: 'moms-log',
    indexLabel: 'PROJECT 02',
    title: 'Moms Log',
    subtitle: '회원 활동 관리와 지도 기반 동네마켓을 연결한 지역 기반 커뮤니티 웹 서비스',
    facts: ['2025.12 ~ 2026.01', '4인 팀 프로젝트', 'Django 기반 서비스 구현', '회원 · 등급 · 동네마켓 · 지도 기능'],
    links: {
      github: 'https://github.com/moondev0725/project-momslog',
      demo: '/demo-momslog.html',
    },
    filters: ['Backend', 'Frontend', 'Realtime', 'AI/ML'],
    previewToolbarTitle: 'MOMS LOG UI Showcase',
    slides: momsLogSlides,
    implementationItems: [
      '지역 기반 커뮤니티 서비스 전체 흐름 설계',
      '메인페이지 기본 틀 구성 및 로그인 상태별 회원정보 영역 구현',
      '회원가입, 로그인, 로그아웃, 세션 기반 인증 처리 및 회원정보 저장 흐름 구현',
      '아이디, 닉네임, 이메일 중복 확인과 이메일 인증, 주소 입력 기능 구현',
      '포인트 기반 회원등급 산정, 등급 기준 관리, 등급 진행률 표시 기능 구현',
      '개인정보 수정, 이메일 변경 인증, 비밀번호 변경, 내가 작성한 글 조회 등 마이페이지 기능 구현',
      '동네마켓 상품 등록, 조회, 수정, 삭제, 찜, 댓글, 거래상태 변경 기능 구현',
      'Kakao Map API 기반 거래 위치 검색, 좌표 저장, 상품 마커 표시 및 근처 상품 조회 구현',
      'Django ORM을 활용한 사용자, 회원등급, 동네마켓 상품, 위치 데이터 모델링',
      '서버 사이드 렌더링 기반 화면 구성 및 사용자 흐름 최적화',
    ],
    techStackTags: [
      'Python',
      'Django',
      'Django ORM',
      'Django Channels',
      'HTML',
      'CSS',
      'JavaScript',
      'SQLite',
      'Kakao Map API',
      'Server Side Rendering',
    ],
    rightSections: [
      {
        title: '프로젝트 개요',
        paragraphs: [
          {
            segments: [
              { code: 'Moms Log' },
              {
                text:
                  '는 지역 사용자들이 정보 공유, 회원 활동 관리, 중고거래를 한곳에서 이용할 수 있도록 만든 지역 기반 커뮤니티 웹 서비스입니다.',
              },
            ],
          },
          {
            segments: [
              {
                text:
                  '폐쇄적으로 운영되는 기존 지역 커뮤니티의 한계를 보완하고자, 회원가입/로그인, 메인페이지 회원정보 영역, 회원등급, 마이페이지, 지도 기반 동네마켓 기능을 중심으로 사용자 맞춤형 서비스 흐름을 구현했습니다.',
              },
            ],
          },
        ],
      },
      {
        title: '담당 역할',
        paragraphs: [
          {
            segments: [
              {
                text:
                  '전체 서비스 구조와 사용자 흐름을 기획하고, 로그인 상태에 따라 달라지는 메인페이지 회원정보 영역을 구현했습니다.',
              },
            ],
          },
          {
            segments: [
              {
                text:
                  '회원가입/로그인/로그아웃, 이메일 인증, 주소 입력, 포인트 기반 회원등급, 마이페이지 계정 관리, 동네마켓 CRUD, 찜, 댓글, 거래상태 변경, Kakao Map API 기반 위치 검색과 좌표 저장, 상품 마커 표시 기능을 구현했습니다.',
              },
            ],
          },
        ],
      },
      {
        title: '핵심 기여',
        highlight: true,
        paragraphs: [
          {
            segments: [
              {
                text:
                  '핵심 기여는 회원 활동과 지역 거래 흐름을 하나의 사용자 경험으로 연결한 점입니다.',
              },
            ],
          },
          {
            segments: [
              {
                text:
                  '회원 정보, 등급, 활동 포인트, 마이페이지, 동네마켓 상품과 위치 데이터를 Django ORM 모델로 정리하고, 사용자가 가입부터 거래 위치 선택까지 자연스럽게 이동할 수 있도록 화면 흐름과 데이터 저장 구조를 설계했습니다.',
              },
            ],
          },
        ],
      },
      {
        title: '트러블슈팅 / 배운 점',
        list: [
          '회원가입 단계에서 중복 확인, 이메일 인증, 주소 입력이 순서대로 이어지도록 검증 흐름을 분리했습니다.',
          '포인트와 회원등급이 사용자 활동에 따라 변하는 구조라 등급 기준과 진행률 계산 흐름을 명확히 정리했습니다.',
          '동네마켓 상품 데이터와 지도 좌표 데이터를 함께 저장해야 해서 상품 모델과 위치 데이터의 관계를 분리해 관리했습니다.',
          'Kakao Map API를 활용해 거래 위치 검색, 좌표 저장, 마커 표시, 근처 상품 조회 흐름을 하나의 거래 경험으로 연결했습니다.',
          '서버 사이드 렌더링 기반 화면에서 로그인 상태와 사용자 데이터에 따라 UI가 자연스럽게 달라지도록 흐름을 조정했습니다.',
        ],
      },
    ],
    enhancementDemo: false,
  },
  {
    id: 'moon-portfolio',
    indexLabel: 'PROJECT 03',
    title: 'Portfolio',
    subtitle: '정적 HTML 포트폴리오를 React 컴포넌트/데이터/상태 기반 구조로 리팩토링한 개인 프로젝트',
    facts: ['2026.04', '개인 프로젝트', 'React 기반 리팩토링', '컴포넌트 · 데이터 · 상태 설계'],
    links: {
      github: 'https://github.com/moondev0725',
      demo: '/',
    },
    filters: ['Frontend'],
    previewToolbarTitle: 'PORTFOLIO UI Showcase',
    slides: portfolioSlides,
    implementationItems: [
      'public HTML 주입(dangerouslySetInnerHTML) 구조를 제거하고 React 컴포넌트 트리로 전환',
      'Header, Hero, About, Skills, Projects, Contact 섹션을 독립 컴포넌트로 분리',
      '스킬/프로젝트 정보를 data 파일로 분리해 map 기반 렌더링 구조로 개선',
      'querySelector/addEventListener 기반 슬라이더를 useState/useEffect로 재구성',
      '프로젝트 분류 필터(전체/Backend/Frontend/AI·ML/Payment/Realtime) 인터랙션 추가',
      'NEXT DEBUT 카드에 등급·강화 단계 선택형 미니 시뮬레이션 인터랙션 추가',
      'IntersectionObserver 기반 Reveal 컴포넌트로 스크롤 노출 애니메이션을 React 방식으로 전환',
    ],
    techStackTags: ['React', 'Vite', 'JavaScript', 'CSS', 'Component Design', 'State Management'],
    rightSections: [
      {
        title: '프로젝트 개요',
        paragraphs: [
          {
            segments: [
              { code: 'Portfolio' },
              {
                text:
                  '는 기존 정적 HTML 중심으로 제작한 포트폴리오를 React 기반 구조로 재설계한 리팩토링 프로젝트입니다.',
              },
            ],
          },
          {
            segments: [
              {
                text:
                  '단순 마크업 이식이 아니라 컴포넌트 분리, 데이터 중심 렌더링, 상태 기반 인터랙션으로 전환해 확장성과 유지보수성을 높이는 데 중점을 두었습니다.',
              },
            ],
          },
        ],
      },
      {
        title: '핵심 개선 포인트',
        highlight: true,
        paragraphs: [
          {
            segments: [
              {
                text:
                  '가장 큰 개선은 UI 구조를 ',
              },
              { code: '컴포넌트 + 데이터 + 상태' },
              {
                text:
                  ' 조합으로 재구성한 점입니다.',
              },
            ],
          },
          {
            segments: [
              {
                text:
                  '섹션별 책임을 분리해 변경 범위를 줄였고, 프로젝트 데이터 추가 시 코드 수정 없이 배열만 확장하면 되도록 설계했습니다.',
              },
            ],
          },
        ],
      },
      {
        title: '적용한 React 인터랙션',
        list: [
          '슬라이더 자동 전환 및 썸네일 선택을 useState/useEffect 기반으로 구현',
          '프로젝트 필터 상태를 기준으로 카드 목록을 동적으로 렌더링',
          '강화 미니 기능에서 등급/단계 선택에 따라 능력치 계산 결과를 즉시 갱신',
          'Reveal 컴포넌트로 스크롤 진입 애니메이션을 선언형으로 관리',
        ],
      },
      {
        title: '배운 점',
        list: [
          '정적 HTML을 React로 전환할 때는 마크업 이식보다 상태/데이터 설계가 유지보수성에 더 큰 영향을 줍니다.',
          '컴포넌트 책임을 명확히 나누면 기능 추가(필터, 신규 프로젝트, 인터랙션)가 훨씬 빠르고 안전해집니다.',
          '초기 데이터 스키마를 잘 잡아두면 콘텐츠 확장 시 UI 코드 변경을 최소화할 수 있습니다.',
        ],
      },
    ],
    enhancementDemo: false,
  },
];
