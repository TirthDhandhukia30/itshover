"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ChartLineIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    // Line draws from left to right
    animate(
      ".chart-line",
      {
        pathLength: [0, 1],
      },
      {
        duration: 0.6,
        ease: "easeInOut",
      },
    );

    // Base line expands
    animate(
      ".base-line",
      {
        scaleX: [0, 1],
      },
      {
        duration: 0.4,
        ease: "easeOut",
      },
    );
  };

  const endAnimate = async () => {
    animate(
      ".chart-line",
      {
        pathLength: 1,
      },
      {
        duration: 0.2,
        ease: "easeInOut",
      },
    );

    animate(
      ".base-line",
      {
        scaleX: 1,
      },
      {
        duration: 0.2,
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

      {/* Base line */}
      <motion.path
        d="M4 19l16 0"
        className="base-line"
        style={{ transformOrigin: "4px 19px" }}
      />

      {/* Chart line */}
      <motion.path
        d="M4 15l4 -6l4 2l4 -5l4 4"
        className="chart-line"
        initial={{ pathLength: 1 }}
      />
    </motion.svg>
  );
};

export default ChartLineIcon;
