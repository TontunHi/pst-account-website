"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, FileSpreadsheet, Award, Building2 } from "lucide-react";

export default function TrustStats() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "ผู้ประกอบการ & SME ไว้ใจ",
      desc: "ดูแลลูกค้าหลากหลายประเภทธุรกิจทั่วไทย",
    },
    {
      icon: FileSpreadsheet,
      value: "10,000+",
      label: "รายงานภาษี & งบการเงิน",
      desc: "ยื่นแบบภาษีถูกต้อง ครบถ้วน ตรงเวลา 100%",
    },
    {
      icon: Award,
      value: "10+ ปี",
      label: "ประสบการณ์ทีมงานมืออาชีพ",
      desc: "ผู้ทำบัญชีและผู้สอบบัญชีรับอนุญาต (CPA/TA)",
    },
    {
      icon: Building2,
      value: "100%",
      label: "ความโปร่งใสและถูกต้อง",
      desc: "พร้อมเป็นเกราะป้องกันปัญหาทางภาษีให้ธุรกิจ",
    },
  ];

  return (
    <section className="relative py-12 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-pst-navy/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center sm:flex-col lg:items-start p-5 rounded-2xl bg-slate-50 dark:bg-pst-navy/70 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-pst-gold hover:shadow-md dark:hover:shadow-gold-sm transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-pst-dark border border-slate-200 dark:border-slate-700 flex items-center justify-center mr-4 sm:mr-0 sm:mb-4 group-hover:scale-110 group-hover:border-amber-400 dark:group-hover:border-pst-gold transition-all shadow-sm">
                  <Icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-pst-gold transition-colors">
                    {item.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
