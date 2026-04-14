import { ProfileBanner, TimelineItem, Project, Certification, ContactMe, Skill } from './types';

export const profileBannerData: ProfileBanner = {
  backgroundImage: { url: '' },
  headline: "Shams Rupak — Software Engineer & AI/ML Engineer",
  resumeLink: { url: "https://github.com/ShamsRupak" },
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
  { name: 'Python', category: 'Languages', description: 'Primary language for ML/AI and backend', icon: 'FaPython' },
  { name: 'C++', category: 'Languages', description: 'Systems programming, compilers, OOP', icon: 'SiCplusplus' },
  { name: 'Rust', category: 'Languages', description: 'Systems-level, memory-safe engineering', icon: 'SiRust' },
  { name: 'TypeScript', category: 'Languages', description: 'Full-stack web development', icon: 'SiTypescript' },
  { name: 'SQL', category: 'Languages', description: 'CTEs, window functions, analytics', icon: 'FaDatabase' },
  // AI/ML
  { name: 'PyTorch', category: 'AI / Machine Learning', description: 'Deep learning, policy gradients, RL', icon: 'SiPytorch' },
  { name: 'Scikit-learn', category: 'AI / Machine Learning', description: 'Classical ML, pipelines, evaluation', icon: 'SiScikitlearn' },
  { name: 'XGBoost', category: 'AI / Machine Learning', description: 'Gradient boosting, tabular data', icon: 'FaBrain' },
  { name: 'LlamaIndex', category: 'AI / Machine Learning', description: 'RAG pipelines, document AI', icon: 'FaBrain' },
  { name: 'HuggingFace', category: 'AI / Machine Learning', description: 'Transformers, fine-tuning, LoRA', icon: 'FaBrain' },
  // Web & Backend
  { name: 'FastAPI', category: 'Web & Backend', description: 'Production REST APIs, async Python', icon: 'SiPython' },
  { name: 'React', category: 'Web & Backend', description: 'Frontend interfaces, SPAs', icon: 'FaReact' },
  { name: 'Node.js', category: 'Web & Backend', description: 'Backend JavaScript runtime', icon: 'FaNodeJs' },
  { name: 'PostgreSQL', category: 'Web & Backend', description: 'Relational databases, analytics', icon: 'SiPostgresql' },
  { name: 'Redis', category: 'Web & Backend', description: 'Caching, pub/sub, sessions', icon: 'SiRedis' },
  // DevOps & Tools
  { name: 'Docker', category: 'DevOps & Tools', description: 'Containerization, multi-stage builds', icon: 'FaDocker' },
  { name: 'Git / GitHub', category: 'DevOps & Tools', description: 'Version control, CI/CD, Actions', icon: 'FaGitAlt' },
  { name: 'Prometheus', category: 'DevOps & Tools', description: 'Metrics, monitoring, alerting', icon: 'SiPrometheus' },
  { name: 'Linux', category: 'DevOps & Tools', description: 'System administration, scripting', icon: 'FaLinux' },
  { name: 'CMake', category: 'DevOps & Tools', description: 'C++ build systems, cross-platform', icon: 'SiCmake' },
];

export const certificationsData: Certification[] = [
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
