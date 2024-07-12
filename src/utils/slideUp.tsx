"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface SlideUpProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
}

const SlideUp = ({ children, threshold, delay }: SlideUpProps): JSX.Element => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: threshold ?? 0.35 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8, delay: delay ?? 0 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
