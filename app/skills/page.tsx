"use client";

import React from "react";
import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";
import { toolsPageStyles } from "@/lib/dummyStyles";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "HTML", icon: "/logos/html.png" },
      { name: "CSS", icon: "/logos/css.webp" },
      { name: "JavaScript", icon: "/logos/javascript.webp" },
      { name: "C++", icon: "/logos/c++.png" },
      { name: "Python", icon: "/logos/python.png" },
    ],
    color: "text-blue-400",
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "/logos/react.png" },
      { name: "Node.js", icon: "/logos/node js.jpg" },
      { name: "TensorFlow", icon: "/logos/tensorflow.png" },
      { name: "Keras", icon: "/logos/Keras_Logo.jpg" },
      { name: "Flask", icon: "/logos/flask.png" },
      { name: "Streamlit", icon: "/logos/streamlit.png" },
      { name: "Scikit-learn", icon: "/logos/scikit learn.webp" },
      { name: "OpenCV", icon: "/logos/opencv.jpg" },
    ],
    color: "text-purple-400",
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "VS Code", icon: "/logos/vscode.jpg" },
      { name: "Google Colab", icon: "/logos/google colab.png" },
      { name: "Jupyter Notebook", icon: "/logos/jupyter notebook.png" },
      { name: "GitHub", icon: "/logos/github.jpg" },
      { name: "Git", icon: "/logos/git.png" },
    ],
    color: "text-amber-400",
  },
];

export default function SkillsPage() {
  return (
    <div className={toolsPageStyles.pageContainer}>
      <div className={toolsPageStyles.contentContainer}>
        <div className={toolsPageStyles.headerContainer}>
          <h1 className={toolsPageStyles.headerTitle}>Skills & Abilities</h1>
          <p className={toolsPageStyles.headerSubtitle}>
            Technologies, frameworks, and tools I work with
          </p>
        </div>

        {skillCategories.map((category) => (
          <div key={category.category} className="mb-10">
            <h2 className={`text-xl font-semibold mb-4 ${category.color}`}>
              {category.category}
            </h2>
            <div className={toolsPageStyles.toolsGrid}>
              {category.skills.map((skill) => (
                <CometCard key={skill.name} className="w-full">
                  <div className="group flex w-full cursor-default items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900/30">
                    <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800/50 transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={toolsPageStyles.toolName}>{skill.name}</p>
                      <p className={toolsPageStyles.toolCategory}>
                        {category.category}
                      </p>
                    </div>
                  </div>
                </CometCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
