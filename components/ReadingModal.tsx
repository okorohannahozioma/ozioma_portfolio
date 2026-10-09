"use client";

import React from "react";
import { X } from "lucide-react";
import { CreativeStory } from "@/data/creativeStories";

interface ReadingModalProps {
  story: CreativeStory | null;
  onClose: () => void;
}

export default function ReadingModal({ story, onClose }: ReadingModalProps) {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#090510]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
      <div className="max-w-3xl w-full bg-[#190F2C]/90 border border-[#2E1E4E] rounded-3xl p-6 sm:p-12 shadow-2xl relative my-auto max-h-[90vh] overflow-y-auto">
        <div className="sticky -top-6 -mt-6 sm:-top-12 sm:-mt-12 bg-[#190F2C]/95 backdrop-blur-md pt-6 pb-4 border-b border-[#2E1E4E]/60 flex items-center justify-between mb-8 z-30">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C084FC] font-semibold px-2.5 py-1 rounded-full bg-[#090510] border border-[#2E1E4E]">
              {story.tag}
            </span>
            <span className="text-xs text-[#968AA9] font-mono">{story.time}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-[#090510] border border-[#2E1E4E] text-xs text-[#F4EEFB] hover:text-[#C084FC] flex items-center gap-1.5 transition-colors"
          >
            <span>Close Reading Room</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <article>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EEFB] font-light tracking-tight leading-tight mb-6">
            {story.title}
          </h2>

          <div className="space-y-6 text-[#CDC3DF]/90 font-light text-base sm:text-lg leading-relaxed">
            {story.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <blockquote className="font-serif italic text-xl text-[#F4EEFB] pl-4 border-l-2 border-[#C084FC] py-2">
              {story.pullQuote}
            </blockquote>
          </div>

          <div className="mt-12 pt-8 border-t border-[#2E1E4E]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#968AA9]">
            <span className="italic font-serif">Written with warmth & quiet observation by Hannah O. Okoro.</span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#A855F7]/20 hover:bg-[#A855F7] text-[#C084FC] hover:text-white transition-all"
            >
              Return to Creative Lounge &uarr;
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}