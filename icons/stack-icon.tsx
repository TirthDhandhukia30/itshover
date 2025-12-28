"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const StackIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    // Animate top layer lifting slightly
    animate(
      ".layer-top",
      {
        y: -2,
        scale: 1.05,
      },
      {
        duration: 0.3,
        ease: "easeOut",
      },
    );

    // Animate bottom layer
    animate(
      ".layer-bottom",
      {
        y: 1,
        opacity: 0.7,
      },
      {
        duration: 0.3,
        ease: "easeOut",
      },
    );
  };

  const endAnimate = async () => {
    animate(
      ".layer-top",
      {
        y: 0,
        scale: 1,
      },
      {
        duration: 0.25,
        ease: "easeInOut",
      },
    );

    animate(
      ".layer-bottom",
      {
        y: 0,
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

      {/* Top layer */}
      <motion.path className="layer-top" d="M12 6l-8 4l8 4l8 -4l-8 -4" />

      {/* Bottom layer */}
      <motion.path className="layer-bottom" d="M4 14l8 4l8 -4" />
    </motion.svg>
  );
};

export default StackIcon;
