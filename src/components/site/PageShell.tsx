import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import DockNav from "./DockNav";

type PageShellProps = {
  title?: string;
  meta?: string;
  children: ReactNode;
};

const PageShell = ({ title, meta, children }: PageShellProps) => (
  <main className="relative min-h-[100dvh] bg-background px-6 py-16 md:px-12 md:py-24 lg:px-24">
    <ThemeToggle />
    <DockNav />

    <div className="mx-auto w-full max-w-3xl pb-24">
      {title && (
        <header className="animate-fade-in opacity-0">
          <h1 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            {title}
          </h1>
          {meta && <p className="mt-2 text-muted-foreground">{meta}</p>}
        </header>
      )}
      <div className={title ? "mt-10" : ""}>{children}</div>
    </div>
  </main>
);

export default PageShell;
