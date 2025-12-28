"use client";

import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BluetoothConnectedIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const startAnimate = async () => {
    // Pulse the bluetooth symbol
    animate(
      ".bluetooth-symbol",
      {
        scale: [1, 1.1, 1],
      },
      {
        duration: 0.6,
        ease: "easeInOut",
      },
    );

    // Animate connection dots
    animate(
      ".connection-dot",
      {
        scale: [1, 1.5, 1],
        opacity: [1, 0.5, 1],
      },
      {
        duration: 0.8,
        delay: (i) => i * 0.2,
        ease: "easeInOut",
      },
    );
  };

  const endAnimate = async () => {
    animate(
      ".bluetooth-symbol",
      {
        scale: 1,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    );

    animate(
      ".connection-dot",
      {
        scale: 1,
        opacity: 1,
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

      {/* Bluetooth symbol */}
      <motion.path
        className="bluetooth-symbol"
        d="M7 8l10 8l-5 4l0 -16l5 4l-10 8"
        style={{ transformOrigin: "50% 50%" }}
      />

      {/* Connection dots */}
      <motion.path className="connection-dot" d="M4 12l1 0" />
      <motion.path className="connection-dot" d="M18 12l1 0" />
    </motion.svg>
  );
};

export default BluetoothConnectedIcon;
