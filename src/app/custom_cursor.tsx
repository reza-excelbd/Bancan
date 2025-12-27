"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      // Get the element under the cursor
      const element = document.elementFromPoint(e.clientX, e.clientY);

      // Get computed cursor style
      let cursorStyle = "default";
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        cursorStyle = computedStyle.cursor;
      }

      // List of cursor types that should hide the custom cursor
      const hideCursorTypes = [
        "pointer",
        "grab",
        "grabbing",
        "text",
        "help",
        "wait",
        "progress",
        "not-allowed",
        "copy",
        "move",
        "crosshair",
        "alias",
        "context-menu",
        "cell",
        "vertical-text",
        "zoom-in",
        "zoom-out",
      ];

      // Hide custom cursor if element has interactive cursor
      const shouldHide = hideCursorTypes.includes(cursorStyle);

      if (shouldHide) {
        cursorRef.current.style.opacity = "0";
        cursorRef.current.style.visibility = "hidden";
      } else {
        cursorRef.current.style.opacity = "1";
        cursorRef.current.style.visibility = "visible";
      }

      // Update position
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
        transition: "opacity 0.01s ease, visibility 0.1s ease",
      }}
    />
  );
}
