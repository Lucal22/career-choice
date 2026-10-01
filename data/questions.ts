import { DecisionTree } from "@/lib/types";

export const questions: DecisionTree = {
  P1: {
    id: "P1",
    question: "Prefere colocar a mão na massa e escrever código de software?",
    sim: { next: "P2_A" },
    nao: { next: "P2_B" },
  },
  P2_A: {
    id: "P2_A",
    question: "O teu foco principal é a criação direta de aplicações?",
    sim: { next: "P3_A2" },
    nao: { next: "P3_A1" },
  },
  P2_B: {
    id: "P2_B",
    question: "O teu objetivo envolve liderança de pessoas e negócios?",
    sim: { next: "P3_B1" },
    nao: { next: "P3_B2" },
  },
  P3_A1: {
    id: "P3_A1",
    question: "Quer focar a tua carreira na área de dados?",
    sim: { next: "P4_A1a" },
    nao: { next: "P4_A1b" },
  },
  P3_A2: {
    id: "P3_A2",
    question: "O teu objetivo é construir novos sistemas em vez de testar e proteger existentes?",
    sim: { next: "P3_A2_Dev" },
    nao: { next: "P4_A2b_QA" },
  },
  P3_A2_Dev: {
    id: "P3_A2_Dev",
    question: "Gosta mais de desenvolver para web do que para celulares?",
    sim: { next: "P4_A2a" },
    nao: {
      career: "Desenvolvedor Mobile",
      description: "Especializado na criação e publicação de aplicações nativas ou híbridas para dispositivos móveis (Android/iOS).",
      roadmap: "https://roadmap.sh/android",
      subjects: [
        "Programação para Dispositivos Móveis",
        "Programação Orientada a Objetos I / II",
        "Interface Humano Computador",
        "Engenharia de Software I"
      ]
    },
  },
  P3_B1: {
    id: "P3_B1",
    question: "Pretende fazer concurso público?",
    sim: { next: "P4_B1a" },
    nao: { next: "P4_B1b" },
  },
  P3_B2: {
    id: "P3_B2",
    question: "Se interessa mais por melhorar a experiência do usuário?",
    sim: { next: "P4_B2a" },
    nao: { next: "P4_B2b" },
  },
  P4_A1a: {
    id: "P4_A1a",
    question: "Gostas de criar algoritmos que aprendem e preveem cenários futuros?",
    sim: {
      career: "Cientista de Dados e Inteligência Artificial",
      description: "Focado na criação de algoritmos de aprendizado de máquina, estatística avançada e modelos preditivos.",
      roadmap: "https://roadmap.sh/ai-data-scientist",
      subjects: [
        "Inteligência Artificial",
        "Probabilidade e Estatística",
        "Algoritmos e Estrutura de Dados I / II",
        "Cálculo Diferencial e Integral I"
      ]
    },
    nao: {
      career: "Engenheiro de Dados (DBA)",
      description: "Focado na gestão, estruturação e armazenamento eficiente e seguro de bancos de dados relacionais e não relacionais.",
      roadmap: "https://roadmap.sh/data-engineer",
      subjects: [
        "Banco de Dados I / II",
        "Governança e Gestão da Informação",
        "Sistemas Operacionais",
        "Redes de Computadores I"
      ]
    },
  },
  P4_A1b: {
    id: "P4_A1b",
    question: "A tua prioridade é resolver problemas complexos de estrutura de dados?",
    sim: {
      career: "Engenheiro de Software",
      description: "Voltado para a resolução de problemas complexos de lógica, otimização e algoritmos de alto desempenho.",
      roadmap: "https://roadmap.sh/software-design-architecture",
      subjects: [
        "Engenharia de Software I / II",
        "Projeto e Análise de Algoritmos",
        "Algoritmos e Estrutura de Dados I / II",
        "Programação Orientada a Objetos I / II"
      ]
    },
    nao: {
      career: "Arquiteto de Sistemas Distribuídos e Cloud",
      description: "Voltado para a concepção, escalabilidade e integração de sistemas de grande escala em nuvem.",
      roadmap: "https://roadmap.sh/system-design",
      subjects: [
        "Sistemas Distribuídos",
        "Redes de Computadores I",
        "Sistemas Operacionais",
        "Arquitetura e Organização de Computadores"
      ]
    },
  },
  P4_A2a: {
    id: "P4_A2a",
    question: "Prefere desenvolver uma parte específica do que todas as partes da aplicação?",
    sim: { next: "P5_A2a" },
    nao: {
      career: "Desenvolvedor Web Fullstack",
      description: "Atua tanto no desenvolvimento visual (frontend) quanto na estrutura de servidores e dados (backend).",
      roadmap: "https://roadmap.sh/full-stack",
      subjects: [
        "Programação WEB",
        "Programação Orientada a Objetos I / II",
        "Banco de Dados I",
        "Interface Humano Computador",
        "Engenharia de Software I"
      ]
    },
  },
  P4_A2b_QA: {
    id: "P4_A2b_QA",
    question: "A tua prioridade é a prevenção de falhas e automação de testes?",
    sim: {
      career: "Engenheiro de Testes e Garantia de Qualidade (QA)",
      description: "Focado no planejamento de testes, automação de verificações e prevenção de falhas em código.",
      roadmap: "https://roadmap.sh/qa",
      subjects: [
        "Qualidade de Software",
        "Engenharia de Software I / II",
        "Programação Orientada a Objetos I / II"
      ]
    },
    nao: {
      career: "Analista de Segurança da Informação / Cibersegurança",
      description: "Focado em proteção de dados, mitigação de vulnerabilidades e conformidade de rede/sistemas.",
      roadmap: "https://roadmap.sh/cyber-security",
      subjects: [
        "Redes de Computadores I",
        "Sistemas Operacionais",
        "Sistemas Distribuídos",
        "Ética e Legislação"
      ]
    },
  },
  P4_B1a: {
    id: "P4_B1a",
    question: "O teu objetivo principal é atuar como docente e pesquisador?",
    sim: {
      career: "Professor Universitário",
      description: "Focado na docência de ensino superior, pesquisa científica e inovação tecnológica.",
      roadmap: "https://www.nature.com/articles/d41586-019-03063-x",
      subjects: [
        "Métodos e Técnicas de Pesquisa",
        "Projeto e Análise de Algoritmos",
        "Algoritmos e Estrutura de Dados I / II"
      ]
    },
    nao: {
      career: "Profissional de TI em Concursos Públicos (Perito / Analista de Tribunais / Auditor)",
      description: "Atua em órgãos estatais como perito criminal, analista judiciário de tribunais ou auditor fiscal de TI.",
      roadmap: "https://blog.grancursosonline.com.br/carreira-ti-concursos-publicos/",
      subjects: [
        "Ética e Legislação",
        "Redes de Computadores I",
        "Banco de Dados I",
        "Governança e Gestão da Informação",
        "Sistemas Operacionais"
      ]
    },
  },
  P4_B1b: {
    id: "P4_B1b",
    question: "Se interessa em ter o próprio negócio?",
    sim: {
      career: "Empreendedor / Gestor de Startups",
      description: "Voltado para a fundação e gestão de novos negócios inovadores e baseados em tecnologia.",
      roadmap: "https://www.ycombinator.com/library",
      subjects: [
        "Empreendedorismo",
        "Contabilidade",
        "Princípios da Administração I / II",
        "Gestão de Projetos"
      ]
    },
    nao: {
      career: "Analista / Gerente de Projetos de TI",
      description: "Focado na liderança de equipes, cronogramas, orçamentos e aplicação de metodologias ágeis.",
      roadmap: "https://roadmap.sh/project-manager",
      subjects: [
        "Gestão de Projetos",
        "Governança e Gestão da Informação",
        "Engenharia de Software II",
        "Princípios da Administração I"
      ]
    },
  },
  P4_B2a: {
    id: "P4_B2a",
    question: "Gostas de desenhar telas, fluxos e o visual dos sistemas?",
    sim: {
      career: "Designer / Analista de Experiência do Usuário (UX/UI)",
      description: "Focado no mapeamento da jornada do usuário, criação de protótipos e design visual de interfaces.",
      roadmap: "https://roadmap.sh/ux-design",
      subjects: [
        "Interface Humano Computador",
        "Engenharia de Software I",
        "Métodos e Técnicas de Pesquisa"
      ]
    },
    nao: {
      career: "Analista de Requisitos / Product Owner (PO)",
      description: "Focado em traduzir necessidades de negócio em especificações técnicas e priorizar o backlog do produto.",
      roadmap: "https://roadmap.sh/product-manager",
      subjects: [
        "Engenharia de Software I / II",
        "Princípios da Administração I",
        "Gestão de Projetos",
        "Governança e Gestão da Informação"
      ]
    },
  },
  P4_B2b: {
    id: "P4_B2b",
    question: "Gostas de analisar relatórios para tomada de decisões executivas?",
    sim: {
      career: "Analista de Negócios (Business Analyst)",
      description: "Voltado para a análise de relatórios executivos, apoio à decisão e otimização de processos organizacionais.",
      roadmap: "https://roadmap.sh/business-intelligence",
      subjects: [
        "Sistemas de Apoio à Decisão",
        "Governança e Gestão da Informação",
        "Princípios da Administração I / II"
      ]
    },
    nao: {
      career: "Analista de Suporte Técnico e Operações de TI / Redes",
      description: "Atua na manutenção de infraestrutura física, redes corporativas e suporte operacional a sistemas.",
      roadmap: "https://roadmap.sh/devops",
      subjects: [
        "Redes de Computadores I",
        "Arquitetura e Organização de Computadores",
        "Sistemas Operacionais"
      ]
    },
  },
  P5_A2a: {
    id: "P5_A2a",
    question: "O teu foco principal é a interface visual no navegador?",
    sim: {
      career: "Desenvolvedor Frontend",
      description: "Focado na construção da interface visual, estilos e experiência interativa no navegador.",
      roadmap: "https://roadmap.sh/frontend",
      subjects: [
        "Programação WEB",
        "Interface Humano Computador",
        "Programação Orientada a Objetos I / II",
        "Algoritmos e Estrutura de Dados I / II"
      ]
    },
    nao: {
      career: "Desenvolvedor Backend",
      description: "Focado na lógica de servidor, construção de APIs, regras de negócio e integração com banco de dados.",
      roadmap: "https://roadmap.sh/backend",
      subjects: [
        "Programação Orientada a Objetos I / II",
        "Banco de Dados I",
        "Algoritmos e Estrutura de Dados I / II",
        "Programação WEB"
      ]
    },
  },
};

export const INITIAL_QUESTION_ID = "P1";
