# PST Account - Official Website & Lead Generation

> "เป็นมากกว่านักบัญชี เราเป็นที่ปรึกษา และผู้ช่วยธุรกิจของคุณ"

เว็บไซต์ทางการและระบบประเมินราคาพร้อมบันทึก Lead สำหรับ **PST Account** พัฒนาด้วย Next.js 14 (App Router), TypeScript และ Tailwind CSS

---

## จุดเด่นและฟีเจอร์หลัก (Features)

- **Clean & Premium Light Theme:** ออกแบบในโทนสว่าง สะอาดตา หรูหรา น่าเชื่อถือ สีกรมท่า-ทอง (`#D4AF37`) ตาม CI โลโก้ PST
- **Hero & Transparent Pricing:** แสดงแพ็กเกจ Starter 500.-/เดือน, Business 900.-/เดือน, Custom Enterprise และบริการรายครั้ง (จดบริษัท, คัดเอกสาร DBD, ปิดงบ)
- **Interactive 5-Question Quotation:** แบบฟอร์ม 5 ขั้นตอนคำนวณราคาประเมินเบื้องต้นแบบ Real-time พร้อมรับข้อมูลติดต่อกลับ
- **Anti-Spam & Honeypot Shield:** ป้องกัน Bot และ Spam POST แบบซ่อนรูป ปลอดภัย 100%
- **Google Sheets Integration:** ส่งข้อมูลลูกค้าที่กรอกฟอร์มเข้า Google Sheets อัตโนมัติทันที
- **Responsive Design:** ใช้งานได้ลื่นไหลทุกอุปกรณ์ (Mobile, Tablet, Desktop)

---

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Integration:** Google Apps Script Webhook (Google Sheets)

---

## การติดตั้งและใช้งาน (Getting Started)

### 1. ติดตั้ง Dependencies

```bash
npm install
```

### 2. ตั้งค่า Environment Variables

คัดลอกไฟล์ `.env.example` เป็น `.env.local` และใส่ Google Sheets Webhook URL:

```env
GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```

### 3. รัน Development Server

```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

### 4. Build สำหรับ Production

```bash
npm run build
npm run start
```
