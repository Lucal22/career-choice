import { DecisionTree } from "@/lib/types";

export const questions: DecisionTree = {
  P1: {
    id: "P1",
    question: "Você prefere colocar a mão na massa e trabalhar com código?",
    sim: { next: "P2_A" },
    nao: { next: "P2_B" },
  },
  P2_A: {
    id: "P2_A",
    question: "Seu foco principal é a criação direta de aplicações?",
    sim: { next: "P3_A2" },
    nao: { next: "P3_A1" },
  },
  P2_B: {
    id: "P2_B",
    question: "Seu objetivo envolve liderança de pessoas e negócios?",
    sim: { next: "P3_B1" },
    nao: { next: "P3_B2" },
  },
  P3_A1: {
    id: "P3_A1",
    question: "Você quer focar sua carreira na área de dados?",
    sim: { next: "P4_A1a" },
    nao: { next: "P4_A1b" },
  },
  P3_A2: {
    id: "P3_A2",
    question: "Seu objetivo é construir novos sistemas em vez de testar e proteger existentes?",
    sim: { next: "P3_A2_Dev" },
    nao: { next: "P4_A2b_QA" },
  },
  P3_A2_Dev: {
    id: "P3_A2_Dev",
    question: "Você gosta mais de desenvolver para web do que para celulares?",
    sim: { next: "P4_A2a" },
    nao: {
      career: "Desenvolvedor Mobile",
      description: "Especializado na criação e publicação de aplicações nativas ou híbridas para dispositivos móveis (Android/iOS).",
      roadmap: "https://roadmap.sh/android",
      subjects: [
        "Programação para Dispositivos Móveis",
        "Programação Orientada a Objetos",
        "Interface Humano Computador",
        "Engenharia de Software"
      ]
    },
  },
  P3_B1: {
    id: "P3_B1",
    question: "Você pretende fazer concurso público?",
    sim: { next: "P4_B1a" },
    nao: { next: "P4_B1b" },
  },
  P3_B2: {
    id: "P3_B2",
    question: "Você se interessa mais por melhorar a experiência do usuário?",
    sim: { next: "P4_B2a" },
    nao: { next: "P4_B2b" },
  },
  P4_A1a: {
    id: "P4_A1a",
    question: "Você gosta de criar algoritmos que aprendem e preveem cenários futuros?",
    sim: {
      career: "Cientista de Dados e Inteligência Artificial",
      description: "Focado na criação de algoritmos de aprendizado de máquina, estatística avançada e modelos preditivos.",
      roadmap: "https://roadmap.sh/ai-data-scientist",
      subjects: [
        "Inteligência Artificial",
        "Probabilidade e Estatística",
        "Algoritmos e Estrutura de Dados",
        "Cálculo Diferencial e Integral"
      ]
    },
    nao: {
      career: "Engenheiro de Dados (DBA)",
      description: "Focado na gestão, estruturação e armazenamento eficiente e seguro de bancos de dados relacionais e não relacionais.",
      roadmap: "https://roadmap.sh/data-engineer",
      subjects: [
        "Banco de Dados",
        "Governança e Gestão da Informação",
        "Sistemas Operacionais",
        "Redes de Computadores"
      ]
    },
  },
  P4_A1b: {
    id: "P4_A1b",
    question: "Sua prioridade é resolver problemas complexos de estrutura de dados?",
    sim: {
      career: "Engenheiro de Software",
      description: "Voltado para a resolução de problemas complexos de lógica, otimização e algoritmos de alto desempenho.",
      roadmap: "https://roadmap.sh/software-design-architecture",
      subjects: [
        "Engenharia de Software",
        "Projeto e Análise de Algoritmos",
        "Algoritmos e Estrutura de Dados",
        "Programação Orientada a Objetos"
      ]
    },
    nao: {
      career: "Arquiteto de Sistemas Distribuídos e Cloud",
      description: "Voltado para a concepção, escalabilidade e integração de sistemas de grande escala em nuvem.",
      roadmap: "https://roadmap.sh/system-design",
      subjects: [
        "Sistemas Distribuídos",
        "Redes de Computadores",
        "Sistemas Operacionais",
        "Arquitetura e Organização de Computadores"
      ]
    },
  },
  P4_A2a: {
    id: "P4_A2a",
    question: "Você prefere desenvolver uma parte específica do que todas as partes da aplicação?",
    sim: { next: "P5_A2a" },
    nao: {
      career: "Desenvolvedor Web Fullstack",
      description: "Atua tanto no desenvolvimento visual (frontend) quanto na estrutura de servidores e dados (backend).",
      roadmap: "https://roadmap.sh/full-stack",
      subjects: [
        "Programação WEB",
        "Programação Orientada a Objetos",
        "Banco de Dados",
        "Interface Humano Computador",
        "Engenharia de Software"
      ]
    },
  },
  P4_A2b_QA: {
    id: "P4_A2b_QA",
    question: "Sua prioridade é a prevenção de falhas e automação de testes?",
    sim: {
      career: "Engenheiro de Testes e Garantia de Qualidade (QA)",
      description: "Focado no planejamento de testes, automação de verificações e prevenção de falhas em código.",
      roadmap: "https://roadmap.sh/qa",
      subjects: [
        "Qualidade de Software",
        "Engenharia de Software",
        "Programação Orientada a Objetos"
      ]
    },
    nao: {
      career: "Analista de Segurança da Informação / Cibersegurança",
      description: "Focado em proteção de dados, mitigação de vulnerabilidades e conformidade de rede/sistemas.",
      roadmap: "https://roadmap.sh/cyber-security",
      subjects: [
        "Redes de Computadores",
        "Sistemas Operacionais",
        "Sistemas Distribuídos",
        "Ética e Legislação"
      ]
    },
  },
  P4_B1a: {
    id: "P4_B1a",
    question: "Você quer atuar como docente e pesquisador?",
    sim: {
      career: "Professor Universitário",
      description: "Focado na docência de ensino superior, pesquisa científica e inovação tecnológica.",
      roadmap: "https://www.jusbrasil.com.br/artigos/como-iniciar-na-carreira-de-professor-universitario-e-a-importancia-do-mestrado-doutorado-e-da-formacao-continua/5064217986",
      subjects: [
        "Métodos e Técnicas de Pesquisa",
        "Projeto e Análise de Algoritmos",
        "Algoritmos e Estrutura de Dados"
      ]
    },
    nao: {
      career: "Profissional de TI em Concursos Públicos (Perito / Analista de Tribunais / Auditor)",
      description: "Atua em órgãos estatais como perito criminal, analista judiciário de tribunais ou auditor fiscal de TI.",
      roadmap: "https://concursos.estrategia.com/portal/como-estudar-para-concursos-de-ti/",
      subjects: [
        "Ética e Legislação",
        "Redes de Computadores",
        "Banco de Dados",
        "Governança e Gestão da Informação",
        "Sistemas Operacionais"
      ]
    },
  },
  P4_B1b: {
    id: "P4_B1b",
    question: "Você se interessa em ter o próprio negócio?",
    sim: {
      career: "Empreendedor / Gestor de Startups",
      description: "Voltado para a fundação e gestão de novos negócios inovadores e baseados em tecnologia.",
      roadmap: "https://www.sebraeplay.com.br/content/introducao-ao-empreendedorismo-primeiros-passos-para-empreender",
      subjects: [
        "Empreendedorismo",
        "Contabilidade",
        "Princípios da Administração",
        "Gestão de Projetos"
      ]
    },
    nao: {
      career: "Analista / Gerente de Projetos de TI",
      description: "Focado na liderança de equipes, cronogramas, orçamentos e aplicação de metodologias ágeis.",
      roadmap: "https://roadmap.sh/",
      subjects: [
        "Gestão de Projetos",
        "Governança e Gestão da Informação",
        "Engenharia de Software",
        "Princípios da Administração"
      ]
    },
  },
  P4_B2a: {
    id: "P4_B2a",
    question: "Você gosta de desenhar telas, fluxos e o visual dos sistemas?",
    sim: {
      career: "Designer / Analista de Experiência do Usuário (UX/UI)",
      description: "Focado no mapeamento da jornada do usuário, criação de protótipos e design visual de interfaces.",
      roadmap: "https://roadmap.sh/ux-design",
      subjects: [
        "Interface Humano Computador",
        "Engenharia de Software",
        "Métodos e Técnicas de Pesquisa"
      ]
    },
    nao: {
      career: "Analista de Requisitos / Product Owner (PO)",
      description: "Focado em traduzir necessidades de negócio em especificações técnicas e priorizar o backlog do produto.",
      roadmap: "https://roadmap.sh/product-manager",
      subjects: [
        "Engenharia de Software",
        "Princípios da Administração",
        "Gestão de Projetos",
        "Governança e Gestão da Informação"
      ]
    },
  },
  P4_B2b: {
    id: "P4_B2b",
    question: "Você gosta de analisar dados para tomada de decisões executivas?",
    sim: {
      career: "Analista de Negócios (Business Analyst)",
      description: "Voltado para a análise de relatórios executivos, apoio à decisão e otimização de processos organizacionais.",
      roadmap: "https://roadmap.sh/bi-analyst",
      subjects: [
        "Sistemas de Apoio à Decisão",
        "Governança e Gestão da Informação",
        "Princípios da Administração"
      ]
    },
    nao: {
      career: "Analista de Suporte Técnico e Operações de TI / Redes",
      description: "Atua na manutenção de infraestrutura física, redes corporativas e suporte operacional a sistemas.",
      roadmap: "https://roadmap.sh/devops",
      subjects: [
        "Redes de Computadores",
        "Arquitetura e Organização de Computadores",
        "Sistemas Operacionais"
      ]
    },
  },
  P5_A2a: {
    id: "P5_A2a",
    question: "Você foca na interface visual no navegador?",
    sim: {
      career: "Desenvolvedor Frontend",
      description: "Focado na construção da interface visual, estilos e experiência interativa no navegador.",
      roadmap: "https://roadmap.sh/frontend",
      subjects: [
        "Programação WEB",
        "Interface Humano Computador",
        "Programação Orientada a Objetos",
        "Algoritmos e Estrutura de Dados"
      ]
    },
    nao: {
      career: "Desenvolvedor Backend",
      description: "Focado na lógica de servidor, construção de APIs, regras de negócio e integração com banco de dados.",
      roadmap: "https://roadmap.sh/backend",
      subjects: [
        "Programação Orientada a Objetos",
        "Banco de Dados",
        "Algoritmos e Estrutura de Dados",
        "Programação WEB"
      ]
    },
  },
};

export const INITIAL_QUESTION_ID = "P1";
