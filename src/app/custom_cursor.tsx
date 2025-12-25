"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) rotate(-20deg)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 32,
        height: 32,
        background: "url(/cursor.png) no-repeat center / contain",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
