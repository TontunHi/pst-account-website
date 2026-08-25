# 02: Implement Backend Lead Capture & Multi-Channel Notification API

**What to build:** Route handler `/api/lead` that validates incoming lead payloads, filters out spam bots via honeypot, formats Thai descriptions, and forwards data to Google Sheets, LINE Notify, and custom webhooks.

**Blocked by:** None (can start immediately).

**Status:** closed

- [x] Implement input sanitization and honeypot validation in `src/app/api/lead/route.ts`
- [x] Map form codes to human-readable Thai descriptions
- [x] Forward payload to Google Sheets webhook (`GOOGLE_SHEETS_WEBHOOK_URL`)
- [x] Forward payload to LINE Notify (`LINE_NOTIFY_TOKEN`)
- [x] Forward payload to custom Webhook (`LEAD_WEBHOOK_URL`)
- [x] Update `.env.example` with configuration variables
