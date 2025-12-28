"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const LockIcon = ({
  size = 48,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    await animate(
      ".lock-upper-body",
      {
        rotate: 40,
        y: -1.7,
        x: 3,
      },
      {
        duration: 0.28,
        ease: "easeOut",
      },
    );
  };

  const endAnimation = async () => {
    await animate(
      ".lock-upper-body",
      {
        rotate: 0,
        x: 0,
        y: 0,
      },
      {
        duration: 0.22,
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
      onHoverEnd={endAnimation}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />

      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />

      <motion.path
        d="M8 11v-4a4 4 0 1 1 8 0v4"
        className="lock-upper-body"
        style={{
          transformOrigin: "50% 100%",
        }}
      />
    </motion.svg>
  );
};

export default LockIcon;
