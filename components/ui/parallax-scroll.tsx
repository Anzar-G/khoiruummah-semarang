import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ParallaxScrollSecondProps {
  images: string[];
  className?: string;
}

export const ParallaxScrollSecond: React.FC<ParallaxScrollSecondProps> = ({
  images,
  className,
}) => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: gridRef, // container scroll internal, mengikuti contoh asli
    offset: ['start start', 'end start'],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn('h-[40rem] items-start overflow-y-auto w-full', className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-6 md:gap-10 py-10 md:py-16 px-4 md:px-10">
        <div className="grid gap-6 md:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYFirst,
                x: translateXFirst,
                rotateZ: rotateXFirst,
              }}
              key={'grid-1-' + idx}
            >
              <img
                src={el}
                className="h-64 md:h-80 w-full object-cover object-center rounded-xl shadow-sm"
                alt="Galeri prestasi Khoiru Ummah"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6 md:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={'grid-2-' + idx}>
              <img
                src={el}
                className="h-64 md:h-80 w-full object-cover object-center rounded-xl shadow-sm"
                alt="Galeri prestasi Khoiru Ummah"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6 md:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotateZ: rotateXThird,
              }}
              key={'grid-3-' + idx}
            >
              <img
                src={el}
                className="h-64 md:h-80 w-full object-cover object-center rounded-xl shadow-sm"
                alt="Galeri prestasi Khoiru Ummah"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
