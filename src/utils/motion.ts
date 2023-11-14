export const fadeIn = (
  delay: number,
  duration: number,
  direction?: string,
  from: number = 0,
) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? from : direction === "right" ? from : 0,
    y: direction === "up" ? from : direction === "down" ? from : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { delay, type: "tween", ease: "easeOut", duration },
  },
});

/**
 * Component Header
 */
export const animateMenu = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.15,
    },
    transitionEnd: {
      display: "none",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
    display: "block",
  },
};
