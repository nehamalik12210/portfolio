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

          {/* Callout Card */}
          <div className="max-w-[450px]">
            <div className={homePageStyles.calloutCard.wrapper}>
              <div className={homePageStyles.calloutCard.innerContainer}>
                <div className={homePageStyles.calloutCard.textContainer}>
                  <svg
                    className={homePageStyles.calloutCard.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path d="M3 12l9-9 9 9" strokeWidth="1.2" />
                  </svg>
                  <span className={homePageStyles.calloutCard.text}>
                    Integrated M.Sc. Chemistry @ NIT Rourkela
                  </span>
                </div>
                <Link href="/projects" className={homePageStyles.calloutCard.button}>
                  View Projects
                </Link>
              </div>
            </div>
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
