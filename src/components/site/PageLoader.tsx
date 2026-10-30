import { useEffect, useState } from "react";

/**
 * First-visit boot loader: a thin progress bar, then the curtain
 * wipes upward to reveal the page. Shown once per browser session.
 */
const PageLoader = () => {
  const [show, setShow] = useState(() => sessionStorage.getItem("booted") !== "1");

  useEffect(() => {
    if (!show) return;
    sessionStorage.setItem("booted", "1");
    const t = setTimeout(() => setShow(false), 1300);
    return () => clearTimeout(t);
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-background animate-[reveal_0.5s_ease_0.8s_forwards]"
      style={{ transformOrigin: "top" }}
      aria-hidden="true"
    >
      <div className="h-px w-40 overflow-hidden bg-border">
        <div className="h-full w-full origin-left bg-foreground animate-[boot_0.7s_ease_forwards]" />
      </div>
    </div>
  );
};

export default PageLoader;
