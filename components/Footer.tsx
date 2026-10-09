"use client";

import React from "react";
import { ArrowUpRight, Globe } from "lucide-react";

interface FooterProps {
  onNavigate: (view: "home" | "linkedin" | "ai-ugc" | "creative" | "web-apps") => void;
  onOpenModal: () => void;
}

export default function Footer({ onNavigate, onOpenModal }: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-[#2D164E]/60 pt-16 pb-14 px-6 sm:px-10 lg:px-14">
      {/* Retainer Section */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140A26] border border-[#3C1D63] text-xs font-mono uppercase tracking-widest text-[#D980FA] font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E879F9] animate-pulse" />
          Private Retainers & Strategic Engagements
        </div>

        {/* Scaled & Stretched Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-[#F4EEFB] font-normal tracking-tight leading-[1.1] max-w-4xl">
          Ready to stop lurking and start{" "}
          <span className="italic text-[#D980FA] font-normal">commanding the room?</span>
        </h2>

        {/* Relaxed Width Subtitle */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-[#C7BED6]/90 font-light leading-relaxed max-w-2xl">
          Whether you need an executive thought leadership partner, high-velocity AI UGC creative, sharp literary critique, or custom tools built, let&apos;s architect your presence with intention.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="px-7 py-3.5 rounded-full bg-[#A855F7] hover:bg-[#C084FC] text-white text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all shadow-lg shadow-[#A855F7]/30 flex items-center gap-2"
          >
            <span>Request Retainer Availability</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <a
            href="https://www.linkedin.com/in/okorohannahozioma/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full border border-[#3C1D63] bg-[#140A26] text-[#F4EEFB] text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-[#1E0F38] transition-all flex items-center gap-2"
          >
            <Globe className="w-4 h-4 text-[#D980FA]" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>

      {/* Quirkiness Socials & Quick Links */}
      <div className="w-full max-w-6xl mx-auto mt-14 pt-8 border-t border-[#2D164E]/50 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-[#A69BB9] font-mono">
            Find more of my quirkiness here:
          </span>
          <div className="flex items-center gap-2.5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/okorohannahozioma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-[#140A26] border border-[#2D164E] flex items-center justify-center text-[#C7BED6] hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#07030D] transition-all shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.86 18.5V10.13H5.07V18.5h2.79z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X Twitter"
              className="w-8 h-8 rounded-full bg-[#140A26] border border-[#2D164E] flex items-center justify-center text-[#C7BED6] hover:text-white hover:border-white/50 hover:bg-[#07030D] transition-all shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-[#140A26] border border-[#2D164E] flex items-center justify-center text-[#C7BED6] hover:text-[#E4405F] hover:border-[#E4405F]/60 hover:bg-[#07030D] transition-all shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#140A26] border border-[#2D164E] flex items-center justify-center text-[#C7BED6] hover:text-[#1877F2] hover:border-[#1877F2]/60 hover:bg-[#07030D] transition-all shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-5 text-[#A69BB9] text-xs font-mono">
          <button onClick={() => onNavigate("home")} className="hover:text-[#D980FA] transition-colors">Home</button>
          <button onClick={() => onNavigate("linkedin")} className="hover:text-[#D980FA] transition-colors">LinkedIn</button>
          <button onClick={() => onNavigate("ai-ugc")} className="hover:text-[#D980FA] transition-colors">AI UGC</button>
          <button onClick={() => onNavigate("creative")} className="hover:text-[#D980FA] transition-colors">Creative</button>
          <button onClick={() => onNavigate("web-apps")} className="hover:text-[#D980FA] transition-colors">Web Apps</button>
        </div>
      </div>
    </footer>
  );
}