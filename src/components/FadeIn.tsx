import { motion } from 'framer-motion';
import type { CSSProperties, ElementType, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

const motionCache = new Map<ElementType, typeof motion.div>();

function getMotionComponent(tag: ElementType): typeof motion.div {
  let comp = motionCache.get(tag);
  if (!comp) {
    comp = motion.create(tag as 'div') as typeof motion.div;
    motionCache.set(tag, comp);
  }
  return comp;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  as = 'div',
}: FadeInProps) {
  const Comp = getMotionComponent(as);
  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Comp>
  );
}
