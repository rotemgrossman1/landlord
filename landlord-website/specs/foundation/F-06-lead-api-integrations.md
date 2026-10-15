---
id: F-06
title: Lead API and integrations
type: feature
status: draft
depends_on: [F-01, F-03]
open_questions: [Q17, Q19]
flags: []
last_updated: 2026-10-15
---

# F-06 Lead API and integrations

## 1. Purpose

Every lead reaches the company reliably and immediately, whatever channel they choose to use later (email now, CRM later).

## 4. Structure

- Route handler `POST /api/lead` (Node runtime).
- Request body (validated with `zod`, shared schema with C-14):
  `name` (required), `phone` (required, Israeli or international format), `email` (optional), `city` (optional), `apartments` (optional number/range), `ownerLocation` (`israel` | `abroad`), `message` (optional, ≤1000 chars), `consent` (required true), `source` (page path), `utm_*` (from URL), `locale`, `hp` (honeypot, must be empty).
- Processing:
  1. Validate; reject honeypot or too-fast submits (< 3s since render, timestamp field).
  2. Rate limit per IP (e.g. 5 / 10 min) — Vercel KV / Upstash or in-memory fallback in dev.
  3. Deliver through **adapters**, enabled by env vars, so the destination can change without touching the form:
     - `EmailAdapter` (e.g. Resend) → `LEAD_EMAIL_TO`
     - `WebhookAdapter` → `LEAD_WEBHOOK_URL` (CRM, Zapier/Make, Monday, etc.)
     - (later) `WhatsAppAdapter` via WhatsApp Business API if Q17 asks for it
  4. If all adapters fail → 502 and log; the form shows a fallback ("call us at {{contact.phoneMain}}").
  5. Respond `{ ok: true, id }`.
- Confirmation email to the lead: off until owners approve the text.

## 7. Technical notes

- No database in v1; adapters are the store. Log lead ID + status (no personal data in logs).
- Env vars documented in `.env.example`: `LEAD_EMAIL_TO`, `LEAD_EMAIL_FROM`, `RESEND_API_KEY`, `LEAD_WEBHOOK_URL`, `LEAD_WEBHOOK_SECRET`, `RATE_LIMIT_*`.
- Webhook payload signed with HMAC (`LEAD_WEBHOOK_SECRET`).
- Personal data: only what the form needs; covered by the privacy policy (P-15).

## 8. Acceptance criteria

- [ ] Valid submit delivers to every enabled adapter and returns 200.
- [ ] Invalid fields return 400 with field errors the form can show in Hebrew.
- [ ] Honeypot, too-fast and rate-limited requests are rejected without delivering.
- [ ] All adapters failing returns 502 and the UI shows the phone fallback.
- [ ] Tests cover each branch with mocked adapters.

## 9. Open questions

Q17 lead destination, Q19 response time promise.

## 10. Change log

- 2026-10-15 — created (draft)
