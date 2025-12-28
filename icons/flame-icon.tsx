"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const FlameIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    await animate(
      ".flame",
      {
        y: [0, -2, -1, -2, 0],
        rotate: [0, 4, -3, 2, 0],
        x: [0, 1, -1, 0.5, 0],
      },
      {
        duration: 0.6,
        ease: "easeOut",
      },
    );
  };

  const endAnimate = async () => {
    // safety reset
    await animate(
      ".flame",
      {
        x: 0,
        y: 0,
        rotate: 0,
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
        d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235"
        className="flame"
        style={{ transformOrigin: "50% 100%" }}
      />
    </motion.svg>
  );
};

export default FlameIcon;
