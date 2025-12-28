import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CurrencyEthereumIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    await animate(
      ".eth-outer, .eth-inner",
      { pathLength: 0, opacity: 0 },
      { duration: 0 },
    );

    await animate(
      ".eth-outer",
      { pathLength: 1, opacity: 1 },
      { duration: 0.3, ease: "easeOut" },
    );

    await animate(
      ".eth-inner",
      { pathLength: 1, opacity: 1 },
      { duration: 0.25, ease: "easeOut" },
    );

    animate(
      ".eth-symbol",
      { scale: [0.96, 1] },
      { duration: 0.2, ease: "easeOut" },
    );
  };

  return (
    <motion.div
      ref={scope}
      onHoverStart={hoverAnimation}
      className={`inline-flex cursor-pointer items-center justify-center ${className}`}
    >
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
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.g className="eth-symbol" style={{ transformOrigin: "50% 50%" }}>
          <motion.path
            className="eth-outer"
            d="M6 12l6 -9l6 9l-6 9z"
            pathLength={1}
          />
          <motion.path
            className="eth-inner"
            d="M6 12l6 -3l6 3l-6 2z"
            pathLength={1}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default CurrencyEthereumIcon;
