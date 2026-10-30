export type CvLink = { label: string; href: string };

export type CvRole = {
  company: string;
  role: string;
  period?: string;
  link?: string;
  bullets: string[];
};

export type DetailBlock = { label: string; text: string };

export type HowItWorksStep = { title: string; text: string; bullets?: string[] };

export type LedgerItem = {
  id: string;
  type: "EXPERIENCE" | "OPEN SOURCE" | "PROJECT";
  name: string;
  role: string;
  summary: string;
  link: string;
  image?: string;
  logo?: string;
  video?: string;
  submission?: string;
  techStack?: string[];
  overview?: string;
  howItWorks?: HowItWorksStep[];
  map: string[];
  details: DetailBlock[];
};

export type ResearchItem = {
  id: string;
  index: string;
  title: string;
  text: string;
  link: string;
};

export const cvLinks: CvLink[] = [
  { label: "Github", href: "https://github.com/PaulElisha" },
  { label: "Blog", href: "https://paragraph.com/@break-into-defi" },
  { label: "X (Twitter)", href: "https://x.com/paulelishaa" },
  { label: "Email", href: "mailto:ajaoireoluwa1@gmail.com" },
];

export const cvSummary =
  "Backend engineer specializing in making software decisions — architectural decisions, high-level and low-level architectural design patterns, data decisions like data flow, data communication, databases and query patterns, and API data modelling — plus system reliability decisions using event-driven systems, asynchronous message processing for buffering and recovery to absorb spikes, and guaranteed data integrity through idempotency and transactional patterns for modern enterprise environments.";

export const cvRoles: CvRole[] = [
  {
    company: "Kaia Foundation",
    role: "Backend and Developer Support",
    period: "2023 – 2025",
    bullets: [
      "Developed multi-chain data SDKs (hackathon winner): engineered developer-friendly TypeScript SDKs integrating OkLink and KaiaScan APIs to streamline blockchain data retrieval, winning first place for developer-experience innovation.",
      "Smart contract protocol deployment: forked, customized and deployed the Uniswap Permit2 smart contract protocol on-chain, eliminating signature friction and enabling gas-optimized, high-UX token approvals for DeFi protocols.",
      "High-performance subgraph and dashboard refactor: rebuilt the DragonSwap analytics dashboard by architecting a custom The Graph subgraph, reducing page load latency and optimizing complex on-chain data queries.",
      "Developer relations and ecosystem growth: organized and facilitated hybrid Web3 technical workshops, onboarding and mentoring over 40 developers into the blockchain ecosystem.",
      "Technical documentation and developer experience: authored developer guides and core technical documentation for Kaia Network, simplifying onboarding and reducing integration friction for external builders.",
    ],
  },
  {
    company: "The Other Wife",
    role: "Backend Developer",
    period: "2025 – 2026",
    bullets: [
      "Architected and designed the end-to-end system: led high-level and low-level system design (HLD/LLD) for a two-sided marketplace connecting home chefs with local customers, translating complex operational workflows into scalable services.",
      "Resilient event-driven architecture: engineered an event-driven architecture decoupling core domain services (orders, payments, customer, vendor management), ensuring high service uptime and zero data loss during high-traffic operational spikes.",
      "Robust domain modeling and data contracts: authored clear data contracts and API specifications; designed normalized database schemas optimized for seamless order fulfillment and complex vendor workflows.",
      "Core services and features implementation: built robust backend modules using Node.js/TypeScript covering JWT-based authentication, email and notification pipelines, multi-vendor management, payment-gateway integration and order lifecycle management.",
      "Operational goal alignment: streamlined logistics and operational flows directly through system workflows, reducing order friction and ensuring high consistency across customer and vendor touchpoints.",
    ],
  },
  {
    company: "EMR Integration Gateway",
    role: "Backend Engineer",
    bullets: [
      "Modular monolith architecture: engineered a TypeScript/Express 5 backend acting as a typed, role-aware API gateway on top of OpenEMR, establishing clear domain boundaries and a decoupled service layout.",
      "Dual-persistence and AsyncLocalStorage context propagation: implemented a split persistence model utilizing PostgreSQL (identity, coordination and appointment overlays) alongside OpenEMR (clinical records via FHIR R4 and standard REST APIs), utilizing AsyncLocalStorage for transparent context and transaction propagation.",
      "Advanced authentication and granular access control: developed robust security mechanisms including Argon2id hashing, RS256 JWTs with session epoch invalidation, PKCE OIDC OAuth flows, and time-limited, patient-approved EMR access consent.",
      "Custom upstream extensions and containerization: built and maintained a custom OpenEMR Docker image incorporating custom PHP services, REST controllers and automated scope registration scripts to expand native clinical capabilities.",
      "Fault-tolerant cross-system workflows: designed resilient cross-system workflows handling dual-write and asynchronous state coordination between external healthcare repositories and local database layers.",
    ],
  },
  {
    company: "Predictiv Trend App",
    role: "Backend Engineer",
    bullets: [
      "Edge architecture: architected a high-performance financial analysis backend using Node.js/Express.js, MongoDB and Cloudflare Workers for edge-based serverless AI processing and market data aggregation.",
      "Real-time streaming and backpressure control: designed Server-Sent Events (SSE) pipelines with the Web Streams API to handle backpressure, preventing buffer overflows and RAM bloat during AI token streaming.",
      "Leak-proof abort propagation: implemented native AbortController cancellation across Express, Axios and Cloudflare Workers to instantly terminate mid-stream LLM generation on client disconnects, significantly cutting API compute costs.",
      "Resilient inter-service communications: built fault-tolerant network layers with exponential backoff retries (axios-retry) and cancelable async generators (CAF/async-retry) to guarantee system stability under network degradation.",
      "Extensible market and AI integration: integrated Polygon.io market data feeds and LLM provider streams (OpenAI, Mistral AI) behind decoupled worker services, maintaining zero-downtime microservices boundary separation.",
    ],
  },
  {
    company: "cNGN",
    role: "Price Oracle Contributor",
    bullets: [
      "Refactored the oracle SDK to avoid signer injection and ensured RPC rotation for resilience under rate limits, addressing key security concerns.",
      "Improved oracle uptime and reliability by reinitializing contracts with connected signers and re-establishing event listeners after failover.",
      "Enabled scalability across multiple Ethereum RPC endpoints with automatic retry logic to ensure consistency.",
    ],
  },
  {
    company: "Uniswap V4 Docs",
    role: "Protocol Documentation",
    link: "https://developers.uniswap.org/docs/protocols/v4/guides/unlock-callback-and-deltas#handling-deltas-for-liquidity-modifications",
    bullets: [
      "Improved protocol documentation and authored delta-handling guidance for liquidity modifications.",
    ],
  },
];

export const specialties = [
  { code: "SYS.01", title: "Backend Systems", status: "ACTIVE", text: "TypeScript and Node.js deep dives, API design, event-driven architecture, cloud infrastructure and DevOps.", progress: 72 },
  { code: "LOG.02", title: "Reactive Logic", status: "STABLE", text: "Functional reactive programming with RxJS, composable streams and asynchronous data processing.", progress: 94 },
  { code: "DAT.03", title: "Data Architecture", status: "STABLE", text: "Designing data systems, database performance, resilient schemas and query-aware architecture.", progress: 91 },
];

export const ledger: LedgerItem[] = [
  {
    id: "0x01",
    type: "EXPERIENCE",
    name: "Kaia Labs",
    role: "Developer Support",
    summary: "Built blockchain platform SDKs, onboarded developers and removed friction from integration paths.",
    link: "https://www.kaia.io",
    image: "https://media.base44.com/images/public/6a6fd541706021d4a73dfef5/ef2bd1504_generated_image.png",
    logo: "https://media.base44.com/images/public/6a6fd541706021d4a73dfef5/699739297_generated_image.png",
    map: ["SDK", "CHAIN", "DEV"],
    details: [
      { label: "Requirement Analysis", text: "Developers integrating with the Kaia chain hit raw JSON-RPC, hand-rolled ABI encoders and unsigned wallet flows — friction that slowed onboarding. The brief: typed, documented SDKs that turn chain, explorer and wallet access into a few safe calls while I supported partner integrations." },
      { label: "Architecture Discovery", text: "Mapped the Kaia surface into three layers — chain RPC (eth/klay namespaces), block-explorer (Kaiascanner) data, and wallet signing. Chose a thin typed-client layer over raw RPC with convenience helpers, rather than a heavy ORM-like abstraction." },
      { label: "Software Architecture", text: "A modular TypeScript workspace: a chain client, a kaiascan explorer client, a wallet adapter, and contract bindings generated from ABIs — each package independently consumable, sharing types and documentation." },
      { label: "Development Principles", text: "Single-responsibility per module, dependency injection for transports, pure RPC wrappers with no hidden mutation, builder/curry patterns for chain config, and exhaustive typing so misuse fails at compile time." },
      { label: "Impact", text: "Cut integration time for new Kaia builders, removed a class of encoding errors at the type boundary, and gave the ecosystem a maintainable, documented entry point." },
    ],
  },
  {
    id: "0x02",
    type: "EXPERIENCE",
    name: "Asset Scooper",
    role: "Cofounder",
    summary: "Built a wallet-consolidation platform that returns stablecoin for meme and dust tokens during Base Onchain Summer.",
    link: "https://assetscooper.xyz/",
    video: "https://iamibrahim.xyz/projects/assetscooper/demo.mp4",
    image: "https://media.base44.com/images/public/6a6fd541706021d4a73dfef5/9c9ae7657_generated_image.png",
    logo: "https://media.base44.com/images/public/6a6fd541706021d4a73dfef5/5e37fef1d_ikxq5d94_400x400.jpg",
    submission: "https://devfolio.co/projects/assetscooper-3275",
    techStack: ["Next.js", "TypeScript", "Solidity", "ERC-4337", "Chakra UI", "Wagmi / Viem", "ParaSwap", "Framer Motion"],
    overview: "Asset Scooper batches all of it into a single on-chain transaction. Connect your wallet, select the tokens you want to offload, pick a destination asset, and confirm once. One signature. One gas fee. Done.\n\nThe magic underneath is ERC-4337 smart accounts combined with ParaSwap's DEX aggregator. The interface constructs a UserOperation that bundles multiple swap calldata into a single atomic execution — if any swap fails, the whole batch reverts, protecting the user from partial fills.",
    howItWorks: [
      { title: "Portfolio Discovery", text: "On load, the app queries the Covalent API to fetch all token balances for the connected address across supported chains. Tokens are filtered, sorted by USD value, and rendered in a selectable list — giving the user a full picture of what they're holding." },
      { title: "Swap Route Aggregation", text: "For each selected token, the app calls ParaSwap's @paraswap/core SDK to find the optimal swap route to the target asset. ParaSwap aggregates across Uniswap, Curve, Balancer, and dozens of other liquidity sources to minimize slippage and maximize output." },
      { title: "Batch Transaction via Smart Accounts", text: "This is where the core innovation lives. Instead of submitting N separate transactions:", bullets: [
        "The app uses Coinbase OnchainKit (@coinbase/onchainkit) to interact with the user's ERC-4337 smart account (or deploy one if needed).",
        "All swap calldata — including token approvals — are packed into a single executeBatch UserOperation.",
        "The UserOperation is sent to a bundler, which submits it on-chain as one atomic transaction.",
        "A paymaster can optionally sponsor gas, enabling a gasless UX.",
      ] },
      { title: "Transaction Lifecycle", text: "Real-time status is tracked via wagmi's useWaitForTransactionReceipt hook and TanStack Query for caching and refetching. The UI reflects pending, confirmed, and failed states with smooth transitions powered by Framer Motion." },
    ],
    map: ["WALLET", "SWAP", "USDC"],
    details: [
      { label: "Requirement Analysis", text: "Wallets accumulate meme and dust tokens individually unprofitable to sell — gas outweighs value. During Base Onchain Summer the goal was one action that sweeps scattered holdings and returns USDC with predictable slippage." },
      { label: "Architecture Discovery", text: "Surveyed Base DEX routers, allowance flows (approve / Permit2) and dust thresholds. Settled on an aggregator swap path that pulls each token and routes it through the best available pool, settling in a single transaction." },
      { label: "Software Architecture", text: "An entrypoint sweep contract orchestrates per-token approvals, minimum-out swaps across Base pools, and a final USDC settlement, with pluggable adapters behind a router interface for different pool types." },
      { label: "Development Principles", text: "Checks-Effects-Interactions ordering on every external call, reentrancy guards across entry points, strict slippage / minimum-out bounds, immutable adapters, and fail-fast reverts so partial state never commits." },
      { label: "Impact", text: "Delivered a usable consolidation flow during the hackathon, turning scattered holdings into a single stablecoin balance in one transaction." },
    ],
  },
  {
    id: "0x03",
    type: "EXPERIENCE",
    name: "Tiva Creative",
    role: "Software Engineer",
    summary: "Built the client-facing API for The Other Wife — a home-chef food-ordering app — covering auth, location search, real-time ordering and a tamper-proof payment ledger.",
    link: "https://play.google.com/store/apps/details?id=com.tivacreative.tow",
    image: "https://media.base44.com/images/public/6a6fd541706021d4a73dfef5/761d46519_unnamed.png",
    logo: "https://play-lh.googleusercontent.com/8uK1N9Tpirf8zQSB3NhVrzXoK1EBlsFPWGzUqa3-06HZKFLZ8iYFzaBZhJceoyMBWzmSO1uH7mG-TN8kByvp=s128-rw",
    map: ["CLIENT", "API", "ORDER"],
    techStack: ["TypeScript", "Node.js", "MongoDB", "JWT + Refresh", "OTP", "WebSockets", "Docker", "Nginx"],
    overview: "The Other Wife connects customers to verified home chefs nearby. The backend powers auth, the meal-and-vendor catalog, location-based search, ordering, live order status and a tamper-proof payment ledger — the stable contract every client built on top of.",
    howItWorks: [
      { title: "Authentication & Sessions", text: "Sign-in combines email + OTP with short-lived JWT access tokens and rotating refresh tokens, so sessions recover without re-entering passwords and exposed tokens expire fast." },
      { title: "Catalog & Location Search", text: "Meals and home-chef vendors are indexed by geolocation. Customers set a radius and the API returns nearby vendors within it — a bounding-box prefilter followed by haversine refinement — so discovery tracks the user's immediate area." },
      { title: "Ordering & Real-time Updates", text: "The cart → order lifecycle runs through a RESTful flow, with status transitions (placed, confirmed, preparing, en-route) pushed to clients over WebSockets so the order screen updates live without polling." },
      { title: "Tamper-proof Payment Ledger", text: "Every payment entry is hash-chained, then anchored to an external checkpoint — structured logs plus a daily cron and an on-demand admin endpoint — so a full database wipe-and-regenerate can't forge a consistent history." },
      { title: "Deployment", text: "Containerized with Docker and served behind an Nginx reverse proxy, with environment-driven configuration and deploy scripts for reproducible rollouts." },
    ],
    details: [
      { label: "Requirement Analysis", text: "The Other Wife, a home-chef food-ordering app, needed a dependable client-facing API: auth, the meal-and-vendor catalog, location-aware search, ordering with live status, and a payment history customers and chefs could trust." },
      { label: "Architecture Discovery", text: "Modeled the domain as home chefs → meals → cart → order → payment ledger, with role scopes for customer, chef and staff. Chose a REST resource layout, validated the data flow against the app screens, and decided where real-time push (WebSockets) and integrity (hash-chained ledger) had to live." },
      { label: "Software Architecture", text: "A layered TypeScript service — routes → controllers → services — over MongoDB, with OTP + JWT access/refresh auth, a WebSocket gateway for live order updates, a hash-chained payment ledger with external checkpointing, and a Docker image behind Nginx for deployment." },
      { label: "Development Principles", text: "Idempotent order creation, validation-at-the-boundary, WebSocket reconnection with backoff, the ledger hash-chain plus an external anchor, environment-driven config, and reproducible container rollouts." },
      { label: "Impact", text: "Shipped the backend the team built on top of, with a stable contract that survived multiple app iterations and a payments history hardened against tampering." },
    ],
  },
  {
    id: "0x04",
    type: "OPEN SOURCE",
    name: "Uniswap V4 Docs",
    role: "Protocol Documentation",
    summary: "Improved protocol documentation and authored delta handling guidance for liquidity modifications.",
    link: "https://developers.uniswap.org/docs/protocols/v4/guides/unlock-callback-and-deltas#handling-deltas-for-liquidity-modifications",
    logo: "https://media.base44.com/images/public/6a6fd541706021d4a73dfef5/4cd877cd3_generated_image.png",
    map: ["DELTA", "POOL", "HOOK"],
    details: [
      { label: "Requirement Analysis", text: "V4's flash-accounting and unlock-callback model confused integrators — especially how to settle currency deltas after liquidity modifications. The task was to make that flow legible and correct in the official docs." },
      { label: "Architecture Discovery", text: "Read the V4 PoolManager, the unlock callback, and how currency deltas accumulate then settle within a single transaction. Traced real callback paths so each explanation was grounded in actual control flow." },
      { label: "Software Architecture", text: "Documentation structured as guide → concept → reference, with the unlock-callback and delta-handling pages authored as the canonical path integrators follow when modifying liquidity." },
      { label: "Development Principles", text: "Accuracy over the lifecycle ordering, minimal working snippets, single-source-of-truth explanations, and explicit callouts for the invariant — deltas must net to zero before settlement." },
      { label: "Impact", text: "Reduced integration confusion for V4 hook and router authors, establishing a reference path that later contributors extend." },
    ],
  },
  {
    id: "0x05",
    type: "OPEN SOURCE",
    name: "cNGN",
    role: "SDK Contributor",
    summary: "Refactored the oracle SDK, added failover resilience, resolved signer injection and improved security.",
    link: "https://cngn.co",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcngn.co?w=1280&h=720",
    logo: "https://media.base44.com/images/public/6a6fd541706021d4a73dfef5/9ab230bc1_generated_image.png",
    map: ["ORACLE", "FAILOVER", "SIGN"],
    details: [
      { label: "Requirement Analysis", text: "The oracle SDK returned prices through a single provider with no fallback — any outage or stale response propagated downstream. The refactor needed resilience, a clean signer surface, and tightened security." },
      { label: "Architecture Discovery", text: "Reviewed the existing fetch path and signer wiring; identified implicit state and a fragile provider singleton. Decided on a multi-provider failover layer with a pluggable signer injected via dependency injection." },
      { label: "Software Architecture", text: "A client walks an ordered provider list with healthy-provider selection and retry/backoff; an injected signer abstraction replaces direct key use; providers and signers sit behind interfaces." },
      { label: "Development Principles", text: "Failover / circuit-breaker pattern, dependency inversion for the signer, immutability of price responses, a narrow public API, and explicit error propagation rather than silent defaults." },
      { label: "Impact", text: "Price feeds now survive provider outages, signer injection is safe and testable, and the SDK has a smaller, audited attack surface." },
    ],
  },
  {
    id: "0x06",
    type: "OPEN SOURCE",
    name: "Mantle AI Plugin",
    role: "GOAT SDK Plugin",
    summary: "Enabled AI agents to bridge, inspect tokens and interact with on-chain data across the Mantle ecosystem.",
    link: "https://github.com/PaulElisha/mantle-ai-plugin",
    map: ["AGENT", "PLUGIN", "MANTLE"],
    details: [
      { label: "Requirement Analysis", text: "AI agents built on GOAT needed a clean tool surface to act on the Mantle chain — bridge, inspect tokens and read on-chain state — without each agent reimplementing RPC calls." },
      { label: "Architecture Discovery", text: "Studied the GOAT SDK plugin model (tool definitions bound to chain actions) and the Mantle RPC surface, then mapped agent actions to discrete, schema-validated tools." },
      { label: "Software Architecture", text: "A GOAT plugin exposing typed tools — bridge, token lookup, balance read — each delegating to a thin Mantle client, with input schemas so the model invokes them safely." },
      { label: "Development Principles", text: "Single-responsibility per tool, pure functional handlers, schema validation on every input, and a clean separation between tool descriptions and chain interaction." },
      { label: "Impact", text: "AI agents on Mantle can act and inspect autonomously, packaging cross-chain capability as a reusable plugin rather than bespoke per-agent code." },
    ],
  },
  {
    id: "0x07",
    type: "PROJECT",
    name: "LiqOS",
    role: "Uniswap V4 Hook",
    summary: "An auction-based JIT liquidity rebalancer implemented as a custom Uniswap V4 hook — eliminates LPs manually chasing price.",
    link: "https://github.com/PaulElisha/Liq0S-Custom-UniV4-Router-For-Auction-based-Liquidity-Market-JIT",
    image: "https://media.base44.com/images/public/6a6fd541706021d4a73dfef5/2207c6834_1743432767469.jpeg",
    logo: "https://media.base44.com/images/public/6a6fd541706021d4a73dfef5/2207c6834_1743432767469.jpeg",
    map: ["AUCTION", "HOOK", "LIQ"],
    details: [
      { label: "Requirement Analysis", text: "Uniswap V3 concentrates liquidity so tightly that LPs must manually rebalance ranges as price drifts — a constant, error-prone chore. The brief: a transparent, automated mechanism that rebalances liquidity mid-trade without custodial loss." },
      { label: "Architecture Discovery", text: "Explored the V4 hook lifecycle (beforeSwap / afterSwap / afterModifyLiquidity) and the unlock-callback flash-accounting model. Settled on a per-swap auction held inside the hook, with transient storage (EIP-1153) recording net deltas only within a single swap." },
      { label: "Software Architecture", text: "Three collaborating modules: the hook contract (entry + delta accounting), an auction market (Dutch-price, JIT) that matches an incoming swap against live bids, and a router adapter that triggers the rebalance before settlement." },
      { label: "Development Principles", text: "Gas-aware deltas via transient storage rather than persistent SSTORE; flash-accounting ensures every borrow is repaid in the same unlock window; reentrancy and repay guards on every entry point; fuzz/invariant tests around the auction." },
      { label: "Impact", text: "LPs earn JIT fees without manual repositioning; swaps route against freshly rebalanced liquidity for tighter effective price; the design generalizes to any V4 pool with minimal added gas." },
    ],
  },
  {
    id: "0x08",
    type: "PROJECT",
    name: "Hebron Heights",
    role: "Freelance Full-Stack Backend",
    summary: "HHG Commerce — a two-sided transactional commerce backend for retail users and merchants: checkout via Paystack or Stripe, real-time order status over SSE, merchant stores and inventory, media uploads and store analytics, with an outbox-driven event bus guaranteeing every order side-effect runs exactly once.",
    link: "https://hebron-heights.vercel.app",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fhebron-heights.vercel.app?w=1280&h=720",
    logo: "https://media.base44.com/images/public/6a6fd541706021d4a73dfef5/cfb0e151a_WhatsAppImage2026-06-10at125826.jpg",
    map: ["OUTBOX", "RXJS", "SSE"],
    techStack: ["Express 5", "Drizzle / PostgreSQL", "RxJS", "Better-auth + argon2", "Paystack / Stripe", "Cloudinary", "Zod", "Pino", "SSE"],
    details: [
      { label: "Requirement Analysis", text: "A two-sided commerce backend serving retail users and merchants: browse and buy, manage stores and inventory, pay with Paystack or Stripe, get live order status in the browser, upload product media, and see store analytics — all without losing or duplicating a single business event. The platform had to guarantee that every order side-effect (stock deduction, email, notification row, payment follow-up) runs exactly once even if the process crashes mid-flight, while keeping sensitive flows (webhooks, auth, uploads) verifiable and auditable." },
      { label: "Architecture Discovery", text: "Split the system into decoupled planes: identity (better-auth + argon2 hashing), catalog (products, categories, merchants), the transactional core (cart → order → payment, all committed inside Drizzle transactions), a media pipeline (Cloudinary signed uploads with webhook feedback), and a real-time notification channel. Every domain write first lands in a durable PostgreSQL outbox table, then an RxJS event bus dispatches typed contracts (event_type, userId, payload) to autonomous consumers (email, inventory, notification, payment). Validated that write-first + guarded-update consume gives at-least-once delivery with replay for recovery." },
      { label: "Software Architecture", text: "An Express 5 API federating Paystack and Stripe behind one checkout dispatcher, rewiring signature-verified webhook payloads (Paystack, Stripe, Cloudinary) into domain events, and serving role-protected endpoints (user / merchant / admin) enforced by auth + role-guard middleware. A catalog layer manages products, categories, merchants, carts and merchant analytics with soft-delete and stock thresholds; a media layer issues signed Cloudinary uploads for single and bulk streaming with webhook confirmation. Cross-cutting: Zod validation at the edge, a centralized error contract (typed error codes → global handler), and a real-time channel where a singleton in-memory NotificationBroker feeds userId-filtered SSE streams with heartbeat keepalives — keeping the database out of the hot push path." },
      { label: "Development Principles", text: "Outbox-first writes for at-least-once guarantees, consumed exactly once per user-visible stream; userId kept at the top of the event contract so streaming never parses business payloads; a central broker instead of per-request bus subscriptions to bound fan-out and eliminate per-user DB work; replay of unprocessed outbox rows for crash recovery; graceful degradation — events without a resolvable recipient still persist as DB notifications for pull-based recovery; signed webhook verification, request-rate limiting and hardened headers (helmet) on every ingress; and an API-first contract (Swagger docs) with structured Pino logging for observability." },
      { label: "Impact", text: "A full-commerce backend where identity, catalog, ordering, payment, media and real-time notification cooperate under one reliability model: order → inventory → email → notification flows execute observably (Pino logs, Swagger docs, rate-limited, helmet-secured), live delivery is memory-only so latency stays low, and the outbox guarantees mean no lost emails, no double stock deductions, and no drifting payment states — even when webhooks and transactions interleave." },
    ],
  },
  {
    id: "0x09",
    type: "PROJECT",
    name: "PredictivTrend",
    role: "AI Stock Analysis",
    summary: "A streaming-first AI stock-analysis backend — Express + Cloudflare Workers pull Polygon.io market data and stream Mistral/OpenAI performance reports to the browser over SSE, with abort propagation and backpressure-safe buffering.",
    link: "https://predictiv-trend.vercel.app/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fpredictiv-trend.vercel.app%2F?w=1280&h=720",
    logo: "https://media.base44.com/images/public/6a6fd541706021d4a73dfef5/93cb18400_generated_image.png",
    map: ["POLYGON", "MISTRAL", "SSE"],
    techStack: ["Express 5", "TypeScript", "MongoDB / Mongoose", "Cloudflare Workers", "Mistral AI", "Polygon.io", "better-sse", "Axios", "Zod", "Helmet"],
    details: [
      { label: "Requirement Analysis", text: "Retail users wanted understandable stock narratives — performance summaries plus directional reads — without raw terminals. The product needed trustworthy, fast-readable reports, and they had to render live rather than after a long server-side wait." },
      { label: "Architecture Discovery", text: "Chose a microservices-inspired split: an Express backend plus two Cloudflare Workers — a Polygon Worker for market data and an AI Worker for Mistral/OpenAI generation. Adopted a streaming-first flow where the controller opens an SSE connection, the service pulls OHLC from the Polygon Worker, then proxies the AI token stream straight through to the browser. Validated retry/backoff and abort semantics end-to-end." },
      { label: "Software Architecture", text: "A TypeScript Express 5 API where prediction controllers immediately set SSE (better-sse) headers; a predictiv service orchestrates the data pull (Polygon Worker, via axios-retry) and an AI stream passthrough (Mistral/OpenAI Worker emitting standard SSE chunks). Workers run on Cloudflare; MongoDB/Mongoose handles persistence; helmet, express-rate-limit and Zod validation harden every edge; the API is deployed to Render under predictable /api routes." },
      { label: "Development Principles", text: "Leak-proof abort propagation — a client disconnect drives an AbortController through Express and Axios all the way to the worker and halts the model mid-stream to save compute; axios-retry with exponential backoff under a strict 5s timeout; Mistral streaming bound in a CAF async generator wrapped with async-retry; and native Web Streams backpressure (enqueue only when controller.desiredSize > 0) to prevent buffer bloat." },
      { label: "Impact", text: "Reports render token-by-token in the browser with perceived instant latency, resilient to worker stutter, and cost-controlled — a closed tab instantly halts the underlying model call, so abandoned sessions don't burn AI credits." },
    ],
  },
];

export const research: ResearchItem[] = [
  { id: "r001", index: "R/001", title: "Uniswap V3 Advanced Mechanics", text: "A rigorous deep dive into concentrated liquidity, virtual reserves, liquidity math and position management.", link: "https://paragraph.com/@break-into-defi/uniswap-v3-advanced-mechanics" },
  { id: "r002", index: "R/002", title: "Mechanics of Liquidity Distribution", text: "Token swapping analysis through execution tracing, slippage measurement and a literature review of liquidity distribution.", link: "https://paragraph.com/@break-into-defi/mechanics-of-uniswap-v3-liquidity-distribution" },
  { id: "r003", index: "R/003", title: "Uniswap V2 Advanced Mechanics", text: "A foundational deep dive into the constant-product AMM — x·y=k reserves, fee math, mint and burn flows, and the mechanics of impermanent loss.", link: "https://paragraph.com/@break-into-defi/uniswap-v2-advanced-mechanics" },
];
