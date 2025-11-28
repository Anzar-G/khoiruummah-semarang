import * as React from 'react';
import { cn } from '../../lib/utils';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FeaturesSectionWithHoverEffectsProps {
  features?: FeatureItem[];
  className?: string;
}

export const FeaturesSectionWithHoverEffects: React.FC<FeaturesSectionWithHoverEffectsProps> = ({
  features,
  className,
}) => {
  const defaultFeatures: FeatureItem[] = [
    {
      title: 'Sample feature 1',
      description: 'Default content. Kirim props features untuk menggantinya.',
      icon: <span className="inline-block h-2 w-2 rounded-full bg-neutral-400" />,
    },
    {
      title: 'Sample feature 2',
      description: 'Default content. Kirim props features untuk menggantinya.',
      icon: <span className="inline-block h-2 w-2 rounded-full bg-neutral-400" />,
    },
  ];

  const items = features && features.length > 0 ? features : defaultFeatures;

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-6 md:py-10 max-w-7xl mx-auto',
        className,
      )}
    >
      {items.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

interface FeatureProps extends FeatureItem {
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-8 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800',
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100/80 dark:from-neutral-800/80 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100/80 dark:from-neutral-800/80 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-6 md:px-8 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-6 md:px-8">
        {description}
      </p>
    </div>
  );
};
