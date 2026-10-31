import { useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { research } from "@/lib/portfolioData";
import DetailShell from "@/components/site/DetailShell";

export default function ResearchDetail() {
  const { id } = useParams();
  const item = research.find((r) => r.id === id);

  if (!item) {
    return (
      <DetailShell backTo="/research" backLabel="research">
        <p className="text-muted-foreground">Research not found.</p>
      </DetailShell>
    );
  }

  return (
    <DetailShell backTo="/research" backLabel="research">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>{item.index}</span>
        <span>·</span>
        <span>RESEARCH</span>
      </div>

      <h1 className="mt-2 text-2xl font-medium leading-tight text-foreground md:text-3xl">
        {item.title}
      </h1>

      <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-foreground/40 to-foreground/5" />

      <p className="mt-5 text-foreground">{item.text}</p>

      <p className="mt-4 text-sm text-muted-foreground">
        The full piece lives on the blog — continue there to read it end to end.
      </p>

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-transform duration-200 hover:scale-[1.03] active:scale-95"
      >
        Read more <ArrowUpRight size={15} />
      </a>
    </DetailShell>
  );
}
