import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  techs = [],
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-2xl transition duration-300 shadow-sm p-6 dark:bg-card/40 dark:border-border bg-white border border-border/60 justify-between flex flex-col space-y-4 hover:border-primary/50 dark:hover:border-primary/50 relative overflow-hidden backdrop-blur-sm",
        className
      )}
    >
      {/* Background radial glow on hover */}
      <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex flex-col flex-1">
        {header}
        <div className="group-hover/bento:translate-x-1.5 transition duration-300 ease-out mt-4">
          <div className="flex items-center gap-2 mb-2">
            {icon && <div className="text-primary group-hover/bento:scale-110 transition-transform duration-300">{icon}</div>}
            <h3 className="font-display font-bold text-foreground text-lg tracking-tight">
              {title}
            </h3>
          </div>
          <p className="font-sans font-normal text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          {techs.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
