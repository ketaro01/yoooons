# 프로젝트 작업 지침

## 소통 및 작업 범위

- 사용자에게 보이는 응답과 진행 보고는 한국어로 작성합니다. 코드·명령어·파일명은 원문을 유지합니다.
- README는 프로젝트를 소개하는 문서로 유지합니다. 개발·검증·배포 절차는 이 문서에서 관리합니다.
- 확인되지 않은 경력, 정량 성과, 역할을 추가하지 않습니다.

## 개발

- React, Vite, TypeScript, Bun, Sass를 사용합니다. 명령은 저장소 루트에서 실행합니다.
- Atomic Design 계층을 유지하며 상위 컴포넌트가 하위 컴포넌트를 조합합니다.
- 소개·대표 프로젝트·AI 역량은 `src/data/portfolio.ts`, 이전 프로젝트 문구는 `src/data/careerCopy.ts`, 회사별 경력 요약은 `src/components/organisms/Experience.tsx`에서 관리합니다.
- 반응형 레이아웃, 키보드 탐색, `prefers-reduced-motion` 동작을 유지합니다.

```sh
bun install --frozen-lockfile
bun run dev
bun run check
bun run build
bun run preview
```

`check`는 TypeScript 검사, `build`는 TypeScript 검사와 `dist/` 생성입니다. 구현 중에는 빠른 검사를 사용하고 전체 빌드는 마무리할 때 실행합니다. 문서만 변경했다면 이미 통과한 빌드를 반복하지 않습니다. 장시간 명령이 멈추면 재실행 전에 프로세스 상태를 확인합니다. 자동 수정 재시도와 계획 재작성은 각각 한 번을 초과하지 않습니다.

## 인증 및 Git 관리

- `env/.env.prod`의 `GITHUB_TOKEN`은 로컬 GitHub 작업 전용입니다. 새 환경에서는 별도로 준비합니다.
- 토큰을 출력하거나 문서·원격 URL·Git 설정에 저장하지 않습니다. 인증은 필요한 자식 프로세스 환경에서만 전달합니다.
- `env/`를 Vite 환경변수 디렉터리로 지정하지 않으며 인증 값에 `VITE_` 접두사를 붙이지 않습니다.
- `.gitignore`는 Git 추적만 제외하며 파일 읽기 권한을 제한하지 않습니다.
- `env/`, `docs/`, `.tools/`, `.openai/`, `.sites-runtime/`, `qa/`, `node_modules/`, `dist/`, 작업 메모, 로그, 배포 압축 파일을 커밋하지 않습니다. 값이 없는 `.env.example`은 `env/` 밖에서만 커밋할 수 있습니다.
- `docs/`의 운영 스크립트·검사 결과는 로컬 전용이며 새 클론에는 없습니다. 해당 도구가 없으면 동일한 검증을 수행할 도구를 먼저 준비합니다.
- 일반 작업에서는 이력을 재작성하거나 강제 푸시하지 않습니다. 사용자가 이력 정리를 요청한 경우에만 로컬 백업을 만들고, 확인한 원격 SHA를 지정한 `--force-with-lease`로 반영합니다. 백업은 원격에 올리지 않습니다.

로컬 운영 도구가 준비된 환경에서는 다음 명령을 사용합니다.

```sh
node docs/scripts/github-task.mjs inspect
node docs/scripts/github-task.mjs audit
node docs/scripts/github-task.mjs push
node docs/scripts/github-task.mjs verify
```

`audit`는 추적 파일과 과거 blob의 인증정보 패턴을 검사합니다. 패턴 검사만으로 모든 민감정보가 없다고 단정하지 않습니다. `verify`는 원격 커밋·파일 트리와 로컬의 일치 여부, 저장소 공개 상태를 확인합니다. Pages 산출물은 별도의 배포 도구로 검증합니다. 결과는 `docs/`에만 저장합니다.

## 공개 전환 및 GitHub Pages

- 소스 저장소는 `ketaro01/yoooons`, 기본 브랜치는 `main`입니다.
- 사용자가 public 전환과 GitHub Pages 배포, `yoooons.com` 연결을 요청했습니다. 운영 주소는 `https://yoooons.com/`이며 도메인 연결 대상은 `ketaro01/yoooons`입니다. 기존 `ketaro01/yoons_portfolio`의 소스는 유지합니다. DNS 변경은 별도로 필요성을 확인합니다.
- 공개 전환 전에는 현재 파일뿐 아니라 게시할 모든 브랜치·태그의 이력, 커밋 메타데이터, 배포 산출물에 인증정보나 내부 작업 자료가 없는지 확인합니다.
- Pages는 검증한 `dist/` 내용만 별도의 `gh-pages` 브랜치에 게시하는 방식을 사용합니다. `main` 푸시만으로 배포하지 않습니다.
- Vite `base`는 `./`입니다. 사용자 도메인 루트와 `/yoooons/` 하위 경로 양쪽에서 HTML·JS·CSS·폰트가 로드되는지 확인합니다. `public/CNAME`의 `yoooons.com` 설정을 빌드와 배포 브랜치에 유지합니다.
- 검증한 산출물에 `.nojekyll`을 추가하고 별도의 Git 인덱스 또는 작업 디렉터리로 `gh-pages`에 커밋합니다. 기존 배포 커밋을 부모로 유지하고 일반 푸시합니다.
- Pages 게시 소스는 `gh-pages` 브랜치의 루트로 설정합니다. 운영 문서·스크립트·인증 파일·로컬 백업을 배포 브랜치에 넣지 않습니다.
- 배포 완료는 업로드 성공만으로 판단하지 않습니다. Pages 빌드 상태, 실제 게시 주소의 응답, HTML·JS·CSS·폰트의 SHA-256 일치를 확인합니다.
- private 소스 저장소가 비공개 웹사이트를 의미하지는 않습니다. 공개 범위는 저장소와 사이트 각각 확인합니다.

로컬 배포 도구가 준비된 환경에서는 다음 명령을 사용합니다. 소스 변경은 먼저 커밋하고 `main`에 푸시합니다.

```sh
bun run build
node docs/scripts/pages.mjs validate
node docs/scripts/pages.mjs deploy
node docs/scripts/pages.mjs status
node docs/scripts/pages.mjs verify-live
```

`deploy`는 깨끗한 작업 트리, 원격 `main` 일치, 공개 저장소, 빌드 허용 목록과 인증정보 검사 통과를 요구합니다. 최초 도메인 이전은 `stage`로 기본 Pages 주소에서 검증한 뒤 수행하며, 실패하면 저장한 이전 설정으로 복구합니다. `public`과 `transfer-domain`은 일상적인 재배포에 사용하지 않습니다.
