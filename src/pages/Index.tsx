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
      
      <main className="min-h-screen bg-background px-6 py-16 md:px-12 md:py-24 lg:px-24">
        <div className="max-w-3xl">
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
            blockchain, backend(typescript), builder
          </p>

          {/* Stints Section */}
          <section 
            className="mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="text-foreground mb-4">Stints:</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>
                developer support{" "}
                <a href="https://kaia.io" target="_blank" rel="noopener noreferrer">
                  @kaia labs ↗
                </a>
                ; <a href="https://github.com/PaulElisha/kaiascan-sdk-ts" target="_blank" rel="noopener noreferrer">SDKs ↗</a>, Permit2 deployment, subgraph integrations, onboarded 40+ developers.
              </li>
              <li>
                smart contract engineer{" "}
                <a href="https://assetscooper.xyz" target="_blank" rel="noopener noreferrer">
                  @asset scooper ↗
                </a>
                ; wallet consolidation platform returning stablecoin (co-founder).
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
                    ; oracle sdk refactoring, failover resilience.
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
                    {" "}– custom Uniswap V4 hook, auction-based JIT liquidity rebalancer (hackathon win)
                  </li>
                  <li>
                    <a href="https://github.com/PaulElisha/task-flow-api" target="_blank" rel="noopener noreferrer">TaskFlow ↗</a> – project management API with sprint tracking, Google OAuth, MongoDB
                  </li>
                  <li>
                    <a href="https://github.com/PaulElisha/mantle-ai-plugin" target="_blank" rel="noopener noreferrer">Mantle AI Plugin ↗</a> – Goat SDK plugin for AI agents to interact with Mantle ecosystem (bridging, tokens, on-chain data)
                  </li>
                  <li>
                    <a href="https://stock-vision-ai-kappa.vercel.app" target="_blank" rel="noopener noreferrer">StockAI ↗</a> – AI-powered stock analysis tool using Mistral AI for performance reports and predictions
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
                    {" "}– concentrated liquidity, reserves, liquidity math, position management.
                  </li>
                  <li>
                    <a href="https://paragraph.com/@break-into-defi/mechanics-of-uniswap-v3-liquidity-distribution" target="_blank" rel="noopener noreferrer">
                      Mechanics of Liquidity Distribution ↗
                    </a>
                    {" "}– execution tracing, slippage analysis and liquidity distribution.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Interests */}
          <p 
            className="text-foreground mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "150ms" }}
          >
            building DeFi protocols, writing research, and 3x hackathon winner (Base, Kaia, Uniswap).
          </p>

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
            <a href="https://github.com/paulelisha" target="_blank" rel="noopener noreferrer">
              github ↗
            </a>
            <a href="https://paragraph.com/@break-into-defi" target="_blank" rel="noopener noreferrer">
              blog ↗
            </a>
            <a href="https://x.com/paulelishaa" target="_blank" rel="noopener noreferrer">
              twitter ↗
            </a>
          </div>

          {/* Email */}
          <a 
            href="mailto:ajaoireoluwa1@gmail.com"
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            email ↗
          </a>
        </div>
      </main>
    </>
  );
};

export default Index;
