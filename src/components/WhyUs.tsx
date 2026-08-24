import React from "react";
import Image from "next/image";
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
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-600" />,
    BadgePercent: <BadgePercent className="w-6 h-6 text-amber-600" />,
    ClockAlert: <Clock className="w-6 h-6 text-amber-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-600" />,
  };

  const experiencePoints = [
    "ขึ้นทะเบียนผู้ทำบัญชีอย่างถูกต้องตามพระราชบัญญัติการบัญชี",
    "มีเครือข่ายผู้สอบบัญชีรับอนุญาต (CPA / TA) รับรองงบการเงิน",
    "ประสบการณ์ดูแลหลากหลายธุรกิจ ทั้ง SME, E-commerce, บริการ และการผลิต",
    "รักษาความลับทางการเงินและข้อมูลธุรกิจของลูกค้าสูงสุด 100%",
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-200">
            Why Choose PST Account
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ทำไมเจ้าของธุรกิจและ SME <br />
            <span className="text-gold-gradient">จึงเลือกให้เราดูแลบัญชีและภาษี?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            เพราะเราเข้าใจว่าเวลาของคุณมีค่าที่สุดสำหรับสร้างยอดขายและการเติบโตของธุรกิจ
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_US_REASONS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300 shadow-sm">
                  {iconMap[item.icon] || <FileCheck className="w-6 h-6 text-amber-600" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience & Professionalism Showcase Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-50 via-white to-amber-50/50 text-slate-900 border-2 border-amber-300 shadow-lg overflow-hidden">
          {/* Background image ambient */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <Image
              src="/bg.webp"
              alt="PST Account Background"
              fill
              className="object-cover object-center opacity-15"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Professional Standard</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                มั่นใจในความถูกต้อง <br />
                ด้วยมาตรฐานวิชาชีพบัญชีระดับสากล
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                เราคัดกรองทีมงานนักบัญชีที่มีประสบการณ์และความเชี่ยวชาญโดยตรง
                อัปเดตข้อกฎหมายภาษีใหม่ๆ จากกรมสรรพากรอยู่เสมอ
                ทำให้ธุรกิจของคุณปลอดภัยจากความเสี่ยงทางภาษีและเบี้ยปรับย้อนหลัง
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              {experiencePoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
