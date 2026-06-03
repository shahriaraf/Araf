"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const pos  = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setIsVisible(true);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";

      setHovering(isClickable);
    };

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    // Smooth lagging ring
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;

      const x = ring.current.x;
      const y = ring.current.y;

      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top  = `${y}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${x}px`;
        glowRef.current.style.top  = `${y}px`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
    };
  }, []);

  if (!isVisible) return null;

  const ACCENT      = "#b45555";
  const ACCENT_DIM  = "rgba(180,85,85,0.45)";
  const ACCENT_GLOW = "rgba(180,85,85,0.12)";

  return (
    <>
      {/* ── Dot: snaps to cursor position ── */}
      <div
        ref={dotRef}
        style={{
          position:        "fixed",
          width:           clicking ? "5px" : "8px",
          height:          clicking ? "5px" : "8px",
          borderRadius:    "50%",
          backgroundColor: ACCENT,
          pointerEvents:   "none",
          zIndex:          99999,
          transform:       "translate(-50%, -50%)",
          transition:      "width 0.12s ease, height 0.12s ease",
          willChange:      "left, top",
          boxShadow:       `0 0 6px 1px ${ACCENT}80`,
        }}
      />

      {/* ── Ring: lags smoothly behind ── */}
      <div
        ref={ringRef}
        style={{
          position:     "fixed",
          width:        clicking ? "24px" : hovering ? "52px" : "36px",
          height:       clicking ? "24px" : hovering ? "52px" : "36px",
          borderRadius: "50%",
          border:       `1.5px solid ${hovering ? ACCENT : ACCENT_DIM}`,
          pointerEvents:"none",
          zIndex:       99998,
          transform:    "translate(-50%, -50%)",
          transition:   [
            "width 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
            "height 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
            "border-color 0.25s ease",
          ].join(", "),
          willChange:   "left, top",
        }}
      />

      {/* ── Glow: soft radial behind ring ── */}
      <div
        ref={glowRef}
        style={{
          position:     "fixed",
          width:        hovering ? "80px" : "50px",
          height:       hovering ? "80px" : "50px",
          borderRadius: "50%",
          background:   `radial-gradient(circle, ${hovering ? "rgba(180,85,85,0.18)" : ACCENT_GLOW} 0%, transparent 70%)`,
          pointerEvents:"none",
          zIndex:       99997,
          transform:    "translate(-50%, -50%)",
          transition:   "width 0.4s ease, height 0.4s ease, background 0.3s ease",
          willChange:   "left, top",
        }}
      />
    </>
  );
}