"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  currentView: string;
  onNavigate: (view: "home" | "linkedin" | "ai-ugc" | "creative" | "web-apps") => void;
  onOpenModal: () => void;
}

export default function Navbar({ currentView, onNavigate, onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: "home", label: "Home" },
    { key: "linkedin", label: "LinkedIn & Strategy" },
    { key: "ai-ugc", label: "AI UGC Studio" },
    { key: "creative", label: "Creative & Reviews" },
    { key: "web-apps", label: "Web Apps Built" },
  ] as const;

  return (
    <nav className="sticky top-0 z-40 bg-[#090510]/90 backdrop-blur-xl border-b border-[#2E1E4E]/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 h-20 flex items-center justify-between">
        {/* Brand / Avatar */}
        <button onClick={() => onNavigate("home")} className="flex items-center gap-2.5 sm:gap-3 group text-left">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#190F2C] border border-[#2E1E4E] overflow-hidden flex items-center justify-center shrink-0 group-hover:border-[#C084FC] transition-all">
            <img
              src="/images/IMG_1806.PNG"
              alt="Hannah Ozioma Okoro"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80";
              }}
            />
          </div>
          <div>
            <span className="block font-serif text-sm sm:text-base tracking-tight font-medium text-[#F4EEFB] leading-tight">
              Hannah O. Okoro
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-[#968AA9] font-medium">
              Ghostwriter • Strategist
            </span>
          </div>
        </button>

        {/* Desktop Tabs */}
        <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-[#110A1E]/80 border border-[#2E1E4E]/80 text-xs uppercase tracking-wider font-semibold">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`px-4 py-2 rounded-full transition-all ${
                currentView === item.key
                  ? "text-white bg-[#A855F7] shadow-md"
                  : "text-[#CDC3DF] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenModal}
            className="px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#A855F7] hover:bg-[#E879F9] text-white text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all shadow-md shadow-[#A855F7]/25 flex items-center gap-1.5"
          >
            <span>Book Retainer</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#190F2C] border border-[#2E1E4E] text-[#F4EEFB] hover:text-[#C084FC] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-4 bg-[#090510]/98 border-b border-[#2E1E4E] space-y-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                onNavigate(item.key);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                currentView === item.key
                  ? "text-white bg-[#A855F7]/20 border border-[#A855F7]/40"
                  : "text-[#CDC3DF] hover:bg-[#190F2C]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}