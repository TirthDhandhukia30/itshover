"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DeviceAirpodsIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    // Animate left airpod
    animate(
      ".airpod-left",
      {
        y: [0, -2, 0],
        x: [0, -1, 0],
      },
      {
        duration: 0.6,
        ease: "easeInOut",
      },
    );

    // Animate right airpod
    animate(
      ".airpod-right",
      {
        y: [0, -2, 0],
        x: [0, 1, 0],
      },
      {
        duration: 0.6,
        ease: "easeInOut",
      },
    );
  };

  const endAnimate = async () => {
    animate(
      ".airpod-left",
      {
        y: 0,
        x: 0,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    );

    animate(
      ".airpod-right",
      {
        y: 0,
        x: 0,
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

      {/* Left airpod */}
      <motion.path
        className="airpod-left"
        d="M6 4a4 4 0 0 1 4 3.8l0 .2v10.5a1.5 1.5 0 0 1 -3 0v-6.5h-1a4 4 0 0 1 -4 -3.8l0 -.2a4 4 0 0 1 4 -4z"
      />

      {/* Right airpod */}
      <motion.path
        className="airpod-right"
        d="M18 4a4 4 0 0 0 -4 3.8l0 .2v10.5a1.5 1.5 0 0 0 3 0v-6.5h1a4 4 0 0 0 4 -3.8l0 -.2a4 4 0 0 0 -4 -4z"
      />
    </motion.svg>
  );
};

export default DeviceAirpodsIcon;
