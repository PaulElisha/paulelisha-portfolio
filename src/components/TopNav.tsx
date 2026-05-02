import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { label: "Index", href: "#index" },
  { label: "Database", href: "#database" },
];

const rightLinks = [
  { label: "Submit", href: "mailto:ajaoireoluwa1@gmail.com" },
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
      <div className="px-6 md:px-10 py-5 flex items-center justify-between">
        {/* Left: section links */}
        <nav className="flex items-center gap-6 text-[12px] uppercase tracking-wider">
          {sections.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-foreground/80 hover:text-foreground no-underline"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Center wordmark */}
        <a
          href="/"
          className="hidden xl:block absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold tracking-[0.18em] uppercase no-underline text-foreground"
        >
          Paul Elisha<sup className="ml-0.5 text-[9px]">®</sup>
        </a>

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
