import { Helmet } from "react-helmet-async";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Paul Elisha - Blockchain Engineer</title>
        <meta name="description" content="Smart Contract Engineer with experience designing and implementing DeFi protocols. 3x global hackathon winner. Co-founder of Asset Scooper." />
      </Helmet>
      
      <ThemeToggle />
      
      <main className="min-h-screen bg-background px-6 py-16 md:px-12 md:py-24 lg:px-24 flex justify-center">
        <div className="max-w-3xl w-full">
          {/* Name */}
          <h1 
            className="text-foreground font-medium text-base mb-1 opacity-0 animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            paul elisha
          </h1>
          
          {/* Tagline */}
          <p 
            className="text-muted-foreground mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "50ms" }}
          >
            smart contract engineer, software engineer, research
            <br />
            2x hackathon winner @ Base, Kaia (on-chain summer).
          </p>

          {/* Coursework Section */}
          <section
            className="mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "75ms" }}
          >
            <h2 className="text-foreground mb-4">
              specialized coursework{" "}
              <a href="https://frontendmasters.com" target="_blank" rel="noopener noreferrer">
                @ frontendmasters ↗
              </a>
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>backend systems and architecture; typescript, node.js deep dive, api design, event-driven architecture, cloud infra & devops (in-progress).</li>
              <li>reactive & functional logic; functional reactive programming (rxjs), async data processing.</li>
              <li>data architecture; designing data systems, database performance, schema design.</li>
            </ul>
          </section>

          {/* Stints Section */}
          <section 
            className="mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="text-foreground mb-4">Stints:</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li className="pt-2">
                <span className="text-muted-foreground">Experience</span>
                <ul className="list-[circle] list-inside pl-4 mt-2 space-y-1">
                  <li>
                    developer support{" "}
                    <a href="https://kaia.io" target="_blank" rel="noopener noreferrer">
                      @kaia labs ↗
                    </a>
                    ; built <a href="https://github.com/PaulElisha/kaiascan-sdk-ts" target="_blank" rel="noopener noreferrer">SDKs ↗</a> for the blockchain platform, onboarded developers, facilitated smoother experience for integration developers.
                  </li>
                  <li>
                    smart contract engineer{" "}
                    <a href="https://assetscooper.xyz" target="_blank" rel="noopener noreferrer">
                      @asset scooper ↗
                    </a>
                    ; wallet consolidation platform returning stablecoin for meme and dust tokens (base-hackathon).
                  </li>
                  <li>
                    software engineer intern @tiva creative; built the client-facing api for an in-house project, the-other-wife; a food ordering app, at MVP stage.
                  </li>
                </ul>
              </li>
              <li className="pt-2">
                <span className="text-muted-foreground">Open-Source Contributions</span>
                <ul className="list-[circle] list-inside pl-4 mt-2 space-y-1">
                  <li>
                    protocol documentation contributor{" "}
                    <a href="https://uniswap.org" target="_blank" rel="noopener noreferrer">
                      @uniswap ↗
                    </a>
                    , improved technical documentation, authored{" "}
                    <a href="https://docs.uniswap.org/contracts/v4/guides/unlock-callback#handling-deltas-for-liquidity-modifications" target="_blank" rel="noopener noreferrer">
                      delta handling for liquidity modifications ↗
                    </a>
                    {" "}on uniswap v4.
                  </li>
                  <li>
                    contributor{" "}
                    <a href="https://cngn.co" target="_blank" rel="noopener noreferrer">
                      @cNGN ↗
                    </a>
                    ; oracle sdk refactoring, failover resilience, resolved signer injection and improved security.
                  </li>
                  <li>
                    <a href="https://github.com/PaulElisha/mantle-ai-plugin" target="_blank" rel="noopener noreferrer">Mantle AI Plugin ↗</a> – build a Goat SDK plugin for AI agents to interact with Mantle ecosystem (bridging, tokens, on-chain data).
                  </li>
                </ul>
              </li>
              <li className="pt-2">
                <span className="text-muted-foreground">Selected Projects</span>
                <ul className="list-[circle] list-inside pl-4 mt-2 space-y-1">
                  <li>
                    <a href="https://github.com/PaulElisha/Liq0S-Custom-UniV4-Router-For-Auction-based-Liquidity-Market-JIT" target="_blank" rel="noopener noreferrer">
                      LiqOS ↗
                    </a>
                    {" "}– custom Uniswap V4 hook, auction-based JIT liquidity rebalancer
                  </li>
                  <li>
                    <a href="https://github.com/PaulElisha/task-flow-api" target="_blank" rel="noopener noreferrer">TaskFlow ↗</a> – project management API with sprint tracking, Google OAuth, MongoDB
                  </li>
                  <li>
                    <a href="https://predictiv-trend.vercel.app" target="_blank" rel="noopener noreferrer">PredictivTrend ↗</a> – AI-powered stock analysis tool using Mistral AI for performance reports and predictions
                  </li>
                </ul>
              </li>
              <li className="pt-2">
                <span className="text-muted-foreground">Selected Research</span>
                <ul className="list-[circle] list-inside pl-4 mt-2 space-y-1">
                  <li>
                    <a href="https://paragraph.com/@break-into-defi/uniswap-v3-advanced-mechanics" target="_blank" rel="noopener noreferrer">
                      Uniswap V3 Advanced Mechanics ↗
                    </a>
                    {" "}– a deep dive explanation on concentrated liquidity, reserves, liquidity math, position management.
                  </li>
                  <li>
                    <a href="https://paragraph.com/@break-into-defi/mechanics-of-uniswap-v3-liquidity-distribution" target="_blank" rel="noopener noreferrer">
                      Mechanics of Liquidity Distribution ↗
                    </a>
                    {" "}– token swapping analysis: execution tracing, slippage analysis, and a literature review on liquidity distribution.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Status */}
          <p 
            className="text-muted-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            open to opportunities
          </p>

          {/* Social Links */}
          <div 
            className="flex flex-wrap gap-x-3 gap-y-1 mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "250ms" }}
          >
            <a href="https://x.com/paulelishaa" target="_blank" rel="noopener noreferrer">
              X ↗
            </a>
            <a 
              href="mailto:ajaoireoluwa1@gmail.com"
            >
              mail ↗
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
