import { useEffect, useRef, type ReactNode } from "react";

const MAX_DEG = 8;
const LERP = 0.12;

/**
 * Subtle 3D tilt on mouse movement, matching naved.xyz:
 * the block rotates gently toward the cursor, smoothed with
 * requestAnimationFrame, and eases back to flat on pointer leave.
 */
const Tilt = ({ children, className }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    let frame = 0;

    const apply = () => {
      current.x += (target.x - current.x) * LERP;
      current.y += (target.y - current.y) * LERP;
      el.style.transform = `perspective(600px) rotateX(${current.x.toFixed(3)}deg) rotateY(${current.y.toFixed(3)}deg)`;
      frame = requestAnimationFrame(apply);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      target.x = -(ny * MAX_DEG);
      target.y = nx * MAX_DEG;
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(apply);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
      el.style.transform = "";
    };
  }, []);

  return (
    <li ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </li>
  );
};

export default Tilt;
