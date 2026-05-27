/**
 * Animation helper utilities
 * Common functions used across animation components
 */

/**
 * Calculate distance between two points
 */
export const distance = (x1, y1, x2, y2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};

/**
 * Linear interpolation between two values
 */
export const lerp = (start, end, amount) => {
  return start * (1 - amount) + end * amount;
};

/**
 * Clamp a value between min and max
 */
export const clamp = (min, value, max) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Map a value from one range to another
 */
export const map = (value, inputMin, inputMax, outputMin, outputMax) => {
  return outputMin + ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin);
};

/**
 * Get random number between min and max
 */
export const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

/**
 * Get random integer between min and max
 */
export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Convert degrees to radians
 */
export const toRad = (deg) => {
  return (deg * Math.PI) / 180;
};

/**
 * Convert radians to degrees
 */
export const toDeg = (rad) => {
  return (rad * 180) / Math.PI;
};

/**
 * Ease-out cubic easing function
 */
export const easeOutCubic = (t) => {
  return 1 - Math.pow(1 - t, 3);
};

/**
 * Ease-in-out cubic easing function
 */
export const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/**
 * Ease-out expo easing function
 */
export const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

/**
 * Get scroll progress (0 to 1)
 */
export const getScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return scrollTop / docHeight;
};

/**
 * Get element position relative to viewport
 */
export const getElementPositionInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left,
    bottom: rect.bottom,
    right: rect.right,
    width: rect.width,
    height: rect.height,
    centerX: rect.left + rect.width / 2,
    centerY: rect.top + rect.height / 2,
  };
};

/**
 * Check if element is in viewport
 */
export const isElementInViewport = (element, offset = 0) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top + offset < window.innerHeight &&
    rect.bottom - offset > 0
  );
};

/**
 * Get viewport dimensions
 */
export const getViewportSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

/**
 * Create particle properties for animations
 */
export const createParticle = (x, y, vx = 0, vy = 0, life = 1) => {
  return {
    x,
    y,
    vx,
    vy,
    life,
    maxLife: life,
  };
};

/**
 * Update particle position and life
 */
export const updateParticle = (particle, deltaTime = 0.016) => {
  particle.x += particle.vx * deltaTime * 60;
  particle.y += particle.vy * deltaTime * 60;
  particle.life -= deltaTime;
  return particle;
};

/**
 * Generate random color
 */
export const getRandomColor = () => {
  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#FFA07A',
    '#98D8C8',
    '#F7DC6F',
    '#BB8FCE',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Interpolate between colors
 */
export const interpolateColor = (color1, color2, factor) => {
  // Convert hex to RGB and interpolate
  const c1 = parseInt(color1.slice(1), 16);
  const c2 = parseInt(color2.slice(1), 16);
  
  const r1 = (c1 >> 16) & 0xff;
  const g1 = (c1 >> 8) & 0xff;
  const b1 = c1 & 0xff;
  
  const r2 = (c2 >> 16) & 0xff;
  const g2 = (c2 >> 8) & 0xff;
  const b2 = c2 & 0xff;
  
  const r = Math.round(lerp(r1, r2, factor));
  const g = Math.round(lerp(g1, g2, factor));
  const b = Math.round(lerp(b1, b2, factor));
  
  return `rgb(${r}, ${g}, ${b})`;
};
