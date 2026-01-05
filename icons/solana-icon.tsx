import { forwardRef, useImperativeHandle } from "react";
import { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SolanaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(
        ".sol-line",
        { pathLength: 0, opacity: 0 },
        { duration: 0 },
      );

      await animate(
        ".sol-line-1",
        { pathLength: 1, opacity: 1 },
        { duration: 0.2, ease: "easeOut" },
      );

      await animate(
        ".sol-line-2",
        { pathLength: 1, opacity: 1 },
        { duration: 0.2, ease: "easeOut" },
      );

      await animate(
        ".sol-line-3",
        { pathLength: 1, opacity: 1 },
        { duration: 0.2, ease: "easeOut" },
      );

      animate(
        ".sol-symbol",
        { scale: [0.96, 1] },
        { duration: 0.2, ease: "easeOut" },
      );
    };

    const stop = () => {
      animate(
        ".sol-line",
        { pathLength: 1, opacity: 1 },
        { duration: 0.2 },
      );
      animate(".sol-symbol", { scale: 1 }, { duration: 0.2 });
    };

    useImperativeHandle(ref, () => {
      return {
        startAnimation: start,
        stopAnimation: stop,
      };
    });

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
        className={`sol-symbol ${className}`}
      >
        <motion.path
          className="sol-line sol-line-1"
          d="M4 6h14l2 2H6L4 6z"
          fill="none"
        />
        <motion.path
          className="sol-line sol-line-2"
          d="M4 12h16"
          fill="none"
        />
        <motion.path
          className="sol-line sol-line-3"
          d="M4 18h14l2-2H6l-2 2z"
          fill="none"
        />
      </motion.svg>
    );
  },
);

SolanaIcon.displayName = "SolanaIcon";

export default SolanaIcon;
