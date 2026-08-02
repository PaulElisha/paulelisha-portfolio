import { Helmet } from "react-helmet-async";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Paul Elisha - Blockchain Engineer</title>
        <meta name="description" content="Smart Contract Engineer with experience designing and implementing DeFi protocols. 2x global hackathon winner. Co-founder of Asset Scooper." />
      </Helmet>

      <ThemeToggle />

      <main className="min-h-screen bg-background px-4 py-6 md:px-8 md:py-10 flex items-center justify-center">
        <div className="w-full max-w-6xl min-h-[85vh] flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl border border-border opacity-0 animate-fade-in">
          {/* Left Panel: Identity & Navigation */}
          <aside className="w-full md:w-2/5 bg-primary text-primary-foreground p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                open to opportunities
              </div>

              <h1 className="text-5xl md:text-6xl leading-[0.95] mb-5">
                paul elisha
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 font-light leading-relaxed max-w-xs mb-6">
                smart contract engineer, software engineer, research
              </p>
              <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-sm">
                Building secure, gas-optimized smart contracts and DeFi protocols. 2x hackathon winner @ Base, Kaia (on-chain summer).
              </p>
            </div>

            <nav className="mt-12 space-y-5">
              <a
                href="#experience"
                className="block text-xs uppercase tracking-[0.2em] text-primary-foreground/50 hover:text-primary-foreground transition-colors no-underline"
              >
                01. Experience
              </a>
              <a
                href="#open-source"
                className="block text-xs uppercase tracking-[0.2em] text-primary-foreground/50 hover:text-primary-foreground transition-colors no-underline"
              >
                02. Open Source
              </a>
              <a
                href="#projects"
                className="block text-xs uppercase tracking-[0.2em] text-primary-foreground/50 hover:text-primary-foreground transition-colors no-underline"
              >
                03. Selected Projects
              </a>
              <a
                href="#research"
                className="block text-xs uppercase tracking-[0.2em] text-primary-foreground/50 hover:text-primary-foreground transition-colors no-underline"
              >
                04. Research
              </a>
              <a
                href="#coursework"
                className="block text-xs uppercase tracking-[0.2em] text-primary-foreground/50 hover:text-primary-foreground transition-colors no-underline"
              >
                05. Coursework
              </a>

              <div className="pt-10 flex gap-5 text-sm text-primary-foreground/60">
                <a
                  href="https://x.com/paulelishaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  X ↗
                </a>
                <a
                  href="mailto:ajaoireoluwa1@gmail.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  mail ↗
                </a>
              </div>
            </nav>
          </aside>

          {/* Right Panel: Content */}
          <div className="w-full md:w-3/5 overflow-y-auto max-h-[85vh] md:max-h-none bg-card text-card-foreground p-8 md:p-12 scroll-smooth custom-scrollbar">
            {/* Stints & Experience */}
            <section id="experience" className="mb-16">
              <h2 className="text-3xl text-card-foreground mb-8 border-b border-border pb-4">
                Stints & Experience
              </h2>

              <div className="space-y-10">
                <div className="group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-card-foreground">Developer Support</h3>
                    <span className="text-sm text-muted-foreground font-mono">Kaia Labs</span>
                  </div>
                  <p className="text-card-foreground/80 leading-relaxed font-light">
                    Built{" "}
                    <a href="https://github.com/PaulElisha/kaiascan-sdk-ts" target="_blank" rel="noopener noreferrer">
                      SDKs ↗
                    </a>{" "}
                    for the blockchain platform, onboarded developers, and facilitated a smoother experience for integration developers.
                  </p>
                </div>

                <div className="group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-card-foreground">Smart Contract Engineer</h3>
                    <span className="text-sm text-muted-foreground font-mono">Asset Scooper</span>
                  </div>
                  <p className="text-card-foreground/80 leading-relaxed font-light">
                    Wallet consolidation platform returning stablecoin for meme and dust tokens (base-hackathon).
                  </p>
                </div>

                <div className="group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-card-foreground">Software Engineer Intern</h3>
                    <span className="text-sm text-muted-foreground font-mono">Tiva Creative</span>
                  </div>
                  <p className="text-card-foreground/80 leading-relaxed font-light">
                    Built the client-facing API for an in-house project, the-other-wife; a food ordering app, at MVP stage.
                  </p>
                </div>
              </div>
            </section>

            {/* Open Source */}
            <section id="open-source" className="mb-16">
              <h2 className="text-3xl text-card-foreground mb-8 border-b border-border pb-4">
                Open-Source Contributions
              </h2>

              <div className="space-y-10">
                <div className="group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-card-foreground">Protocol Documentation Contributor</h3>
                    <span className="text-sm text-muted-foreground font-mono">Uniswap</span>
                  </div>
                  <p className="text-card-foreground/80 leading-relaxed font-light">
                    Improved technical documentation and authored{" "}
                    <a href="https://docs.uniswap.org/contracts/v4/guides/unlock-callback#handling-deltas-for-liquidity-modifications" target="_blank" rel="noopener noreferrer">
                      delta handling for liquidity modifications ↗
                    </a>{" "}
                    on Uniswap v4.
                  </p>
                </div>

                <div className="group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-card-foreground">Contributor</h3>
                    <span className="text-sm text-muted-foreground font-mono">cNGN</span>
                  </div>
                  <p className="text-card-foreground/80 leading-relaxed font-light">
                    Oracle SDK refactoring, failover resilience, resolved signer injection and improved security.
                  </p>
                </div>

                <div className="group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-card-foreground">Mantle AI Plugin</h3>
                    <span className="text-sm text-muted-foreground font-mono">Goat SDK</span>
                  </div>
                  <p className="text-card-foreground/80 leading-relaxed font-light">
                    Built a{" "}
                    <a href="https://github.com/PaulElisha/mantle-ai-plugin" target="_blank" rel="noopener noreferrer">
                      Goat SDK plugin ↗
                    </a>{" "}
                    for AI agents to interact with the Mantle ecosystem (bridging, tokens, on-chain data).
                  </p>
                </div>
              </div>
            </section>

            {/* Selected Projects */}
            <section id="projects" className="mb-16">
              <h2 className="text-3xl text-card-foreground mb-8 border-b border-border pb-4">
                Selected Projects
              </h2>

              <div className="grid grid-cols-1 gap-5">
                <div className="p-5 rounded-lg bg-muted/50 border border-border hover:border-ring/30 transition-all">
                  <h3 className="text-xl text-card-foreground mb-2">
                    <a href="https://github.com/PaulElisha/Liq0S-Custom-UniV4-Router-For-Auction-based-Liquidity-Market-JIT" target="_blank" rel="noopener noreferrer">
                      Liq0S ↗
                    </a>
                  </h3>
                  <p className="text-card-foreground/80 text-sm leading-relaxed">
                    Custom Uniswap V4 hook, auction-based JIT liquidity rebalancer.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-muted/50 border border-border hover:border-ring/30 transition-all">
                  <h3 className="text-xl text-card-foreground mb-2">
                    <a href="https://github.com/PaulElisha/task-flow-api" target="_blank" rel="noopener noreferrer">
                      TaskFlow ↗
                    </a>
                  </h3>
                  <p className="text-card-foreground/80 text-sm leading-relaxed">
                    Project management API with sprint tracking, Google OAuth, MongoDB.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-muted/50 border border-border hover:border-ring/30 transition-all">
                  <h3 className="text-xl text-card-foreground mb-2">
                    <a href="https://predictiv-trend.vercel.app" target="_blank" rel="noopener noreferrer">
                      PredictivTrend ↗
                    </a>
                  </h3>
                  <p className="text-card-foreground/80 text-sm leading-relaxed">
                    AI-powered stock analysis tool using Mistral AI for performance reports and predictions.
                  </p>
                </div>
              </div>
            </section>

            {/* Research */}
            <section id="research" className="mb-16">
              <h2 className="text-3xl text-card-foreground mb-8 border-b border-border pb-4">
                Selected Research
              </h2>

              <div className="space-y-10">
                <div className="group">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    <a href="https://paragraph.com/@break-into-defi/uniswap-v3-advanced-mechanics" target="_blank" rel="noopener noreferrer">
                      Uniswap V3 Advanced Mechanics ↗
                    </a>
                  </h3>
                  <p className="text-card-foreground/80 leading-relaxed font-light">
                    A deep dive explanation on concentrated liquidity, reserves, liquidity math, position management.
                  </p>
                </div>

                <div className="group">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    <a href="https://paragraph.com/@break-into-defi/mechanics-of-uniswap-v3-liquidity-distribution" target="_blank" rel="noopener noreferrer">
                      Mechanics of Liquidity Distribution ↗
                    </a>
                  </h3>
                  <p className="text-card-foreground/80 leading-relaxed font-light">
                    Token swapping analysis: execution tracing, slippage analysis, and a literature review on liquidity distribution.
                  </p>
                </div>
              </div>
            </section>

            {/* Specialized Coursework */}
            <section id="coursework" className="mb-8">
              <h2 className="text-3xl text-card-foreground mb-8 border-b border-border pb-4">
                Specialized Coursework
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Backend Systems & Architecture
                  </h3>
                  <p className="text-card-foreground/80 font-light">
                    Typescript, Node.js deep dive, API design, event-driven architecture, cloud infra & devops (in-progress).
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Reactive & Functional Logic
                  </h3>
                  <p className="text-card-foreground/80 font-light">
                    Functional reactive programming (RxJS), async data processing.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Data Architecture
                  </h3>
                  <p className="text-card-foreground/80 font-light">
                    Designing data systems, database performance, schema design.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
