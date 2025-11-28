import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button, type ButtonProps } from './button';
import { cn } from '../../lib/utils';

interface GetStartedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonProps['size'];
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  children,
  size = 'lg',
  className,
  ...props
}) => {
  return (
    <Button
      className={cn(
        'group relative overflow-hidden w-full sm:w-auto justify-center',
        className,
      )}
      size={size}
      {...props}
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        {children}
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-black-500">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </Button>
  );
};
