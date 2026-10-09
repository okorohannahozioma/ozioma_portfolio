"use client";

import React from "react";
import { Terminal, ExternalLink, ArrowRight } from "lucide-react";

interface WebAppsViewProps {
  onNavigate: (view: any) => void;
  onOpenModal: () => void;
}

export default function WebAppsView({ onOpenModal }: WebAppsViewProps) {
  const apps = [
    {
      title: "Interactive Editorial Portfolio",
      tag: "Full-Stack Web App",
      stack: ["Next.js", "Tailwind CSS v4", "TypeScript", "Resend API"],
      desc: "A boutique, high-performance executive personal brand platform engineered with custom typography scales, dark aesthetic lighting, and asynchronous retainer inquiry pipelines.",
      image: "/image/app-portfolio.png",
      demoUrl: "https://hannahokoro.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Dynamic Form Validation & Client Portal",
      tag: "Client Workflow Tool",
      stack: ["React", "JavaScript", "Tailwind CSS"],
      desc: "Engineered responsive intake forms with strict validation rules, asynchronous error handling, and high-conversion UX for digital product distribution.",
      image: "/image/app-portal.png",
      demoUrl: "#",
      githubUrl: "https://github.com",
    },
    {
      title: "Executive Voice & Hook Engine",
      tag: "Content Strategy Tool",
      stack: ["Next.js", "React State", "Lucide", "Vercel"],
      desc: "An internal prototype tool designed to map client voice memos, extract core premises, and test hook resonance metrics across technical B2B verticals.",
      image: "/image/app-engine.png",
      demoUrl: "#",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-16">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#140A26] border border-[#3C1D63] text-[11px] font-mono uppercase tracking-widest text-[#38BDF8] font-medium mb-3">
          <Terminal className="w-3.5 h-3.5" />
          Engineering & Software
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#F4EEFB] font-normal tracking-tight leading-tight">
          Web tools & applications <span className="italic text-[#38BDF8]">built with intention.</span>
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-[#C7BED6]/85 font-light leading-relaxed">
          Bridging narrative architecture with clean, modern code. Custom web applications, interactive interfaces, and tools crafted with modern JavaScript, React, and Next.js.
        </p>
      </div>

      {/* Grid of Web Apps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app, idx) => (
          <div
            key={idx}
            className="group rounded-2xl bg-[#140A26] border border-[#2D164E] hover:border-[#38BDF8]/60 hover:bg-[#1A0E33] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:-translate-y-1"
          >
            <div>
              {/* Image Banner on Top */}
              <div className="relative h-44 w-full overflow-hidden bg-[#0A0414]">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140A26] via-transparent to-transparent opacity-85" />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0A0414]/85 backdrop-blur-md border border-[#2D164E] text-[9px] font-mono uppercase tracking-wider text-[#38BDF8]">
                  {app.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3 className="font-serif text-lg sm:text-xl text-[#F4EEFB] group-hover:text-white leading-snug">
                  {app.title}
                </h3>
                <p className="mt-2 text-xs text-[#A69BB9] group-hover:text-[#C7BED6] font-light leading-relaxed line-clamp-3">
                  {app.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {app.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-[#0A0414] border border-[#2D164E] text-[10px] font-mono text-[#968AA9]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-5 pb-5 pt-3 border-t border-[#2D164E]/60 flex items-center gap-2">
              <a
                href={app.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-[#0A0414] border border-[#2D164E] hover:border-[#38BDF8] text-[11px] font-mono uppercase tracking-wider text-[#38BDF8] hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>Live View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={app.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="p-2 rounded-xl bg-[#0A0414] border border-[#2D164E] hover:border-[#38BDF8] text-[#A69BB9] hover:text-white transition-all flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Retainer / Collaboration Trigger */}
      <div className="mt-20 pt-10 border-t border-[#2D164E]/50 text-center">
        <button
          onClick={onOpenModal}
          className="px-8 py-3.5 rounded-full bg-[#38BDF8] hover:bg-[#7dd3fc] text-[#0A0414] text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2 shadow-lg shadow-[#38BDF8]/20 cursor-pointer"
        >
          <span>Commission a Custom Web Application</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}