"use client";

import React, { useState } from "react";
import { Mic, TrendingUp, Sparkles, ArrowRight, ArrowUpRight, BarChart3 } from "lucide-react";
import { ENGINE_DATA } from "@/data/engineData";

interface LinkedInViewProps {
  onNavigate: (view: any) => void;
  onOpenModal: () => void;
}

export default function LinkedInView({ onOpenModal }: LinkedInViewProps) {
  const [activeEngineTab, setActiveEngineTab] = useState(0);
  const activeData = ENGINE_DATA[activeEngineTab];

  const proofPacks = [
    {
      tag: "Founder Brand",
      metric: "24k → 74k Followers (+50k)",
      title: "Audience Architecture & Follower Pipeline",
      desc: "Turned technical domain conviction into long-form frameworks, scaling total reach past 74k followers and generating direct enterprise ACV leads.",
      image: "/image/powerback-1.jpg",
    },
    {
      tag: "Healthcare Strategy",
      metric: "84k Organic Reads • 3 Hospital Leads",
      title: "Home Health & Clinical Operations",
      desc: "Shifted agency positioning from clinical routine to high-level compliance thought leadership, driving C-suite inbound inquiries.",
      image: "/image/powerback-2.jpg",
    },
    {
      tag: "B2B SaaS Pricing",
      metric: "280k Reach • 45 Inbounds",
      title: "The 400% Price Hike Narrative",
      desc: "Architected a contrarian thesis arguing why underpricing damages enterprise procurement trust, yielding 45 inbound demo bookings.",
      image: "/image/powerback-3.jpg",
    },
  ];

  return (
    <div className="py-16 px-6 sm:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#190F2C] border border-[#2E1E4E] text-[10px] font-mono uppercase tracking-widest text-[#C084FC] mb-4">
          <Sparkles className="w-3 h-3" />
          The Executive Voice Engine
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EEFB] font-light">
          Turning Raw Midnight Brain Dumps into Undeniable Market Authority.
        </h2>
        <p className="text-sm text-[#CDC3DF]/75 mt-4 font-light leading-relaxed">
          Founders don't lack ideas; they lack time and narrative pacing. Here is how we extract unvarnished perspective and distill it into C-suite distribution.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {["CTO • Cloud Infra", "HealthTech • Interoperability", "B2B SaaS • Enterprise Pricing"].map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveEngineTab(idx)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
              activeEngineTab === idx
                ? "bg-[#A855F7] text-white shadow-lg"
                : "bg-[#190F2C] border border-[#2E1E4E] text-[#CDC3DF] hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Raw Input Card */}
        <div className="p-8 rounded-3xl bg-[#190F2C]/60 border border-[#2E1E4E] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#968AA9] mb-4">
              <Mic className="w-4 h-4 text-[#C084FC]" />
              <span>{activeData.meta}</span>
            </div>
            <p className="font-mono text-sm text-[#CDC3DF] leading-relaxed italic border-l-2 border-[#2E1E4E] pl-4 py-1">
              "{activeData.quote}"
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-[#2E1E4E]/60 text-xs text-[#968AA9] font-light">
            {activeData.friction}
          </div>
        </div>

        {/* Polished Copy Card */}
        <div className="p-8 rounded-3xl bg-[#190F2C] border border-[#C084FC]/40 shadow-xl relative flex flex-col justify-between">
          <div className="inline-block px-3 py-1 rounded-full bg-[#090510] text-[10px] font-mono text-[#C084FC] border border-[#2E1E4E] w-fit mb-4">
            {activeData.channel}
          </div>
          <div>
            <h3
              className="font-serif text-lg text-[#F4EEFB] leading-snug mb-4"
              dangerouslySetInnerHTML={{ __html: activeData.hook }}
            />
            <p className="text-xs sm:text-sm text-[#CDC3DF]/90 font-light whitespace-pre-line leading-relaxed">
              {activeData.body}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-[#2E1E4E] flex items-center gap-2 text-xs font-mono text-[#E879F9]">
            <TrendingUp className="w-4 h-4" />
            <span>{activeData.impact}</span>
          </div>
        </div>
      </div>

      {/* Visual Proof & Powerbacks Section */}
      <section className="mt-20">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#190F2C] border border-[#2E1E4E] text-[10px] font-mono uppercase tracking-widest text-[#D980FA] mb-3">
            <BarChart3 className="w-3 h-3" />
            Case Proof & Breakdown Assets
          </div>
          <h3 className="font-serif text-2xl sm:text-4xl text-[#F4EEFB] font-light">
            Powerbacks: Concrete Proof & Scaled Reach
          </h3>
          <p className="text-xs sm:text-sm text-[#CDC3DF]/75 mt-2 font-light max-w-xl">
            A look under the hood at actual audience pipelines, thesis-driven positioning, and conversion metrics built for clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofPacks.map((pack, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#140A26] border border-[#2D164E] hover:border-[#A855F7]/70 hover:bg-[#1A0E33] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Image Banner on Top */}
                <div className="relative h-44 w-full overflow-hidden bg-[#0A0414]">
                  <img
                    src={pack.image}
                    alt={pack.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140A26] via-transparent to-transparent opacity-85" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0A0414]/85 backdrop-blur-md border border-[#3C1D63] text-[9px] font-mono uppercase tracking-wider text-[#D980FA]">
                    {pack.tag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="text-xs font-mono text-[#E879F9] font-medium mb-1.5 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{pack.metric}</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#F4EEFB] group-hover:text-white leading-snug">
                    {pack.title}
                  </h4>
                  <p className="mt-2 text-xs text-[#A69BB9] group-hover:text-[#C7BED6] font-light leading-relaxed">
                    {pack.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 pt-2">
                <button
                  onClick={onOpenModal}
                  className="w-full py-2.5 rounded-xl bg-[#0A0414] border border-[#2D164E] hover:border-[#D980FA] text-xs font-mono uppercase tracking-wider text-[#D980FA] hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Retainer Trigger */}
      <div className="mt-20 pt-10 border-t border-[#2E1E4E]/50 text-center">
        <button
          onClick={onOpenModal}
          className="px-8 py-3.5 rounded-full bg-[#A855F7] hover:bg-[#C084FC] text-white text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2 shadow-lg shadow-[#A855F7]/30 cursor-pointer"
        >
          <span>Retain Hannah for Executive Ghostwriting</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}