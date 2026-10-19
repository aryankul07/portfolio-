import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const total = text.length;
  let cursor = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const chars = word.split('');
        const nodes = chars.map((c) => {
          const idx = cursor++;
          return <Char key={idx} char={c} index={idx} total={total} progress={scrollYProgress} />;
        });
        // the space between words
        const spaceIdx = wi < words.length - 1 ? cursor++ : -1;
        return (
          <span key={wi} className="inline-block">
            {nodes}
            {spaceIdx >= 0 && (
              <Char char=" " index={spaceIdx} total={total} progress={scrollYProgress} />
            )}
          </span>
        );
      })}
    </p>
  );
}
