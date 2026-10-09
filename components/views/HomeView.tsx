"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface HomeViewProps {
  onNavigate: (view: "home" | "linkedin" | "ai-ugc" | "creative" | "web-apps") => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const cards = [
    {
      num: "01.",
      tag: "LINKEDIN",
      title: "Writing & Executive Strategy",
      desc: "Ghostwriting, hooks & follower pipelines.",
      view: "linkedin" as const,
    },
    {
      num: "02.",
      tag: "VIDEO STUDIO",
      title: "AI UGC & Velocity Video",
      desc: "9:16 synthetic avatars with 98.4% retention.",
      view: "ai-ugc" as const,
    },
    {
      num: "03.",
      tag: "ESSAYS",
      title: "Creative Writing & Reviews",
      desc: "Literary non-fiction, essays & reflections.",
      view: "creative" as const,
    },
    {
      num: "04.",
      tag: "ENGINEERING",
      title: "Web Applications Built",
      desc: "Custom software & interactive tools.",
      view: "web-apps" as const,
    },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-8 lg:py-14">
      {/* 2-Column Hero: Everything Left, Photo Card Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Heading, Subtitle & 2x2 Numbered Grid */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.2rem] text-[#F4EEFB] font-normal tracking-tight leading-[1.08]">
            A front-row seat to the craft of making brilliant people{" "}
            <span className="italic text-[#D980FA] font-normal">impossible to ignore.</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-[#C7BED6] font-light leading-relaxed max-w-xl">
            You bring the battle scars and deep domain instincts. I bring the psychological pacing, unignorable hooks, and multi-format distribution.
          </p>

          {/* 2x2 Interactive Numbered Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 w-full max-w-2xl">
            {cards.map((item) => (
              <button
                key={item.num}
                onClick={() => onNavigate(item.view)}
                className="group relative p-4 rounded-xl bg-[#140A26] border border-[#2D164E] hover:bg-[#34165E] hover:border-[#A855F7]/70 text-left transition-all duration-200 flex flex-col justify-between min-h-[105px]"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-wider font-semibold text-[#D980FA] group-hover:text-[#F3B8FF]">
                    <span>{item.num} {item.tag}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#968AA9] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[13px] font-medium text-white mt-1 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[11px] text-[#A69BB9] group-hover:text-[#E0D7ED] font-light leading-normal mt-1">
                  {item.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: The Editorial Portrait Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[430px] rounded-3xl bg-[#170B2C] border border-[#341857] p-4 shadow-2xl relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0414]">
              {/* Photo */}
              <img
                src="/images/1.png"
                alt="Hannah Ozioma Okoro"
                className="w-full h-full object-cover object-top"
              />

              {/* Orange Pill at Top Left */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#180C2C]/90 backdrop-blur-md border border-[#3C1D63] text-[10px] font-mono text-[#F4EEFB] shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E879F9]" />
                <span>74k+ Organic Reach Engineered</span>
              </div>

              {/* Dark Footer Bar inside Image */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#0F0620]/90 backdrop-blur-md border border-[#2D164E]/90 flex flex-col gap-1">
                <div className="flex items-center justify-between text-[9px] font-mono tracking-widest uppercase">
                  <span className="text-[#968AA9]">Authority Architecture</span>
                  <span className="text-[#D980FA] font-semibold">0% AI-Fluff</span>
                </div>
                <p className="font-serif italic text-xs text-[#F4EEFB] leading-tight">
                  “Attention isn’t loud anymore; it’s articulate.”
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}