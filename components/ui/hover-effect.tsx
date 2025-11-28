import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export interface HoverEffectItem {
  title: string;
  description: string;
  link: string;
}

interface HoverEffectProps {
  items: HoverEffectItem[];
  className?: string;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-10',
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link + idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200/80 dark:bg-slate-800/[0.85] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full overflow-hidden bg-black/90 text-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4 md:p-5 lg:p-6">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <h4 className={cn('text-zinc-100 font-semibold tracking-wide text-sm md:text-base mt-1', className)}>
      {children}
    </h4>
  );
};

export const CardDescription: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <p
      className={cn(
        'mt-3 text-zinc-300/90 tracking-wide leading-relaxed text-xs md:text-sm',
        className,
      )}
    >
      {children}
    </p>
  );
};
