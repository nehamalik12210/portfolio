export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

export const projects: Project[] = [
  /* =========================================================
     1. CUSTOMER CHURN PREDICTION
     ========================================================= */
  {
    id: "7",
    title: "Customer Churn Prediction",
    slug: "customer-churn-prediction",

    description:
      "Interpretable customer-churn modeling with tuned XGBoost, SHAP explainability, and retention-focused analysis.",

    detailedDescription:
      "An end-to-end customer churn prediction project built on the IBM Telco Customer Churn dataset. The workflow covers exploratory analysis, feature engineering, class-imbalance handling, comparison of multiple classification models, XGBoost hyperparameter tuning, cost-aware threshold analysis, and SHAP-based interpretation of churn drivers. The final tuned XGBoost model was evaluated on an untouched holdout set.",

    image: "/Customer_Churn.png",

    tags: [
      "Data Science",
      "XGBoost",
      "SHAP",
      "Classification",
      "Customer Analytics",
    ],

    status: "active",

    techStack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "SHAP",
      "Imbalanced-learn",
      "Matplotlib",
      "Seaborn",
    ],

    features: [
      "Exploratory analysis of customer churn patterns",
      "Feature engineering for customer behavior and service usage",
      "Comparison of Logistic Regression, Random Forest, XGBoost, LightGBM, and SMOTE-based modeling",
      "RandomizedSearchCV-based XGBoost tuning",
      "Class-imbalance handling with class weighting and SMOTE",
      "SHAP global feature importance and individual explanations",
      "Cost-aware decision-threshold analysis",
      "High-risk customer profiling",
      "Evaluation on a separate untouched holdout set",
    ],

    learningOutcomes: [
      "End-to-end binary classification workflow",
      "Handling imbalanced classification datasets",
      "Hyperparameter optimization",
      "Model comparison and evaluation",
      "Explainable AI using SHAP",
      "Business-oriented interpretation of ML predictions",
    ],

    links: {
      github:
        "https://github.com/nehamalik12210/customer-churn-prediction",
    },

    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },

  /* =========================================================
     2. DEMAND FORECASTING
     ========================================================= */
  {
    id: "8",
    title: "Demand Forecasting",
    slug: "demand-forecasting",

    description:
      "Store-level daily sales forecasting using leakage-safe time-series features and gradient-boosted models.",

    detailedDescription:
      "A time-series forecasting project based on the Rossmann Store Sales dataset. The pipeline combines lag features, rolling statistics, calendar effects, promotions, holidays, store metadata, and competition information while using a chronological holdout to prevent future-data leakage. XGBoost, LightGBM, SARIMA, and a naive weekly baseline were compared, followed by store-level error analysis and business interpretation of demand drivers.",

    image: "/Demand_Forecasting.png",

    tags: [
      "Time Series",
      "Forecasting",
      "XGBoost",
      "LightGBM",
      "Business Analytics",
    ],

    status: "active",

    techStack: [
      "Python",
      "Pandas",
      "XGBoost",
      "LightGBM",
      "Statsmodels",
      "Matplotlib",
      "Seaborn",
    ],

    features: [
      "Store-level daily sales forecasting",
      "Leakage-safe lag features",
      "7-day and 28-day rolling statistics",
      "Calendar and seasonality features",
      "Promotion and holiday features",
      "XGBoost and LightGBM forecasting models",
      "SARIMA benchmark",
      "Chronological time-based holdout",
      "Store-level forecasting error analysis",
      "Business interpretation of promotion and demand patterns",
    ],

    learningOutcomes: [
      "Time-series feature engineering",
      "Leakage-safe forecasting design",
      "Lag and rolling-window modeling",
      "Chronological evaluation",
      "Forecast error analysis",
      "Business interpretation of forecasting results",
    ],

    links: {
      github:
        "https://github.com/nehamalik12210/demand-forecasting",
    },

    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },

  /* =========================================================
     3. INTELLIRAG
     ========================================================= */
  {
    id: "9",
    title: "IntelliRAG",
    slug: "intellirag",

    description:
      "Full-stack RAG knowledge-base system with hybrid retrieval, reranking, source citations, and streaming LLM responses.",

    detailedDescription:
      "A full-stack Retrieval-Augmented Generation platform for querying user-uploaded knowledge bases. IntelliRAG combines document ingestion and chunking with dense semantic retrieval, sparse retrieval, Reciprocal Rank Fusion, optional cross-encoder reranking, and LLM generation. The system also supports streaming responses, source citations, resumable ingestion, isolated knowledge bases, and multiple LLM providers.",

    image: "/IntelliRAG.png",

    tags: [
      "RAG",
      "LLM",
      "FastAPI",
      "Hybrid Search",
      "Vector Database",
    ],

    status: "active",

    techStack: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "Qdrant",
      "SQLite",
      "LangChain",
      "SPLADE",
    ],

    features: [
      "Multi-format document ingestion",
      "Document chunking and indexing",
      "Dense semantic retrieval",
      "Sparse keyword retrieval",
      "Reciprocal Rank Fusion",
      "Optional cross-encoder reranking",
      "Streaming responses through SSE",
      "Source citation extraction",
      "Resumable ingestion pipeline",
      "Isolated knowledge bases",
      "Qdrant vector storage",
      "SQLite metadata and conversation storage",
      "Multiple LLM provider support",
    ],

    learningOutcomes: [
      "End-to-end RAG system architecture",
      "Hybrid retrieval design",
      "Vector database integration",
      "Reranking techniques",
      "Streaming AI application architecture",
      "FastAPI backend design",
      "React frontend integration",
      "Multi-provider LLM routing",
    ],

    links: {
      github:
        "https://github.com/nehamalik12210/IntelliRAG",
    },

    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },

  /* =========================================================
     4. RECODE
     ========================================================= */
  {
    id: "6",
    title: "ReCode — AI Code Analyzer",
    slug: "recode-leetcode-extension",

    description:
      "AI-powered Chrome extension for code analysis, complexity insights, reviews, test generation, and smarter coding assistance.",

    detailedDescription:
      "ReCode is a Chrome extension that analyzes code directly from coding platforms or manual input. It combines Gemini-powered analysis with local logic to provide complexity analysis, code-quality feedback, alternative approaches, generated test cases, hints, and explanations through a ChatGPT-style interface. It supports platforms including LeetCode, GeeksforGeeks, CodeChef, and other pages containing visible code blocks.",

    image: "/recode-ext.png",

    tags: [
      "AI",
      "Chrome Extension",
      "JavaScript",
      "Developer Tools",
      "Code Analysis",
    ],

    status: "active",

    techStack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Chrome Extensions API",
      "Gemini API",
    ],

    features: [
      "AI-powered code analysis",
      "Time and space complexity analysis",
      "Code-quality feedback",
      "Alternative solution suggestions",
      "Automated test-case generation",
      "Smart hints and explanations",
      "Manual code input",
      "Automatic code extraction from supported websites",
      "ChatGPT-style response interface",
      "Typing animation for AI responses",
      "Complexity graphs",
      "Light and dark themes",
      "Clipboard integration",
      "Chrome side-panel integration",
    ],

    learningOutcomes: [
      "Chrome extension development",
      "Manifest V3 architecture",
      "Browser scripting and content extraction",
      "AI API integration",
      "Interactive extension UI design",
      "Client-side state and storage",
      "Developer-tool product design",
    ],

    links: {
      github:
        "https://github.com/nehamalik12210/leetcode-solution-extension",
    },

    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },

  /* =========================================================
     5. ML MASTERY
     ========================================================= */
  {
    id: "3",
    title: "ML Mastery",
    slug: "ml-mastery",

    description:
      "Interactive learning platform for Machine Learning, Deep Learning, Mathematics, NLP, Computer Vision, and Python from first principles.",

    detailedDescription:
      "ML Mastery is an interactive educational website designed to teach machine learning from first principles. The platform organizes content across Python, Mathematics, Machine Learning, and Deep Learning, with visual explanations, interactive examples, and hands-on Python-oriented learning material.",

    image: "/ml-mastery.png",

    tags: [
      "Machine Learning",
      "Deep Learning",
      "Mathematics",
      "Education",
      "Python",
    ],

    status: "active",

    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    features: [
      "Interactive learning interface",
      "Mathematics foundations",
      "Machine learning algorithms",
      "Deep learning concepts",
      "NLP topics",
      "Computer vision topics",
      "Python learning material",
      "Visual explanations",
      "Hands-on examples",
      "15+ chapters and 80+ topics",
    ],

    learningOutcomes: [
      "Educational website architecture",
      "Interactive technical-content design",
      "Responsive frontend development",
      "Structuring complex ML concepts",
      "Visual presentation of mathematical ideas",
      "Designing learning-oriented user experiences",
    ],

    links: {
      github:
        "https://github.com/nehamalik12210/Machine-Learning-Website",
      link: "https://ml-explained.netlify.app/",
    },

    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },

  /* =========================================================
     6. LSTM STOCK PRICE FORECASTING
     ========================================================= */
  {
    id: "4",
    title: "LSTM-Based Stock Price Forecasting",
    slug: "lstm-stock-forecasting",

    description:
      "Streamlit-based stock trend forecasting application using an LSTM model and historical Yahoo Finance data.",

    detailedDescription:
      "A stock trend forecasting application built with TensorFlow/Keras and Streamlit. Users can enter a stock ticker and inspect historical closing prices, 100-day and 200-day moving averages, and LSTM predictions against actual prices. The application downloads historical market data with yfinance, scales the series, creates 100-day sequences, and evaluates predictions using MAE, MSE, RMSE, MAPE, and R².",

    image: "/lstm.png",

    tags: [
      "Deep Learning",
      "LSTM",
      "Finance",
      "Time Series",
      "Streamlit",
    ],

    status: "active",

    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
      "yfinance",
      "Matplotlib",
    ],

    features: [
      "Interactive stock ticker input",
      "Historical Yahoo Finance data retrieval",
      "Closing-price visualization",
      "100-day moving average",
      "200-day moving average",
      "LSTM-based sequence prediction",
      "Predicted-versus-actual visualization",
      "MAE, MSE, RMSE, MAPE, and R² evaluation",
      "Streamlit interactive dashboard",
    ],

    learningOutcomes: [
      "LSTM modeling for sequential data",
      "Financial time-series preprocessing",
      "Sequence-window construction",
      "Feature scaling for neural networks",
      "Regression model evaluation",
      "Interactive ML application development",
    ],

    links: {
      github:
        "https://github.com/nehamalik12210/LSTM-Based-Stock-Price-Forecasting",
    },

    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },

  /* =========================================================
     7. WORKFLOW DECISION PLATFORM
     ========================================================= */
  {
    id: "5",
    title: "Workflow Decision Platform",
    slug: "workflow-platform",

    description:
      "Configurable pure-Python workflow decision engine with rules, risk scoring, idempotency, retries, audit trails, and a REST API.",

    detailedDescription:
      "A production-oriented workflow decision engine implemented in pure Python with zero external runtime dependencies. Structured requests pass through configurable JSON-defined workflows containing rule-evaluation, scoring, external-dependency, and decision stages. The platform supports idempotency, retry and exponential-backoff logic, SQLite-backed state and audit trails, simulated external services, hot-reloadable workflow configurations, and a REST API.",

    image: "/workflow-platform.png",

    tags: [
      "Python",
      "Backend",
      "Rules Engine",
      "REST API",
      "System Design",
    ],

    status: "active",

    techStack: [
      "Python",
      "SQLite",
      "JSON",
      "HTTP",
      "Pytest",
    ],

    features: [
      "JSON-configurable workflows",
      "Hot-reloadable workflow definitions",
      "Safe expression-based rules engine",
      "Weighted risk scoring",
      "Auto-approve and auto-reject thresholds",
      "SHA-256 idempotency keys",
      "Retry and exponential backoff",
      "Manual-review escalation",
      "SQLite-backed audit trail",
      "State and lifecycle management",
      "Simulated credit, fraud, and compliance services",
      "Pure-Python REST API",
      "Comprehensive test suite",
    ],

    learningOutcomes: [
      "Backend system architecture",
      "Rules-engine design",
      "Workflow orchestration",
      "State and audit management",
      "Idempotency and retry patterns",
      "REST API implementation",
      "Config-driven system design",
      "Testing complex business logic",
    ],

    links: {
      github:
        "https://github.com/nehamalik12210/Workflow-Platform",
    },

    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },
];

/* =========================================================
   HELPERS
   ========================================================= */

/** Return a project by slug or null. */
export function getProjectBySlug(
  slug: string | undefined | null,
): Project | null {
  const normalized = decodeURIComponent(String(slug ?? "")).trim();

  if (!normalized) {
    return null;
  }

  return (
    projects.find((project) => project.slug === normalized) ?? null
  );
}

/** Return all project slugs. */
export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

/** Compose the canonical project URL. */
export function getProjectUrl(
  project: Project | { slug: string },
): string {
  return `/projects/${project.slug}`;
}

/** Return all projects. */
export function getAllProjects(): Project[] {
  return [...projects];
}