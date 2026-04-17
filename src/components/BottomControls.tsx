import { ArrowLeft, ArrowRight, Shuffle } from "lucide-react";

interface BottomControlsProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onShuffle: () => void;
}

const pad = (n: number) => String(n).padStart(4, "0");

const BottomControls = ({
  current,
  total,
  onPrev,
  onNext,
  onShuffle,
}: BottomControlsProps) => {
  const progress = Math.max(0, Math.min(1, current / total));

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 px-6 md:px-10 py-5 bg-background/85 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-6 flex-wrap">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 text-[12px] uppercase tracking-wider hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={14} /> Back
        </button>

        <div className="flex items-center gap-3 text-[12px] tracking-wider min-w-[260px]">
          <span className="tabular-nums">{pad(current)}</span>
          <div className="relative h-px bg-border flex-1 min-w-[120px]">
            <div
              className="absolute inset-y-0 left-0 bg-foreground"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <span className="tabular-nums opacity-70">{pad(total)}</span>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={onNext}
            className="flex items-center gap-2 text-[12px] uppercase tracking-wider hover:opacity-70 transition-opacity"
          >
            Next <ArrowRight size={14} />
          </button>
          <button
            onClick={onShuffle}
            className="flex items-center gap-2 text-[12px] uppercase tracking-wider hover:opacity-70 transition-opacity"
          >
            <Shuffle size={12} /> Mix
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomControls;
