import type {
  Capability,
  Career,
  Project,
  ProjectFilter,
} from "../types/portfolio";
import legacyCareers from "./careers.json";

export const profile = {
  name: "YOOOONS",
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
      "Token Factory Platform Admin의 UI를 담당하여 개발하고 있습니다.",
    contribution: [
      "플랫폼 관리자 화면 UI 개발",
      "현재 진행 중인 프론트엔드 프로젝트",
    ],
    tags: ["Admin UI", "Frontend"],
    source: "사용자 제공",
  },
  {
    id: "k-intelligence",
    name: "K intelligence",
    company: "KT",
    category: "AI 플랫폼",
    subtitle: "Studio",
    visual: "studio",
    description: "KT에서 K intelligence studio 개발에 참여했습니다.",
    contribution: [
      "K intelligence studio 개발 참여",
      "KT NexR 이후 KT에서 이어온 제품 개발 경험",
    ],
    tags: ["Studio", "Product Development"],
    source: "사용자 제공",
  },
  {
    id: "ndap",
    name: "NDAP",
    company: "KT NexR",
    category: "데이터 플랫폼",
    subtitle: "New version",
    visual: "data",
    description: "NDAP 신규 버전의 프론트엔드 개발을 담당했습니다.",
    contribution: ["신규 버전 프론트엔드 개발 담당"],
    tags: ["Frontend", "New Version"],
    source: "사용자 제공",
  },
  {
    id: "constantine",
    name: "Constantine",
    company: "KT NexR",
    category: "데이터 플랫폼",
    subtitle: "Frontend",
    visual: "data",
    description: "KT NexR에서 Constantine의 프론트엔드 개발을 담당했습니다.",
    contribution: ["Constantine 프론트엔드 개발 담당"],
    tags: ["Frontend", "Platform UI"],
    source: "사용자 제공",
  },
  {
    id: "neb",
    name: "NEB",
    company: "KT NexR",
    category: "데이터 플랫폼",
    subtitle: "NE Bookshelf",
    visual: "data",
    description: "NEB(NE Bookshelf)의 프론트엔드 개발을 담당했습니다.",
    contribution: ["NE Bookshelf 프론트엔드 개발 담당"],
    tags: ["Frontend", "Platform UI"],
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
      "React 기반 전자계약 서비스의 프론트엔드를 개발하고 유지보수했습니다.",
    contribution: [
      "에디터 로직 개선 및 Canvas 이슈 대응",
      "신규 기능 추가",
      "서명·도장 생성을 위한 npm 모듈 개발",
    ],
    tags: ["React", "Redux", "Canvas"],
    source: "기존 포트폴리오",
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
export const careers: Career[] = legacyCareers;
export const capabilities: Capability[] = [
  {
    id: "agentic",
    term: "Agentic Development",
    title: "에이전트와 함께하는 개발",
    description:
      "AI 코딩 에이전트에 작업 맥락을 제공하고, 구현 결과를 개발자의 검토와 검증으로 연결하는 개발 방식입니다.",
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
    title: "맥락을 설계하는 개발",
    description:
      "프로젝트 규칙, 코드 맥락, 재사용 가능한 Agent Skills를 정리해 에이전트가 작업에 필요한 정보를 활용하도록 구성합니다.",
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
    title: "도구와 맥락의 연결",
    description:
      "Model Context Protocol을 이해하고, 에이전트와 외부 도구·리소스를 연결하는 통합 구조를 다룹니다.",
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
    title: "명세에서 시작하는 개발",
    description:
      "GSD의 명세 중심 접근을 바탕으로 요구사항, 작업 계획, 실행, 검증을 단계별로 구조화합니다.",
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
