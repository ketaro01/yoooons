export type ProjectCategory = "AI 플랫폼" | "데이터 플랫폼" | "웹 서비스";
export type ProjectFilter = "전체" | ProjectCategory;
export interface Project {
  id: string;
  name: string;
  company: string;
  category: ProjectCategory;
  subtitle: string;
  description: string;
  contribution: string[];
  tags: string[];
  visual: "token" | "studio" | "data" | "form";
  status?: string;
  source: "사용자 제공" | "기존 포트폴리오";
}
export interface Career {
  date: string;
  project: string;
  company: string;
  env: string;
  useSkills: string[];
  description: string;
  result?: string;
}
export interface Capability {
  id: string;
  term: string;
  title: string;
  description: string;
  tools: string[];
  steps: { label: string; detail: string; file: string }[];
  reference: string;
}
