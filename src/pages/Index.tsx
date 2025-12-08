import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Paul Elisha - Blockchain Engineer</title>
        <meta name="description" content="Smart Contract Engineer with experience designing and implementing DeFi protocols. 3x global hackathon winner. Co-founder of Asset Scooper." />
      </Helmet>
      
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
            blockchain, engineer, builder
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
                  @kaia labs
                </a>
                ; SDKs, Permit2 deployment, subgraph integrations, onboarded 40+ developers.
              </li>
              <li>
                uniswap v4{" "}
                <a href="https://uniswap.org" target="_blank" rel="noopener noreferrer">
                  @uniswap
                </a>
                ; protocol documentation contributor, authored delta handling for liquidity modifications.
              </li>
              <li>
                oracle contributor{" "}
                <a href="https://cngn.co" target="_blank" rel="noopener noreferrer">
                  @cNGN
                </a>
                ; refactored oracle sdk, RPC rotation for resilience, automatic retry logic.
              </li>
              <li className="pt-2">
                <span className="text-muted-foreground">Selected Projects</span>
                <ul className="list-[circle] list-inside pl-4 mt-2 space-y-1">
                  <li>
                    <a href="https://github.com/paulelisha" target="_blank" rel="noopener noreferrer">
                      LiqOS
                    </a>
                    {" "}– custom Uniswap V4 hook, auction-based JIT liquidity rebalancer (hackathon win)
                  </li>
                  <li>
                    <a href="https://github.com/paulelisha" target="_blank" rel="noopener noreferrer">
                      Asset Scooper
                    </a>
                    {" "}– wallet consolidation platform returning stablecoin (co-founder)
                  </li>
                  <li>
                    TaskFlow – project management API with sprint tracking, Google OAuth, MongoDB
                  </li>
                  <li>
                    AIChatFlow – RAG-powered question answering API using LangChain + OpenAI
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
              github
            </a>
            <a href="https://paragraph.com/@break-into-defi" target="_blank" rel="noopener noreferrer">
              blog
            </a>
            <a href="https://twitter.com/paborjelisha" target="_blank" rel="noopener noreferrer">
              twitter
            </a>
          </div>

          {/* Email */}
          <a 
            href="mailto:paborjelisha@gmail.com"
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            paborjelisha@gmail.com
          </a>
        </div>
      </main>
    </>
  );
};

export default Index;
