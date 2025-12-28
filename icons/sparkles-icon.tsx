"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SparklesIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    // Main sparkle rotates and scales
    animate(
      ".sparkle-main",
      {
        rotate: 180,
        scale: [1, 1.2, 1],
      },
      {
        duration: 0.6,
        ease: "easeInOut",
      },
    );

    // Top sparkle twinkles
    animate(
      ".sparkle-top",
      {
        rotate: -90,
        scale: [1, 0.8, 1.1],
        opacity: [1, 0.6, 1],
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.1,
      },
    );

    // Bottom sparkle twinkles
    animate(
      ".sparkle-bottom",
      {
        rotate: 90,
        scale: [1, 1.15, 0.9],
        opacity: [1, 0.7, 1],
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.05,
      },
    );
  };

  const endAnimate = async () => {
    animate(
      ".sparkle-main",
      {
        rotate: 0,
        scale: 1,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    );

    animate(
      ".sparkle-top",
      {
        rotate: 0,
        scale: 1,
        opacity: 1,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    );

    animate(
      ".sparkle-bottom",
      {
        rotate: 0,
        scale: 1,
        opacity: 1,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    );
  };

  return (
    <motion.svg
      ref={scope}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer ${className}`}
      onHoverStart={startAnimate}
      onHoverEnd={endAnimate}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      {/* Bottom right sparkle */}
      <motion.path
        d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z"
        className="sparkle-bottom"
        style={{ transformOrigin: "18px 18px" }}
      />

      {/* Top right sparkle */}
      <motion.path
        d="M16 6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z"
        className="sparkle-top"
        style={{ transformOrigin: "18px 6px" }}
      />

      {/* Main large sparkle */}
      <motion.path
        d="M9 18a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"
        className="sparkle-main"
        style={{ transformOrigin: "9px 12px" }}
      />
    </motion.svg>
  );
};

export default SparklesIcon;
