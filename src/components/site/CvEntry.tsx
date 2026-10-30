import type { CvRole } from "@/lib/cvData";

const CvEntry = ({ role }: { role: CvRole }) => (
  <article className="animate-fade-in opacity-0">
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h3 className="font-medium text-foreground">{role.company}</h3>
      {role.period && (
        <span className="text-sm text-muted-foreground">{role.period}</span>
      )}
    </div>
    <p className="text-sm text-muted-foreground">
      {role.role}
      {role.link && (
        <>
          {" · "}
          <a
            href={role.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-opacity hover:opacity-70"
          >
            link ↗
          </a>
        </>
      )}
    </p>
    <ul className="mt-3 list-disc list-inside space-y-1.5 text-foreground">
      {role.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  </article>
);

export default CvEntry;
