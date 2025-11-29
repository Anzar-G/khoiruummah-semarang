import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Accordion = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-2", className)} {...props} />
  ),
);
Accordion.displayName = "Accordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("border border-slate-200 rounded-xl overflow-hidden bg-white", className)}
      {...props}
    >
      {children}
    </div>
  ),
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "w-full px-4 sm:px-5 py-3 sm:py-4 text-left flex items-center justify-between gap-3 text-sm font-medium text-slate-800 bg-slate-50 hover:bg-slate-100 transition-colors",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown className="w-4 h-4 text-slate-400" aria-hidden="true" />
    </button>
  ),
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-4 sm:px-5 pb-4 pt-1 text-sm text-slate-600 bg-white", className)}
    {...props}
  />
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
