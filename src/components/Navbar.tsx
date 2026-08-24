"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calculator, Menu, X, Sparkles } from "lucide-react";

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
    { label: "แพ็กเกจและราคา", href: "#pricing" },
    { label: "ทำไมต้องเรา", href: "#why-us" },
    { label: "คำถามที่พบบ่อย", href: "#faq" },
    { label: "ติดต่อเรา", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "light-navbar py-3 shadow-sm shadow-slate-200/60"
          : "bg-white/80 backdrop-blur-md py-4 border-b border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full p-0.5 bg-white border border-slate-200 group-hover:border-pst-gold transition-colors duration-300 shadow-sm overflow-hidden">
            <Image
              src="/logo.webp"
              alt="PST Account Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-wider text-pst-navy flex items-center gap-1.5">
              PST <span className="text-gold-gradient font-black">ACCOUNT</span>
            </span>
            <span className="text-[11px] text-slate-500 font-medium -mt-1 tracking-wide">
              Accounting & Tax Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-pst-navy hover:bg-slate-100 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="#estimator"
            className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs xl:text-sm font-bold text-slate-900 bg-gold-gradient hover:opacity-95 transition-all shadow-sm hover:shadow-md"
          >
            <Calculator className="w-4 h-4 text-slate-950" />
            <span>ประเมินราคาฟรี</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="#estimator"
            className="sm:hidden flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 bg-gold-gradient"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>ประเมินราคา</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-200">
            <Link
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-slate-950 bg-gold-gradient shadow-sm"
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
