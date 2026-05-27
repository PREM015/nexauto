/**
 * Shared animation utilities and variants
 * Provides consistent animation timing and easing across all components
 */

// Standard easing functions
export const easing = {
  // Ease-out cubic (common for exits and reveals)
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  // Ease-in-out cubic (smooth transitions)
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  // Ease-out expo (dynamic and snappy)
  easeOutExpo: [0.19, 1, 0.22, 1],
  // Ease-out elastic (bouncy feel)
  easeOutElastic: 'easeOut',
  // Linear (consistent speed)
  linear: [0, 0, 1, 1],
};

// Standard animation durations (in seconds)
export const durations = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  medium: 0.5,
  slow: 0.7,
  slower: 1,
  verySlow: 1.5,
};

// Stagger timing for sequential animations
export const stagger = {
  small: 0.05,    // 50ms between items
  medium: 0.1,    // 100ms between items
  large: 0.15,    // 150ms between items
  xlarge: 0.2,    // 200ms between items
};

// Container animation variants for Framer Motion
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.medium,
      delayChildren: 0.2,
    },
  },
};

// Item animation variants for Framer Motion
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easing.easeOutCubic,
    },
  },
};

// Text animation variants
export const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * stagger.small,
      duration: durations.normal,
    },
  }),
};

// Scale-in animation
export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.medium,
      ease: easing.easeOutCubic,
    },
  },
};

// Fade-in animation
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.normal,
    },
  },
};

// Slide-in from left
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.medium,
      ease: easing.easeOutCubic,
    },
  },
};

// Slide-in from right
export const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.medium,
      ease: easing.easeOutCubic,
    },
  },
};

// Slide-in from top
export const slideInTopVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easing.easeOutCubic,
    },
  },
};

// Slide-in from bottom
export const slideInBottomVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easing.easeOutCubic,
    },
  },
};

// Rotate-in animation
export const rotateInVariants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: durations.medium,
      ease: easing.easeOutCubic,
    },
  },
};

// Hover scale effect
export const hoverScaleVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: durations.fast,
      ease: easing.easeOutCubic,
    },
  },
};

// Glow effect animation
export const glowVariants = {
  rest: { boxShadow: '0 0 0px rgba(255, 255, 255, 0)' },
  hover: { 
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
    transition: {
      duration: durations.fast,
    },
  },
};

// Utility function to get staggered delay
export const getStaggerDelay = (index, baseDelay = 0) => {
  return baseDelay + index * stagger.medium;
};

// Utility function to create custom transition
export const createTransition = (duration = durations.normal, ease = easing.easeOutCubic) => ({
  duration,
  ease,
});

// Utility function for spring animation
export const springConfig = {
  gentle: { damping: 30, mass: 1, stiffness: 100 },
  normal: { damping: 20, mass: 1, stiffness: 300 },
  bouncy: { damping: 10, mass: 1, stiffness: 400 },
  tight: { damping: 40, mass: 1, stiffness: 300 },
};
