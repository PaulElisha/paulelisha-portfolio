import { useParams } from "react-router-dom";
import { ledger } from "@/lib/portfolioData";
import DetailShell from "@/components/site/DetailShell";


export default function ProjectDetail() {
  const { id } = useParams();
  const item = ledger.find((i) => i.id === id);

  if (!item) {
    return (
      <DetailShell backTo="/work" backLabel="work">
        <p className="text-muted-foreground">Project not found.</p>
      </DetailShell>
    );
  }

  return (
    <DetailShell backTo="/work" backLabel="work">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>{item.id}</span>
        <span>·</span>
        <span>{item.type}</span>
      </div>

      <h1 className="mt-2 flex items-center gap-2 text-2xl font-medium text-foreground md:text-3xl">
        {item.logo && <img src={item.logo} alt="" className="h-7 w-7 rounded-lg object-cover" />}
        <span>{item.name}</span>
      </h1>
      <p className="mt-1 text-muted-foreground">{item.role}</p>

      <div className="group mt-6 overflow-hidden rounded-2xl border border-border bg-muted">
        {item.video ? (
          <video
            src={item.video}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster={item.image}
            className="aspect-video block w-full object-contain"
          />
        ) : item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex aspect-video w-full items-center justify-center bg-muted">
            <span className="text-sm text-muted-foreground">{item.name}</span>
          </div>
        )}
      </div>

      <p className="mt-6 text-foreground">{item.summary}</p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground transition-opacity hover:text-foreground hover:opacity-80"
        >
          live ↗
        </a>
        {item.submission && (
          <a
            href={item.submission}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-opacity hover:text-foreground hover:opacity-80"
          >
            submission ↗
          </a>
        )}
      </div>

      {item.techStack && (
        <div className="mt-8">
          <p className="mb-2 text-sm text-muted-foreground">stack</p>
          <div className="flex flex-wrap gap-2">
            {item.techStack.map((t) => (
              <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {item.overview && (
        <div className="mt-10">
          <h2 className="mb-3 text-foreground">overview</h2>
          <div className="space-y-3 text-foreground">
            {item.overview.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )}

      {item.howItWorks && (
        <div className="mt-10">
          <h2 className="mb-4 text-foreground">how it works</h2>
          <div className="space-y-4">
            {item.howItWorks.map((step, i) => (
              <div key={step.title} className="border-l border-border pl-4">
                <p className="text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} · {step.title}
                </p>
                <p className="mt-1 text-foreground">{step.text}</p>
                {step.bullets && (
                  <ul className="mt-2 list-disc list-inside space-y-1 text-foreground">
                    {step.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {item.details && (
        <div className="mt-10 space-y-6">
          {item.details.map((block, i) => (
            <div key={block.label} className="border-l border-border pl-4">
              <p className="text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {block.label}
              </p>
              <p className="mt-1 text-foreground">{block.text}</p>
            </div>
          ))}
        </div>
      )}

      {item.map && (
        <div className="mt-10 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {item.map.map((node, i) => (
            <span key={node} className="flex items-center gap-2">
              <span className="rounded-full border border-border px-2.5 py-0.5">{node}</span>
              {i < item.map.length - 1 && <span>→</span>}
            </span>
          ))}
        </div>
      )}
    </DetailShell>
  );
}
