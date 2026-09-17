"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import ExperienceFlashCard from "@/components/ui/experience-flash-card";

interface Experience {
  id: string;
  title: string;
  organization: string;
  type: string;
  period: string;
  location: string;
  image: string;
  imageAlt: string;
  description: string;
  results: {
    value: string;
    label: string;
  }[];
  techStack: string[];
  github: string;
  accent: "blue" | "emerald";
}

const experiences: Experience[] = [
  {
    id: "akshar",
    title: "Akshar — Hindi Handwritten Text Recognition",
    organization: "National Institute of Technology, Rourkela",
    type: "Summer Research Project",
    period: "May 2026 — Jul 2026",
    location: "Rourkela, Odisha",
    image: "/akshar.png",
    imageAlt: "Akshar Hindi handwritten text recognition application",
    description:
      "Developed a page-level OCR system for handwritten Devanagari documents using YOLOv8s word detection, TrOCR recognition, and document post-processing.",
    results: [
      {
        value: "0.994",
        label: "Detection F1",
      },
      {
        value: "95.17%",
        label: "Character Accuracy",
      },
      {
        value: "70.1%",
        label: "Page Word Accuracy",
      },
    ],
    techStack: [
      "Python",
      "PyTorch",
      "TrOCR",
      "YOLOv8",
      "OpenCV",
    ],
    github: "https://github.com/nehamalik12210/hindi-htr-tts",
    accent: "blue",
  },

  {
    id: "plantinsight",
    title: "PlantInsight — Plant Disease Detection",
    organization: "Infosys Springboard",
    type: "Online Internship",
    period: "Dec 2024 — Feb 2025",
    location: "Remote",
    image: "/plantinsight.png",
    imageAlt: "PlantInsight plant disease detection application",
    description:
      "Developed an end-to-end plant disease detection system using image preprocessing, leaf segmentation, a custom CNN, and Flask deployment.",
    results: [
      {
        value: "~92%",
        label: "Test Accuracy",
      },
      {
        value: "38",
        label: "Plant Classes",
      },
      {
        value: "70 / 20 / 10",
        label: "Train / Val / Test",
      },
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Flask",
    ],
    github:
      "https://github.com/nehamalik12210/PlantInsight-Automated-Plant-Disease-Detection",
    accent: "emerald",
  },
];

const accentStyles = {
  blue: {
    text: "text-blue-400",
    brightText: "text-blue-300",
    dot: "bg-blue-400",
    border: "border-blue-400/20",
    soft: "bg-blue-400/5",
    line: "via-blue-400/45",
    imageBorder: "border-blue-400/45",
    imageGlow: "shadow-[0_0_16px_rgba(96,165,250,0.10)]",

    github: {
      border: "border-blue-400/35",
      text: "text-blue-300",
      icon: "text-blue-300",

      hoverBorder: "hover:border-blue-300/80",

      hoverText: "group-hover/github:text-blue-50",

      hoverIcon: "group-hover/github:text-blue-100",

      hoverBg:
        "hover:bg-[linear-gradient(135deg,rgba(37,99,235,0.20),rgba(14,32,67,0.96),rgba(15,23,42,0.98))]",

      hoverGlow:
        "hover:shadow-[0_0_12px_rgba(59,130,246,0.35),0_0_32px_rgba(59,130,246,0.20),0_12px_30px_rgba(0,0,0,0.32)]",

      shine: "via-blue-100/65",

      innerGlow:
        "bg-[radial-gradient(circle_at_28%_48%,rgba(96,165,250,0.32),transparent_48%),radial-gradient(circle_at_78%_50%,rgba(59,130,246,0.12),transparent_55%)]",

      edgeGlow:
        "bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.65),transparent)]",
    },

    techHover:
      "hover:border-blue-400/30 hover:bg-blue-400/[0.04] hover:text-blue-200",
  },

  emerald: {
    text: "text-emerald-400",
    brightText: "text-emerald-300",
    dot: "bg-emerald-400",
    border: "border-emerald-400/20",
    soft: "bg-emerald-400/5",
    line: "via-emerald-400/45",
    imageBorder: "border-emerald-400/45",
    imageGlow: "shadow-[0_0_16px_rgba(52,211,153,0.10)]",

    github: {
      border: "border-emerald-400/35",
      text: "text-emerald-300",
      icon: "text-emerald-300",

      hoverBorder: "hover:border-emerald-300/80",

      hoverText: "group-hover/github:text-emerald-50",

      hoverIcon: "group-hover/github:text-emerald-100",

      hoverBg:
        "hover:bg-[linear-gradient(135deg,rgba(5,150,105,0.20),rgba(8,52,40,0.96),rgba(15,23,42,0.98))]",

      hoverGlow:
        "hover:shadow-[0_0_12px_rgba(52,211,153,0.35),0_0_32px_rgba(52,211,153,0.20),0_12px_30px_rgba(0,0,0,0.32)]",

      shine: "via-emerald-100/65",

      innerGlow:
        "bg-[radial-gradient(circle_at_28%_48%,rgba(52,211,153,0.32),transparent_48%),radial-gradient(circle_at_78%_50%,rgba(16,185,129,0.12),transparent_55%)]",

      edgeGlow:
        "bg-[linear-gradient(90deg,transparent,rgba(52,211,153,0.65),transparent)]",
    },

    techHover:
      "hover:border-emerald-400/30 hover:bg-emerald-400/[0.04] hover:text-emerald-200",
  },
};

function GitHubIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.092-.646.349-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
      />
    </svg>
  );
}

function ExperienceGitHubButton({
  href,
  accent,
}: {
  href: string;
  accent: keyof typeof accentStyles;
}) {
  const styles = accentStyles[accent];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className={`
        group/github
        relative
        isolate
        inline-flex
        h-[40px]
        w-fit
        shrink-0
        items-center
        justify-center
        gap-[8px]
        overflow-hidden
        rounded-[10px]
        border
        ${styles.github.border}
        bg-zinc-950/45
        px-[13px]
        py-[8px]
        whitespace-nowrap
        font-mono
        text-[12px]
        font-medium
        leading-none
        ${styles.github.text}
        transition-all
        duration-300
        ${styles.github.hoverBorder}
        ${styles.github.hoverBg}
        ${styles.github.hoverGlow}
      `}
    >
      {/* Base inner glow */}
      <span
        className={`
          pointer-events-none
          absolute
          inset-0
          -z-20
          rounded-[10px]
          opacity-0
          transition-opacity
          duration-300
          group-hover/github:opacity-100
          ${styles.github.innerGlow}
        `}
      />

      {/* Bright top edge */}
      <span
        className={`
          pointer-events-none
          absolute
          left-[12%]
          right-[12%]
          top-0
          z-0
          h-px
          opacity-0
          transition-opacity
          duration-300
          group-hover/github:opacity-100
          ${styles.github.edgeGlow}
        `}
      />

      {/* Soft outer bloom */}
      <span
        className={`
          pointer-events-none
          absolute
          -inset-[4px]
          -z-30
          rounded-[13px]
          blur-[7px]
          opacity-0
          transition-opacity
          duration-400
          group-hover/github:opacity-100
          ${
            accent === "blue"
              ? "bg-blue-400/18"
              : "bg-emerald-400/18"
          }
        `}
      />

      {/* Moving shine */}
      <motion.span
        className={`
          pointer-events-none
          absolute
          inset-y-[-45%]
          -left-[75%]
          z-0
          w-[28%]
          rotate-[18deg]
          bg-gradient-to-r
          from-transparent
          ${styles.github.shine}
          to-transparent
        `}
        initial={{
          x: 0,
          opacity: 0,
        }}
        whileHover={{
          x: 290,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 0.78,
          ease: "easeOut",
        }}
      />

      {/* Secondary shine */}
      <motion.span
        className={`
          pointer-events-none
          absolute
          inset-y-[-40%]
          -left-[95%]
          z-0
          w-[10%]
          rotate-[18deg]
          bg-white/55
          blur-[1px]
        `}
        initial={{
          x: 0,
          opacity: 0,
        }}
        whileHover={{
          x: 270,
          opacity: [0, 0.9, 0],
        }}
        transition={{
          duration: 0.78,
          delay: 0.04,
          ease: "easeOut",
        }}
      />

      {/* GitHub icon */}
      <motion.span
        className={`
          relative
          z-10
          flex
          items-center
          justify-center
          ${styles.github.icon}
          transition-all
          duration-300
          ${styles.github.hoverIcon}
        `}
        whileHover={{
          rotate: -8,
          scale: 1.12,
          filter:
            accent === "blue"
              ? "drop-shadow(0 0 7px rgba(96,165,250,0.75))"
              : "drop-shadow(0 0 7px rgba(52,211,153,0.75))",
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 16,
        }}
      >
        <GitHubIcon />
      </motion.span>

      {/* Text */}
      <span
        className={`
          relative
          z-10
          whitespace-nowrap
          transition-colors
          duration-300
          ${styles.github.hoverText}
        `}
      >
        View GitHub
      </span>

      {/* Arrow */}
      <motion.span
        className={`
          relative
          z-10
          shrink-0
          transition-colors
          duration-300
          ${styles.github.hoverText}
        `}
        whileHover={{
          x: 3,
          y: -3,
          filter:
            accent === "blue"
              ? "drop-shadow(0 0 7px rgba(96,165,250,0.75))"
              : "drop-shadow(0 0 7px rgba(52,211,153,0.75))",
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 16,
        }}
      >
        ↗
      </motion.span>
    </motion.a>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 md:px-12 md:py-16 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <header className="max-w-3xl">
          <div className="inline-flex rounded-full bg-blue-950/40 px-4 py-1.5">
            <span className="text-sm font-medium text-blue-400">
              Research & Industry Experience
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-100 md:text-5xl">
            Experience
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Research and internship work across computer vision,
            deep learning, and applied AI.
          </p>
        </header>

        {/* TIMELINE */}
        <section className="relative mt-14">
          <div className="absolute left-[18px] top-10 hidden h-[calc(100%-55px)] w-px bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent md:block" />

          <div className="space-y-14">
            {experiences.map((experience) => {
              const accent = accentStyles[experience.accent];

              return (
                <div
                  key={experience.id}
                  className="relative grid items-start md:grid-cols-[220px_1fr] md:gap-8 lg:grid-cols-[235px_1fr] lg:gap-10"
                >
                  {/* LEFT TIMELINE */}
                  <div className="hidden md:block">
                    <div className="relative pl-11">
                      {/* Dot */}
                      <div
                        className={`absolute left-[10px] top-2.5 h-[16px] w-[16px] rounded-full border-[4px] border-zinc-950 ${accent.dot}`}
                      />

                      {/* Date */}
                      <p
                        className={`text-sm font-bold tracking-wide ${accent.text}`}
                      >
                        {experience.period}
                      </p>

                      {/* Organization */}
                      <p className="mt-4 text-[15px] font-bold leading-5 text-zinc-200">
                        {experience.organization}
                      </p>

                      {/* Location */}
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500">
                        <svg
                          className="h-3.5 w-3.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.8}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"
                          />
                          <circle cx="12" cy="10" r="2.3" />
                        </svg>

                        <span>{experience.location}</span>
                      </div>

                      {/* Experience type */}
                      <div
                        className={`mt-5 w-fit max-w-[190px] rounded-xl border px-3.5 py-2.5 ${accent.border} ${accent.soft}`}
                      >
                        <span
                          className={`text-[11px] font-semibold leading-4 ${accent.text}`}
                        >
                          {experience.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* MOBILE META */}
                  <div className="mb-4 md:hidden">
                    <p className={`text-sm font-bold ${accent.text}`}>
                      {experience.period}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-zinc-300">
                      {experience.organization}
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      {experience.location}
                    </p>

                    <div
                      className={`mt-3 inline-flex rounded-xl border px-3 py-2 ${accent.border} ${accent.soft}`}
                    >
                      <span
                        className={`text-xs font-semibold ${accent.text}`}
                      >
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  {/* FLASHCARD */}
                  <div className="pt-3 md:pt-5">
                    <ExperienceFlashCard>
                      <article className="relative overflow-hidden rounded-2xl">
                        {/* Accent line */}
                        <div
                          className={`absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`}
                        />

                        <div className="relative p-6 md:p-8">
                          {/* LABEL + TITLE + GITHUB */}
                          <div className="flex items-start justify-between gap-6">
                            <div>
                              <p
                                className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${accent.text}`}
                              >
                                AI/ML Internship
                              </p>

                              <h2 className="mt-3 max-w-3xl text-[25px] font-bold leading-tight text-zinc-100 md:text-[28px]">
                                {experience.title}
                              </h2>
                            </div>

                            {/* GitHub */}
                            <ExperienceGitHubButton
                              href={experience.github}
                              accent={experience.accent}
                            />
                          </div>

                          {/* IMAGE + DESCRIPTION */}
                          <div className="mt-6 grid gap-7 md:grid-cols-[1fr_300px] md:items-center">
                            <p className="max-w-2xl text-sm leading-6 text-zinc-400">
                              {experience.description}
                            </p>

                            {/* IMAGE */}
                            <div
                              className={`
                                relative overflow-hidden rounded-lg
                                border
                                ${accent.imageBorder}
                                ${accent.imageGlow}
                                bg-zinc-950/15
                                p-[1px]
                              `}
                            >
                              <div className="relative aspect-video w-full overflow-hidden rounded-[7px]">
                                <Image
                                  src={experience.image}
                                  alt={experience.imageAlt}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 300px"
                                  className="object-contain brightness-110 contrast-105 saturate-105 transition-transform duration-500 hover:scale-[1.02]"
                                  priority={experience.id === "akshar"}
                                />
                              </div>
                            </div>
                          </div>

                          {/* RESULTS */}
                          <div className="mt-7 grid grid-cols-3 overflow-hidden rounded-xl border border-white/[0.07] bg-zinc-950/25">
                            {experience.results.map((result, index) => (
                              <div
                                key={result.label}
                                className={`
                                  px-4 py-4
                                  md:px-5 md:py-4
                                  ${
                                    index !== 0
                                      ? "border-l border-white/[0.07]"
                                      : ""
                                  }
                                `}
                              >
                                <p className="text-[11px] font-medium leading-4 text-zinc-400">
                                  {result.label}
                                </p>

                                <p
                                  className={`mt-1.5 text-[22px] font-bold leading-tight ${accent.brightText}`}
                                >
                                  {result.value}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* TECH STACK */}
                          <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.07] pt-4">
                            {experience.techStack.map((tech) => (
                              <span
                                key={tech}
                                className={`
                                  rounded-full
                                  border
                                  border-zinc-700/70
                                  bg-zinc-900/40
                                  px-3
                                  py-1.5
                                  text-xs
                                  font-medium
                                  text-zinc-300
                                  ${accent.techHover}
                                  transition-all
                                  duration-200
                                `}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    </ExperienceFlashCard>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}