"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DotsVerticalIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    animate(
      ".dot-top",
      {
        y: [-2, 0],
        scale: [1, 1.2, 1],
      },
      {
        duration: 0.3,
        ease: "easeOut",
      },
    );

    animate(
      ".dot-middle",
      {
        scale: [1, 1.3, 1],
      },
      {
        duration: 0.3,
        delay: 0.1,
        ease: "easeOut",
      },
    );

    animate(
      ".dot-bottom",
      {
        y: [2, 0],
        scale: [1, 1.2, 1],
      },
      {
        duration: 0.3,
        delay: 0.2,
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      <motion.path
        d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
        className="dot-middle"
        style={{ transformOrigin: "50% 50%" }}
      />

      <motion.path
        d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
        className="dot-bottom"
        style={{ transformOrigin: "50% 50%" }}
      />

      <motion.path
        d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
        className="dot-top"
        style={{ transformOrigin: "50% 50%" }}
      />
    </motion.svg>
  );
};

export default DotsVerticalIcon;
