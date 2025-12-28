"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const HashtagIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    // Animate horizontal lines
    animate(
      ".line-horizontal",
      {
        scaleX: 1.1,
        opacity: 0.7,
      },
      {
        duration: 0.3,
        ease: "easeOut",
      },
    );

    // Animate vertical lines
    animate(
      ".line-vertical",
      {
        scaleY: 1.1,
        opacity: 0.7,
      },
      {
        duration: 0.3,
        delay: 0.1,
        ease: "easeOut",
      },
    );
  };

  const endAnimate = async () => {
    animate(
      ".line-horizontal",
      {
        scaleX: 1,
        opacity: 1,
      },
      {
        duration: 0.25,
        ease: "easeInOut",
      },
    );

    animate(
      ".line-vertical",
      {
        scaleY: 1,
        opacity: 1,
      },
      {
        duration: 0.25,
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

      {/* Horizontal lines */}
      <motion.path className="line-horizontal" d="M5 9l14 0" />
      <motion.path className="line-horizontal" d="M5 15l14 0" />

      {/* Vertical lines */}
      <motion.path className="line-vertical" d="M11 4l-4 16" />
      <motion.path className="line-vertical" d="M17 4l-4 16" />
    </motion.svg>
  );
};

export default HashtagIcon;
