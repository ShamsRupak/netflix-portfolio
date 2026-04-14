import { ProfileBanner, TimelineItem, Project, Certification, ContactMe, Skill } from './types';

export const profileBannerData: ProfileBanner = {
  backgroundImage: { url: '' },
  headline: "Shams Rupak — Software Engineer & AI/ML Engineer",
  resumeLink: { url: "/Shams_Rupak_Master_Resume.pdf" },
  linkedinLink: "https://linkedin.com/in/shams-rupak-262906272",
  profileSummary: "M.S. Engineering Artificial Intelligence candidate at Stony Brook University. I build production-grade ML pipelines, systems-level infrastructure, and full-stack applications. From a compiled programming language in C++ to an event streaming engine in Rust — I ship real engineering.",
};

export const timelineData: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Stony Brook University',
    title: 'Teaching Assistant — EEO 224 (C++ OOP)',
    techStack: 'C++, CMake, GitHub Actions, Object-Oriented Design',
    summaryPoints: [
      'Teaching C++ object-oriented programming to 60+ students under Professor Vibha Mane.',
      'Built automated grading pipelines with CMake and GitHub Actions CI/CD.',
      'Conduct weekly office hours, code reviews, and exam preparation sessions.',
    ],
    dateRange: 'Jan 2025 – Present',
  },
  {
    timelineType: 'education',
    name: 'Stony Brook University',
    title: 'M.S. Engineering Artificial Intelligence',
    techStack: '',
    summaryPoints: [
      'Coursework: Machine Learning, Deep Learning, Robotics, Policy Gradients, Computer Vision.',
      'Research focus: production ML systems, model monitoring, and drift detection.',
    ],
    dateRange: 'Aug 2025 – Dec 2026 (Expected)',
  },
  {
    timelineType: 'work',
    name: 'Outamation',
    title: 'AI/ML Engineering Extern',
    techStack: 'Python, LlamaIndex, RAG, OCR, FastAPI',
    summaryPoints: [
      'Built RAG pipeline with LlamaIndex reducing document processing time by 60%.',
      'Automated 1,000+ document workflows using OCR and intelligent extraction.',
    ],
    dateRange: 'Jun 2024 – Aug 2024',
  },
  {
    timelineType: 'work',
    name: 'Webacy',
    title: 'Data Science Extern',
    techStack: 'Python, Web3, Data Validation, Analytics',
    summaryPoints: [
      'Achieved 95% data validation reliability across Web3 security analytics pipelines.',
      'Built automated data quality monitoring for blockchain transaction datasets.',
    ],
    dateRange: 'Mar 2024 – May 2024',
  },
  {
    timelineType: 'work',
    name: 'Apple (Retail)',
    title: 'Technical Specialist',
    techStack: 'Customer Relations, Technical Troubleshooting, Product Expertise',
    summaryPoints: [
      'Provided expert technical support and drove product adoption across Apple ecosystem.',
      'Consistently exceeded sales targets while maintaining top customer satisfaction scores.',
    ],
    dateRange: '2022 – 2024',
  },
  {
    timelineType: 'education',
    name: 'Stony Brook University',
    title: 'B.S. Applied Mathematics & Statistics',
    techStack: '',
    summaryPoints: [
      'Foundation in linear algebra, probability, statistical inference, and optimization.',
      'Developed strong quantitative reasoning applied to ML and data science.',
    ],
    dateRange: '2020 – 2024',
  },
];

export const projectsData: Project[] = [
  {
    title: 'StreamForge',
    description: 'Kafka-inspired event streaming engine built from scratch in Rust. Commit log, TCP broker, custom wire protocol, producer/consumer SDKs, LZ4 compression, consumer groups. 304K records/sec throughput.',
    techUsed: 'Rust, TCP, LZ4, Async I/O',
    image: { url: 'https://picsum.photos/seed/streamforge/400/250' },
    link: 'https://github.com/ShamsRupak/streamforge',
  },
  {
    title: 'TinyLang',
    description: 'Programming language built from scratch in C++20. Lexer, Pratt parser, type inference, 28-opcode bytecode compiler, stack-based VM with mark-sweep garbage collector. 112 tests, 6 example programs.',
    techUsed: 'C++20, Compilers, Bytecode, GC',
    image: { url: 'https://picsum.photos/seed/tinylang/400/250' },
    link: 'https://github.com/ShamsRupak/tinylang',
  },
  {
    title: 'Nexus',
    description: 'Enterprise AI agent orchestration platform with 6 modules (core/connect/train/eval/observe/api). LoRA fine-tuning for Qwen-2.5, structured evaluation pipelines. 207 tests, 34 commits.',
    techUsed: 'Python, FastAPI, PyTorch, LoRA, LLMs',
    image: { url: 'https://picsum.photos/seed/nexusai/400/250' },
    link: 'https://github.com/ShamsRupak/nexus',
  },
  {
    title: 'SentinelBoard',
    description: 'Real-time ML monitoring with PSI drift detection, Prometheus metrics, WebSocket live updates. FastAPI + React. 47 tests. Live deployed on Render.',
    techUsed: 'Python, FastAPI, React, WebSocket, Prometheus',
    image: { url: 'https://picsum.photos/seed/sentinelboard/400/250' },
    link: 'https://github.com/ShamsRupak/sentinelboard',
  },
  {
    title: 'CacheCraft',
    description: 'Redis-inspired TCP cache server with O(1) LRU eviction, TTL expiration, shared thread-safe storage. Benchmarked p50/p95/p99 latency. Cross-platform CI with sanitizer builds.',
    techUsed: 'C++20, TCP, Concurrency, Threads',
    image: { url: 'https://picsum.photos/seed/cachecraft/400/250' },
    link: 'https://github.com/ShamsRupak/cachecraft',
  },
  {
    title: 'MicroFormer',
    description: 'GPT transformer built from scratch in PyTorch. RoPE positional encoding, RMSNorm, BPE tokenizer, multi-query attention ablation study. 112 tests.',
    techUsed: 'PyTorch, Transformers, Python',
    image: { url: 'https://picsum.photos/seed/microformer/400/250' },
    link: 'https://github.com/ShamsRupak/microformer',
  },
  {
    title: 'SAGE',
    description: 'Autonomous research agent with DAG-based hierarchical planner, ReAct tool-use loop, evidence critic scoring, provider-agnostic LLM failover. 59 tests.',
    techUsed: 'Python, LLMs, DAG Planner, ReAct',
    image: { url: 'https://picsum.photos/seed/sage-agent/400/250' },
    link: 'https://github.com/ShamsRupak/sage',
  },
  {
    title: 'PulseAPI',
    description: 'REST API with JWT auth, RBAC, PostgreSQL data modeling & migrations, Redis caching & rate limiting, health/metrics endpoints. Containerized with Docker Compose + automated CI.',
    techUsed: 'Python, FastAPI, PostgreSQL, Redis, Docker',
    image: { url: 'https://picsum.photos/seed/pulseapi/400/250' },
    link: 'https://github.com/ShamsRupak/pulseapi',
  },
  {
    title: 'AI Document Processing Suite',
    description: 'End-to-end pipeline processing 1,000+ financial docs with intelligent classification, OCR extraction, and embedding-based semantic retrieval. 60% throughput increase.',
    techUsed: 'Python, LlamaIndex, RAG, OCR',
    image: { url: 'https://picsum.photos/seed/aidocs/400/250' },
    link: 'https://github.com/ShamsRupak/ai-doc-processing-suite',
  },
  {
    title: 'NYC Weather Prediction',
    description: 'Full ML pipeline: EDA, feature engineering, model training. Accurate temperature trend predictions for NYC metro using XGBoost. 81.4% accuracy.',
    techUsed: 'Python, XGBoost, Pandas, Scikit-learn',
    image: { url: 'https://picsum.photos/seed/nycweather/400/250' },
    link: 'https://github.com/ShamsRupak',
  },
];

export const skillsData: Skill[] = [
  // Languages
  { name: 'C++20', category: 'Languages', description: 'Compilers, systems programming, OOP', icon: 'SiCplusplus' },
  { name: 'Rust', category: 'Languages', description: 'Event streaming, memory-safe systems', icon: 'SiRust' },
  { name: 'Python', category: 'Languages', description: 'Backend, ML/AI, data science', icon: 'FaPython' },
  { name: 'Java', category: 'Languages', description: 'OOP, enterprise applications', icon: 'FaJava' },
  { name: 'SQL', category: 'Languages', description: 'CTEs, window functions, PostgreSQL', icon: 'FaDatabase' },
  { name: 'JavaScript', category: 'Languages', description: 'Full-stack web development', icon: 'SiTypescript' },
  { name: 'C', category: 'Languages', description: 'Low-level systems programming', icon: 'SiCplusplus' },
  // Systems & Backend
  { name: 'FastAPI', category: 'Systems & Backend', description: 'Production REST APIs, async Python', icon: 'SiPython' },
  { name: 'JWT / OAuth2', category: 'Systems & Backend', description: 'Auth & RBAC systems', icon: 'FaDatabase' },
  { name: 'Redis', category: 'Systems & Backend', description: 'Caching, rate limiting, pub/sub', icon: 'SiRedis' },
  { name: 'PostgreSQL', category: 'Systems & Backend', description: 'Schema, migrations, analytics', icon: 'SiPostgresql' },
  { name: 'Docker', category: 'Systems & Backend', description: 'Containerization, Docker Compose', icon: 'FaDocker' },
  { name: 'Prometheus', category: 'Systems & Backend', description: 'Metrics & monitoring', icon: 'SiPrometheus' },
  { name: 'WebSockets', category: 'Systems & Backend', description: 'Real-time communication', icon: 'FaDatabase' },
  { name: 'GitHub Actions', category: 'Systems & Backend', description: 'CI/CD pipelines', icon: 'FaGitAlt' },
  { name: 'CMake', category: 'Systems & Backend', description: 'C++ build systems', icon: 'SiCmake' },
  { name: 'Cargo', category: 'Systems & Backend', description: 'Rust build & package manager', icon: 'SiRust' },
  { name: 'Linux', category: 'Systems & Backend', description: 'Systems, networking, TCP', icon: 'FaLinux' },
  // AI / ML / Data Science
  { name: 'PyTorch', category: 'AI / ML / Data Science', description: 'Deep learning, transformers, RL', icon: 'SiPytorch' },
  { name: 'Transformers', category: 'AI / ML / Data Science', description: 'GPT from scratch, attention', icon: 'SiPytorch' },
  { name: 'LoRA', category: 'AI / ML / Data Science', description: 'Fine-tuning, Qwen-2.5', icon: 'SiPytorch' },
  { name: 'LLM Agents', category: 'AI / ML / Data Science', description: 'DAG planning, ReAct loops', icon: 'FaBrain' },
  { name: 'RAG', category: 'AI / ML / Data Science', description: 'Semantic search, LlamaIndex', icon: 'FaBrain' },
  { name: 'Scikit-learn', category: 'AI / ML / Data Science', description: 'Classical ML, pipelines', icon: 'SiScikitlearn' },
  { name: 'XGBoost', category: 'AI / ML / Data Science', description: 'Gradient boosting, tabular data', icon: 'FaBrain' },
  { name: 'Drift Detection', category: 'AI / ML / Data Science', description: 'PSI/KL divergence monitoring', icon: 'FaBrain' },
  { name: 'NLP / OCR', category: 'AI / ML / Data Science', description: 'Text processing, document AI', icon: 'FaBrain' },
  // Testing & Quality
  { name: '500+ Tests', category: 'Testing & Quality', description: 'Across all projects', icon: 'FaGitAlt' },
  { name: 'ASAN / UBSAN', category: 'Testing & Quality', description: 'Sanitizer builds for C/C++', icon: 'SiCplusplus' },
  { name: 'Benchmarking', category: 'Testing & Quality', description: 'p50/p95/p99 latency profiling', icon: 'FaDatabase' },
  { name: 'GDB / Valgrind', category: 'Testing & Quality', description: 'Debugging & memory analysis', icon: 'FaLinux' },
  // Web & Tools
  { name: 'React', category: 'Web & Tools', description: 'Frontend SPAs, components', icon: 'FaReact' },
  { name: 'Node.js', category: 'Web & Tools', description: 'Backend JavaScript runtime', icon: 'FaNodeJs' },
  { name: 'NumPy / Pandas', category: 'Web & Tools', description: 'Scientific computing, DataOps', icon: 'FaPython' },
  { name: 'Chrome Extensions', category: 'Web & Tools', description: 'Browser dev, Student Buddy', icon: 'FaReact' },
];

export const certificationsData: Certification[] = [
  {
    title: 'IBM Data Fundamentals',
    issuer: 'IBM',
    issuedDate: '2024',
    link: 'https://www.credly.com/badges/0afd92c2-2611-4343-baf0-8aa6b87ffc37/linked_in_profile',
    iconName: 'ibm',
  },
  {
    title: 'Machine Learning Fundamentals',
    issuer: 'Stony Brook University — ESE 564',
    issuedDate: 'Dec 2025',
    link: '#',
    iconName: 'university',
  },
  {
    title: 'Deep Learning & Neural Networks',
    issuer: 'Stony Brook University — ESE 577',
    issuedDate: 'Dec 2025',
    link: '#',
    iconName: 'university',
  },
  {
    title: 'Robotics & Motion Planning',
    issuer: 'Stony Brook University',
    issuedDate: 'May 2026',
    link: '#',
    iconName: 'university',
  },
];

export const contactData: ContactMe = {
  profilePicture: { url: 'https://ui-avatars.com/api/?name=Shams+Rupak&size=200&background=e50914&color=fff&bold=true&font-size=0.4' },
  name: 'Shams Rupak',
  title: 'Software Engineer | AI/ML Engineer',
  summary: 'M.S. Engineering AI @ Stony Brook. Building production ML systems, compiled languages, and streaming infrastructure. Open to SWE, AI/ML, and Data Science roles.',
  companyUniversity: 'Stony Brook University',
  linkedinLink: 'https://linkedin.com/in/shams-rupak-262906272',
  email: 'shamsrupak@gmail.com',
  phoneNumber: '',
  github: 'https://github.com/ShamsRupak',
  portfolio: 'https://shamsrupak.lovable.app',
};

export const githubRepos = [
  { name: 'streamforge', description: 'Rust event streaming engine — 304K rec/s, 73 tests', stars: 0, language: 'Rust', url: 'https://github.com/ShamsRupak/streamforge' },
  { name: 'tinylang', description: 'C++20 compiled language — lexer, parser, VM, GC, 112 tests', stars: 0, language: 'C++', url: 'https://github.com/ShamsRupak/tinylang' },
  { name: 'nexus', description: 'AI agent orchestration — LoRA fine-tuning, 207 tests', stars: 0, language: 'Python', url: 'https://github.com/ShamsRupak/nexus' },
  { name: 'sentinelboard', description: 'ML monitoring dashboard — PSI drift, WebSocket, Prometheus', stars: 0, language: 'Python', url: 'https://github.com/ShamsRupak/sentinelboard' },
  { name: 'cachecraft', description: 'Redis-inspired TCP cache server — O(1) LRU, thread-safe', stars: 0, language: 'C++', url: 'https://github.com/ShamsRupak/cachecraft' },
  { name: 'microformer', description: 'GPT transformer from scratch — RoPE, RMSNorm, BPE, 112 tests', stars: 0, language: 'Python', url: 'https://github.com/ShamsRupak/microformer' },
  { name: 'sage', description: 'LLM research agent — DAG planner, ReAct loop, 59 tests', stars: 0, language: 'Python', url: 'https://github.com/ShamsRupak/sage' },
  { name: 'pulseapi', description: 'FastAPI + PostgreSQL + Redis + Docker REST API', stars: 0, language: 'Python', url: 'https://github.com/ShamsRupak/pulseapi' },
];
