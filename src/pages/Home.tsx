import { Helmet } from "react-helmet-async";
import PageLoader from "@/components/site/PageLoader";
import ThemeToggle from "@/components/site/ThemeToggle";
import DockNav from "@/components/site/DockNav";

export default function Home() {
  return (
    <main className="relative flex h-[100dvh] justify-center overflow-hidden bg-background px-6 md:px-12 lg:px-24">
      <Helmet>
        <title>Paul Elisha — Software Engineer</title>
        <meta name="description" content="Backend and smart contract engineer. 2x hackathon winner @ Base, Kaia (on-chain summer). Open to opportunities." />
      </Helmet>
      <PageLoader />
      <ThemeToggle />
      <DockNav />

      <div className="flex w-full max-w-3xl flex-col justify-center pb-20">
        <h1 className="animate-fade-in text-base font-medium text-foreground opacity-0">paul elisha</h1>

        <p
          className="mt-8 max-w-xl animate-fade-in text-2xl font-medium leading-snug tracking-tight text-foreground opacity-0 md:text-3xl"
          style={{ animationDelay: "60ms" }}
        >
          software engineer, smart contract engineer, research.
        </p>

        <p
          className="mt-6 max-w-xl animate-fade-in text-muted-foreground opacity-0"
          style={{ animationDelay: "120ms" }}
        >
          I make backend decisions — architecture, data flow, APIs and reliability — across software, data and
          distributed protocol.
        </p>

        <p
          className="mt-3 max-w-xl animate-fade-in text-muted-foreground opacity-0"
          style={{ animationDelay: "160ms" }}
        >
          2x hackathon winner @ Base, Kaia (on-chain summer).
        </p>

        <p
          className="mt-10 animate-fade-in text-muted-foreground opacity-0"
          style={{ animationDelay: "220ms" }}
        >
          open to opportunities
        </p>

        <div
          className="mt-2 flex flex-wrap gap-x-3 gap-y-1 animate-fade-in opacity-0"
          style={{ animationDelay: "260ms" }}
        >
          <a
            href="https://x.com/paulelishaa"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:underline hover:opacity-70"
          >
            X ↗
          </a>
          <a href="mailto:ajaoireoluwa1@gmail.com" className="transition-opacity hover:underline hover:opacity-70">
            mail ↗
          </a>
        </div>
      </div>
    </main>
  );
}
