import { motion, Transition, useAnimation, Variants } from 'framer-motion';
import { FC, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimationDirection = 'up' | 'down' | 'left' | 'right';

const variantMap: Record<AnimationDirection, Variants> = {
  up: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  },
  down: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  },
  left: {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  },
  right: {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  },
};

type Props = {
  children: React.ReactNode;
  direction?: AnimationDirection;
  variants?: Variants;
  transition?: Transition;
  customInitial?: string;
  customAnimate?: string;
  customExit?: string;
};

export const AppTransition: FC<Props> = ({
  children,
  direction = 'down',
  variants,
  transition = { duration: 0.5, delay: 0 },
  customInitial = 'hidden',
  customAnimate = 'visible',
  customExit = 'hidden',
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Generate the variant dynamically based on the direction
  const motionVariants = useMemo(() => variants || variantMap[direction], [direction, variants]);

  useEffect(() => {
    if (inView) {
      controls.start(customAnimate);
    } else {
      controls.start(customExit);
    }
  }, [controls, inView, customAnimate, customExit]);

  return (
    <motion.div
      ref={ref}
      variants={motionVariants}
      animate={controls}
      initial={customInitial}
      exit={customExit}
      transition={transition}>
      {children}
    </motion.div>
  );
};
