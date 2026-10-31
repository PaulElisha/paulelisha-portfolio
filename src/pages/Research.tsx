import { Link } from "react-router-dom";
import { research } from "@/lib/portfolioData";
import PageShell from "@/components/site/PageShell";

export default function Research() {
  return (
    <PageShell title="research" meta="Notes and deep dives into protocol and market mechanics.">
      <ul className="space-y-8">
        {research.map((r, i) => (
          <li
            key={r.id}
            className="animate-fade-in border-b border-border pb-8 opacity-0 last:border-0 last:pb-0"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <Link to={`/research/${r.id}`} className="group block">
              <span className="text-sm text-muted-foreground">{r.index}</span>
              <h2 className="mt-1 text-lg font-medium text-foreground transition-opacity group-hover:opacity-70">
                {r.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{r.text}</p>
              <span className="mt-3 inline-block text-sm text-foreground">read →</span>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
