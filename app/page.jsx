"use client";

import { useState, useEffect } from "react";
import About from "@/components/About";
import Loading from "@/components/LandingLoading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setShowContent(true), 100);
    }
  }, [loading]);

  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden select-none">
      <Loading loadingComplete={() => setLoading(false)} />
      {showContent && (
        <div className="relative z-20 animate-fadeIn">
          <div className="backdrop-blur-md bg-black/50">
            <About />
          </div>
        </div>
      )}
    </main>
  );
}
