import type {
  Capability,
  Career,
  Project,
  ProjectFilter,
} from "../types/portfolio";
import legacyCareers from "./careers.json";
import { careerCopy } from "./careerCopy";

export const profile = {
  name: "YOOOONS",
  fullName: "윤대훈",
  englishName: "Daehun Yoon",
  role: "소프트웨어 개발자",
  email: "ketaro01@naver.com",
  introduction: [
    "중학생 때 나모웹에디터와 제로보드로 작은 커뮤니티를 만들었습니다. 직접 만든 화면이 동작하는 게 재미있었고, 그 관심이 개발이라는 직업으로 이어졌습니다. C#과 .NET 기반 웹 서비스부터 React와 Vue를 사용하는 플랫폼까지, 화면과 API, 데이터 연동을 개발해왔습니다.",
    "새 기능을 만드는 것만큼, 나중에 고치고 확장하기 쉬운 구조를 중요하게 생각합니다. KT NexR에서는 라우팅·권한·레이아웃을 갖춘 관리자 프레임워크를 개발하고, AngularJS 기반 NDAP을 React로 옮겼습니다. 여러 화면에서 쓰는 UI와 Mock API의 데이터 관리 기능은 라이브러리로 분리해 npm에 배포했습니다.",
    "KT에서는 K intelligence studio, AX Works Internal Portal, Token Factory의 공통 프론트엔드 프레임워크를 개발했습니다. 플레이그라운드와 MCP Hub를 담당했고, 지금은 Token Factory의 대시보드와 모델 원가 관리 UI를 개발하고 있습니다.",
    "최근에는 OpenCode, MCP, Skills, GSD를 활용하는 개발 방식에도 관심을 두고 있습니다. AI에 맡길 작업과 직접 확인할 부분을 구분하면서, 제 개발 과정에 맞는 활용법을 익혀가고 있습니다.",
  ],
  github: "https://github.com/ketaro01",
  archive: "https://yoooons.com/",
  source:
    "https://github.com/ketaro01/yoons_portfolio/blob/master/src/data/careers.json",
};

export const projects: Project[] = [
  {
    id: "token-factory",
    name: "Token Factory",
    company: "KT",
    category: "AI 플랫폼",
    subtitle: "Platform Admin",
    visual: "token",
    status: "개발 진행 중",
    description:
      "레이아웃과 권한 관리 등 관리자 프론트엔드의 공통 기반을 개발했습니다. 현재 대시보드와 모델 원가 관리 화면을 중심으로 플랫폼 운영 UI를 구현하고 있습니다.",
    overview:
      "Token Factory의 운영을 위한 관리자 서비스입니다. 대시보드와 모델 원가 관리 화면을 개발하고 있습니다.",
    role: "공통 프레임워크 · 대시보드 · 모델 원가 관리 UI",
    contribution: [
      "관리자 서비스의 레이아웃과 권한 관리 등 공통 프론트엔드 프레임워크 개발",
      "플랫폼 운영 대시보드 UI 개발",
      "모델 원가 관리 화면 개발",
    ],
    tags: ["React", "Vite", "TypeScript"],
    source: "사용자 제공",
  },
  {
    id: "ax-works",
    name: "AX Works",
    company: "KT",
    category: "AI 플랫폼",
    subtitle: "Internal Portal",
    visual: "hub",
    description:
      "MCP와 Skill을 관리·승인하는 KT 사내 포털의 프론트엔드를 개발했습니다. 레이아웃·권한 관리 기반을 구현하고, MCP Hub 기능 개발을 중점적으로 담당했습니다.",
    overview:
      "KT 임직원이 MCP와 Skill을 한곳에서 관리하고 승인하는 B2E 포털입니다.",
    role: "공통 프레임워크 · MCP Hub 개발",
    contribution: [
      "사내 포털의 레이아웃과 권한 관리 등 공통 프론트엔드 프레임워크 개발",
      "MCP 관리·승인 허브인 MCP Hub의 프론트엔드 기능 구현",
    ],
    tags: ["React", "Vite", "TypeScript"],
    source: "사용자 제공",
  },
  {
    id: "k-intelligence",
    name: "K intelligence",
    company: "KT",
    category: "AI 플랫폼",
    subtitle: "Studio",
    visual: "studio",
    description:
      "K intelligence studio의 공통 프론트엔드 프레임워크를 개발했습니다. 레이아웃과 권한 관리 기능을 구현하고, 플레이그라운드 기능 개발을 중점적으로 담당했습니다.",
    overview:
      "KT의 K intelligence studio 개발 프로젝트입니다. 공통 프레임워크와 플레이그라운드 기능을 맡았습니다.",
    role: "공통 프레임워크 · 플레이그라운드 개발",
    contribution: [
      "Studio의 레이아웃과 권한 관리 등 공통 프론트엔드 프레임워크 개발",
      "플레이그라운드 화면 및 프론트엔드 기능 구현",
    ],
    tags: ["React", "Vite", "TypeScript"],
    source: "사용자 제공",
  },
  {
    id: "ndap",
    name: "NDAP",
    company: "KT NexR",
    category: "데이터 플랫폼",
    subtitle: "New version",
    visual: "data",
    description:
      "AngularJS 1.x 기반 NDAP을 React로 전환하며 관리자 프레임워크와 핵심 기능을 개발했습니다. 기존 기능의 80% 이상을 마이그레이션하고, 개발용 Mock API의 데이터 관리 기능을 npm 라이브러리로 분리했습니다.",
    overview:
      "기존 AngularJS 1.x 기반 NDAP을 React 기반으로 마이그레이션하고 신규 디자인을 적용한 차세대 버전 개발 프로젝트입니다.",
    period: "2023.01 — 2024.06",
    role: "관리자 프레임워크 · 핵심 기능 마이그레이션",
    contribution: [
      "라우팅·권한 관리·레이아웃을 포함한 신규 관리자 프레임워크 개발",
      "Workflow, Workbench, Storage Browser 등 핵심 화면 개발 및 신규 디자인 적용",
      "프론트엔드 개발용 Mock API와 테스트 데이터 관리 기능 개발",
    ],
    outcomes: [
      "기존 기능의 80% 이상을 마이그레이션하며 AngularJS에서 React로 전환",
      "Mock API의 데이터 관리 기능을 mock-table-data npm 라이브러리로 분리·배포",
    ],
    links: [
      {
        label: "mock-table-data · npm",
        url: "https://www.npmjs.com/package/mock-table-data",
      },
    ],
    tags: ["React", "CRA", "TypeScript", "Redux-Saga"],
    source: "사용자 제공",
  },
  {
    id: "neb",
    name: "NEB",
    company: "KT NexR",
    category: "데이터 플랫폼",
    subtitle: "NexR Bookshelf",
    visual: "data",
    description:
      "분석환경 솔루션의 기본 구조와 레이아웃을 구성하고 Explorer, Analysis, Shared Storage 화면을 개발했습니다. 반복 사용하는 UI를 공통 컴포넌트 라이브러리로 개발·배포했습니다.",
    overview:
      "KT NexR의 분석환경 솔루션 NexR Bookshelf(NEB)의 프론트엔드 개발·유지보수 프로젝트입니다.",
    period: "2020.07 — 2022.12",
    role: "분석환경 UI · 공통 컴포넌트 개발",
    contribution: [
      "관리자 프레임워크를 활용한 서비스 기본 구조 및 레이아웃 구현",
      "Explorer, Analysis, Shared Storage 화면 개발 및 유지보수",
      "UI 재사용성을 높이기 위한 @ktnexr/neb-ui 공통 컴포넌트 라이브러리 개발",
    ],
    outcomes: [
      "NEB 1.3 릴리스에 참여. 제품은 외부 고객사 수주로 이어짐",
      "공통 UI를 @ktnexr/neb-ui npm 패키지로 배포",
    ],
    links: [
      {
        label: "@ktnexr/neb-ui · npm",
        url: "https://www.npmjs.com/package/@ktnexr/neb-ui",
      },
    ],
    tags: ["React", "CRA", "TypeScript", "Redux-Saga"],
    source: "사용자 제공",
  },
  {
    id: "constantine",
    name: "Constantine",
    company: "KT NexR",
    category: "데이터 플랫폼",
    subtitle: "Frontend",
    visual: "data",
    description:
      "Vue와 Vuex로 빅데이터 플랫폼의 Dashboard와 Workbench를 개발했습니다. Apache Zeppelin을 연동한 Notebook을 구현하고, Dashboard·Workbench의 API 호출 성능을 개선했습니다.",
    overview:
      "빅데이터 플랫폼 Constantine의 UI 개발 프로젝트로, KT NexR 합류 후 처음 담당한 프로젝트입니다.",
    period: "2020.03 — 2020.06",
    role: "Dashboard · Notebook · Workbench 개발",
    contribution: [
      "Vue·Vuex 기반 Dashboard와 Workbench 프론트엔드 개발",
      "Apache Zeppelin을 연동한 Notebook 프론트엔드 개발",
    ],
    outcomes: [
      "Zeppelin 기반 Notebook 기능 구현",
      "Dashboard·Workbench의 API 호출 성능 개선",
    ],
    tags: ["Vue", "Vuex", "JavaScript"],
    source: "사용자 제공",
  },
  {
    id: "eform",
    name: "eForm3",
    company: "I-ON Communications",
    category: "웹 서비스",
    subtitle: "전자계약 서비스",
    visual: "form",
    description:
      "전자계약 에디터의 저장 구조를 Store 중심으로 개선하고 실행 취소·다시 실행과 다중 드래그 기능을 구현했습니다. Canvas 지연 로딩과 메모리 누수 문제를 해결하고 서명·도장 생성 모듈을 개발했습니다.",
    overview:
      "React와 Redux를 활용한 전자계약 서비스 eForm3의 개발·유지보수 프로젝트입니다.",
    period: "2019.05 — 2020.01",
    role: "에디터 구조 개선 · 프론트엔드 개발",
    contribution: [
      "Store 기반 데이터 저장 구조 개선 및 Undo/Redo·Multiple Drag 구현",
      "Konva Canvas 지연 로딩 처리와 메모리 누수 이슈 수정",
      "API 서비스 화면 개발",
      "서명·도장 생성 기능을 npm 모듈로 개발",
    ],
    outcomes: [
      "에디터의 편집 기능을 확장할 수 있도록 저장 구조 개선",
      "Canvas 관련 메모리 누수 문제 해결",
    ],
    tags: ["React", "Redux", "Konva", "JavaScript"],
    source: "사용자 제공",
  },
];

export const filters: ProjectFilter[] = [
  "전체",
  "AI 플랫폼",
  "데이터 플랫폼",
  "웹 서비스",
];
export function filterProjects(filter: ProjectFilter) {
  return filter === "전체"
    ? projects
    : projects.filter((project) => project.category === filter);
}
export const careers: Career[] = legacyCareers.map((career) => {
  if (career.project !== "eForm3 서비스 개발")
    return {
      ...career,
      ...careerCopy[career.project],
      company: "진학어플라이",
    };
  const project = projects.find((item) => item.id === "eform");
  return {
    ...career,
    company: "I-ON Communications",
    date: project?.period ?? "2019.05 — 2020.01",
    description: project?.description ?? career.description,
    result: project?.outcomes?.join(". ") ?? career.result,
    useSkills: project?.tags ?? career.useSkills,
  };
});
export const capabilities: Capability[] = [
  {
    id: "agentic",
    term: "Agentic Development",
    title: "작업을 나누고, 코드는 직접 검토합니다",
    description:
      "OpenCode에 작업을 맡길 때는 수정할 범위와 완료 조건을 먼저 정리합니다. 생성된 코드는 변경 내용을 읽고 직접 실행해 확인합니다.",
    tools: ["OpenCode", "AI Coding Agents", "Human-in-the-loop"],
    steps: [
      {
        label: "목표 정의",
        detail: "요구사항과 완료 조건을 구체화합니다.",
        file: "requirements.md",
      },
      {
        label: "구현",
        detail: "에이전트에 범위가 명확한 작업을 전달합니다.",
        file: "src/components/",
      },
      {
        label: "검토",
        detail: "변경 사항을 읽고 동작을 확인합니다.",
        file: "git diff",
      },
      {
        label: "검증",
        detail: "검사 결과를 확인하고 다음 작업을 결정합니다.",
        file: "bun run check",
      },
    ],
    reference: "https://opencode.ai/docs/",
  },
  {
    id: "context",
    term: "Context Engineering",
    title: "반복해서 설명할 내용은 문서로 남깁니다",
    description:
      "프로젝트 구조와 코딩 규칙은 AGENTS.md에, 반복 작업의 절차는 Skill에 정리합니다. 작업이 바뀌어도 필요한 규칙과 결정 사항을 참고할 수 있도록 합니다.",
    tools: ["Agent Skills", "AGENTS.md", "Context Management"],
    steps: [
      {
        label: "규칙",
        detail: "프로젝트 구조와 개발 규칙을 정리합니다.",
        file: "AGENTS.md",
      },
      {
        label: "지식",
        detail: "반복 업무의 지침을 Skill로 구성합니다.",
        file: "SKILL.md",
      },
      {
        label: "선택",
        detail: "현재 작업에 필요한 맥락을 선택합니다.",
        file: "context/",
      },
      {
        label: "유지",
        detail: "결정과 진행 상태를 문서에 남깁니다.",
        file: "STATE.md",
      },
    ],
    reference: "https://opencode.ai/docs/skills/",
  },
  {
    id: "mcp",
    term: "MCP Integration",
    title: "작업에 필요한 도구를 연결합니다",
    description:
      "MCP로 에이전트에 외부 도구와 리소스를 연결합니다. 연결한 서버가 어떤 기능과 권한을 제공하는지 확인하고, 작업에 필요한 도구를 사용합니다.",
    tools: ["Model Context Protocol", "Tools & Resources", "MCP Clients"],
    steps: [
      {
        label: "클라이언트",
        detail: "에이전트의 도구 연결을 구성합니다.",
        file: "opencode.json",
      },
      {
        label: "서버",
        detail: "작업에 필요한 MCP 서버를 연결합니다.",
        file: "MCP Server",
      },
      {
        label: "도구",
        detail: "제공되는 도구와 리소스를 확인합니다.",
        file: "tools / resources",
      },
      {
        label: "실행",
        detail: "권한과 결과를 확인하며 도구를 사용합니다.",
        file: "tool result",
      },
    ],
    reference: "https://modelcontextprotocol.io/docs/getting-started/intro",
  },
  {
    id: "spec",
    term: "Spec-driven Development",
    title: "무엇을 만들지 정한 뒤 구현합니다",
    description:
      "GSD를 활용해 요구사항과 작업 순서를 정리합니다. 한 번에 맡길 범위를 작게 나누고, 구현이 끝나면 처음 정한 조건을 충족하는지 확인합니다.",
    tools: ["GSD", "Specification", "Task Decomposition"],
    steps: [
      {
        label: "명세",
        detail: "만들어야 할 결과와 제약을 정의합니다.",
        file: "SPEC.md",
      },
      {
        label: "계획",
        detail: "검증 가능한 작은 작업으로 나눕니다.",
        file: "PLAN.md",
      },
      {
        label: "실행",
        detail: "계획에 따라 변경 사항을 구현합니다.",
        file: "src/",
      },
      {
        label: "검증",
        detail: "구현이 요구사항을 충족하는지 확인합니다.",
        file: "VERIFICATION.md",
      },
    ],
    reference: "https://github.com/gsd-build/get-shit-done",
  },
];
