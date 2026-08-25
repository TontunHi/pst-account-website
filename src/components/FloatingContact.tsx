"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, PhoneCall, ArrowUp, X } from "lucide-react";
import { MOCK_CONTACT } from "@/data/content";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-3 rounded-full bg-white dark:bg-pst-navy text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-lg hover:border-amber-400 dark:hover:border-pst-gold transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Contact Stack */}
      <div className="relative flex flex-col items-end gap-2.5">
        {/* Expanded options */}
        {isOpen && (
          <div className="flex flex-col items-end gap-2 animate-fadeIn mb-1">
            {/* Phone button */}
            <a
              href={`tel:${MOCK_CONTACT.phoneDirect}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs shadow-xl hover:bg-blue-700 transition-all hover:scale-105"
            >
              <span>โทร {MOCK_CONTACT.phoneDirect}</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* LINE button */}
            <a
              href={MOCK_CONTACT.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#06C755] text-white font-bold text-xs shadow-xl hover:bg-[#05B34C] transition-all hover:scale-105"
            >
              <span>คุยผ่าน LINE @{MOCK_CONTACT.lineId}</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        )}

        {/* Main Floating Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contact PST Account"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-sm shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/50 cursor-pointer"
        >
          {isOpen ? (
            <>
              <X className="w-5 h-5" />
              <span>ปิด</span>
            </>
          ) : (
            <>
              <div className="relative">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <span className="hidden sm:inline">ปรึกษาด่วน</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
