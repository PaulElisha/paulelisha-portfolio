export type Category =
  | "BIO"
  | "STINT"
  | "OPEN-SOURCE"
  | "PROJECT"
  | "RESEARCH";

export interface Reason {
  id: number;           // displayed as 001, 002…
  refDoc: string;
  category: Category;
  title: string;
  body: string;
  source?: string;
  href?: string;        // primary outbound link for "Open ↗"
}

export const reasons: Reason[] = [
  {
    id: 1,
    refDoc: "PE-BIO-001",
    category: "BIO",
    title: "blockchain, backend(typescript), builder",
    body:
      "Smart contract engineer designing DeFi protocols. 3x global hackathon winner. Co-founder of Asset Scooper. Open to opportunities.",
    source: "PAUL ELISHA / paulelisha.lovable.app",
  },
  {
    id: 2,
    refDoc: "PE-STINT-001",
    category: "STINT",
    title: "Developer support @ Kaia Labs",
    body:
      "Built SDKs, deployed Permit2, integrated subgraphs, and onboarded 40+ developers across the Kaia ecosystem.",
    source: "Kaia Labs / kaia.io",
    href: "https://kaia.io",
  },
  {
    id: 3,
    refDoc: "PE-STINT-002",
    category: "STINT",
    title: "Smart contract engineer @ Asset Scooper",
    body:
      "Wallet consolidation platform that returns dust to stablecoin. Base Hackathon winning project.",
    source: "Asset Scooper / assetscooper.xyz",
    href: "https://assetscooper.xyz",
  },
  {
    id: 4,
    refDoc: "PE-OSS-001",
    category: "OPEN-SOURCE",
    title: "Protocol documentation contributor @ Uniswap",
    body:
      "Improved technical documentation. Authored delta handling for liquidity modifications on Uniswap v4.",
    source: "Uniswap Foundation",
    href: "https://docs.uniswap.org/contracts/v4/guides/unlock-callback#handling-deltas-for-liquidity-modifications",
  },
  {
    id: 5,
    refDoc: "PE-OSS-002",
    category: "OPEN-SOURCE",
    title: "Contributor @ cNGN",
    body:
      "Refactored oracle SDK, added failover resilience, resolved signer injection, and improved security posture.",
    source: "cNGN / cngn.co",
    href: "https://cngn.co",
  },
  {
    id: 6,
    refDoc: "PE-PROJ-001",
    category: "PROJECT",
    title: "LiqOS — custom Uniswap V4 hook",
    body:
      "Auction-based JIT liquidity rebalancer built as a Uniswap V4 hook for routing custom orders.",
    source: "GitHub / PaulElisha",
    href: "https://github.com/PaulElisha/Liq0S-Custom-UniV4-Router-For-Auction-based-Liquidity-Market-JIT",
  },
  {
    id: 7,
    refDoc: "PE-PROJ-002",
    category: "PROJECT",
    title: "TaskFlow — project management API",
    body:
      "Sprint tracking API with Google OAuth, MongoDB, and a clean REST surface.",
    source: "GitHub / PaulElisha",
    href: "https://github.com/PaulElisha/task-flow-api",
  },
  {
    id: 8,
    refDoc: "PE-PROJ-003",
    category: "PROJECT",
    title: "Mantle AI Plugin — Goat SDK plugin",
    body:
      "Lets AI agents interact with the Mantle ecosystem: bridging, tokens, on-chain data.",
    source: "GitHub / PaulElisha",
    href: "https://github.com/PaulElisha/mantle-ai-plugin",
  },
  {
    id: 9,
    refDoc: "PE-PROJ-004",
    category: "PROJECT",
    title: "PredictivTrend — AI stock analysis",
    body:
      "AI-powered stock analysis using Mistral AI for performance reports and predictions.",
    source: "predictiv-trend.vercel.app",
    href: "https://predictiv-trend.vercel.app",
  },
  {
    id: 10,
    refDoc: "PE-RES-001",
    category: "RESEARCH",
    title: "Uniswap V3 Advanced Mechanics",
    body:
      "Deep dive into concentrated liquidity, reserves, liquidity math, and position management.",
    source: "Paragraph / break-into-defi",
    href: "https://paragraph.com/@break-into-defi/uniswap-v3-advanced-mechanics",
  },
  {
    id: 11,
    refDoc: "PE-RES-002",
    category: "RESEARCH",
    title: "Mechanics of Liquidity Distribution",
    body:
      "Execution tracing, slippage analysis, and liquidity distribution in Uniswap V3.",
    source: "Paragraph / break-into-defi",
    href: "https://paragraph.com/@break-into-defi/mechanics-of-uniswap-v3-liquidity-distribution",
  },
];

export const TOTAL_REASONS = reasons.length;
