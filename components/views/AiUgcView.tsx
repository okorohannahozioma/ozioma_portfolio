"use client";

import React from "react";
import { Sparkles, Play, Video, ArrowRight } from "lucide-react";

interface AiUgcViewProps {
  onNavigate: (view: any) => void;
  onOpenModal: () => void;
}

export default function AiUgcView({ onOpenModal }: AiUgcViewProps) {
  const UGC_ITEMS = [
    {
      title: "Direct-to-Founder Pain Point",
      angle: "Overcoming B2B Burnout",
      hook: "“If your calendar looks like a game of Tetris you’re losing, watch this.”",
      views: "182k organic reach",
      retention: "98.2% (3s hook rate)",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "The Silent Authority Teardown",
      angle: "Framework Demystification",
      hook: "“Most people think personal branding is vanity. Here’s the 3-minute math that disproves that.”",
      views: "240k reach",
      retention: "94.6% retention",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Product Native Storytelling",
      angle: "Organic Conversion",
      hook: "“I tested 14 content engines last quarter. This is the only one that didn’t sound like a machine.”",
      views: "115k impressions",
      retention: "88% avg watch time",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
      <div className="max-w-2xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#190F2C] border border-[#2E1E4E] text-[10px] font-mono uppercase tracking-widest text-[#E879F9] mb-4">
          <Sparkles className="w-3 h-3" />
          Synthetic Distribution
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EEFB] font-light">
          AI UGC Video Studio.
        </h2>
        <p className="text-sm text-[#CDC3DF]/75 mt-4 font-light leading-relaxed">
          Where algorithm-primed scriptwriting meets synthetic avatar production. Scroll-stopping retention built for vertical feeds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {UGC_ITEMS.map((item, idx) => (
          <div key={idx} className="rounded-3xl bg-[#190F2C]/60 border border-[#2E1E4E] overflow-hidden flex flex-col group hover:border-[#E879F9]/50 transition-all">
            <div className="relative aspect-[9/16] w-full bg-[#090510] overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090510] via-transparent to-black/20" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#A855F7]/80 backdrop-blur-md flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono uppercase bg-[#090510]/80 px-2.5 py-1 rounded-full text-[#E879F9] border border-[#2E1E4E]">
                  {item.angle}
                </span>
                <p className="font-serif italic text-sm text-[#F4EEFB] mt-2 line-clamp-2">
                  {item.hook}
                </p>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg text-[#F4EEFB]">{item.title}</h3>
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#968AA9]">
                  <span>{item.views}</span>
                  <span className="text-[#C084FC]">{item.retention}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={onOpenModal}
          className="px-8 py-3.5 rounded-full bg-[#A855F7] hover:bg-[#E879F9] text-white text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2"
        >
          <span>Commission AI UGC Campaigns</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}