import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "home" },
  { to: "/work", label: "work" },
  { to: "/research", label: "research" },
  { to: "/cv", label: "cv" },
];

const DockNav = () => (
  <nav
    className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 animate-fade-in opacity-0"
    style={{ animationDelay: "300ms" }}
    aria-label="Site navigation"
  >
    <ul className="flex items-center gap-0.5 rounded-full border border-border bg-background/80 p-1 shadow-sm backdrop-blur">
      {links.map((l) => (
        <li key={l.to}>
          <NavLink
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) =>
              `block rounded-full px-3 py-1.5 text-xs uppercase tracking-wide transition-colors ${
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            {l.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default DockNav;
