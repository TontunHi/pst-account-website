"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  const reviews = TESTIMONIALS;

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative bg-slate-50 dark:bg-pst-dark transition-colors duration-300">
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
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            เสียงตอบรับและความไว้วางใจ <br />
            <span className="text-gold-gradient">จากผู้ประกอบการตัวจริง</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            เรามุ่งมั่นให้บริการด้วยความซื่อสัตย์ ถูกต้อง โปร่งใส และเคียงข้างทุกก้าวของธุรกิจ
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-7 sm:p-8 rounded-3xl bg-white dark:bg-pst-navy/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-gold-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, rIdx) => (
                      <Star
                        key={rIdx}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    {rev.tag}
                  </span>
                </div>

                {/* Comment */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-slate-200 dark:text-slate-700/60 absolute -top-3 -left-1 -z-10" />
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    "{rev.comment}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    {rev.name}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {rev.role} • {rev.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
