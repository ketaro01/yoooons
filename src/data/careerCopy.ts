import type { Career } from "../types/portfolio";

// Display copy is kept separate from the original career data.
export const careerCopy: Record<string, Partial<Career>> = {
  "서류평가 시스템 리뉴얼 개발": {
    description:
      "Classic ASP로 운영하던 서류평가 시스템을 React와 Express로 다시 개발했습니다. 프론트엔드 화면과 REST API를 구현하고 JWT 기반 사용자 인증을 적용했습니다.",
    result:
      "사용자 요청을 반영해 기능을 개선했으며, 신버전 사용자 전환율 90% 이상을 달성했습니다.",
    useSkills: [
      "JavaScript",
      "React",
      "Redux",
      "Express",
      "JWT",
      "Sass",
      "MSSQL",
    ],
  },
  "캐치어플라이 솔루션 신규 개발": {
    description:
      "Vue와 Sass로 모바일에서도 사용할 수 있는 반응형 화면을 개발했습니다. Express 기반 REST API와 JWT 인증, 사용자 등급 기능도 구현했습니다.",
    result:
      "폼 검증과 다중 파일 업로드 기능을 공통 모듈로 개발했습니다. 팀에서는 DevOps 방식을 적용해 개발과 운영 과정의 협업을 개선했습니다.",
    useSkills: [
      "JavaScript",
      "Vue",
      "Vuex",
      "Express",
      "JWT",
      "Sass",
      "PostgreSQL",
    ],
  },
  "기출은행 서비스 개발 및 관리": {
    description:
      "기출은행 서비스의 회원 관리와 유료 결제 기능을 개발하고 유지보수했습니다. 매년 업로드되는 문제 이미지의 검사를 자동화하는 프로그램을 Node.js로 만들었습니다.",
    result:
      "학교와 학원 교사가 매년 바뀌는 시험문제를 편리하게 출력할 수 있도록 기능을 개발했습니다.",
    useSkills: ["C#", "JavaScript", "ASP.NET", "jQuery", "Node.js", "MSSQL"],
  },
  "진학사 Economic Information Systems 개발 및 관리": {
    project: "경영정보 시각화 서비스 개발",
    description:
      "부서별 경영 데이터를 조회할 수 있도록 데이터 뷰를 작성하고, Power BI 화면을 개발·유지보수했습니다.",
    result:
      "수시·정시 접수 현황, 매출, 회원 가입 통계를 시각화해 각 부서에서 경영 현황을 확인할 수 있도록 했습니다.",
    useSkills: ["Power BI", "MSSQL"],
  },
  "대입, 일반 원서접수 서비스 개발": {
    project: "대입·일반 원서접수 서비스 개발",
    description:
      "대학과 고등학교의 모집 요강에 맞춰 원서접수 서비스를 개발했습니다. 매년 수시·정시 기간에 달라지는 학교별 요구사항을 반영했습니다.",
    useSkills: ["C#", "JavaScript", "ASP.NET", "jQuery", "MSSQL"],
  },
  "공통원서용 경쟁률 솔루션 개발 및 관리": {
    description:
      "공통원서 서비스에서 사용할 경쟁률 솔루션을 개발했습니다. 대학별 경쟁률 생성 도구와 일괄 관리 도구를 만들고, 타사 데이터 연동 스케줄러를 구현했습니다.",
    result:
      "작업 스케줄러로 타사 연동을 자동화하고 감시·복구 프로그램을 개발했습니다. 담당한 3년 동안 연동 관련 사고를 줄였습니다.",
    useSkills: [
      "C#",
      "JavaScript",
      "ASP.NET",
      "jQuery",
      "Windows Forms",
      "Windows Task Scheduler",
      "MSSQL",
    ],
  },
  "스마트 경쟁률 개발": {
    description:
      "여러 대학의 경쟁률을 한곳에서 확인할 수 있는 종합 경쟁률 사이트를 개발했습니다.",
    result:
      "타사 원서접수 서비스와 연동해 접수 시작·마감 상태를 반영하고, 마감 처리 과정의 연동 문제를 해결했습니다.",
    useSkills: ["C#", "JavaScript", "ASP.NET", "jQuery", "MSSQL"],
  },
  "데이터 전송 리뉴얼": {
    project: "원서접수 데이터 전송 시스템 개편",
    description:
      "원서접수 데이터를 DB 간에 직접 전송하던 시스템을 서버 간 전송 방식으로 개편했습니다. Quartz를 이용해 양방향 데이터 전송을 수행하는 스케줄러 클라이언트를 개발했습니다.",
    result:
      "대학별 환경에서 스케줄러를 직접 설정하기 어려운 문제를 전용 클라이언트로 해결했습니다.",
    useSkills: [
      "C#",
      "JavaScript",
      "ASP.NET",
      "Windows Forms",
      "Windows Service",
      "Quartz",
      "WCF",
      "MSSQL",
    ],
  },
};
