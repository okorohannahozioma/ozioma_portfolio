"use client";

import React from "react";
import { ArrowUpRight, BookOpen, Quote } from "lucide-react";
import { CREATIVE_STORIES, CreativeStory } from "@/data/creativeStories";

interface CreativeViewProps {
  onNavigate: (view: "home" | "linkedin" | "ai-ugc" | "creative" | "web-apps") => void;
  onReadStory: (story: CreativeStory) => void;
}

export default function CreativeView({ onNavigate, onReadStory }: CreativeViewProps) {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 py-8 lg:py-12">
      {/* Header Section */}
      <div className="max-w-2xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#140A26] border border-[#3C1D63] text-[11px] font-mono uppercase tracking-widest text-[#D980FA] font-medium mb-3">
          <BookOpen className="w-3 h-3" />
          The Fun Corner • Essays & Reviews
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#F4EEFB] font-normal tracking-tight leading-tight">
          Midnight essays, literary critique, & <span className="italic text-[#D980FA]">unhurried thoughts.</span>
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#C7BED6]/85 font-light leading-relaxed">
          Where domain strategy takes off its blazer. Essays on literary sentence economy, digital craft, cultural critique, and the comedic tragedy of 2 AM epiphanies.
        </p>
      </div>

      {/* Compact 3-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CREATIVE_STORIES.map((story, idx) => (
          <article
            key={idx}
            onClick={() => onReadStory(story)}
            className="group cursor-pointer rounded-xl bg-[#140A26] border border-[#2D164E] hover:border-[#A855F7]/70 hover:bg-[#1A0E33] transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-md hover:-translate-y-0.5"
          >
            <div>
              {/* Compact Image Banner */}
              <div className="relative h-40 w-full overflow-hidden bg-[#0A0414]">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140A26] via-transparent to-transparent opacity-80" />

                {/* Floating Tag */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#0A0414]/85 backdrop-blur-md border border-[#3C1D63] text-[9px] font-mono uppercase tracking-wider text-[#D980FA]">
                  {story.tag}
                </div>

                {/* Reading Duration Badge */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#0A0414]/80 backdrop-blur-md border border-[#2D164E] text-[9px] font-mono text-[#C7BED6]">
                  {story.time}
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-4 sm:p-5">
                <h2 className="font-serif text-lg sm:text-xl text-[#F4EEFB] group-hover:text-white leading-snug tracking-tight line-clamp-2">
                  {story.title}
                </h2>

                <p className="mt-2 text-xs text-[#A69BB9] group-hover:text-[#C7BED6] font-light leading-relaxed line-clamp-2">
                  {story.snippet}
                </p>

                {/* Note */}
                {story.note && (
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] italic font-serif text-[#D980FA]/80 line-clamp-1">
                    <Quote className="w-3 h-3 shrink-0 text-[#A855F7]" />
                    <span className="truncate">{story.note}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Read Button Bar */}
            <div className="px-4 sm:px-5 pb-4 pt-2 flex items-center justify-between text-[11px] font-mono text-[#D980FA] group-hover:text-[#F3B8FF] border-t border-[#2D164E]/60 mt-1">
              <span>Read Full Piece</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}