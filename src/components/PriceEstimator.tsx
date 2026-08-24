"use client";

import React, { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Send,
  Building2,
  Receipt,
  Users2,
  Layers,
  ShieldCheck,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { MOCK_CONTACT } from "@/data/content";

interface FormAnswers {
  businessType: string;
  transactionVolume: string;
  vatStatus: string;
  employeeCount: string;
  services: string[];
  contactName: string;
  contactPhone: string;
  contactLineOrEmail: string;
  companyName: string;
  notes: string;
}

export default function PriceEstimator() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [answers, setAnswers] = useState<FormAnswers>({
    businessType: "service",
    transactionVolume: "under_50",
    vatStatus: "no_vat",
    employeeCount: "none",
    services: ["accounting", "tax"],
    contactName: "",
    contactPhone: "",
    contactLineOrEmail: "",
    companyName: "",
    notes: "",
  });

  const businessTypes = [
    {
      id: "service",
      title: "ธุรกิจบริการ (Service)",
      desc: "เช่น ฟรีแลนซ์, ที่ปรึกษา, คลินิก, ออกแบบ, การตลาด, พัฒนาซอฟต์แวร์",
      icon: Layers,
    },
    {
      id: "trading",
      title: "ธุรกิจซื้อมา-ขายไป (Trading)",
      desc: "เช่น ร้านค้าทั่วไป, ค้าปลีก-ส่ง, ตัวแทนจำหน่าย, ซื้อมาขายไปหน้าร้าน",
      icon: Building2,
    },
    {
      id: "ecommerce",
      title: "ธุรกิจออนไลน์ (E-Commerce)",
      desc: "เช่น Shopee, Lazada, TikTok Shop, Facebook Page, Live สด",
      icon: Receipt,
    },
    {
      id: "others",
      title: "ธุรกิจผลิต / อื่น ๆ (Others)",
      desc: "เช่น ผลิตสินค้า, ร้านอาหาร, อสังหาริมทรัพย์, กิจการเฉพาะทาง",
      icon: Users2,
    },
  ];

  const transactionVolumes = [
    {
      id: "under_50",
      title: "น้อยกว่า 50 รายการ / เดือน",
      desc: "เอกสารบิลซื้อ-ขาย บิลค่าใช้จ่าย รวมไม่เกิน 50 ฉบับ",
      badge: "แพ็กเกจประหยัด",
    },
    {
      id: "50_100",
      title: "50 - 100 รายการ / เดือน",
      desc: "ธุรกิจขนาดเล็กที่มีรายการสม่ำเสมอในแต่ละเดือน",
      badge: "ระดับมาตรฐาน",
    },
    {
      id: "100_300",
      title: "100 - 300 รายการ / เดือน",
      desc: "ธุรกิจที่กำลังเติบโต มีลูกค้าและซัพพลายเออร์หลายราย",
      badge: "ระดับธุรกิจเติบโต",
    },
    {
      id: "300_plus",
      title: "มากกว่า 300 รายการ / เดือน",
      desc: "ธุรกิจขนาดกลาง-ใหญ่ มีรายการเดินบัญชีและใบเสร็จจำนวนมาก",
      badge: "ระดับองค์กร",
    },
  ];

  const vatStatuses = [
    {
      id: "no_vat",
      title: "ยังไม่ได้จดทะเบียน VAT (ยังไม่เข้าสู่ระบบภาษีมูลค่าเพิ่ม)",
      desc: "รายได้ยังไม่เกิน 1.8 ล้านบาทต่อปี หรือเพิ่งเริ่มต้นธุรกิจ",
    },
    {
      id: "has_vat",
      title: "จดทะเบียนภาษีมูลค่าเพิ่ม (VAT 7%) แล้ว",
      desc: "มีใบ ภ.พ.20 และต้องยื่นแบบ ภ.พ.30 พร้อมรายงานภาษีซื้อ-ขายทุกเดือน",
    },
  ];

  const employeeOptions = [
    {
      id: "none",
      title: "ไม่มีพนักงาน (เจ้าของดูแลเอง)",
      desc: "ไม่มีรายการเงินเดือนและการยื่นประกันสังคม",
    },
    {
      id: "1_5",
      title: "1 - 5 คน",
      desc: "ทีมงานขนาดเล็ก มีระบบจ่ายเงินเดือนและประกันสังคมพื้นฐาน",
    },
    {
      id: "6_20",
      title: "6 - 20 คน",
      desc: "ทีมงานขนาดกลาง มีการคำนวณหัก ณ ที่จ่ายและประกันสังคมรายเดือน",
    },
    {
      id: "20_plus",
      title: "มากกว่า 20 คน",
      desc: "องค์กรขนาดใหญ่ ต้องการระบบ Payroll และรายงานสรุปฝ่ายบุคคล",
    },
  ];

  const availableServices = [
    { id: "accounting", title: "จัดทำบัญชีรายเดือน", default: true },
    { id: "tax", title: "ยื่นแบบภาษีประจำเดือน (ภ.ง.ด. 1, 3, 53)", default: true },
    { id: "vat", title: "ดูแลและยื่นภาษีมูลค่าเพิ่ม (ภ.พ. 30 / VAT 7%)" },
    { id: "payroll", title: "ระบบเงินเดือน & ประกันสังคม (Payroll)" },
    { id: "audit", title: "ปิดงบการเงิน & ตรวจสอบบัญชีประจำปี" },
    { id: "company_reg", title: "จดทะเบียนจัดตั้งบริษัท / ห้างหุ้นส่วน" },
    { id: "tax_planning", title: "วางแผนภาษีและปรึกษาธุรกิจเชิงลึก" },
  ];

  const handleServiceToggle = (id: string) => {
    setAnswers((prev) => {
      const exists = prev.services.includes(id);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== id) };
      } else {
        return { ...prev, services: [...prev.services, id] };
      }
    });
  };

  // Calculate estimated monthly price
  const calculateEstimate = () => {
    let base = 500;

    if (answers.transactionVolume === "50_100") base += 400;
    else if (answers.transactionVolume === "100_300") base += 900;
    else if (answers.transactionVolume === "300_plus") base += 1800;

    if (answers.vatStatus === "has_vat" || answers.services.includes("vat")) {
      base = Math.max(base, 900);
      if (answers.transactionVolume !== "under_50") {
        base += 300;
      }
    }

    if (answers.businessType === "ecommerce" || answers.businessType === "others") {
      base += 200;
    }

    if (answers.employeeCount === "1_5") base += 200;
    else if (answers.employeeCount === "6_20") base += 500;
    else if (answers.employeeCount === "20_plus") base += 1000;

    const minPrice = base;
    const maxPrice = Math.round((base * 1.25) / 100) * 100;

    return { minPrice, maxPrice };
  };

  const { minPrice, maxPrice } = calculateEstimate();

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!answers.contactName || !answers.contactPhone) {
      alert("กรุณากรอกชื่อและเบอร์โทรศัพท์สำหรับติดต่อกลับ");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...answers,
          estimatedMin: minPrice,
          estimatedMax: maxPrice,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        try {
          const confetti = (await import("canvas-confetti")).default;
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#D4AF37", "#1E40AF", "#F59E0B", "#10B981"],
          });
        } catch {
          // Ignore confetti if not available
        }
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 relative bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-200">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            Interactive Quotation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ประเมินค่าบริการบัญชี <br />
            <span className="text-gold-gradient">เฉพาะสำหรับธุรกิจของคุณ</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            ตอบคำถามสั้นๆ เพียง 5 ข้อ ระบบจะคำนวณและประเมินค่าบริการที่เหมาะสมให้ทันที
            โปร่งใส ไม่มีข้อผูกมัด
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
          {!isSubmitted ? (
            <div>
              {/* Progress Steps Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-3">
                  <span>ขั้นตอนที่ {currentStep} จาก 5</span>
                  <span className="text-amber-700 font-bold">
                    {currentStep === 1 && "1. ประเภทธุรกิจ"}
                    {currentStep === 2 && "2. ปริมาณรายการต่อเดือน"}
                    {currentStep === 3 && "3. สถานะภาษีมูลค่าเพิ่ม (VAT)"}
                    {currentStep === 4 && "4. จำนวนพนักงาน"}
                    {currentStep === 5 && "5. บริการที่ต้องการ & สรุปราคา"}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-gold-gradient transition-all duration-500 rounded-full"
                    style={{ width: `${(currentStep / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step 1: Business Type */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      1. ธุรกิจของคุณจัดอยู่ในประเภทใด?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      เลือกรูปแบบลักษณะการดำเนินงานหลักของกิจการคุณ
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {businessTypes.map((item) => {
                      const Icon = item.icon;
                      const isSelected = answers.businessType === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setAnswers({ ...answers, businessType: item.id })
                          }
                          className={`p-5 rounded-2xl text-left border-2 transition-all flex items-start gap-4 ${
                            isSelected
                              ? "bg-amber-50/60 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "bg-amber-500 text-white shadow-sm"
                                : "bg-slate-100 text-slate-600 border border-slate-200"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm sm:text-base font-bold text-slate-900">
                              {item.title}
                            </div>
                            <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                              {item.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Transaction Volume */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      2. ประมาณการรายการซื้อ-ขาย / เอกสารต่อเดือน?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      นับรวมบิลขาย, ใบกำกับภาษี, บิลค่าใช้จ่าย, สลิปโอนเงิน (โดยประมาณ)
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {transactionVolumes.map((item) => {
                      const isSelected = answers.transactionVolume === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setAnswers({
                              ...answers,
                              transactionVolume: item.id,
                            })
                          }
                          className={`p-5 rounded-2xl text-left border-2 transition-all ${
                            isSelected
                              ? "bg-amber-50/60 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm sm:text-base font-bold text-slate-900">
                              {item.title}
                            </span>
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: VAT Status */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      3. สถานะการจดทะเบียนภาษีมูลค่าเพิ่ม (VAT)?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      กิจการที่มีรายได้เกิน 1.8 ล้านบาท/ปี หรือจดทะเบียน VAT 7% ไว้แล้ว
                    </p>
                  </div>

                  <div className="space-y-4">
                    {vatStatuses.map((item) => {
                      const isSelected = answers.vatStatus === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setAnswers({ ...answers, vatStatus: item.id })
                          }
                          className={`w-full p-5 rounded-2xl text-left border-2 transition-all flex items-center justify-between gap-4 ${
                            isSelected
                              ? "bg-amber-50/60 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="text-sm sm:text-base font-bold text-slate-900">
                              {item.title}
                            </div>
                            <div className="text-xs text-slate-600">
                              {item.desc}
                            </div>
                          </div>
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "border-amber-500 bg-amber-500 text-white"
                                : "border-slate-300"
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Employees Count */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      4. กิจการของคุณมีพนักงานกี่คน?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      สำหรับการจัดทำเงินเดือน (Payroll) ภาษีหัก ณ ที่จ่าย และประกันสังคม
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {employeeOptions.map((item) => {
                      const isSelected = answers.employeeCount === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setAnswers({ ...answers, employeeCount: item.id })
                          }
                          className={`p-5 rounded-2xl text-left border-2 transition-all ${
                            isSelected
                              ? "bg-amber-50/60 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="text-sm sm:text-base font-bold text-slate-900">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-600 mt-1">
                            {item.desc}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 5: Desired Services & Instant Estimate Summary */}
              {currentStep === 5 && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      5. บริการที่คุณต้องการให้ดูแล (เลือกได้หลายข้อ)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      เลือกบริการที่ตรงกับความต้องการของกิจการคุณ
                    </p>
                  </div>

                  {/* Multi-select Services */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableServices.map((srv) => {
                      const isChecked = answers.services.includes(srv.id);
                      return (
                        <label
                          key={srv.id}
                          onClick={() => handleServiceToggle(srv.id)}
                          className={`p-3.5 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                            isChecked
                              ? "bg-amber-50 border-amber-500 text-slate-900 shadow-sm"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                              isChecked
                                ? "bg-amber-500 border-amber-500 text-white"
                                : "border-slate-400 bg-white"
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span className="text-xs sm:text-sm font-semibold">
                            {srv.title}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {/* Real-time Calculation Summary Box */}
                  <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-50/90 via-white to-amber-50/90 border-2 border-amber-400 shadow-md">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="space-y-1 text-center md:text-left">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wide">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          ราคาประเมินเบื้องต้นสำหรับธุรกิจคุณ
                        </span>
                        <div className="text-slate-600 text-xs">
                          คำนวณตามประเภทธุรกิจและปริมาณเอกสารที่คุณเลือก
                        </div>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="text-3xl sm:text-4xl font-black text-amber-800">
                          {formatPrice(minPrice)} - {formatPrice(maxPrice)}
                          <span className="text-xs sm:text-sm font-semibold text-slate-600 ml-1.5">
                            บาท/เดือน
                          </span>
                        </div>
                        <div className="text-xs text-emerald-700 font-semibold mt-1">
                          ✓ รวมภาษีและบริการตามรายการที่เลือก
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lead Contact Info Form */}
                  <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4 pt-2">
                    {/* Honeypot Field for Spam Bot Protection (Hidden from humans) */}
                    <input
                      type="text"
                      name="company_fax"
                      value=""
                      onChange={() => {}}
                      tabIndex={-1}
                      autoComplete="off"
                      className="opacity-0 absolute -z-50 w-0 h-0 pointer-events-none"
                    />

                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-600" />
                      รับใบเสนอราคาและคำปรึกษาฟรีจากผู้เชี่ยวชาญ:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          ชื่อผู้ติดต่อ <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          autoComplete="new-password"
                          placeholder="คุณสมชาย หรือ ชื่อเล่น"
                          value={answers.contactName}
                          onChange={(e) =>
                            setAnswers({ ...answers, contactName: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          เบอร์โทรศัพท์ <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          autoComplete="new-password"
                          placeholder="08X-XXX-XXXX"
                          value={answers.contactPhone}
                          onChange={(e) =>
                            setAnswers({
                              ...answers,
                              contactPhone: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          LINE ID หรือ อีเมล
                        </label>
                        <input
                          type="text"
                          autoComplete="new-password"
                          placeholder="line_id หรือ name@company.com"
                          value={answers.contactLineOrEmail}
                          onChange={(e) =>
                            setAnswers({
                              ...answers,
                              contactLineOrEmail: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          ชื่อบริษัท / กิจการ (ถ้ามี)
                        </label>
                        <input
                          type="text"
                          autoComplete="new-password"
                          placeholder="เช่น บริษัท เอบีซี จำกัด"
                          value={answers.companyName}
                          onChange={(e) =>
                            setAnswers({
                              ...answers,
                              companyName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        ข้อความหรือความต้องการเพิ่มเติม
                      </label>
                      <textarea
                        rows={2}
                        placeholder="เช่น อยากเริ่มทำบัญชีเดือนหน้า, สนใจจดบริษัทเพิ่ม"
                        value={answers.notes}
                        onChange={(e) =>
                          setAnswers({ ...answers, notes: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-bold text-base text-slate-950 bg-gold-gradient hover:opacity-95 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-4"
                    >
                      {isSubmitting ? (
                        <span>กำลังส่งข้อมูล...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-slate-950" />
                          <span>ส่งข้อมูลเพื่อรับคำปรึกษาและใบเสนอราคาฟรี</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}

              {/* Navigation Buttons (Prev / Next) */}
              <div className="flex items-center justify-between pt-8 border-t border-slate-200 mt-8">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>ย้อนกลับ</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gold-gradient hover:opacity-95 transition-all shadow-sm"
                  >
                    <span>ถัดไป</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Submission Success State */
            <div className="text-center py-8 sm:py-12 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  ส่งข้อมูลสำเร็จแล้ว! ขอบคุณที่ไว้วางใจ PST Account
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                  ทีมงานผู้เชี่ยวชาญได้รับข้อมูลของคุณเรียบร้อยแล้ว และจะติดต่อกลับผ่านเบอร์โทรศัพท์{" "}
                  <span className="text-amber-700 font-bold">
                    {answers.contactPhone}
                  </span>{" "}
                  เพื่อแนะนำแพ็กเกจและส่งใบเสนอราคาอย่างละเอียดโดยเร็วที่สุด
                </p>
              </div>

              {/* Estimate Recap Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-1 shadow-sm">
                <div className="text-xs text-slate-600 font-medium">ราคาประเมินเบื้องต้นของคุณ</div>
                <div className="text-3xl font-black text-amber-800">
                  {formatPrice(minPrice)} - {formatPrice(maxPrice)} บาท/เดือน
                </div>
              </div>

              {/* Instant Direct Contact */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${MOCK_CONTACT.phoneDirect}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>โทรสอบถามด่วน ({MOCK_CONTACT.phoneDirect})</span>
                </a>

                <a
                  href={MOCK_CONTACT.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>แอด LINE: {MOCK_CONTACT.lineId}</span>
                </a>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="text-xs text-slate-500 hover:text-amber-700 underline transition-colors"
                >
                  คำนวณราคาใหม่สำหรับธุรกิจอื่น
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
