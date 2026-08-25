"use client";

import React from "react";
import { PhoneCall, MessageSquare } from "lucide-react";
import { MOCK_CONTACT } from "@/data/content";

interface ContactActionButtonsProps {
  className?: string;
  variant?: "horizontal" | "vertical" | "compact";
}

export default function ContactActionButtons({
  className = "",
  variant = "horizontal",
}: ContactActionButtonsProps) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <a
          href={`tel:${MOCK_CONTACT.phoneDirect}`}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>โทรด่วน</span>
        </a>
        <a
          href={MOCK_CONTACT.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-[#06C755] hover:bg-[#05B34C] transition-colors shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>LINE</span>
        </a>
      </div>
    );
  }

  return (
    <div
      className={`flex ${
        variant === "vertical"
          ? "flex-col gap-2.5 w-full"
          : "flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
      } ${className}`}
    >
      <a
        href={`tel:${MOCK_CONTACT.phoneDirect}`}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm hover:scale-[1.02] active:scale-[0.98]"
      >
        <PhoneCall className="w-4 h-4" />
        <span>โทรสอบถามด่วน ({MOCK_CONTACT.phoneDirect})</span>
      </a>

      <a
        href={MOCK_CONTACT.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-[#06C755] hover:bg-[#05B34C] transition-colors shadow-sm hover:scale-[1.02] active:scale-[0.98]"
      >
        <MessageSquare className="w-4 h-4" />
        <span>แอด LINE: {MOCK_CONTACT.lineId}</span>
      </a>
    </div>
  );
}
