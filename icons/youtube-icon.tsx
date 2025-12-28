"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const YoutubeIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    await animate(
      ".youtube-play",
      {
        pathLength: [0, 1],
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    );

    animate(
      ".youtube-play",
      {
        scale: [1, 0.8, 1],
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    );
  };

  const endAnimate = async () => {
    animate(
      ".youtube-play",
      {
        scale: 1,
        x: 0,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    );

    animate(
      ".youtube-frame",
      {
        scale: 1,
      },
      {
        duration: 0.2,
        ease: "easeOut",
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

      <motion.path
        d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"
        className="youtube-frame"
        style={{ transformOrigin: "50% 50%" }}
      />

      <motion.path
        d="M10 9l5 3l-5 3z"
        className="youtube-play"
        style={{ transformOrigin: "50% 50%" }}
      />
    </motion.svg>
  );
};

export default YoutubeIcon;
