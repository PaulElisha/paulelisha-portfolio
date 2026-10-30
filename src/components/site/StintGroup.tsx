import { Link } from "react-router-dom";
import type { LedgerItem } from "@/lib/portfolioData";

type StintGroupProps = {
  label: string;
  items: LedgerItem[];
  index?: number;
};

const StintGroup = ({ label, items, index = 0 }: StintGroupProps) => (
  <li
    className="animate-fade-in opacity-0 pt-2"
    style={{ animationDelay: `${index * 70}ms` }}
  >
    <span className="text-muted-foreground">{label}</span>
    <ul className="list-[circle] list-inside mt-2 space-y-1 pl-4">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            to={`/work/${item.id}`}
            className="transition-opacity hover:opacity-70"
          >
            {item.name}
          </Link>
          <span className="text-muted-foreground"> — {item.role.toLowerCase()}</span>
        </li>
      ))}
    </ul>
  </li>
);

export default StintGroup;
