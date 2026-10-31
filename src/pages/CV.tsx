import PageShell from "@/components/site/PageShell";
import CvEntry from "@/components/site/CvEntry";
import { cvLinks, cvSummary, cvRoles } from "@/lib/cvData";

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-sm tracking-wide text-muted-foreground">{children}</h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export default function CV() {
  return (
    <PageShell>
      <header className="animate-fade-in opacity-0">
        <h1 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">PAUL ELISHA</h1>
        <p className="mt-1 text-muted-foreground">SOFTWARE ENGINEER (BACKEND)</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          {cvLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-3">
              {i > 0 && <span className="text-border">|</span>}
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-foreground transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>
      </header>

      <section className="mt-12">
        <SectionHeading>PROFESSIONAL SUMMARY</SectionHeading>
        <p className="mt-4 text-foreground">{cvSummary}</p>
      </section>

      <section className="mt-12">
        <SectionHeading>WORK EXPERIENCE / PROJECTS</SectionHeading>
        <div className="mt-6 space-y-9">
          {cvRoles.map((role) => (
            <CvEntry key={role.company} role={role} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
