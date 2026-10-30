import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import DockNav from "./DockNav";

type DetailShellProps = {
  backTo: string;
  backLabel: string;
  children: ReactNode;
};

const DetailShell = ({ backTo, backLabel, children }: DetailShellProps) => (
  <main className="relative min-h-[100dvh] bg-background px-6 py-16 md:px-12 md:py-24 lg:px-24">
    <ThemeToggle />
    <DockNav />

    <div className="mx-auto w-full max-w-3xl pb-24">
      <Link
        to={backTo}
        className="text-sm text-muted-foreground transition-opacity hover:opacity-70"
      >
        ← {backLabel}
      </Link>
      <div className="mt-8">{children}</div>
    </div>
  </main>
);

export default DetailShell;
