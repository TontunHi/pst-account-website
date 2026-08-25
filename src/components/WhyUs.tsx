"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgePercent,
  Clock,
  Sparkles,
  Award,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import { WHY_US_REASONS } from "@/data/content";

export default function WhyUs() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    BadgePercent: <BadgePercent className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    ClockAlert: <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
  };

  const experiencePoints = [
    "ขึ้นทะเบียนผู้ทำบัญชีอย่างถูกต้องตามพระราชบัญญัติการบัญชี",
    "มีเครือข่ายผู้สอบบัญชีรับอนุญาต (CPA / TA) รับรองงบการเงิน",
    "ประสบการณ์ดูแลหลากหลายธุรกิจ ทั้ง SME, E-commerce, บริการ และการผลิต",
    "รักษาความลับทางการเงินและข้อมูลธุรกิจของลูกค้าสูงสุด 100%",
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 relative bg-white dark:bg-pst-navy/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-700/60">
            Why Choose PST Account
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ทำไมเจ้าของธุรกิจและ SME <br />
            <span className="text-gold-gradient">จึงเลือกให้เราดูแลบัญชีและภาษี?</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            เพราะเราเข้าใจว่าเวลาของคุณมีค่าที่สุดสำหรับสร้างยอดขายและการเติบโตของธุรกิจ
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_US_REASONS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-pst-navy/70 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-pst-gold hover:shadow-xl dark:hover:shadow-gold-sm transition-all duration-300 group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-pst-dark border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400 dark:group-hover:border-pst-gold transition-all duration-300 shadow-sm">
                  {iconMap[item.icon] || <FileCheck className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-pst-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience & Professionalism Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-50 via-white to-amber-50/50 dark:from-pst-navy dark:via-pst-navyLight dark:to-pst-navy text-slate-900 dark:text-white border-2 border-amber-300 dark:border-amber-500/50 shadow-lg overflow-hidden"
        >
          {/* Background image ambient */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <Image
              src="/bg.webp"
              alt="PST Account Background"
              fill
              className="object-cover object-center opacity-15 dark:opacity-10"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Professional Standard</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                มั่นใจในความถูกต้อง <br />
                ด้วยมาตรฐานวิชาชีพบัญชีระดับสากล
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                เราคัดกรองทีมงานนักบัญชีที่มีประสบการณ์และความเชี่ยวชาญโดยตรง
                อัปเดตข้อกฎหมายภาษีใหม่ๆ จากกรมสรรพากรอยู่เสมอ
                ทำให้ธุรกิจของคุณปลอดภัยจากความเสี่ยงทางภาษีและเบี้ยปรับย้อนหลัง
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              {experiencePoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-pst-dark/80 border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
