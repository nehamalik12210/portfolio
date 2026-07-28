"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ExternalLink, Github, Youtube, Package, ArrowLeft } from "lucide-react";
import { projectDetailStyles as s } from "@/lib/dummyStyles";
import { getProjectBySlug } from "@/lib/projects-data";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = getProjectBySlug(params?.slug as string);

  if (!project) {
    return (
      <div className={s.pageContainer}>
        <div className={s.innerContainer}>
          <h1 className="text-3xl font-bold text-zinc-100">
            Project not found
          </h1>
          <Link href="/projects" className={s.backButton}>
            <ArrowLeft className={s.backIcon} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        {/* Back Button */}
        <Link href="/projects" className={s.backButton}>
          <ArrowLeft className={s.backIcon} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className={s.projectHeader}>
          <div className={s.headerFlex}>
            <div className={s.headerLeft}>
              <div className={s.titleContainer}>
                <h1 className={s.projectTitle}>{project.title}</h1>
                <span
                  className={`${s.statusBadge} ${
                    project.status === "active"
                      ? s.statusActive
                      : s.statusInactive
                  }`}
                >
                  {project.status === "active" ? "Active" : "Archived"}
                </span>
              </div>

              <p className={s.projectDescription}>
                {project.detailedDescription}
              </p>

              {/* Tags */}
              <div className={s.tagsContainer}>
                {project.tags.map((tag) => (
                  <span key={tag} className={s.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className={s.actionButtonsContainer}>
                {project.links.visit && (
                  <Link
                    href={project.links.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.visitButton}
                  >
                    <ExternalLink className={s.buttonIcon} />
                    Visit Live
                  </Link>
                )}
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.secondaryButton}
                  >
                    <Github className={s.buttonIcon} />
                    Source Code
                  </Link>
                )}
                {project.links.howIBuilt && (
                  <Link
                    href={project.links.howIBuilt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.secondaryButton}
                  >
                    <Youtube className={s.buttonIcon} />
                    How I Built
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className={s.imageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className={s.projectImage}
          />
        </div>

        {/* Main Grid */}
        <div className={s.gridContainer}>
          {/* Main Content */}
          <div className={s.mainContent}>
            {/* Features */}
            <section>
              <h2 className={s.sectionTitle}>Key Features</h2>
              <div className={s.featuresGrid}>
                {project.features.map((feature, i) => (
                  <div key={i} className={s.featureCard}>
                    <div className={s.featureCardInner}>
                      <div className={s.featureIconContainer}>
                        <div className={s.featureIcon} />
                      </div>
                      <span className={s.featureText}>{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Outcomes */}
            <section>
              <h2 className={s.sectionTitle}>Learning Outcomes</h2>
              <div className={s.learningOutcomesGrid}>
                {project.learningOutcomes.map((outcome, i) => (
                  <div key={i} className={s.learningOutcomeCard}>
                    <div className={s.learningOutcomeNumber}>
                      <span className={s.learningOutcomeNumberText}>
                        {i + 1}
                      </span>
                    </div>
                    <span className={s.learningOutcomeText}>{outcome}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className={s.sidebar}>
            {/* Tech Stack */}
            <div className={s.sidebarSection}>
              <h3 className={s.sidebarSectionTitle}>Tech Stack</h3>
              <div className={s.techStackContainer}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={s.techStackItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className={s.sidebarSection}>
              <h3 className={s.sidebarSectionTitle}>Links</h3>
              <div className={s.linksContainer}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <Github className={s.linkIcon} />
                    <span className={s.linkText}>View Source Code</span>
                  </a>
                )}
                {project.links.visit && (
                  <a
                    href={project.links.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <ExternalLink className={s.linkIcon} />
                    <span className={s.linkText}>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className={s.sidebarSection}>
              <h3 className={s.sidebarSectionTitle}>Project Info</h3>
              <div className={s.projectInfoContainer}>
                <div>
                  <p className={s.projectInfoLabel}>Author</p>
                  <div className={s.authorContainer}>
                    <Image
                      src={project.authorAvatar}
                      alt={project.author}
                      width={32}
                      height={32}
                      className={s.authorAvatar}
                    />
                    <span className={s.authorName}>{project.author}</span>
                  </div>
                </div>
                <div>
                  <p className={s.projectInfoLabel}>Status</p>
                  <p className={s.projectInfoText}>{project.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}