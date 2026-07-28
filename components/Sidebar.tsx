"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarStyles as s } from "@/lib/dummyStyles";
import { TypingAnimation } from "@/components/ui/typing-animation";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const HomeIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11L12 4l9 7v9a1 1 0 0 1-1 1h-5v-5H9v5H4a1 1 0 0 1-1-1v-9z" />
  </svg>
);

const ProjectsIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h10v8H4zM10 14h10v6H10zM14 4h6v6h-6z" />
  </svg>
);

const UserIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20a8 8 0 0 1 16 0" />
  </svg>
);

const MailIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v12H3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 7 9-7" />
  </svg>
);

const MenuIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8l8 8m0-8l-8 8" />
  </svg>
);

const SkillsIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
  </svg>
);

const EducationIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const navItems: { href: string; label: string; Icon: React.ComponentType<IconProps> }[] = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/about", label: "About", Icon: UserIcon },
  { href: "/skills", label: "Skills", Icon: SkillsIcon },
  { href: "/projects", label: "Projects", Icon: ProjectsIcon },
  { href: "/education", label: "Education", Icon: EducationIcon },
  { href: "/contact", label: "Contact", Icon: MailIcon },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neha-malik",
    svgPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/neha_12210/",
    svgPath: "M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z",
  },
  {
    label: "Github",
    href: "https://github.com/nehamalik12210",
    svgPath: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className={s.mobileTopNav}>
        <div className={s.mobileTopNavInner}>
          <div className={s.mobileAvatarContainer}>
            <div className={s.mobileAvatar}>
              <Image
                src="/nm-logo.png"
                alt="Neha"
                width={40}
                height={40}
                className={s.mobileAvatarImage}
              />
            </div>
            <div>
              <p className={s.mobileName}>Neha</p>
              <TypingAnimation
                className={s.mobileTyping}
                words={[
                  "AI/ML Enthusiast",
                  "Web Developer",
                  "NIT Rourkela",
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={s.mobileSpacer} />

      {/* Desktop Sidebar */}
      <aside className={s.desktopSidebar}>
        <div className={s.desktopAvatarContainer}>
          <div className={s.desktopAvatar}>
            <Image
              src="/nm-logo.png"
              alt="Neha"
              width={48}
              height={48}
              className={s.desktopAvatarImage}
            />
          </div>
          <div>
            <p className={s.desktopName}>Neha</p>
            <TypingAnimation
              className={s.desktopTyping}
              words={[
                "AI/ML Enthusiast",
                "Web Developer",
                "NIT Rourkela",
              ]}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className={s.navContainer}>
          <ul className={s.navList}>
            {navItems.map(({ href, label, Icon }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${s.navItem} ${isActive ? s.navItemActive : s.navItemInactive}`}
                  >
                    <Icon className={s.navIcon} />
                    <span className={s.navLabel}>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Links */}
        <p className={s.connectLabel}>Connect</p>
        <ul className={s.socialList}>
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialItem}
              >
                <svg className={s.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.svgPath} />
                </svg>
                <span className={s.socialLabel}>{social.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className={s.footerText}>© 2026 Neha</p>
      </aside>

      {/* Mobile Menu Overlay */}
      <div className={`${s.mobileOverlay} ${mobileMenuOpen ? s.mobileOverlayVisible : s.mobileOverlayHidden}`}>
        <div
          className={`${s.mobileOverlayBg} ${mobileMenuOpen ? s.mobileOverlayBgVisible : s.mobileOverlayBgHidden}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`${s.mobileSidebar} ${mobileMenuOpen ? s.mobileSidebarVisible : s.mobileSidebarHidden}`}>
          <div className={s.mobileSidebarHeader}>
            <div className={s.mobileHeaderInner}>
              <div className={s.mobileHeaderAvatarContainer}>
                <div className={s.mobileAvatar}>
                  <Image src="/nm-logo.png" alt="Neha" width={40} height={40} className={s.mobileAvatarImage} />
                </div>
                <div>
                  <p className={s.mobileName}>Neha</p>
                  <TypingAnimation className={s.mobileTyping} words={["AI/ML Enthusiast"]} />
                </div>
              </div>
              <button className={s.mobileCloseButton} onClick={() => setMobileMenuOpen(false)}>
                <CloseIcon className={s.mobileCloseIcon} />
              </button>
            </div>
          </div>

          <div className={s.mobileContent}>
            <p className={s.mobileSectionLabel}>Navigation</p>
            <ul className={s.mobileNavList}>
              {navItems.map(({ href, label, Icon }) => {
                const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`${s.mobileNavItem} ${isActive ? s.navItemActive : s.navItemInactive}`}
                    >
                      <Icon className={s.mobileNavIcon} />
                      <span className={s.mobileNavLabel}>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className={s.mobileSocialSection}>
              <p className={s.mobileSectionLabel}>Connect</p>
              <ul className={s.mobileSocialList}>
                {socials.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className={s.mobileSocialItem}>
                      <svg className={s.mobileSocialIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d={social.svgPath} />
                      </svg>
                      <span className={s.mobileSocialText}>{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={s.mobileFooter}>
            <p className={s.mobileFooterText}>© 2026 Neha</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar (Mobile) */}
      <div className={s.bottomNav}>
        <div className={s.bottomNavContainer}>
          <div className={s.bottomNavInner}>
            <div className={s.bottomNavBar}>
              <div className={s.bottomNavGrid}>
                {navItems.slice(0, 5).map(({ href, Icon }) => {
                  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`${s.bottomNavLink} ${isActive ? s.bottomNavLinkActive : s.bottomNavLinkInactive}`}
                    >
                      <Icon className={s.bottomNavIcon} />
                    </Link>
                  );
                })}
              </div>
              <div className={s.bottomNavDivider} />
              <button className={s.bottomMenuButton} onClick={() => setMobileMenuOpen(true)}>
                <MenuIcon className={s.bottomMenuIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
