import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const rightLinks = [
  { label: "About", href: "#about" },
];

const categories = ["ALL", "STINT", "OPEN-SOURCE", "PROJECT", "RESEARCH"];

interface TopNavProps {
  activeCategory: string;
  onCategoryChange: (c: string) => void;
}

const TopNav = ({ activeCategory, onCategoryChange }: TopNavProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-background/80 backdrop-blur-sm">
      <div className="px-6 md:px-10 py-5 flex items-center justify-between gap-4">
        {/* Left: name (desktop) / category chips (mobile) */}
        <a
          href="/"
          className="hidden lg:block text-[13px] font-semibold tracking-[0.18em] uppercase no-underline text-foreground shrink-0"
        >
          Paul Elisha<sup className="ml-0.5 text-[9px]">®</sup>
        </a>

        {/* Mobile category chips inline at top */}
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-1 -mx-1 px-1">
          {categories.map((c) => {
            const active = c === activeCategory;
            return (
              <button
                key={c}
                onClick={() => onCategoryChange(c)}
                className={`nav-chip shrink-0 !text-[10px] !px-2 !py-1 ${active ? "nav-chip-active" : "hover:bg-muted"}`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Right: category chips (lg+) + theme + about */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-1.5 mr-2">
            {categories.map((c) => {
              const active = c === activeCategory;
              return (
                <button
                  key={c}
                  onClick={() => onCategoryChange(c)}
                  className={`nav-chip ${active ? "nav-chip-active" : "hover:bg-muted"}`}
                >
                  {c}
                </button>
              );
            })}
          </div>
          {rightLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-[12px] uppercase tracking-wider text-foreground/80 hover:text-foreground no-underline px-2"
            >
              {s.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-1 nav-chip hover:bg-muted"
          >
            {isDark ? <Sun size={12} /> : <Moon size={12} />}
          </button>
        </div>
      </div>

      {/* Mobile category bar */}
      <div className="lg:hidden px-6 pb-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {categories.map((c) => {
          const active = c === activeCategory;
          return (
            <button
              key={c}
              onClick={() => onCategoryChange(c)}
              className={`nav-chip shrink-0 ${active ? "nav-chip-active" : "hover:bg-muted"}`}
            >
              {c}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default TopNav;
