import React from "react";
import { motion } from "framer-motion";

interface BrandNextjsIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  animate?: boolean;
}

const BrandNextjsIcon: React.FC<BrandNextjsIconProps> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
  animate = true,
}) => {
  const circleVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5 },
        opacity: { duration: 0.3 },
      },
    },
  };

  const slashVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1, ease: "easeOut", delay: 0.3 },
        opacity: { duration: 0.3, delay: 0.3 },
      },
    },
  };

  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.4, delay: 1 },
        opacity: { duration: 0.2, delay: 1 },
      },
    },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-brand-nextjs ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"
        variants={animate ? circleVariants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
      />
      <motion.path
        d="M15 12v-3"
        variants={animate ? lineVariants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
      />
    </svg>
  );
};

BrandNextjsIcon.displayName = "BrandNextjsIcon";

export default BrandNextjsIcon;
