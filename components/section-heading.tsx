import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
  icon?: ReactNode;
}

interface SectionSubHeadingProps {
  children?: ReactNode;
}

export const Section = {
  subHeading: ({ children }: SectionSubHeadingProps) => (
    <div className="flex flex-col md:flex-row justify-between lg:items-center gap-2 text-neutral-600 dark:text-neutral-400">
      {children}
    </div>
  ),
  Heading: ({ title, icon, className = "" }: SectionHeadingProps) => (
    <div
      className={`flex items-center gap-1 text-xl font-medium text-neutral-800 dark:text-neutral-300 ${className}`}
    >
      {icon && <>{icon}</>}
      <h2 className="capitalize">{title}</h2>
    </div>
  ),
};
