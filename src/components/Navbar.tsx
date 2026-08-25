"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calculator, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "หน้าแรก", href: "#hero" },
    { label: "บริการของเรา", href: "#services" },
    { label: "แพ็กเกจราคา", href: "#pricing" },
    { label: "ทำไมต้องเรา", href: "#why-us" },
    { label: "เสียงตอบรับ", href: "#testimonials" },
    { label: "คำถามที่พบบ่อย", href: "#faq" },
    { label: "ติดต่อเรา", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-pst-dark/85 backdrop-blur-lg py-3 shadow-md border-b border-slate-200/80 dark:border-slate-800/80"
          : "bg-white/60 dark:bg-pst-dark/60 backdrop-blur-md py-4 border-b border-slate-200/50 dark:border-slate-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-white border border-slate-200 dark:border-slate-700 group-hover:border-amber-400 dark:group-hover:border-pst-gold transition-colors duration-300 shadow-sm overflow-hidden shrink-0">
            <Image
              src="/logo.webp"
              alt="PST Account Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 leading-none">
              PST <span className="text-gold-gradient font-black">ACCOUNT</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide mt-0.5">
              Accounting & Tax Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="#estimator"
            className="relative group overflow-hidden flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl text-xs xl:text-sm font-bold text-slate-950 bg-gold-gradient hover:opacity-95 transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calculator className="w-4 h-4 text-slate-950" />
            <span>ประเมินราคาฟรี</span>
          </Link>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle className="p-2" />
          <Link
            href="#estimator"
            className="sm:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-gold-gradient"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>ประเมินราคา</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none border border-slate-200 dark:border-slate-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-pst-navy/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-5 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <Link
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-slate-950 bg-gold-gradient shadow-md"
            >
              <Calculator className="w-4 h-4" />
              <span>ประเมินค่าบริการฟรี (5 ข้อ)</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
