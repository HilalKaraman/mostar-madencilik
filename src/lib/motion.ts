export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const navReveal = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0 },
};

export const staggerContainer = (stagger = 0.08) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger },
  },
});

export const scaleOnHover = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
};


