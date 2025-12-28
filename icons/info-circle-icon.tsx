"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const InfoCircleIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    await animate(
      ".info-circle-i",
      {
        pathLength: [0, 1],
      },
      {
        duration: 0.3,
        ease: "easeOut",
      },
    );

    animate(
      ".info-line-i",
      {
        pathLength: [0, 1],
      },
      {
        duration: 0.4,
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
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
        className="info-circle"
      />
      <motion.path d="M12 9h.01" className="info-circle-i" />
      <motion.path d="M11 12h1v4h1" className="info-line-i" />
    </motion.svg>
  );
};

export default InfoCircleIcon;
