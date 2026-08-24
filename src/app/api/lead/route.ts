import { NextResponse } from "next/server";

const BUSINESS_TYPE_LABELS: Record<string, string> = {
  service: "ธุรกิจบริการ (Service)",
  trading: "ธุรกิจซื้อมา-ขายไป (Trading)",
  ecommerce: "ธุรกิจออนไลน์ (E-Commerce)",
  others: "ธุรกิจผลิต / อื่น ๆ (Others)",
};

const VOLUME_LABELS: Record<string, string> = {
  under_50: "น้อยกว่า 50 รายการ/เดือน",
  "50_100": "50 - 100 รายการ/เดือน",
  "100_300": "100 - 300 รายการ/เดือน",
  "300_plus": "มากกว่า 300 รายการ/เดือน",
};

const VAT_LABELS: Record<string, string> = {
  no_vat: "ยังไม่จด VAT",
  has_vat: "จดทะเบียน VAT 7% แล้ว",
};

const EMPLOYEE_LABELS: Record<string, string> = {
  none: "ไม่มีพนักงาน",
  "1_5": "1 - 5 คน",
  "6_20": "6 - 20 คน",
  "20_plus": "มากกว่า 20 คน",
};

const SERVICE_LABELS: Record<string, string> = {
  accounting: "ทำบัญชีรายเดือน",
  tax: "ยื่นภาษีประจำเดือน",
  vat: "ดูแล VAT (ภ.พ.30)",
  payroll: "Payroll & ประกันสังคม",
  audit: "ปิดงบ & ตรวจสอบบัญชี",
  company_reg: "จดทะเบียนบริษัท",
  tax_planning: "วางแผนภาษี",
};

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Anti-Spam: Honeypot Check (If bot filled this hidden field, discard immediately)
    if (data.companyFax || data.website_url) {
      console.warn("⚠️ [SPAM BOT DETECTED & BLOCKED BY HONEYPOT]");
      return NextResponse.json({ success: true, message: "OK" });
    }

    // 2. Format & Map data to Thai human-readable text
    const businessTypeTH = BUSINESS_TYPE_LABELS[data.businessType] || data.businessType || "-";
    const volumeTH = VOLUME_LABELS[data.transactionVolume] || data.transactionVolume || "-";
    const vatTH = VAT_LABELS[data.vatStatus] || data.vatStatus || "-";
    const employeeTH = EMPLOYEE_LABELS[data.employeeCount] || data.employeeCount || "-";
    
    const servicesList = Array.isArray(data.services)
      ? data.services.map((s: string) => SERVICE_LABELS[s] || s)
      : [];

    const payloadToGoogleSheets = {
      contactName: data.contactName,
      contactPhone: data.contactPhone,
      contactLineOrEmail: data.contactLineOrEmail || "-",
      companyName: data.companyName || "-",
      businessType: businessTypeTH,
      transactionVolume: volumeTH,
      vatStatus: vatTH,
      employeeCount: employeeTH,
      services: servicesList,
      estimatedMin: data.estimatedMin,
      estimatedMax: data.estimatedMax,
      notes: data.notes || "-",
      submittedAt: data.submittedAt || new Date().toISOString(),
    };

    console.log("=== [NEW LEAD RECEIVED - PST ACCOUNT] ===");
    console.log("Customer:", payloadToGoogleSheets.contactName, "| Tel:", payloadToGoogleSheets.contactPhone);
    console.log("Business:", payloadToGoogleSheets.businessType, "| VAT:", payloadToGoogleSheets.vatStatus);
    console.log("Estimate:", `${payloadToGoogleSheets.estimatedMin} - ${payloadToGoogleSheets.estimatedMax} THB`);

    // 3. Forward to Google Sheets Webhook if URL is configured
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const gsResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payloadToGoogleSheets),
        });

        if (gsResponse.ok) {
          console.log("✅ Successfully recorded to Google Sheets!");
        } else {
          console.error("❌ Google Sheets Webhook returned error status:", gsResponse.status);
        }
      } catch (webhookError) {
        console.error("❌ Failed to forward lead to Google Sheets:", webhookError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "ได้รับข้อมูลและบันทึกลงระบบเรียบร้อยแล้ว",
      leadId: `PST-${Date.now()}`,
    });
  } catch (error) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" },
      { status: 500 }
    );
  }
}
