"use client";

import { useState, useEffect } from "react";
import About from "@/components/About/About";
import Loading from "@/components/Loading/LandingLoading";
import MaskImage from "@/components/Misc/MaskImage";
import { useGlobalState } from "@/hooks/useGlobalState";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Misc/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { currentSection } = useGlobalState();

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setShowContent(true), 100);
    }
  }, [loading]);

  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden select-none">
      <MaskImage>
        <Loading loadingComplete={() => setLoading(false)} />
        {showContent && (
          <div className="relative z-20 animate-fadeIn">
            <div className="h-screen backdrop-blur-2xl bg-black/50">
              {currentSection === "ABOUT" && <About />}
              {currentSection === "PROJECTS" && <Projects />}
              {currentSection === "SKILLS" && <Skills />}
            </div>

            <Footer />
          </div>
        )}
      </MaskImage>
    </main>
  );
}
