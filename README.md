# YOOOONS 포트폴리오

React · Vite · TypeScript · Bun · Sass 기반의 반응형 포트폴리오입니다. 블랙·차콜 기반의 고정 다크 테마, 중앙 정렬 타이포그래피, 메탈릭 그래픽과 넓은 여백으로 구성했습니다.

## 실행

```sh
bun install --frozen-lockfile
bun run dev
```

Bun 1.4.4로 설치하고 `bun.lock`을 포함했습니다. 명령은 저장소 루트에서 실행합니다. 현재 작업 환경에는 `.tools/bun-windows-x64/bun.exe`도 준비되어 있습니다. 이 로컬 도구는 Git에 포함되지 않으므로 새로 클론한 환경에서는 Bun을 별도로 설치하세요. 현재 Windows 환경에서는 다음 명령으로 실행할 수 있습니다.

```powershell
$env:PATH = (Resolve-Path '.\.tools\bun-windows-x64').Path + ';' + $env:PATH
bun run dev
```

```sh
bun run check  # 빠른 TypeScript 검사
bun run build  # TypeScript 검사 + 배포용 dist 생성
bun run preview
```

## Atomic Design 구조

```text
src/
  components/
    atoms/       # Icon, Tag, SectionHeading
    molecules/   # ProjectCard, ProjectVisual
    organisms/   # Header, Hero, About, Projects, Approach, Experience, Contact
    templates/   # PortfolioLayout
  pages/         # PortfolioPage: 페이지 조합
  data/          # 표시 데이터와 기존 careers.json 원본
  types/         # Project, Career, Capability 타입
  styles/        # Sass 토큰, 믹스인, 계층별 partial
```

상위 계층이 하위 컴포넌트를 조합합니다. 인터랙션 상태는 해당 organism 내부에서 관리하고, 프로젝트·AI 역량 데이터는 UI에서 분리했습니다. 별도 서버나 API 키가 필요하지 않습니다.

## 화면 구성

- 윤대훈 / Daehun Yoon 이름, 소개와 프로젝트 바로가기
- 취미에서 개발자로 이어진 이야기, 현재 담당 업무와 이메일·GitHub 링크
- 대표 프로젝트 7개: AI 플랫폼·데이터 플랫폼·웹 서비스 필터, 전체 보기, 역할·기술 스택·기간·개요·기여·성과를 구분한 상세 dialog와 npm 결과물 링크
- AI 역량 4개 탭과 단계별 워크플로 설명
- KT → KT NexR → I-ON Communications → 진학어플라이 경력
- 이전 프로젝트 9개를 소개하는 펼침 목록. eForm3는 최신 경력기술서 내용으로 표시합니다.
- GitHub 연결, 이전 포트폴리오 링크
- 고정 다크 테마, 모바일 메뉴, 키보드 탭 탐색, Escape로 dialog 닫기
- 상단 고정 헤더: 반투명 다크 배경과 블러, 데스크톱 76px·모바일 66px 높이. 앵커 이동 여백을 헤더 높이에 맞추며 모바일 메뉴는 링크 선택·Escape로 닫힙니다.
- 로컬 폰트와 모션 감소 설정 지원
- 핵심 제목의 은빛 하이라이트가 스크롤 위치에 따라 이동합니다. `ScrollShine` atom과 `useScrollShine` hook을 사용하며, 공통 스크롤 리스너 하나로 프레임당 한 번 갱신합니다. 모션 감소·고대비·인쇄에서는 단색 텍스트로 표시합니다.
- 메인 `y.`의 7.5초 부유 효과, 서로 다른 주기로 움직이는 링과 배경 조명. 모바일은 이동 폭을 줄이며 화면 밖·비활성 탭에서는 일시정지합니다. 모션 감소 설정과 인쇄에서는 정지 상태로 표시합니다.
- 스크롤 진입 시 텍스트·카드가 한 번만 나타나는 720ms 페이드/상승 효과. 데스크톱 카드 간 90ms 시차, 모바일은 시차 없이 14px 이동. `src/hooks/useScrollReveal.ts`와 `src/styles/_motion.scss`에서 조절합니다.
- 모션 감소·인쇄·키보드 포커스에서는 즉시 표시하며, 첫 화면과 스크롤 복원 위치의 콘텐츠는 숨기지 않습니다. 진입 효과는 Intersection Observer로 처리하며 별도 애니메이션 라이브러리를 사용하지 않습니다.

## 콘텐츠 수정

`src/data/portfolio.ts`에서 대표 프로젝트, AI 역량과 링크를 수정합니다. 회사별 경력 요약은 `src/components/organisms/Experience.tsx`에 있습니다. 이전 프로젝트의 소개 문구와 기술 표기는 `src/data/careerCopy.ts`에서 관리합니다.

신규 프로젝트에 사용된 세부 프레임워크, 정량 성과, 미제공 재직 기간을 임의로 추가하지 않았습니다. AI 섹션은 사용자가 밝힌 지식과 개발 방법론을 소개하며, 실제 LLM 호출이나 AI 채팅 기능을 제공하지 않습니다.

프로젝트 썸네일은 CSS/SVG 기반 컨셉 그래픽입니다. 실제 사내 화면이나 제품 기능의 증빙 자료가 아닙니다. Pretendard 폰트의 OFL 라이선스는 `public/fonts/LICENSE.txt`에 있습니다.

## 배포

현재 작업은 사용자 요청에 따라 로컬 미리보기 전용입니다. 추가 배포·원격 소스 업로드를 수행하지 않습니다. 최초 제작 때 생성한 비공개 배포본은 이전 버전입니다.

추후 별도 요청 시 `dist/`를 정적 호스팅에 배포할 수 있습니다. 기존 Sites 설정인 `.openai/hosting.json`은 로컬에만 보관하고 Git 추적에서 제외했습니다. 원본 GitHub 저장소와 `yoooons.com`의 서비스는 변경하지 않습니다.

## Git 관리

애플리케이션 소스와 Git 저장소는 프로젝트 루트에 있습니다. `src/`, `public/`, 설정 파일과 `bun.lock`을 함께 관리합니다. 의존성(`node_modules/`), 빌드 결과(`dist/`), 로컬 도구·백업(`.tools/`), 확인용 스크린샷(`qa/`), 배포 작업 파일(`.openai/`, `.sites-runtime/`, `*.tar.gz`), 로그와 환경변수 파일은 `.gitignore`에서 제외합니다. `.env.example`은 커밋할 수 있습니다.
