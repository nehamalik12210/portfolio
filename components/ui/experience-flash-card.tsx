"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

interface ExperienceFlashCardProps {
  className?: string;
  children: React.ReactNode;
}

export const ExperienceFlashCard = ({
  className,
  children,
}: ExperienceFlashCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Same interaction style as the existing CometCard,
  // but slightly slower and softer for the larger card.
  const mouseXSpring = useSpring(x, {
    stiffness: 90,
    damping: 20,
    mass: 1.1,
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 90,
    damping: 20,
    mass: 1.1,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["-7deg", "7deg"],
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["7deg", "-7deg"],
  );

  const translateX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-8px", "8px"],
  );

  const translateY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["8px", "-8px"],
  );

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  // Small and subtle highlight for a large card.
  const glareBackground = useMotionTemplate`
    radial-gradient(
      ellipse 70px 55px at ${glareX}% ${glareY}%,
      rgba(255,255,255,0.13) 0%,
      rgba(255,255,255,0.045) 30%,
      transparent 70%
    )
  `;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={cn(
        "perspective-distant transform-3d w-full",
        className,
      )}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          boxShadow:
            "rgba(0,0,0,0.03) 0px 260px 90px -80px, rgba(0,0,0,0.22) 0px 42px 50px -28px",
        }}
        initial={{
          scale: 1,
          z: 0,
        }}
        whileHover={{
          scale: 1.018,
          z: 28,
          transition: {
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        className="relative w-full rounded-2xl"
      >
        <div
          className="
            relative overflow-hidden rounded-2xl
            border border-white/[0.08]
            bg-[linear-gradient(135deg,#34363b_0%,#24262a_20%,#181a1d_45%,#26292e_70%,#17191c_100%)]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)]
          "
        >
          {/* Very subtle surface reflection */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.025)_48%,rgba(255,255,255,0.04)_52%,transparent_80%)]
            "
          />

          {/* Top edge highlight */}
          <div
            className="
              pointer-events-none
              absolute left-8 right-8 top-0 h-px
              bg-gradient-to-r from-transparent via-white/15 to-transparent
            "
          />

          {children}

          {/* Small mouse-following highlight */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-50 rounded-2xl mix-blend-screen"
            style={{
              background: glareBackground,
              opacity: 0.8,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceFlashCard;