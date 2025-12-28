"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const MessageCircleIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    await animate(
      ".message-bubble",
      {
        scale: [1, 1.05, 1],
        rotate: [0, -2, 2, 0],
      },
      {
        duration: 0.5,
        ease: "easeInOut",
      },
    );
  };

  const endAnimate = async () => {
    animate(
      ".message-bubble",
      {
        scale: 1,
        rotate: 0,
      },
      {
        duration: 0.3,
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

      <motion.path
        d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1"
        className="message-bubble"
        style={{ transformOrigin: "50% 50%" }}
      />
    </motion.svg>
  );
};

export default MessageCircleIcon;
