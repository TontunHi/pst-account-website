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

    // 1. Anti-Spam: Honeypot Check
    if (data.company_fax || data.companyFax || data.website_url) {
      console.warn("⚠️ [SPAM BOT DETECTED & BLOCKED BY HONEYPOT]");
      return NextResponse.json({ success: true, message: "OK" });
    }

    // 2. Validation
    if (!data.contactName?.trim() || !data.contactPhone?.trim()) {
      return NextResponse.json(
        { success: false, message: "กรุณากรอกชื่อและเบอร์โทรศัพท์สำหรับติดต่อกลับ" },
        { status: 400 }
      );
    }

    // 3. Format & Map data to Thai human-readable text
    const businessTypeTH = BUSINESS_TYPE_LABELS[data.businessType] || data.businessType || "-";
    const volumeTH = VOLUME_LABELS[data.transactionVolume] || data.transactionVolume || "-";
    const vatTH = VAT_LABELS[data.vatStatus] || data.vatStatus || "-";
    const employeeTH = EMPLOYEE_LABELS[data.employeeCount] || data.employeeCount || "-";
    
    const servicesList = Array.isArray(data.services)
      ? data.services.map((s: string) => SERVICE_LABELS[s] || s)
      : [];

    const leadPayload = {
      contactName: data.contactName.trim(),
      contactPhone: data.contactPhone.trim(),
      contactLineOrEmail: data.contactLineOrEmail?.trim() || "-",
      companyName: data.companyName?.trim() || "-",
      businessType: businessTypeTH,
      transactionVolume: volumeTH,
      vatStatus: vatTH,
      employeeCount: employeeTH,
      services: servicesList.join(", "),
      estimatedMin: data.estimatedMin || 500,
      estimatedMax: data.estimatedMax || 1500,
      notes: data.notes?.trim() || "-",
      submittedAt: data.submittedAt || new Date().toISOString(),
    };

    console.log("=== [NEW LEAD RECEIVED - PST ACCOUNT] ===");
    console.log("Customer:", leadPayload.contactName, "| Tel:", leadPayload.contactPhone);
    console.log("Business:", leadPayload.businessType, "| VAT:", leadPayload.vatStatus);
    console.log("Services:", leadPayload.services);
    console.log("Estimate:", `${leadPayload.estimatedMin} - ${leadPayload.estimatedMax} THB/เดือน`);

    // 4. Forward to Google Sheets Webhook if configured
    const googleSheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (googleSheetsWebhook) {
      try {
        const gsResponse = await fetch(googleSheetsWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload),
        });

        if (gsResponse.ok) {
          console.log("✅ Successfully recorded to Google Sheets!");
        } else {
          console.error("❌ Google Sheets Webhook returned status:", gsResponse.status);
        }
      } catch (webhookError) {
        console.error("❌ Failed to forward lead to Google Sheets:", webhookError);
      }
    }

    // 5. Forward to LINE Notify if configured
    const lineNotifyToken = process.env.LINE_NOTIFY_TOKEN;
    if (lineNotifyToken) {
      try {
        const lineMessage = `\n🔔 มี Lead ใหม่จาก PST Account Website!\n` +
          `👤 ผู้ติดต่อ: ${leadPayload.contactName}\n` +
          `📞 เบอร์โทร: ${leadPayload.contactPhone}\n` +
          `💬 LINE/Email: ${leadPayload.contactLineOrEmail}\n` +
          `🏢 ธุรกิจ: ${leadPayload.companyName} (${leadPayload.businessType})\n` +
          `📄 รายการ/เดือน: ${leadPayload.transactionVolume}\n` +
          `📊 สถานะ VAT: ${leadPayload.vatStatus}\n` +
          `👥 พนักงาน: ${leadPayload.employeeCount}\n` +
          `🛠️ บริการ: ${leadPayload.services}\n` +
          `💰 ราคาประเมิน: ${leadPayload.estimatedMin.toLocaleString()} - ${leadPayload.estimatedMax.toLocaleString()} บาท/เดือน\n` +
          `📝 เพิ่มเติม: ${leadPayload.notes}`;

        await fetch("https://notify-api.line.me/api/notify", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${lineNotifyToken}`,
          },
          body: new URLSearchParams({ message: lineMessage }),
        });
        console.log("✅ LINE Notify message sent successfully!");
      } catch (lineErr) {
        console.error("❌ Failed to send LINE Notify:", lineErr);
      }
    }

    // 6. Forward to Custom Webhook (Discord / Slack / CRM) if configured
    const customWebhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (customWebhookUrl) {
      try {
        await fetch(customWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `📢 **New PST Account Lead**: ${leadPayload.contactName} (${leadPayload.contactPhone})`,
            lead: leadPayload,
          }),
        });
      } catch (whErr) {
        console.error("❌ Failed to forward to custom webhook:", whErr);
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
      { success: false, message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง" },
      { status: 500 }
    );
  }
}
