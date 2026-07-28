"use client";

import React from "react";
import Link from "next/link";
import { aboutPageStyles } from "@/lib/dummyStyles";

const email = "malikneha@gmail.com";

const interests = [
  "AI/ML",
  "WEB DEVELOPMENT",
  "DEEP LEARNING",
];

export default function AboutPage() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <div className={aboutPageStyles.pageContainer}>
      <div className={aboutPageStyles.contentContainer}>
        <div className={aboutPageStyles.backgroundContainer}>
          <div className={aboutPageStyles.backgroundEffect} />
          <div className={aboutPageStyles.contentWrapper}>
            {/* Heading */}
            <h1 className={aboutPageStyles.mainHeading}>About Me</h1>

            {/* Interests */}
            <div className={aboutPageStyles.interestsContainer}>
              {interests.map((interest, i) => (
                <span key={interest} className={aboutPageStyles.interestItem}>
                  {interest}
                  {i < interests.length - 1 && (
                    <span className={aboutPageStyles.interestSeparator}>•</span>
                  )}
                </span>
              ))}
            </div>

            {/* Content Sections */}
            <div className={aboutPageStyles.sectionsContainer}>
              <section>
                <p className={aboutPageStyles.paragraph}>
                  I am a developer with experience spanning both AI/ML and web development. 
                  I build intelligent systems using Python, TensorFlow, and Keras—working on 
                  computer vision and NLP tasks—and I also build fully functional web 
                  applications with Flask and Streamlit that serve as the interface between 
                  complex models and end-users.
                </p>

                <p className={aboutPageStyles.paragraph}>
                  On the AI side, I work with OpenCV for image processing, Pandas for data 
                  manipulation, and deep learning frameworks to solve problems like 
                  classification and text recognition. On the web side, I design interactive 
                  applications that handle user input, manage state, and present data in a 
                  clear, accessible way.
                </p>

                <p className={aboutPageStyles.paragraph}>
                  Beyond technical skills, I bring strong problem-solving abilities and 
                  attention to detail. I enjoy collaborating with teams, learning new tools, 
                  and working on projects that challenge me to think critically. I focus on 
                  writing clean, readable code and maintaining good practices throughout the 
                  development process.
                </p>
              </section>
            </div>

            {/* CTA Buttons */}
            <div className={aboutPageStyles.ctaContainer}>
              <Link
                href="/contact"
                className={aboutPageStyles.primaryButton}
                aria-label="Get in touch — open contact page"
              >
                Get in Touch
              </Link>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={aboutPageStyles.secondaryButton}
                aria-label={`Compose email to ${email} in Gmail`}
              >
                <svg
                  className={aboutPageStyles.emailIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
