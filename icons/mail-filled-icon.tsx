"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const MailFilledIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();
  const startAnimate = async () => {
    await animate(
      ".mail-open",
      {
        rotateX: -60,
        transformOrigin: "50% 0%",
      },
      {
        duration: 0.5,
        ease: "easeInOut",
      },
    );
  };

  const endAnimation = () => {
    animate(
      ".mail-open",
      {
        rotateX: 0,
        transformOrigin: "50% 0%",
      },
      {
        duration: 0.5,
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
      className={`${className} cursor-pointer perspective-distant`}
      onHoverStart={startAnimate}
      onHoverEnd={endAnimation}
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
      <motion.path d="M3 7l9 6l9 -6" className="mail-open" />
    </motion.svg>
  );
};

export default MailFilledIcon;
