import React from "react";
import Link from "next/link";
import {
  Check,
  Sparkles,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Calculator,
} from "lucide-react";
import {
  MONTHLY_PACKAGES,
  ONE_TIME_SERVICES,
  PRICE_TRANSPARENCY_FACTORS,
} from "@/data/content";
import { formatPrice } from "@/lib/utils";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-200">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            แพ็กเกจและอัตราค่าบริการ <br />
            <span className="text-gold-gradient">โปร่งใส เข้าถึงง่าย ไม่มีบวกเพิ่ม</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            เลือกแพ็กเกจที่เหมาะสมกับขนาดและความต้องการของธุรกิจคุณ
            เริ่มต้นเพียง 500 บาท/เดือน
          </p>
        </div>

        {/* Monthly Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {MONTHLY_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-gradient-to-b from-amber-50/70 via-white to-white text-slate-900 border-2 border-amber-500 shadow-xl shadow-amber-500/10 lg:-translate-y-2"
                    : "bg-white text-slate-900 border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-lg"
                } p-7 sm:p-8`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-gradient text-slate-950 font-bold text-xs shadow-md uppercase tracking-wider flex items-center gap-1.5 border border-amber-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Package Name & Target */}
                  <div className="mb-4">
                    {!isPopular && pkg.badge && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 inline-block mb-2">
                        {pkg.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-slate-900">
                      {pkg.name}
                    </h3>
                    <p className="text-xs mt-1 text-slate-500 font-medium">
                      {pkg.nameEn}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div
                    className={`my-6 py-4 px-4 rounded-2xl flex items-baseline gap-2 border ${
                      isPopular
                        ? "bg-amber-100/50 border-amber-300 text-slate-900"
                        : "bg-slate-50 border-slate-200 text-slate-900"
                    }`}
                  >
                    {typeof pkg.price === "number" ? (
                      <>
                        <span className={`text-4xl sm:text-5xl font-black ${isPopular ? "text-amber-900" : "text-slate-900"}`}>
                          {formatPrice(pkg.price)}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-500">
                          {pkg.priceSuffix}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl sm:text-3xl font-bold text-amber-700">
                        {pkg.price}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm mb-6 leading-relaxed text-slate-600">
                    {pkg.description}
                  </p>

                  <div className="text-xs font-bold mb-3 flex items-center gap-1.5 text-amber-800">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    ขอบเขตการดูแลที่ครอบคลุม:
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Package CTA */}
                <div>
                  <Link
                    href="#estimator"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold transition-all ${
                      isPopular
                        ? "bg-gold-gradient text-slate-950 hover:opacity-90 shadow-md hover:shadow-lg"
                        : "bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 shadow-sm"
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* One-Time Services Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              บริการแบบรายครั้ง (One-Time Services)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              สะดวกรวดเร็ว บริการงานเอกสารนิติบุคคลแบบรายชิ้นตามความต้องการ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ONE_TIME_SERVICES.map((srv, sIdx) => (
              <div
                key={sIdx}
                className={`p-6 rounded-2xl bg-white border ${
                  srv.highlight
                    ? "border-amber-300 bg-amber-50/40 shadow-sm"
                    : "border-slate-200"
                } flex flex-col justify-between space-y-4`}
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900">{srv.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500">อัตราค่าบริการ</div>
                  <div className="text-lg font-black text-amber-700">
                    {srv.price}{" "}
                    <span className="text-xs font-normal text-slate-600">
                      {srv.unit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Transparency Explained */}
        <div className="bg-slate-50 rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200">
                <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
                ความโปร่งใสทางราคา
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                ทำไมค่าบริการบัญชีของแต่ละบริษัท <br />
                <span className="text-gold-gradient">จึงไม่เท่ากัน?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                PST Account คิดค่าบริการตามปริมาณงานจริงและระดับความรับผิดชอบ
                เพื่อให้ธุรกิจของคุณจ่ายเฉพาะสิ่งที่ได้รับอย่างคุ้มค่าที่สุด
                ไม่มีการคิดเหมารวมที่เกินจำเป็น
              </p>
              <Link
                href="#estimator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gold-gradient shadow-sm"
              >
                <Calculator className="w-4 h-4 text-slate-950" />
                คำนวณราคาตามขนาดธุรกิจของคุณ
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRICE_TRANSPARENCY_FACTORS.map((factor, fIdx) => (
                <div
                  key={fIdx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <h4 className="text-sm font-bold text-slate-900">
                      {factor.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
