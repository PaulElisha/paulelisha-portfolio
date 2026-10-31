import { ledger } from "@/lib/portfolioData";
import PageShell from "@/components/site/PageShell";
import StintGroup from "@/components/site/StintGroup";

const groups = [
  { label: "Experience", type: "EXPERIENCE" as const },
  { label: "Open-Source Contributions", type: "OPEN SOURCE" as const },
  { label: "Selected Projects", type: "PROJECT" as const },
];

export default function Work() {
  return (
    <PageShell title="work" meta="Experience, open-source contributions and selected projects.">
      <ul className="list-disc list-inside space-y-2 text-foreground">
        {groups.map((g, i) => (
          <StintGroup
            key={g.type}
            label={g.label}
            index={i}
            items={ledger.filter((item) => item.type === g.type)}
          />
        ))}
      </ul>
    </PageShell>
  );
}
