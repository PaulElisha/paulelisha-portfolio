import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { Reason } from "@/data/reasons";

interface TrendingSidebarProps {
  reasons: Reason[];
  activeId: number;
  onSelect: (id: number) => void;
}

const pad = (n: number) => String(n).padStart(3, "0");

const TrendingSidebar = ({ reasons, activeId, onSelect }: TrendingSidebarProps) => {
  const [open, setOpen] = useState(true);

  return (
    <aside className="w-full lg:w-[360px] xl:w-[400px] shrink-0 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto pr-1">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="text-[11px] uppercase tracking-wider text-foreground/80">
          Trending <span className="ml-2 opacity-60">{reasons.length}</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Collapse list" : "Expand list"}
          className="nav-chip hover:bg-muted"
        >
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </button>
      </div>

      {open && (
        <ul className="space-y-2.5">
          {reasons.map((r) => {
            const active = r.id === activeId;
            return (
              <li key={r.id}>
                <button
                  onClick={() => onSelect(r.id)}
                  className={`w-full text-left rounded-xl border bg-background hover:bg-muted/50 transition-colors px-4 py-3.5 ${
                    active ? "border-foreground/60" : "border-border"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-wider text-foreground/60 mb-1">
                    #{pad(r.id)} <span className="opacity-50">//</span>{" "}
                    {r.category}
                  </div>
                  <div className="text-[13px] leading-snug font-medium text-foreground">
                    {r.title}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
};

export default TrendingSidebar;
