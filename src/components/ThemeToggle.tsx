"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle Theme"
        className={`p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-pst-navy/80 text-slate-600 dark:text-slate-300 transition-colors ${className}`}
      >
        <div className="w-5 h-5 opacity-0" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className={`relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white/90 dark:bg-pst-navy/90 text-slate-700 dark:text-amber-400 hover:border-amber-400 dark:hover:border-amber-400 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
      title={isDark ? "สลับเป็นโหมดสว่าง (Light Mode)" : "สลับเป็นโหมดมืด (Dark Mode)"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 animate-spin-slow transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-transform" />
      )}
    </button>
  );
}
