"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Calculator,
  ArrowRight,
  ShieldCheck,
  Building,
  CheckCircle2,
} from "lucide-react";
import { MOCK_CONTACT } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-200">
            Contact & Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ช่องทางการติดต่อ <br />
            <span className="text-gold-gradient">พร้อมให้คำปรึกษาธุรกิจคุณ</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            เลือกติดต่อผ่านช่องทางที่ท่านสะดวก หรือประเมินราคาเบื้องต้นผ่านระบบออนไลน์
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Direct Channels */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* LINE Official Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-emerald-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">
                      ตอบกลับรวดเร็วที่สุด
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      LINE Official Account
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      แชทสอบถาม ปรึกษาเบื้องต้น และส่งเอกสารประเมินราคา
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={MOCK_CONTACT.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>แอดไลน์: {MOCK_CONTACT.lineId}</span>
                  </a>
                </div>
              </div>

              {/* Phone Direct Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-amber-200 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 border border-amber-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide">
                      สายด่วนผู้เชี่ยวชาญ
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      โทรศัพท์ปรึกษาโดยตรง
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      พูดคุยกับทีมงานนักบัญชีเพื่อรับคำแนะนำทันที
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`tel:${MOCK_CONTACT.phoneDirect}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gold-gradient hover:opacity-90 transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>โทร {MOCK_CONTACT.phoneDirect}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Support Channel */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">ติดต่อผ่านทางอีเมล (Email)</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900">
                      {MOCK_CONTACT.email}
                    </div>
                  </div>
                </div>

                <a
                  href={`mailto:${MOCK_CONTACT.email}`}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors text-center shadow-sm"
                >
                  ส่งอีเมลถึงเรา
                </a>
              </div>
            </div>

            {/* Quick Estimator Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-50/80 via-white to-blue-50/80 text-slate-900 border-2 border-amber-300 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-700 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ระบบออนไลน์ตลอด 24 ชม.</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  ต้องการทราบราคาทำบัญชีของธุรกิจคุณใน 1 นาที?
                </h4>
              </div>
              <Link
                href="#estimator"
                className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gold-gradient shadow-md hover:opacity-95 transition-all"
              >
                <Calculator className="w-4 h-4 text-slate-950" />
                <span>ประเมินราคาฟรี 5 ข้อ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Office Address & Business Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-sm">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      สำนักงานและเวลาทำการ
                    </h3>
                    <p className="text-xs text-slate-500">
                      PST Account & Consulting Office
                    </p>
                  </div>
                </div>

                {/* Address Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-rose-500 shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">ที่ตั้งสำนักงาน</div>
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed mt-0.5 font-medium">
                      {MOCK_CONTACT.address}
                    </div>
                  </div>
                </div>

                {/* Working Hours Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 mt-0.5 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">เวลาให้บริการ</div>
                    <div className="text-xs sm:text-sm text-slate-800 mt-0.5 font-medium">
                      {MOCK_CONTACT.workingHours}
                    </div>
                  </div>
                </div>

                {/* Service Guarantees */}
                <div className="pt-4 border-t border-slate-200 space-y-2.5">
                  <div className="text-xs font-bold text-slate-900 mb-2">
                    มาตรฐานการบริการ PST Account:
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ติดต่อได้สะดวกผ่าน LINE Official ทุกวันทำการ</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>รับ-ส่งเอกสารผ่านระบบคลาวด์และไปรษณีย์ทั่วประเทศ</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>มีเจ้าหน้าที่ประจำคอยดูแลและให้คำปรึกษาต่อเนื่อง</span>
                  </div>
                </div>
              </div>

              {/* Bottom Office Phone Notice */}
              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
                เบอร์โทรสำนักงานส่วนกลาง:{" "}
                <span className="text-slate-900 font-bold">
                  {MOCK_CONTACT.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
