"use client";

import React, { useState, useEffect } from "react";
import { X, Check, ArrowRight, ArrowUpRight } from "lucide-react";

interface RetainerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RetainerModal({ isOpen, onClose }: RetainerModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    url: "",
    interest: "Executive Thought Leadership & Ghostwriting",
    message: "",
  });
  const [submittedBrief, setSubmittedBrief] = useState<{ name: string; email: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/retainer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to dispatch brief. Please try again.");
      }

      setSubmittedBrief({
        name: formData.name.split(" ")[0] || "there",
        email: formData.email,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedBrief(null);
    setSubmitError(null);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      url: "",
      interest: "Executive Thought Leadership & Ghostwriting",
      message: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#07030D]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Modal Shell */}
      <div className="max-w-lg w-full bg-[#130922] border border-[#3B1F69] rounded-2xl shadow-2xl relative flex flex-col max-h-[90vh]">
        {/* Header (Pinned) */}
        <div className="p-6 pb-4 border-b border-[#2E1E4E]/80 flex items-start justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0A0414] border border-[#2E1E4E] text-[10px] font-mono uppercase tracking-widest text-[#C084FC] mb-2">
              <span>Private Retainer</span>
            </div>
            <h3 className="font-serif text-2xl text-[#F4EEFB] font-light">
              Let's Architect Your Presence.
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-full bg-[#0A0414] border border-[#2E1E4E] text-[#968AA9] hover:text-white transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-left">
          {!submittedBrief ? (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase font-mono tracking-wider text-[#968AA9] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Maya Chen"
                  className="w-full bg-[#0A0414] border border-[#2E1E4E] focus:border-[#C084FC] rounded-xl px-3.5 py-2.5 text-sm text-[#F4EEFB] placeholder:text-[#968AA9]/40 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono tracking-wider text-[#968AA9] mb-1">
                  Direct / Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="maya@company.com"
                  className="w-full bg-[#0A0414] border border-[#2E1E4E] focus:border-[#C084FC] rounded-xl px-3.5 py-2.5 text-sm text-[#F4EEFB] placeholder:text-[#968AA9]/40 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono tracking-wider text-[#968AA9] mb-1">
                  LinkedIn or Website URL *
                </label>
                <input
                  type="text"
                  required
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="linkedin.com/in/yourname"
                  className="w-full bg-[#0A0414] border border-[#2E1E4E] focus:border-[#C084FC] rounded-xl px-3.5 py-2.5 text-sm text-[#F4EEFB] placeholder:text-[#968AA9]/40 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono tracking-wider text-[#968AA9] mb-1">
                  Primary Engagement Focus *
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-[#0A0414] border border-[#2E1E4E] focus:border-[#C084FC] rounded-xl px-3.5 py-2.5 text-sm text-[#F4EEFB] focus:outline-none"
                >
                  <option value="Executive Thought Leadership & Ghostwriting">
                    Executive Thought Leadership & Ghostwriting
                  </option>
                  <option value="AI UGC Video Studio & Distribution">
                    AI UGC Video Studio & Distribution
                  </option>
                  <option value="Full Brand Narrative & Repositioning">
                    Full Brand Narrative & Repositioning
                  </option>
                  <option value="Custom Web App Build">
                    Custom Web App Build
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-mono tracking-wider text-[#968AA9] mb-1">
                  Brief Bottleneck / Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Where does your current narrative fall short of your vision?"
                  className="w-full bg-[#0A0414] border border-[#2E1E4E] focus:border-[#C084FC] rounded-xl px-3.5 py-2 text-sm text-[#F4EEFB] placeholder:text-[#968AA9]/40 focus:outline-none resize-none"
                />
              </div>

              {submitError && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-[#A855F7] hover:bg-[#C084FC] disabled:opacity-50 text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <span>{isSubmitting ? "Transmitting Brief..." : "Submit"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#A855F7]/20 text-[#C084FC] border border-[#A855F7]/40 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#F4EEFB]">Brief Queued</h4>
              <p className="text-xs text-[#CDC3DF]/80 font-light max-w-xs mx-auto">
                Thank you, <span className="text-[#C084FC]">{submittedBrief.name}</span>. I will reach out at{" "}
                <span className="text-white font-mono">{submittedBrief.email}</span> within 24 hours.
              </p>
              <div className="pt-3 flex justify-center gap-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2 rounded-full border border-[#2E1E4E] text-xs text-[#CDC3DF] hover:text-white"
                >
                  Close
                </button>
                <a
                  href="https://www.linkedin.com/in/okorohannahozioma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-[#A855F7] text-white text-xs font-semibold inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}