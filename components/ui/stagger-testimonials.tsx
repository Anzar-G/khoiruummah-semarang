import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const SQRT_5000 = Math.sqrt(5000);

export interface StaggerTestimonialItem {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
}

interface TestimonialCardProps {
  position: number;
  testimonial: StaggerTestimonialItem;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        'absolute left-1/2 top-1/2 cursor-pointer border p-6 sm:p-8 transition-all duration-500 ease-in-out rounded-2xl bg-white',
        isCenter
          ? 'z-10 text-slate-900 border-[#422467] shadow-xl'
          : 'z-0 text-slate-900 border-slate-200/70 hover:border-primary/50',
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath:
          'polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)',
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? '0px 8px 0px 4px hsl(var(--border))'
          : '0px 0px 0px 0px transparent',
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(',')[0]}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top rounded-md"
        style={{
          boxShadow: '3px 3px 0px hsl(var(--background))',
        }}
      />
      <h3 className="text-sm sm:text-lg md:text-xl font-medium leading-relaxed text-slate-900">
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          'absolute left-6 right-6 bottom-6 mt-2 text-xs sm:text-sm italic',
          isCenter ? 'text-slate-600' : 'text-slate-500',
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export interface StaggerTestimonialsProps {
  items: StaggerTestimonialItem[];
}

export const StaggerTestimonials: React.FC<StaggerTestimonialsProps> = ({ items }) => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState<StaggerTestimonialItem[]>(items);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const matches = window.matchMedia('(min-width: 640px)').matches;
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-50/80 border border-slate-200 rounded-3xl"
      style={{ height: 480 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            'flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center text-lg sm:text-xl rounded-full border border-slate-300 bg-white text-slate-700 transition-colors',
            'hover:bg-primary hover:text-primary-foreground hover:border-primary',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          )}
          aria-label="Previous testimonial"
          type="button"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            'flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center text-lg sm:text-xl rounded-full border border-slate-300 bg-white text-slate-700 transition-colors',
            'hover:bg-primary hover:text-primary-foreground hover:border-primary',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          )}
          aria-label="Next testimonial"
          type="button"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
