"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ClockIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    await animate(
      ".clock-hands",
      {
        rotate: 360,
      },
      {
        duration: 1,
        ease: "easeInOut",
      },
    );
  };

  const endAnimate = async () => {
    await animate(
      ".clock-hands",
      {
        rotate: 0,
      },
      {
        duration: 1,
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
      className={`${className} cursor-pointer`}
      onHoverStart={startAnimate}
      onHoverEnd={endAnimate}
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
        className="clock-body"
      />
      <motion.path d="M12 7v5l3 3" className="clock-hands" />
    </motion.svg>
  );
};

export default ClockIcon;
