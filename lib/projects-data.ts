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

/**
 * Neha's projects — sourced from resume and GitHub profile.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "Akshar : Hindi HTR & TTS",
    slug: "hindi-htr-tts",
    description: "Summer research internship project — OCR pipeline for Hindi handwritten text with Text-to-Speech synthesis",
    detailedDescription:
      "A summer research internship project (May – July 2026) focused on building an end-to-end pipeline for Hindi handwritten text recognition (HTR) combined with Text-to-Speech (TTS) synthesis. The system processes handwritten Hindi text images, applies deep learning-based OCR to extract Devanagari text, and then converts the recognized text into natural-sounding Hindi speech using TTS models.",
    image: "/akshar.png",
    tags: ["Deep Learning", "OCR", "TTS", "Research", "NLP"],
    status: "active",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Jupyter Notebook"],
    features: [
      "Handwritten Hindi text recognition using deep learning models",
      "Devanagari script OCR with high accuracy",
      "Text-to-Speech synthesis for recognized Hindi text",
      "End-to-end pipeline from image input to speech output",
      "Dataset preprocessing and augmentation for Hindi scripts",
      "Research-grade implementation with detailed documentation",
    ],
    learningOutcomes: [
      "Deep learning for optical character recognition",
      "Hindi/Devanagari script processing techniques",
      "TTS model integration and audio synthesis",
      "Research methodology and paper documentation",
      "Data preprocessing for handwritten text datasets",
      "End-to-end ML pipeline development",
    ],
    links: {
      github: "https://github.com/nehamalik12210/hindi-htr-tts",
    },
    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },
  {
    id: "6",
    title: "ReCode : LeetCode Solution Extension",
    slug: "recode-leetcode-extension",
    description: "A browser extension that enhances the LeetCode experience with solution tracking, notes, and code organization",
    detailedDescription:
      "ReCode is a browser extension designed to enhance the LeetCode problem-solving experience. It provides features for tracking solutions, adding personal notes to problems, organizing code snippets, and reviewing past submissions. Built with JavaScript and browser extension APIs for seamless integration with the LeetCode platform.",
    image: "/recode-ext.png",
    tags: ["Browser Extension", "JavaScript", "LeetCode", "Developer Tools"],
    status: "active",
    techStack: ["JavaScript", "HTML", "CSS", "Chrome Extension API"],
    features: [
      "Solution tracking and organization",
      "Personal notes for each problem",
      "Code snippet management",
      "Past submission review",
      "Seamless LeetCode integration",
      "Clean and intuitive interface",
    ],
    learningOutcomes: [
      "Browser extension development",
      "Chrome Extension API usage",
      "JavaScript DOM manipulation",
      "Local storage management",
      "UI/UX design for extensions",
      "Developer tooling",
    ],
    links: {
      github: "https://github.com/nehamalik12210/leetcode-solution-extension",
    },
    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },
  {
    id: "2",
    title: "PlantInsight : Plant Disease Detection",
    slug: "plantinsight-disease-detection",
    description: "AI-based plant disease detection system achieving 92% accuracy — built during Infosys Springboard Internship",
    detailedDescription:
      "Built during the Infosys Springboard Internship (December 2024 – February 2025), PlantInsight is an AI-powered plant disease detection system. It uses a CNN model built with TensorFlow/Keras to classify 35+ plant diseases from leaf images with 92% accuracy. The project includes a Flask-based web application for real-time crop disease detection and an interactive guide featuring 100+ diseases with symptoms, treatments, and images.",
    image: "/plantinsight.png",
    tags: ["AI", "Computer Vision", "CNN", "Flask", "Internship"],
    status: "active",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "NumPy", "Pandas"],
    features: [
      "CNN model classifying 35+ plant diseases with 92% accuracy",
      "Preprocessed and augmented 5,000+ images using OpenCV and NumPy",
      "Flask-based web app with real-time crop disease detection",
      "Interactive guide featuring 100+ diseases with symptoms and treatments",
      "Image upload and instant disease prediction interface",
      "Comprehensive disease database with treatment recommendations",
    ],
    learningOutcomes: [
      "Convolutional Neural Network architecture design",
      "Image preprocessing and data augmentation techniques",
      "Transfer learning for computer vision tasks",
      "Flask web application development",
      "Model deployment and serving",
      "Agricultural AI applications",
    ],
    links: {
      github: "https://github.com/nehamalik12210/PlantInsight-Automated-Plant-Disease-Detection",
    },
    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },
  {
    id: "3",
    title: "ML Mastery",
    slug: "ml-mastery",
    description: "An interactive learning platform for Machine Learning, Deep Learning, Mathematics, and Python from first principles.",
    detailedDescription:
      "ML Mastery is a comprehensive and interactive learning platform built for teaching machine learning, mathematics, deep learning, and Python from first principles. It includes beautiful visualizations, theoretical foundations, and practical examples across 15+ chapters covering neural networks, NLP, Computer Vision, and classic algorithms.",
    image: "/ml-mastery.png",
    tags: ["Machine Learning", "Deep Learning", "Mathematics", "Education", "Python"],
    status: "active",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Interactive visualizations for math and ML algorithms",
      "Comprehensive topics from linear algebra to neural networks",
      "Responsive UI with modern design",
      "15+ chapters with 80+ in-depth topics",
      "Code examples for hands-on learning",
      "Focus on first-principles understanding",
    ],
    learningOutcomes: [
      "Platform architecture for educational websites",
      "Complex UI development for tutorials",
      "Responsive web design",
      "Content structure for technical concepts",
      "Interactive data visualization",
      "Pedagogical approach to ML concepts",
    ],
    links: {
      github: "https://github.com/nehamalik12210/Machine-Learning-Website",
      link: "https://ml-explained.netlify.app/",
    },
    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },
  {
    id: "4",
    title: "LSTM-Based Stock Price Forecasting",
    slug: "lstm-stock-forecasting",
    description: "Deep learning stock predictor with Streamlit dashboard — RMSE 8.93, R² 0.97",
    detailedDescription:
      "An LSTM-powered stock price forecasting system built with Python and TensorFlow (April – May 2025). It pre-processes 20 years of historical stock data (2004–24) using yFinance, Pandas, and NumPy for time-series forecasting. The LSTM model achieves an RMSE of 8.93 and R-square of 0.97 for daily stock price predictions. Features a Streamlit dashboard for local visualization of LSTM predictions vs. actual trends with interactive charts and model performance metrics.",
    image: "/lstm.png",
    tags: ["Deep Learning", "LSTM", "Finance", "Time Series", "Streamlit"],
    status: "active",
    techStack: ["Python", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "Streamlit", "Matplotlib"],
    features: [
      "LSTM model with RMSE 8.93 and R-square 0.97",
      "20 years of historical stock data processing (2004–2024)",
      "Time-series forecasting with deep learning",
      "Streamlit dashboard with interactive charts",
      "LSTM predictions vs. actual trends visualization",
      "Model performance metrics and analysis tools",
    ],
    learningOutcomes: [
      "LSTM architecture for time-series data",
      "Financial data preprocessing with yFinance",
      "Time-series forecasting techniques",
      "Model evaluation metrics (RMSE, R²)",
      "Interactive data visualization with Streamlit",
      "Deep learning model optimization",
    ],
    links: {
      github: "https://github.com/nehamalik12210/LSTM-Based-Stock-Price-Forecasting",
    },
    author: "Neha",
    authorAvatar: "/nm-logo.png",
  },
  {
    id: "5",
    title: "Workflow Platform",
    slug: "workflow-platform",
    description: "A full-stack workflow management platform with task tracking, team collaboration, and project dashboards",
    detailedDescription:
      "A comprehensive workflow management platform built with modern web technologies. Features include task creation and tracking, team collaboration tools, project dashboards with analytics, and role-based access control. Built with React, Node.js, and database integration for persistent data management.",
    image: "/workflow-platform.png",
    tags: ["Full Stack", "React", "Node.js", "Web Development"],
    status: "active",
    techStack: ["React", "Node.js", "JavaScript", "CSS", "HTML"],
    features: [
      "Task creation, assignment, and tracking",
      "Team collaboration with real-time updates",
      "Project dashboards with progress analytics",
      "Role-based access control",
      "Responsive UI for desktop and mobile",
      "Database integration for persistent storage",
    ],
    learningOutcomes: [
      "Full-stack web application development",
      "React component architecture",
      "Node.js backend development",
      "Database design and integration",
      "User authentication and authorization",
      "Responsive web design",
    ],
    links: {
      github: "https://github.com/nehamalik12210/Workflow-Platform",
    },
    author: "Neha",
    authorAvatar: "/nm-logo.png",
  }
];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(slug: string | undefined | null): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}
