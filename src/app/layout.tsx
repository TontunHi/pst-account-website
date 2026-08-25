import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pstaccount.com"),
  title: "PST Account | เป็นมากกว่านักบัญชี เราเป็นที่ปรึกษา และผู้ช่วยธุรกิจของคุณ",
  description: "รับทำบัญชี วางแผนภาษี จดทะเบียนบริษัท และปิดงบการเงินครบวงจร ราคาเริ่มต้นเพียง 500 บาท/เดือน ให้คำปรึกษาดูแลใกล้ชิดโดยทีมงานมืออาชีพ",
  keywords: [
    "รับทำบัญชี",
    "สำนักงานบัญชี",
    "PST Account",
    "ยื่นภาษี",
    "จดทะเบียนบริษัท",
    "ปิดงบการเงิน",
    "ที่ปรึกษาภาษี",
    "ทำบัญชี SME",
    "ประเมินค่าทำบัญชี",
  ],
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    title: "PST Account | เป็นมากกว่านักบัญชี เราเป็นที่ปรึกษา และผู้ช่วยธุรกิจของคุณ",
    description: "รับทำบัญชีและภาษีครบวงจร ถูกต้อง โปร่งใส ราคาเริ่มต้น 500 บาท/เดือน",
    images: [{ url: "/logo.webp" }],
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning className={`${prompt.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-pst-dark dark:text-slate-100 antialiased selection:bg-amber-400/30 selection:text-slate-950">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
