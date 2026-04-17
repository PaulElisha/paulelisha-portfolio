import { ExternalLink } from "lucide-react";
import type { Reason } from "@/data/reasons";

interface ReasonCardProps {
  reason: Reason;
}

const pad = (n: number) => String(n).padStart(3, "0");

const ReasonCard = ({ reason }: ReasonCardProps) => {
  return (
    <article className="card-tilt bg-reason text-reason-foreground rounded-xl shadow-card p-7 md:p-9 w-full">
      {/* Meta header */}
      <div className="flex items-start justify-between gap-4">
        <dl className="text-[11px] leading-5 uppercase tracking-wider opacity-90 space-y-0.5">
          <div>
            <span className="opacity-70">Category</span>
            <span className="opacity-70"> // </span>
            <span>{reason.category}</span>
          </div>
          <div>
            <span className="opacity-70">Ref. doc</span>
            <span className="opacity-70"> // </span>
            <span>{reason.refDoc}</span>
          </div>
          <div>
            <span className="opacity-70">Language</span>
            <span className="opacity-70"> // </span>
            <span>EN</span>
          </div>
        </dl>
        <div className="text-[44px] md:text-[56px] font-bold leading-none tracking-tight">
          {pad(reason.id)}
        </div>
      </div>

      {/* Title in a bordered box */}
      <h2 className="mt-7 border border-reason-foreground/90 px-4 py-3 text-[20px] md:text-[26px] leading-tight font-semibold">
        {reason.title}
      </h2>

      {/* Body */}
      <p className="mt-6 text-[14px] md:text-[15px] leading-relaxed opacity-95 max-w-prose">
        {reason.body}
      </p>

      {/* Footer */}
      <div className="mt-8 flex items-end justify-between gap-4 flex-wrap">
        <div className="text-[10px] uppercase tracking-wider opacity-80 leading-relaxed">
          {reason.source && <div>{reason.source}</div>}
          <div>1000REASONS_VOTE / paulelisha</div>
        </div>
        {reason.href && (
          <a
            href={reason.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-reason-foreground/95 text-reason px-4 py-2 text-[12px] uppercase tracking-wider no-underline hover:bg-reason-foreground transition-colors"
          >
            Open <ExternalLink size={12} />
          </a>
        )}
      </div>
    </article>
  );
};

export default ReasonCard;
