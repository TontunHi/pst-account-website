import React from "react";
import Link from "next/link";
import {
  FileText,
  Receipt,
  Building,
  FileSpreadsheet,
  Users,
  Lightbulb,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      icon: FileText,
      title: "บริการทำบัญชีรายเดือน",
      subtitle: "Monthly Bookkeeping",
      desc: "บันทึกบัญชีตามมาตรฐานการรายงานทางการเงิน จัดทำสมุดรายวัน บัญชีแยกประเภท และงบทดลองอย่างเป็นระบบ",
      points: ["จัดเก็บเอกสารอย่างถูกต้อง", "รายงานผลประกอบการประจำเดือน", "ตรวจกระทบยอดบัญชีธนาคาร"],
      tag: "บริการยอดนิยม",
    },
    {
      icon: Receipt,
      title: "วางแผนและยื่นภาษีทุกประเภท",
      subtitle: "Tax Filing & Planning",
      desc: "ดูแลแบบภาษีประจำเดือนและประจำปี ยื่นภาษีหัก ณ ที่จ่าย ภาษีมูลค่าเพิ่ม (VAT) และคำนวณภาษีนิติบุคคลครบถ้วน",
      points: ["ยื่นแบบ ภ.ง.ด. 1, 3, 53", "ยื่นแบบ ภ.พ. 30 (VAT)", "ยื่นแบบ ภ.ง.ด. 50, 51 กลางปี/สิ้นปี"],
      tag: "ตรงเวลา 100%",
    },
    {
      icon: Building,
      title: "จดทะเบียนบริษัท & นิติบุคคล",
      subtitle: "Company Registration",
      desc: "เริ่มต้นธุรกิจง่ายๆ ให้เราดูแลการจดจัดตั้งบริษัท ห้างหุ้นส่วน เปลี่ยนแปลงกรรมการ ที่ตั้ง หรือวัตถุประสงค์",
      points: ["เริ่มต้นเพียง 500 บาท", "จองชื่อและเตรียมเอกสารครบ", "ดำเนินการรวดเร็ว ถูกต้องตาม DBD"],
      tag: "เริ่มต้น 500.-",
    },
    {
      icon: FileSpreadsheet,
      title: "ปิดงบการเงิน & ตรวจสอบบัญชี",
      subtitle: "Annual Financial Statement",
      desc: "จัดทำงบการเงินประจำปีและประสานงานผู้สอบบัญชีรับอนุญาต (CPA) ตรวจสอบและยื่นงบส่ง DBD / สรรพากร",
      points: ["งบแสดงฐานะการเงินและงบกำไรขาดทุน", "ตรวจสอบบัญชีตามมาตรฐาน", "ยื่นระบบ e-Filing ครบวงจร"],
      tag: "CPA Certified",
    },
    {
      icon: Users,
      title: "บริหารเงินเดือน & ประกันสังคม",
      subtitle: "Payroll & Social Security",
      desc: "คำนวณเงินเดือน ค่าล่วงเวลา จัดทำสลิปเงินเดือน (Pay Slip) ยื่นเงินสมทบประกันสังคมและกองทุนเงินทดแทน",
      points: ["ออกสลิปเงินเดือนพนักงาน", "ยื่นแบบ สปส. 1-10 รายเดือน", "ลดภาระงานบุคคล (HR/Admin)"],
      tag: "แม่นยำ ปลอดภัย",
    },
    {
      icon: Lightbulb,
      title: "ที่ปรึกษาธุรกิจ & วางแผนภาษี",
      subtitle: "Business Consulting",
      desc: "ให้คำปรึกษาโครงสร้างธุรกิจ วิเคราะห์จุดคุ้มทุน วางแผนการเงิน และใช้สิทธิลดหย่อนภาษีอย่างถูกกฎหมายสูงสุด",
      points: ["วิเคราะห์ตัวเลขทางการเงิน", "วางแผนภาษีก่อนปิดงบ", "คุยภาษาง่าย พร้อมเป็นคู่คิดธุรกิจ"],
      tag: "ปรึกษาฟรีเบื้องต้น",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-200">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            บริการบัญชีและภาษี <br />
            <span className="text-gold-gradient">ครบวงจรสำหรับธุรกิจคุณ</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            ดูแลตั้งแต่เริ่มจัดตั้งบริษัท วางระบบบัญชี ยื่นภาษีรายเดือน ปิดงบประจำปี
            จนถึงการเป็นที่ปรึกษาเพื่อการเติบโตอย่างมั่นคง
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-7 flex flex-col justify-between border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 p-2.5 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mb-3">
                    {service.subtitle}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100 mb-6">
                    {service.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                      >
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href="#estimator"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>ประเมินราคาสำหรับบริการนี้</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-amber-50/80 border-2 border-amber-300 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              ยังไม่แน่ใจว่าธุรกิจของคุณต้องใช้บริการแพ็กเกจไหน?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              ปรึกษาทีมงานผู้เชี่ยวชาญของ PST Account ได้ฟรี ไม่มีค่าใช้จ่ายเบื้องต้น
            </p>
          </div>
          <Link
            href="#estimator"
            className="shrink-0 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gold-gradient hover:opacity-95 transition-all shadow-md"
          >
            ประเมินค่าบริการทันที
          </Link>
        </div>
      </div>
    </section>
  );
}
