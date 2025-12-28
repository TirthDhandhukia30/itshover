import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const PlayerIcon = ({ size = 24, className = "" }: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const playAnimation = async () => {
    await animate(
      ".play-icon",
      {
        scale: [1, 0.8],
      },
      {
        duration: 0.4,
        ease: "easeOut",
      },
    );
  };

  const endAnimation = async () => {
    await animate(
      ".play-icon",
      {
        scale: [0.8, 1],
      },
      {
        duration: 0.4,
        ease: "easeOut",
      },
    );
  };

  return (
    <motion.div
      ref={scope}
      onTap={playAnimation}
      onHoverStart={playAnimation}
      onHoverEnd={endAnimation}
      className={`inline-flex cursor-pointer ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="play-icon"
        style={{ transformOrigin: "50% 50%" }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
      </svg>
    </motion.div>
  );
};

export default PlayerIcon;
