import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { MOCK_CONTACT } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full p-0.5 bg-white border border-slate-700 shadow-sm overflow-hidden">
                <Image
                  src="/logo.webp"
                  alt="PST Account Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-wider">
                  PST <span className="text-gold-gradient font-black">ACCOUNT</span>
                </span>
                <span className="text-[10px] text-slate-400 font-light tracking-wide">
                  Accounting & Tax Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-200 font-semibold leading-relaxed">
              &quot;เป็นมากกว่านักบัญชี เราเป็นที่ปรึกษา และผู้ช่วยธุรกิจของคุณ&quot;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              บริการรับทำบัญชี ยื่นภาษี จดทะเบียนจัดตั้งบริษัท และปิดงบการเงิน
              ถูกต้องตามกฎหมายและมาตรฐานวิชาชีพ ดูแลโดยทีมงานมืออาชีพ
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              เมนูลัด (Quick Links)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#hero" className="hover:text-amber-400 transition-colors">
                  หน้าแรก (Home)
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-400 transition-colors">
                  บริการของเรา (Services)
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-amber-400 transition-colors">
                  แพ็กเกจและราคา (Pricing)
                </Link>
              </li>
              <li>
                <Link href="#estimator" className="hover:text-amber-400 transition-colors text-amber-400 font-semibold">
                  ประเมินราคาฟรี (Estimator)
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-amber-400 transition-colors">
                  ทำไมต้องเลือกเรา (Why Us)
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-amber-400 transition-colors">
                  คำถามที่พบบ่อย (FAQ)
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-400 transition-colors">
                  ติดต่อเรา (Contact)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              ข้อมูลติดต่อ (Contact Info)
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{MOCK_CONTACT.phoneDirect} (สายด่วน)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{MOCK_CONTACT.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{MOCK_CONTACT.address}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={MOCK_CONTACT.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all"
              >
                LINE: {MOCK_CONTACT.lineId}
              </a>
              <a
                href={`tel:${MOCK_CONTACT.phoneDirect}`}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 hover:bg-amber-400/30 transition-all"
              >
                โทรปรึกษาฟรี
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 PST Account & Consulting. สงวนลิขสิทธิ์ทุกประการ
          </p>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">
              นโยบายความเป็นส่วนตัว
            </span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">
              ข้อกำหนดการให้บริการ
            </span>
            <a
              href="#hero"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-400 transition-colors ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
