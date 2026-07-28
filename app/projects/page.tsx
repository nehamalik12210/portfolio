"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectStyles as s } from "@/lib/dummyStyles";
import { projects, getProjectUrl } from "@/lib/projects-data";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        {/* Header */}
        <div className={s.header}>
          <h1 className={s.pageTitle}>Projects</h1>
          <p className={s.pageSubtitle}>
            AI/ML projects, research work, and data science applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className={s.projectsGrid}>
          {projects.map((project) => (
            <FollowerPointerCard
              key={project.id}
              title={
                <div className={s.titleComponentContainer}>
                  <Image
                    src={project.authorAvatar}
                    alt={project.author}
                    width={20}
                    height={20}
                    className={s.titleComponentAvatar}
                  />
                  <span className={s.titleComponentText}>
                    {project.author}
                  </span>
                </div>
              }
            >
              <div
                className="block h-full cursor-pointer"
                onClick={() => router.push(getProjectUrl(project))}
              >
                <div className={s.projectCard}>
                  {/* Image */}
                  <div className={s.imageContainer}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={s.projectImage}
                    />
                    <div className={s.statusBadgeContainer}>
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
                  </div>

                  {/* Content */}
                  <div className={s.contentSection}>
                    <h3 className={s.projectTitle}>{project.title}</h3>
                    <p className={s.projectDescription}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className={s.tagsContainer}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={s.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className={s.actionsContainer}>
                      <div className={s.actionsLinksContainer}>
                        {project.links.visit && (
                          <a
                            href={project.links.visit}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={s.visitButton}
                          >
                            Visit
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={s.otherButton}
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          ))}
        </div>
      </div>
    </div>
  );
}
