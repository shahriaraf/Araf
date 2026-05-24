"use client";

import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsVisible(true);
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`cursor ${isHovering ? "grow" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
