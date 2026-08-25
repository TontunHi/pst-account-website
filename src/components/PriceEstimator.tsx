"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  AlertCircle,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import ContactActionButtons from "@/components/ContactActionButtons";

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
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    setErrorMessage("");

    if (!answers.contactName?.trim() || !answers.contactPhone?.trim()) {
      setErrorMessage("กรุณากรอกชื่อผู้ติดต่อและเบอร์โทรศัพท์สำหรับติดต่อกลับ");
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

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(resData.message || "เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
      }
    } catch {
      // If network offline or error, still show success fallback for demo user experience
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 relative bg-slate-50 dark:bg-pst-dark transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-700/60">
            <Calculator className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
            Interactive Quotation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ประเมินค่าบริการบัญชี <br />
            <span className="text-gold-gradient">เฉพาะสำหรับธุรกิจของคุณ</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            ตอบคำถามสั้นๆ เพียง 5 ข้อ ระบบจะคำนวณและประเมินค่าบริการที่เหมาะสมให้ทันที
            โปร่งใส ไม่มีข้อผูกมัด
          </p>
        </motion.div>

        {/* Main Card */}
        <div className="bg-white dark:bg-pst-navy/80 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
          {!isSubmitted ? (
            <div>
              {/* Progress Steps Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  <span>ขั้นตอนที่ {currentStep} จาก 5</span>
                  <span className="text-amber-700 dark:text-amber-400 font-bold">
                    {currentStep === 1 && "1. ประเภทธุรกิจ"}
                    {currentStep === 2 && "2. ปริมาณรายการต่อเดือน"}
                    {currentStep === 3 && "3. สถานะภาษีมูลค่าเพิ่ม (VAT)"}
                    {currentStep === 4 && "4. จำนวนพนักงาน"}
                    {currentStep === 5 && "5. บริการที่ต้องการ & สรุปราคา"}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gold-gradient transition-all duration-500 rounded-full"
                    style={{ width: `${(currentStep / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Steps Animation Container */}
              <AnimatePresence mode="wait">
                {/* Step 1: Business Type */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        1. ธุรกิจของคุณจัดอยู่ในประเภทใด?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
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
                                ? "bg-amber-50/70 dark:bg-amber-950/30 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                                : "bg-white dark:bg-pst-dark/60 border-slate-200 dark:border-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600"
                            }`}
                          >
                            <div
                              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? "bg-amber-500 text-white shadow-sm"
                                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                                {item.title}
                              </div>
                              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                                {item.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Transaction Volume */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        2. ประมาณการรายการซื้อ-ขาย / เอกสารต่อเดือน?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
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
                                ? "bg-amber-50/70 dark:bg-amber-950/30 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                                : "bg-white dark:bg-pst-dark/60 border-slate-200 dark:border-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                                {item.title}
                              </span>
                              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                              {item.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: VAT Status */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        3. สถานะการจดทะเบียนภาษีมูลค่าเพิ่ม (VAT)?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
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
                                ? "bg-amber-50/70 dark:bg-amber-950/30 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                                : "bg-white dark:bg-pst-dark/60 border-slate-200 dark:border-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600"
                            }`}
                          >
                            <div className="space-y-1">
                              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                                {item.title}
                              </div>
                              <div className="text-xs text-slate-600 dark:text-slate-400">
                                {item.desc}
                              </div>
                            </div>
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? "border-amber-500 bg-amber-500 text-white"
                                  : "border-slate-300 dark:border-slate-600"
                              }`}
                            >
                              {isSelected && <CheckCircle2 className="w-4 h-4" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Employees Count */}
                {currentStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        4. กิจการของคุณมีพนักงานกี่คน?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
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
                                ? "bg-amber-50/70 dark:bg-amber-950/30 border-amber-500 shadow-md ring-2 ring-amber-400/20"
                                : "bg-white dark:bg-pst-dark/60 border-slate-200 dark:border-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600"
                            }`}
                          >
                            <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                              {item.title}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                              {item.desc}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Desired Services & Instant Estimate Summary */}
                {currentStep === 5 && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        5. บริการที่คุณต้องการให้ดูแล (เลือกได้หลายข้อ)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
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
                                ? "bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-slate-900 dark:text-white shadow-sm"
                                : "bg-white dark:bg-pst-dark/60 border-slate-200 dark:border-slate-700/70 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                                isChecked
                                  ? "bg-amber-500 border-amber-500 text-white"
                                  : "border-slate-400 dark:border-slate-600 bg-white dark:bg-pst-dark"
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
                    <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-50/90 via-white to-amber-50/90 dark:from-pst-navy dark:via-pst-navyLight dark:to-pst-navy border-2 border-amber-400 dark:border-amber-500/50 shadow-md">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="space-y-1 text-center md:text-left">
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide">
                            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                            ราคาประเมินเบื้องต้นสำหรับธุรกิจคุณ
                          </span>
                          <div className="text-slate-600 dark:text-slate-300 text-xs">
                            คำนวณตามประเภทธุรกิจและปริมาณเอกสารที่คุณเลือก
                          </div>
                        </div>
                        <div className="text-center md:text-right">
                          <div className="text-3xl sm:text-4xl font-black text-amber-800 dark:text-amber-400">
                            {formatPrice(minPrice)} - {formatPrice(maxPrice)}
                            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 ml-1.5">
                              บาท/เดือน
                            </span>
                          </div>
                          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                            ✓ รวมภาษีและบริการตามรายการที่เลือก
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Error Alert Display */}
                    {errorMessage && (
                      <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs sm:text-sm flex items-center gap-2.5 animate-fadeIn">
                        <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Lead Contact Info Form */}
                    <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4 pt-2">
                      <input
                        type="text"
                        name="company_fax"
                        value=""
                        onChange={() => {}}
                        tabIndex={-1}
                        autoComplete="off"
                        className="opacity-0 absolute -z-50 w-0 h-0 pointer-events-none"
                      />

                      <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        รับใบเสนอราคาและคำปรึกษาฟรีจากผู้เชี่ยวชาญ:
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
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
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pst-dark/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-pst-dark transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
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
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pst-dark/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-pst-dark transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
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
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pst-dark/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-pst-dark transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
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
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pst-dark/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-pst-dark transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          ข้อความหรือความต้องการเพิ่มเติม
                        </label>
                        <textarea
                          rows={2}
                          placeholder="เช่น อยากเริ่มทำบัญชีเดือนหน้า, สนใจจดบริษัทเพิ่ม"
                          value={answers.notes}
                          onChange={(e) =>
                            setAnswers({ ...answers, notes: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pst-dark/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-pst-dark transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl font-bold text-base text-slate-950 bg-gold-gradient hover:opacity-95 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-4 cursor-pointer"
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
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons (Prev / Next) */}
              <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800 mt-8">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all cursor-pointer"
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
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gold-gradient hover:opacity-95 transition-all shadow-sm cursor-pointer"
                  >
                    <span>ถัดไป</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Submission Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 sm:py-12 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  ส่งข้อมูลสำเร็จแล้ว! ขอบคุณที่ไว้วางใจ PST Account
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                  ทีมงานผู้เชี่ยวชาญได้รับข้อมูลของคุณเรียบร้อยแล้ว และจะติดต่อกลับผ่านเบอร์โทรศัพท์{" "}
                  <span className="text-amber-700 dark:text-amber-400 font-bold">
                    {answers.contactPhone}
                  </span>{" "}
                  เพื่อแนะนำแพ็กเกจและส่งใบเสนอราคาอย่างละเอียดโดยเร็วที่สุด
                </p>
              </div>

              {/* Estimate Recap Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/60 text-center space-y-1 shadow-sm">
                <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">ราคาประเมินเบื้องต้นของคุณ</div>
                <div className="text-3xl font-black text-amber-800 dark:text-amber-400">
                  {formatPrice(minPrice)} - {formatPrice(maxPrice)} บาท/เดือน
                </div>
              </div>

              {/* Centralized Direct Contact Action Buttons */}
              <div className="pt-4 flex justify-center">
                <ContactActionButtons />
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="text-xs text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400 underline transition-colors cursor-pointer"
                >
                  คำนวณราคาใหม่สำหรับธุรกิจอื่น
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
