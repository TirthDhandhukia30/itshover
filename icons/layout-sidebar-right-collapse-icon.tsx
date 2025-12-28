import React from "react";
import { motion } from "framer-motion";

interface LayoutSidebarRightCollapseIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  animate?: boolean;
}

const LayoutSidebarRightCollapseIcon: React.FC<
  LayoutSidebarRightCollapseIconProps
> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
  animate = true,
}) => {
    const chevronVariants = {
      initial: { x: 0, opacity: 1 },
      animate: {
        x: [0, 3, 0],
        opacity: [1, 0.7, 1],
        transition: {
          duration: 1.5,
          repeat: Infinity,
        },
      },
    };

    const sidebarVariants = {
      initial: { opacity: 1 },
      animate: {
        opacity: [1, 0.6, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
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
        className={`icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-collapse ${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <motion.path
          d="M15 4v16"
          variants={animate ? sidebarVariants : undefined}
          initial={animate ? "initial" : undefined}
          animate={animate ? "animate" : undefined}
        />
        <motion.path
          d="M9 10l2 2l-2 2"
          variants={animate ? chevronVariants : undefined}
          initial={animate ? "initial" : undefined}
          animate={animate ? "animate" : undefined}
        />
      </svg>
    );
  };

LayoutSidebarRightCollapseIcon.displayName = "LayoutSidebarRightCollapseIcon";

export default LayoutSidebarRightCollapseIcon;
