"use client";

import React from "react";
import { timelineStyles } from "@/lib/dummyStyles";
import { CometCard } from "@/components/ui/comet-card";

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  color: string;
}

const educationData: EducationItem[] = [
  {
    institution: "National Institute of Technology, Rourkela",
    degree: "Integrated Master of Science in Chemistry",
    location: "Rourkela, Odisha",
    period: "October 2022 – Present",
    grade: "CGPA: 8.62",
    color: "text-blue-400",
  },
  {
    institution: "Government Senior Secondary School, Baroli (Sonepat)",
    degree: "HBSE, Science (PCM)",
    location: "Sonepat, Haryana",
    period: "June 2022",
    grade: "Percentage: 91.2%",
    color: "text-purple-400",
  },
  {
    institution: "Rishikul Public Senior Secondary School, Jind",
    degree: "HBSE",
    location: "Jind, Haryana",
    period: "July 2020",
    grade: "Percentage: 97.4%",
    color: "text-green-400",
  },
];

export default function EducationPage() {
  return (
    <div className={timelineStyles.container}>
      <div className={timelineStyles.innerContainer}>
        {/* Header */}
        <div className={timelineStyles.timelineBadge}>
          <span className={timelineStyles.timelineBadgeText}>
            Academic Journey
          </span>
        </div>
        <h1 className={timelineStyles.mainTitle}>My Education</h1>
        <p className={timelineStyles.mainParagraph}>
          Academic background that shaped my skills in AI/ML and technology.
        </p>

        {/* Education Cards */}
        <div className="mt-12 space-y-6">
          {educationData.map((edu, index) => (
            <CometCard key={index} rotateDepth={8} translateDepth={10} className="w-full">
              <div className="group flex w-full items-start gap-5 rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-all duration-300 hover:bg-zinc-900/60 hover:border-zinc-700/50">
                {/* Icon */}
                <div className={`relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-800/50 transition-transform duration-300 group-hover:scale-105`}>
                  <svg
                    className={`w-7 h-7 ${edu.color}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {edu.degree} &bull; {edu.location}
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-500">
                    {edu.period}
                  </p>
                  <div className="mt-3">
                    <span className={`inline-block rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs font-medium ${edu.color}`}>
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </div>
  );
}
