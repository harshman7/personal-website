import type { Project } from "./types";

const gh = (repo: string) => `https://github.com/harshman7/${repo}`;

/**
 * Higher `order` appears first. Resume-highlighted projects use detailed bullets from resume.pdf.
 */
export const projects: Project[] = [
  {
    title: "StreamVault (Mini OTT video streaming platform)",
    description:
      "End-to-end OTT stack: FFmpeg adaptive HLS with AES-128, FastAPI manifest and DRM key flow, PostgreSQL, S3/CloudFront-style delivery, and a React + Shaka Player client.",
    techStack: ["FastAPI", "FFmpeg", "HLS", "PostgreSQL", "AWS S3", "React", "TypeScript", "Shaka Player"],
    projectDate: "2026",
    features: [
      "Built a full OTT pipeline with FFmpeg: three adaptive HLS renditions (1080p/720p/480p, 6s segments), AES-128 encryption, and a FastAPI key-delivery path modeled on Widevine/FairPlay-style DRM flows.",
      "Implemented manifest and content APIs (FastAPI, asyncpg, PostgreSQL) with signed CloudFront URLs for segments, mirroring production CDN usage (e.g. Crave, Disney+).",
      "Shipped a React + TypeScript UI with Shaka Player: ABR playback, custom DRM key URI handling, and an S3-backed segment proxy—ingest through browser playback.",
    ],
    githubUrl: gh("StreamVault"),
    liveUrl: "",
    order: 32,
  },
  {
    title: "DocSage (Intelligent document processing & analytics)",
    description:
      "Local zero-cost “insight agent” over an IDP pipeline: PDF ingest, OCR, structured extraction, RAG, and tool-using LLM for SQL and analytics—FastAPI + Streamlit, Docker, PostgreSQL.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "FAISS", "Ollama", "Docker", "Streamlit", "RAG"],
    projectDate: "2026",
    features: [
      "Ingests PDFs, runs OCR, extracts structured fields, and persists to a relational database.",
      "RAG with sentence-transformer embeddings and FAISS to ground answers in document text.",
      "Tool-using LLM (SQL, metrics, RAG) for questions such as invoice aging and month-over-month trends from real DB queries.",
      "Exposed via FastAPI and Streamlit; docker-compose with PostgreSQL to mirror Textract + RDS + OpenSearch + Bedrock style architecture at no cloud cost.",
    ],
    githubUrl: gh("insight-agent-idp"),
    liveUrl: "",
    order: 31,
  },
  {
    title: "Whimsy (Social media application)",
    description:
      "CMPUT 301 team project: short-form “moods” social app on Firebase with Android (Kotlin/Java), plus AI-driven imagery and responses.",
    techStack: ["Firebase", "Java", "Kotlin", "XML", "Android", "DALL·E"],
    projectDate: "2025",
    features: [
      "Full-stack social platform for moods with Firebase auth, storage, and sign-in/sign-up flows.",
      "Social features: follow graph, real-time feeds, tagging, profile editing, and follow recommendations.",
      "DALL·E image generation and automatic mood explanations via the `#generate-response` hashtag.",
    ],
    githubUrl: "https://github.com/cmput301-w25/whimsy",
    liveUrl: "",
    order: 30,
  },
  {
    title: "Retire Ready Inc — Marketing site",
    description:
      "Production marketing site for a financial consulting and retirement planning business.",
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vercel"],
    projectDate: "2026",
    features: ["Multi-page App Router, services, and contact experience"],
    githubUrl: gh("retire-ready-website"),
    liveUrl: "https://retirereadyinc.ca",
    order: 19,
  },
  {
    title: "FORMULA 1 race outcome predictor & analytics dashboard",
    description:
      "Predictive modeling on Grand Prix data with a Streamlit dashboard (not listed on the one-page resume PDF; kept as a portfolio build).",
    techStack: ["Python", "Pandas", "NumPy", "LightGBM", "scikit-learn", "SHAP", "FastF1", "Streamlit"],
    projectDate: "2025",
    features: [
      "Feature engineering and model interpretability (e.g. SHAP)",
      "Streamlit UI for exploring predictions and team/driver views",
    ],
    githubUrl: "",
    liveUrl: "",
    order: 18,
  },
  {
    title: "ABCMS — Automotive body control module",
    description:
      "Embedded C11 BCM-style module: CAN, FSMs, fault handling, and tests.",
    techStack: ["C11", "CMake", "CAN", "CppUTest", "SIL"],
    projectDate: "2026",
    features: ["Message-driven design and static memory constraints"],
    githubUrl: gh("ABCMS"),
    liveUrl: "",
    order: 16,
  },
  {
    title: "DEAL-R — Event-sourced poker engine",
    description:
      "Event-sourced Hold'em with deterministic replay, FastAPI, and PostgreSQL.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "WebSockets", "Pydantic"],
    projectDate: "2026",
    features: ["Pure reducer engine; idempotent server commands"],
    githubUrl: gh("DEAL-R"),
    liveUrl: "",
    order: 15,
  },
  {
    title: "Beyond the Apex — F1 analytics dashboard",
    description: "F1 analytics and predictions with React, Vite, and Recharts.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "Recharts", "React Router"],
    projectDate: "2025",
    features: ["Dashboards, exports, and live-data client stub"],
    githubUrl: gh("Beyond_the_Apex"),
    liveUrl: "",
    order: 14,
  },
  {
    title: "Alpha Centauri — Virtual try-on (CPU real-time)",
    description: "Webcam virtual try-on: pose, Kalman, TPS/affine warp, lighting, compositing.",
    techStack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    projectDate: "2026",
    features: ["Modular pipeline and evaluation hooks"],
    githubUrl: gh("Alpha_Centauri"),
    liveUrl: "",
    order: 13,
  },
  {
    title: "Lossless Legends — Virtual try-on (group)",
    description: "CMPUT 414 group project: real-time try-on and evaluation docs.",
    techStack: ["Python", "OpenCV", "MediaPipe", "PyTorch"],
    projectDate: "2026",
    features: ["Config-driven warping, optional GPU path"],
    githubUrl: gh("Lossless_Legends"),
    liveUrl: "",
    order: 12,
  },
  {
    title: "Seven Senses — Retreat website",
    description: "Marketing site: Next.js 16, Tailwind v4, Framer Motion.",
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    projectDate: "2026",
    features: ["Responsive marketing sections and motion"],
    githubUrl: gh("Seven-Senses"),
    liveUrl: "",
    order: 11,
  },
];
