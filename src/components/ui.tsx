import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">{children}</div>;
}

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<'section'>;

export function Section({ id, children, className = '', ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 grid gap-3 ${className}`}>
      {eyebrow && <p className="text-sm font-medium uppercase tracking-[0.1em] text-gray-400">{eyebrow}</p>}
      <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.1]">{title}</h2>
    </div>
  );
}

type PanelProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<'article'>;

export function Panel({ children, className = '', ...props }: PanelProps) {
  return (
    <article
      className={`${className}`}
      {...props}
    >
      {children}
    </article>
  );
}

type PillProps = {
  children: ReactNode;
};

export function Pill({ children }: PillProps) {
  return (
    <span className="inline-block px-3 py-1.5 text-sm font-medium">
      {children}
    </span>
  );
}
