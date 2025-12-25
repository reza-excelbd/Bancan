"use client";

// Loading component

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Loading() {
  const [showLoading, setShowLoading] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Set minimum loading time to 2 seconds
    const minTimeTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2000);

    return () => clearTimeout(minTimeTimer);
  }, []);

  useEffect(() => {
    // Only hide loading after minimum time has elapsed
    if (minTimeElapsed) {
      // Small delay to ensure smooth transition
      const hideTimer = setTimeout(() => {
        setShowLoading(false);
      }, 100);

      return () => clearTimeout(hideTimer);
    }
  }, [minTimeElapsed]);

  if (!showLoading) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen w-full bg-vermilion">
      {/* loader image */}
      <Image
        src="/bancan_kitchen.svg"
        alt="bancan kitchen"
        width={352}
        height={293}
        className="w-auto h-auto"
      />
    </div>
  );
}
