"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Sparkles,
  Award,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50 dark:bg-pst-dark transition-colors duration-300"
    >
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image
          src="/bg.webp"
          alt="PST Account Background"
          fill
          priority
          className="object-cover object-top opacity-30 dark:opacity-20 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-slate-50/80 to-slate-50 dark:from-pst-dark/80 dark:via-pst-dark/95 dark:to-pst-dark" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 dark:bg-pst-gold/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Trust Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/60 text-amber-900 dark:text-amber-300 text-xs sm:text-sm font-semibold shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 animate-pulse" />
              <span>บริการบัญชีและภาษีครบวงจรสำหรับผู้ประกอบการ & SME</span>
            </motion.div>

            {/* Main Slogan */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight sm:leading-tight">
                เป็นมากกว่านักบัญชี <br />
                <span className="text-gold-gradient font-black">
                  เราเป็นที่ปรึกษา
                </span>{" "}
                <br />
                และผู้ช่วยธุรกิจของคุณ
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
                ไม่ต้องกังวลเรื่องเอกสารและสรรพากร PST Account
                ช่วยดูแลบัญชีและวางแผนภาษีอย่างมืออาชีพ ถูกต้อง โปร่งใส
                เคียงข้างตั้งแต่ก้าวแรกที่เริ่มธุรกิจ
              </p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-pst-navy/70 text-left border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">เริ่มต้นเพียง</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">500.- / เดือน</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-pst-navy/70 text-left border border-slate-200 dark:border-slate-800 shadow-sm">
                <FileCheck2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">จดทะเบียนบริษัท</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">เริ่มต้น 500.-</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-pst-navy/70 text-left border border-slate-200 dark:border-slate-800 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">ปรึกษาเริ่มต้น</div>
                  <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">ฟรี ไม่มีค่าใช้จ่าย</div>
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
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-pst-navy/80 hover:bg-slate-50 dark:hover:bg-pst-navyLight border border-slate-300 dark:border-slate-700 transition-all shadow-sm"
              >
                <span>ดูแพ็กเกจและราคา</span>
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600 dark:text-slate-400 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                ยื่นภาษีตรงเวลา 100%
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                ผู้ทำบัญชีขึ้นทะเบียนสภาวิชาชีพบัญชี
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                เข้าใจง่าย ไร้ศัพท์เทคนิคซับซ้อน
              </span>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Card / Quick Quotation Teaser */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing Ambient */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-300/40 via-blue-200/40 to-amber-300/40 dark:from-pst-gold/20 dark:via-pst-blue/30 dark:to-pst-gold/20 rounded-3xl blur-xl opacity-70" />

              {/* Main Floating Card */}
              <div className="relative bg-white dark:bg-pst-navy/90 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm p-0.5 overflow-hidden">
                      <Image
                        src="/logo.webp"
                        alt="PST Account"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">PST Smart Account</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">ระบบดูแลบัญชีธุรกิจยุคใหม่</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    ● พร้อมดูแลคุณ
                  </span>
                </div>

                {/* Feature List on Card */}
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-pst-dark/60 border border-slate-100 dark:border-slate-800/80">
                    <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">วางแผนภาษีถูกต้อง ประหยัดเงิน</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">ใช้สิทธิประโยชน์ทางภาษีสูงสุด ถูกกฎหมาย ป้องกันเบี้ยปรับ</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-pst-dark/60 border border-slate-100 dark:border-slate-800/80">
                    <FileCheck2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">จัดการเอกสาร ยื่นแบบรายเดือน</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">ภ.ง.ด.1, 3, 53, ภ.พ.30, ประกันสังคม ปิดงบประจำปี</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-pst-dark/60 border border-slate-100 dark:border-slate-800/80">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">ที่ปรึกษาส่วนตัว คุยง่าย ไม่ทิ้งงาน</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">สอบถามได้ตลอดเวลาผ่าน LINE พร้อมตอบข้อสงสัยทันใจ</p>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
