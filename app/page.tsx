"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetainerModal from "@/components/RetainerModal";
import ReadingModal from "@/components/ReadingModal";
import HomeView from "@/components/views/HomeView";
import LinkedInView from "@/components/views/LinkedInView";
import AiUgcView from "@/components/views/AiUgcView";
import CreativeView from "@/components/views/CreativeView";
import WebAppsView from "@/components/views/WebAppsView";
import { CreativeStory } from "@/data/creativeStories";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [currentView, setCurrentView] = useState<
    "home" | "linkedin" | "ai-ugc" | "creative" | "web-apps"
  >("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<CreativeStory | null>(null);

  const navigateTo = (view: "home" | "linkedin" | "ai-ugc" | "creative" | "web-apps") => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#07030D] text-[#F4EEFB] flex flex-col relative selection:bg-[#A855F7]/30 selection:text-white overflow-x-hidden">
      {/* Dynamic Purple Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#7E22CE]/25 via-[#581C87]/15 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-[#9333EA]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 -right-48 w-[650px] h-[650px] bg-[#C084FC]/10 blur-[150px] rounded-full" />
      </div>

      {/* Nav */}
      <Navbar
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* Seamless Cross-Slide Transition Container */}
      <main className="relative z-10 flex-1 min-h-[70vh] overflow-hidden w-full">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{
              duration: 0.38,
              ease: [0.16, 1, 0.3, 1], // Apple-grade smooth deceleration curve
            }}
            className="w-full"
          >
            {currentView === "home" && <HomeView onNavigate={navigateTo} />}
            {currentView === "linkedin" && (
              <LinkedInView
                onNavigate={navigateTo}
                onOpenModal={() => setIsModalOpen(true)}
              />
            )}
            {currentView === "ai-ugc" && (
              <AiUgcView
                onNavigate={navigateTo}
                onOpenModal={() => setIsModalOpen(true)}
              />
            )}
            {currentView === "creative" && (
              <CreativeView
                onNavigate={navigateTo}
                onReadStory={(story) => setActiveStory(story)}
              />
            )}
            {currentView === "web-apps" && (
              <WebAppsView
                onNavigate={navigateTo}
                onOpenModal={() => setIsModalOpen(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} onOpenModal={() => setIsModalOpen(true)} />

      {/* Modals */}
      <RetainerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <ReadingModal
        story={activeStory}
        onClose={() => setActiveStory(null)}
      />
    </div>
  );
}