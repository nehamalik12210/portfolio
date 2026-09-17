"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";

import { projectStyles as s } from "@/lib/dummyStyles";
import { projects, getProjectUrl, Project } from "@/lib/projects-data";

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
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

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  /* --------------------------------
     Card tilt
  -------------------------------- */
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, {
    stiffness: 400,
    damping: 22,
    mass: 0.35,
  });

  const rotateY = useSpring(rotateYRaw, {
    stiffness: 400,
    damping: 22,
    mass: 0.35,
  });

  /* --------------------------------
     Image parallax
  -------------------------------- */
  const imageXRaw = useMotionValue(0);
  const imageYRaw = useMotionValue(0);

  const imageX = useSpring(imageXRaw, {
    stiffness: 320,
    damping: 20,
    mass: 0.35,
  });

  const imageY = useSpring(imageYRaw, {
    stiffness: 320,
    damping: 20,
    mass: 0.35,
  });

  /* --------------------------------
     Spotlight
  -------------------------------- */
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const spotlight = useMotionTemplate`
    radial-gradient(
      320px circle at ${spotlightX}% ${spotlightY}%,
      rgba(255,255,255,0.11),
      rgba(255,255,255,0.035) 28%,
      transparent 62%
    )
  `;

  /* --------------------------------
     Mouse movement
  -------------------------------- */
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const nextRotateY = ((percentX - 50) / 50) * 7;
    const nextRotateX = ((50 - percentY) / 50) * 7;

    rotateXRaw.set(nextRotateX);
    rotateYRaw.set(nextRotateY);

    const nextImageX = ((percentX - 50) / 50) * -9;
    const nextImageY = ((percentY - 50) / 50) * -7;

    imageXRaw.set(nextImageX);
    imageYRaw.set(nextImageY);

    spotlightX.set(percentX);
    spotlightY.set(percentY);
  };

  const handleMouseLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);

    imageXRaw.set(0);
    imageYRaw.set(0);

    spotlightX.set(50);
    spotlightY.set(50);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
      }}
      whileHover={{
        y: -10,
        scale: 1.018,
      }}
      whileTap={{
        scale: 0.995,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      className="
        group
        relative
        h-full
        cursor-pointer
        rounded-2xl
      "
    >
      {/* Outer glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-[2px]
          rounded-[18px]
          bg-gradient-to-b
          from-white/[0.14]
          via-transparent
          to-transparent
          opacity-0
          blur-[1px]
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Main Card */}
      <div
        className="
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900/60
          shadow-[0_12px_35px_rgba(0,0,0,0.18)]
          transition-all
          duration-500
          group-hover:border-zinc-600
          group-hover:bg-zinc-900/80
          group-hover:shadow-[0_30px_75px_rgba(0,0,0,0.45)]
        "
      >
        {/* Cursor-following spotlight */}
        <motion.div
          className="
            pointer-events-none
            absolute
            inset-0
            z-30
            opacity-0
            transition-opacity
            duration-200
            group-hover:opacity-100
          "
          style={{
            background: spotlight,
          }}
        />

        {/* Top metallic line */}
        <div
          className="
            pointer-events-none
            absolute
            left-[8%]
            right-[8%]
            top-0
            z-40
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
          <motion.div
            className="absolute inset-[-12px]"
            style={{
              x: imageX,
              y: imageY,
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={project.id === projects[0]?.id}
              className="
                object-contain
                bg-zinc-950
                transition-all
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:scale-[1.08]
              "
            />
          </motion.div>

          {/* Image overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-zinc-950/55
              via-transparent
              to-transparent
              opacity-80
              transition-opacity
              duration-500
              group-hover:opacity-45
            "
          />

          {/* Image shine */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-[90%]
              z-20
              w-[42%]
              skew-x-[-22deg]
              bg-gradient-to-r
              from-transparent
              via-white/[0.13]
              to-transparent
              transition-transform
              duration-[750ms]
              ease-out
              group-hover:translate-x-[500%]
            "
          />

          {/* Status */}
          <div className="absolute right-3 top-3 z-40">
            <motion.div
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-emerald-400/10
                bg-emerald-400/[0.08]
                px-3
                py-1
                text-xs
                font-medium
                text-emerald-400
                backdrop-blur-md
                transition-all
                duration-300
                group-hover:border-emerald-400/25
                group-hover:bg-emerald-400/[0.14]
              "
            >
              <motion.span
                animate={{
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_8px_rgba(52,211,153,0.75)]
                "
              />

              {project.status === "active" ? "Active" : "Archived"}
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-40 flex flex-1 flex-col p-6">
          {/* Title */}
          <motion.h3
            whileHover={{
              x: 4,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 20,
            }}
            className="
              text-xl
              font-bold
              text-zinc-100
              transition-colors
              duration-300
              group-hover:text-white
            "
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <p
            className="
              mt-2
              line-clamp-2
              text-sm
              leading-relaxed
              text-zinc-400
              transition-colors
              duration-300
              group-hover:text-zinc-300
            "
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{
                  y: -3,
                  scale: 1.035,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 18,
                }}
                className="
                  rounded-md
                  border
                  border-zinc-800
                  bg-zinc-800/80
                  px-2.5
                  py-1
                  text-xs
                  font-medium
                  text-zinc-300
                  transition-all
                  duration-300
                  group-hover:border-zinc-700
                  group-hover:bg-zinc-800
                  group-hover:text-zinc-200
                "
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-auto pt-6">
            <div
              className="
                border-t
                border-zinc-800
                pt-4
                transition-colors
                duration-500
                group-hover:border-zinc-700
              "
            >
              <div className="flex items-center gap-2">
                {/* Visit */}
                {project.links.visit && (
                  <motion.a
                    href={project.links.visit}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      inline-flex
                      shrink-0
                      items-center
                      justify-center
                      whitespace-nowrap
                      rounded-lg
                      bg-zinc-100
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-zinc-900
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:shadow-[0_10px_25px_rgba(255,255,255,0.08)]
                    "
                  >
                    Visit
                  </motion.a>
                )}

                {/* GitHub */}
                {project.links.github && (
                  <motion.a
                    href={project.links.github}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      scale: 1.035,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      group/github
                      relative
                      isolate
                      inline-flex
                      h-[42px]
                      w-fit
                      shrink-0
                      items-center
                      justify-center
                      gap-[8px]
                      overflow-hidden
                      rounded-[10px]
                      border
                      border-zinc-700
                      bg-zinc-900
                      px-[13px]
                      py-[8px]
                      whitespace-nowrap
                      shadow-[0_0_0_rgba(56,189,248,0)]
                      transition-all
                      duration-300
                      hover:border-cyan-400/45
                      hover:bg-[linear-gradient(135deg,rgba(8,47,73,0.75),rgba(15,23,42,0.95))]
                      hover:shadow-[0_0_24px_rgba(34,211,238,0.16),0_10px_28px_rgba(0,0,0,0.3)]
                    "
                  >
                    {/* Animated inner glow */}
                    <motion.span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        -z-10
                        rounded-[10px]
                        bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.18),transparent_58%)]
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover/github:opacity-100
                      "
                    />

                    {/* Moving shine */}
                    <motion.span
                      className="
                        pointer-events-none
                        absolute
                        inset-y-[-20%]
                        -left-[65%]
                        -z-0
                        w-[32%]
                        rotate-[18deg]
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-200/25
                        to-transparent
                      "
                      initial={{
                        x: 0,
                        opacity: 0,
                      }}
                      whileHover={{
                        x: 340,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    />

                    {/* GitHub icon */}
                    <motion.span
                      className="
                        relative
                        z-10
                        flex
                        items-center
                        justify-center
                        text-zinc-300
                        transition-colors
                        duration-300
                        group-hover/github:text-cyan-300
                      "
                      whileHover={{
                        rotate: -8,
                        scale: 1.12,
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
                    <motion.span
                      className="
                        relative
                        z-10
                        whitespace-nowrap
                        font-mono
                        text-[13px]
                        font-medium
                        leading-none
                        tracking-[0.01em]
                        text-zinc-200
                        transition-all
                        duration-300
                        group-hover/github:text-cyan-100
                      "
                      whileHover={{
                        letterSpacing: "0.025em",
                      }}
                    >
                      View GitHub
                    </motion.span>

                    {/* Arrow */}
                    <motion.span
                      className="
                        relative
                        z-10
                        shrink-0
                        font-mono
                        text-[13px]
                        font-medium
                        leading-none
                        text-zinc-300
                        transition-colors
                        duration-300
                        group-hover/github:text-cyan-300
                      "
                      whileHover={{
                        x: 3,
                        y: -3,
                        scale: 1.12,
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        {/* Header */}
        <div className={s.header}>
          <h1 className={s.pageTitle}>Projects</h1>

          <p className={s.pageSubtitle}>
            AI/ML, data science, research, and web development projects
          </p>
        </div>

        {/* Projects */}
        <div className={s.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => router.push(getProjectUrl(project))}
            />
          ))}
        </div>
      </div>
    </div>
  );
}