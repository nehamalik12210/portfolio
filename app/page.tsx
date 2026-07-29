"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { homePageStyles, spotlightStyles } from "@/lib/dummyStyles";
import { Spotlight } from "@/components/ui/spotlight";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function HomePage() {
  return (
    <div className={homePageStyles.container}>
      {/* Background grid */}
      <div className={homePageStyles.backgroundGrid.wrapper}>
        <div className={homePageStyles.backgroundGrid.pattern} />
      </div>
      <div className={homePageStyles.gradientOverlay} />

      <Spotlight className={spotlightStyles.position} fill="white" />

      <div className="w-full max-w-[1100px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 pt-16 lg:pt-32">
        
        {/* Left text section */}
        <div className="flex-1 w-full flex flex-col justify-center text-left">
          {/* Hero Heading */}
          <h1 className={homePageStyles.h1}>
            <span className={homePageStyles.spanInline}>Hi, I&apos;m</span>{" "}
            <span className={homePageStyles.spanWithMargin}>Neha</span>
          </h1>

          {/* Typing Animation like reference site */}
          <div className="mt-4 mb-8">
            <TypingAnimation
              className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-medium"
              words={[
                "I am into AI/ML & Deep Learning",
                "I am into Web Development",
                "I build intelligent systems",
              ]}
              loop={true}
            />
          </div>

          {/* Brief Intro */}
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-[500px]">
            A developer passionate about building intelligent systems with AI/ML
            and crafting modern web experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-zinc-200 hover:scale-105"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 font-semibold text-sm transition-all duration-300 hover:border-zinc-500 hover:text-white hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Right image section */}
        <div className="flex-1 w-full flex justify-center lg:justify-end items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
            <Image
              src="/hero.png"
              alt="Neha Portrait"
              fill
              className="object-cover opacity-80 mix-blend-lighten transition-opacity duration-500 hover:opacity-100"
              style={{
                maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 75%)"
              }}
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}
