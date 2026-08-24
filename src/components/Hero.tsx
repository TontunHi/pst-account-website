"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50"
    >
      {/* Background Image: PST Official Artwork */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image
          src="/bg.webp"
          alt="PST Account Background"
          fill
          priority
          className="object-cover object-top opacity-95"
        />
        {/* Soft bottom blend to transition smoothly to next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-slate-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>บริการบัญชีและภาษีครบวงจรสำหรับผู้ประกอบการ & SME</span>
            </div>

            {/* Main Slogan */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight sm:leading-tight">
                เป็นมากกว่านักบัญชี <br />
                <span className="text-gold-gradient font-black">
                  เราเป็นที่ปรึกษา
                </span>{" "}
                <br />
                และผู้ช่วยธุรกิจของคุณ
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
                ไม่ต้องกังวลเรื่องเอกสารและสรรพากร PST Account
                ช่วยดูแลบัญชีและวางแผนภาษีอย่างมืออาชีพ ถูกต้อง โปร่งใส
                เคียงข้างตั้งแต่ก้าวแรกที่เริ่มธุรกิจ
              </p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl light-card text-left border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">เริ่มต้นเพียง</div>
                  <div className="text-sm font-bold text-slate-900">500.- / เดือน</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl light-card text-left border border-slate-200">
                <FileCheck2 className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">จดทะเบียนบริษัท</div>
                  <div className="text-sm font-bold text-slate-900">เริ่มต้น 500.-</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl light-card text-left border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">ปรึกษาเริ่มต้น</div>
                  <div className="text-sm font-bold text-emerald-700">ฟรี ไม่มีค่าใช้จ่าย</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#estimator"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base text-slate-950 bg-gold-gradient hover:opacity-95 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calculator className="w-5 h-5 text-slate-950" />
                <span>ประเมินค่าบริการฟรี (5 คำถาม)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#pricing"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all shadow-sm"
              >
                <span>ดูแพ็กเกจและบริการ</span>
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                ยื่นภาษีตรงเวลา 100%
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                ผู้ทำบัญชีขึ้นทะเบียนสภาวิชาชีพบัญชี
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                ไร้ศัพท์เทคนิค เข้าใจง่าย
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card / Quick Quotation Teaser */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing Ambient */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-300/40 via-blue-200/40 to-amber-300/40 rounded-3xl blur-xl opacity-70" />

              {/* Main Floating Card */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm p-0.5 overflow-hidden">
                      <Image
                        src="/logo.webp"
                        alt="PST Account"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">PST Smart Account</h3>
                      <p className="text-xs text-slate-500">ระบบดูแลบัญชีธุรกิจยุคใหม่</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    ● พร้อมดูแลคุณ
                  </span>
                </div>

                {/* Feature List on Card */}
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <TrendingUp className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">วางแผนภาษีถูกต้อง ประหยัดเงิน</h4>
                      <p className="text-xs text-slate-500 mt-0.5">ใช้สิทธิประโยชน์ทางภาษีสูงสุด ถูกกฎหมาย ป้องกันเบี้ยปรับ</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <FileCheck2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">จัดการเอกสาร ยื่นแบบรายเดือน</h4>
                      <p className="text-xs text-slate-500 mt-0.5">ภ.ง.ด.1, 3, 53, ภ.พ.30, ประกันสังคม ปิดงบประจำปี</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">ที่ปรึกษาส่วนตัว คุยง่าย ไม่ทิ้งงาน</h4>
                      <p className="text-xs text-slate-500 mt-0.5">สอบถามได้ตลอดเวลาผ่าน LINE พร้อมตอบข้อสงสัยทันใจ</p>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-1">
                  <Link
                    href="#estimator"
                    className="block text-center w-full py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gold-gradient hover:opacity-90 transition-all shadow-md"
                  >
                    คำนวณค่าบริการธุรกิจของคุณทันที
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
