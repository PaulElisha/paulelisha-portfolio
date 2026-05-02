import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import TopNav from "@/components/TopNav";
import ReasonCard from "@/components/ReasonCard";
import TrendingSidebar from "@/components/TrendingSidebar";
import BottomControls from "@/components/BottomControls";
import { reasons, TOTAL_REASONS } from "@/data/reasons";

const pad = (n: number, w = 4) => String(n).padStart(w, "0");

const Index = () => {
  const [activeId, setActiveId] = useState(1);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered = useMemo(
    () =>
      activeCategory === "ALL"
        ? reasons
        : reasons.filter((r) => r.category === activeCategory),
    [activeCategory]
  );

  const activeReason =
    reasons.find((r) => r.id === activeId) ?? reasons[0];

  const goPrev = () => {
    const idx = reasons.findIndex((r) => r.id === activeId);
    setActiveId(reasons[(idx - 1 + reasons.length) % reasons.length].id);
  };
  const goNext = () => {
    const idx = reasons.findIndex((r) => r.id === activeId);
    setActiveId(reasons[(idx + 1) % reasons.length].id);
  };
  const shuffle = () => {
    const others = reasons.filter((r) => r.id !== activeId);
    setActiveId(others[Math.floor(Math.random() * others.length)].id);
  };

  return (
    <>
      <Helmet>
        <title>Paul Elisha — Blockchain Engineer</title>
        <meta
          name="description"
          content="Smart contract engineer. 3x global hackathon winner. Co-founder of Asset Scooper. Browse reasons to work with Paul."
        />
      </Helmet>

      <TopNav
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="relative min-h-screen pt-24 pb-28 px-6 md:px-10 overflow-hidden">
        {/* Giant faded background numeral */}
        <div
          aria-hidden
          className="faded-numeral absolute inset-0 flex items-center justify-center text-[34vw] md:text-[28vw] lg:text-[24vw] -z-0"
        >
          {pad(TOTAL_REASONS, 4)}
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-10">
          {/* Hero card column — sticky on mobile so only trending scrolls */}
          <section className="sticky top-24 lg:static z-10 bg-background/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none flex items-start lg:items-center justify-center lg:min-h-[70vh] py-2 lg:py-0">
            <div className="w-full max-w-[640px]">
              <ReasonCard reason={activeReason} />
            </div>
          </section>

          {/* Trending sidebar */}
          <TrendingSidebar
            reasons={filtered}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>
      </main>

      <BottomControls
        current={activeId}
        total={TOTAL_REASONS}
        onPrev={goPrev}
        onNext={goNext}
        onShuffle={shuffle}
      />
    </>
  );
};

export default Index;
