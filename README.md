# YOOOONS 포트폴리오

React · Vite · TypeScript · Bun · Sass 기반의 반응형 포트폴리오입니다. 미니멀한 타이포그래피, 세이지 그린, 프로젝트 컨셉 그래픽으로 구성했습니다.

## 실행

```sh
bun install --frozen-lockfile
bun run dev
```

Bun 1.4.4로 설치하고 `bun.lock`을 포함했습니다. 현재 작업 환경에는 `../.tools/bun-windows-x64/bun.exe`도 준비되어 있습니다. Bun이 PATH에 없는 Windows 환경에서는 다음 명령으로 실행할 수 있습니다.

```powershell
$env:PATH = (Resolve-Path '..\.tools\bun-windows-x64').Path + ';' + $env:PATH
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
    organisms/   # Header, Hero, Projects, Approach, Experience, Contact
    templates/   # PortfolioLayout
  pages/         # PortfolioPage: 페이지 조합과 테마 상태
  data/          # 표시 데이터와 기존 careers.json 원본
  types/         # Project, Career, Capability 타입
  styles/        # Sass 토큰, 믹스인, 계층별 partial
```

상위 계층이 하위 컴포넌트를 조합합니다. 인터랙션 상태는 해당 organism 내부에서 관리하고, 프로젝트·AI 역량 데이터는 UI에서 분리했습니다. 별도 서버나 API 키가 필요하지 않습니다.

## 화면 구성

- 소개와 프로젝트 바로가기
- AI 플랫폼·데이터 플랫폼·웹 서비스 필터, 전체 보기, 프로젝트 상세 dialog
- AI 역량 4개 탭과 단계별 워크플로 설명
- KT → KT NexR → I-ON Communications → 진학어플라이 경력
- 기존 프로젝트 9개를 보존하는 펼침 목록
- GitHub 연결, 이전 포트폴리오 링크
- 밝은/어두운 테마, 모바일 메뉴, 키보드 탭 탐색, Escape로 dialog 닫기
- 로컬 폰트와 모션 감소 설정 지원

## 콘텐츠 수정

`src/data/portfolio.ts`에서 대표 프로젝트, AI 역량과 링크를 수정합니다. 회사별 경력 요약은 `src/components/organisms/Experience.tsx`에 있습니다. 상세한 출처와 보완 항목은 `CONTENT.md`를 참고하세요.

신규 프로젝트에 사용된 세부 프레임워크, 정량 성과, 미제공 재직 기간을 임의로 추가하지 않았습니다. AI 섹션은 사용자가 밝힌 지식과 개발 방법론을 소개하며, 실제 LLM 호출이나 AI 채팅 기능을 제공하지 않습니다.

프로젝트 썸네일은 CSS/SVG 기반 컨셉 그래픽입니다. 실제 사내 화면이나 제품 기능의 증빙 자료가 아닙니다. Pretendard 폰트의 OFL 라이선스는 `public/fonts/LICENSE.txt`에 있습니다.

## 배포

`dist/`를 정적 호스팅에 배포할 수 있습니다. Sites 설정은 `.openai/hosting.json`에 있습니다. 원본 GitHub 저장소와 `yoooons.com`의 서비스는 변경하지 않습니다.
