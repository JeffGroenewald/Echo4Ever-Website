---
title: "Is My Data Safe? Echo4Ever's Security and Business Continuity Promise"
description: "How Echo4Ever protects your memories from hackers, data breaches, and business disruption — and what happens to your files if we ever stop operating."
publishDate: 2026-07-13
author: "Echo4Ever Team"
tags: ["security", "privacy", "business continuity"]
---

When you trust a platform with your most personal memories — family photographs, legacy messages, voice recordings of people you love — you deserve honest answers about security and longevity.

Two questions come up more than any other:

1. **What protection is in place against hacking?**
2. **What happens to my files if Echo4Ever ever stops operating?**

Here's the full picture.

---

## How Echo4Ever protects against hacking and data breaches

Echo4Ever was designed security-first because the content we hold — memories, photographs, documents, and legacy instructions — is deeply personal and irreplaceable. The platform runs entirely on Cloudflare's enterprise-grade infrastructure, with multiple independent layers of protection.

### Encryption everywhere

- All files in storage are encrypted at rest with AES-256 (via Cloudflare R2 and D1).
- The most sensitive fields — legacy instructions, Heritage Custodian details, post-death messages — receive an additional application-level AES-GCM encryption layer before being written to the database. Even a database-level breach wouldn't expose them in readable form.
- All traffic uses HTTPS only (TLS 1.2 minimum, TLS 1.3 preferred), enforced at the edge with HSTS. Plain HTTP is rejected outright.

### Account and password security

- Passwords are hashed with bcrypt at cost factor 12 — never stored or logged in plaintext. Even Echo4Ever staff cannot read your password.
- Cloudflare Turnstile bot protection blocks automated signup, login, and invite-acceptance attempts.
- Brute-force protection: failed login attempts are rate-limited to 10 per 15 minutes per IP, with temporary lockout beyond that.
- Login sessions use short-lived JWT access tokens (1 hour) plus refresh tokens (30 days). All sessions are revoked instantly on logout or password change.

### Network and edge defences

- Cloudflare WAF with the OWASP Core Rule Set blocks SQL injection, cross-site scripting, and known exploit patterns before they ever reach our servers.
- Automatic DDoS protection across the entire Cloudflare network.
- Strict security headers on every response: Content-Security-Policy (blocks injected scripts), X-Frame-Options: DENY (prevents clickjacking), and X-Content-Type-Options: nosniff.
- CORS is locked to our official domain — no other site can communicate with our API.

### Data access controls

- Your media files live in a private storage bucket with no public URLs — ever. Files are served through time-limited presigned URLs that expire after 15 minutes.
- Every API request is re-authenticated server-side before any data is returned. Every database query uses parameterised statements (preventing SQL injection by design).
- Privacy-by-default: every new memory is private until you explicitly choose to share it. Family members only see what you've marked for them; legacy content is invisible until formally triggered by your Heritage Custodian.
- The admin dashboard is gated by Cloudflare Access (Zero Trust) — only an allowlisted set of email addresses can even reach the login page.

### Auditing and your rights

- A tamper-evident audit log records every sensitive action (logins, uploads, deletes, sharing changes, legacy events) — without storing any of your personal content in the logs.
- You can permanently delete your account and every associated file at any time (GDPR right-to-erasure), and the data is removed from both the database and storage.

**In short:** Echo4Ever combines encryption at rest and in transit, hardened authentication, Cloudflare's enterprise edge security (WAF, DDoS, bot mitigation, Zero Trust admin access), and privacy-by-default content rules — so your memories stay yours.

---

## What happens if something happens to the people behind Echo4Ever?

This is one of the most important questions anyone can ask a preservation platform. A vault that disappears when its founders do isn't a vault at all. Here's how we've made sure that can't happen.

### The platform keeps running — automatically

Our development and infrastructure partner, Cinche + Strike, has full access to every part of Echo4Ever — the application code, databases, file storage, and hosting accounts. If anything were to happen to the founders, Cinche + Strike would take over day-to-day operations and keep the platform running for all users without interruption.

This isn't a theoretical backup plan. The credentials, documentation, and operational capability are already in their hands. Echo4Ever is not dependent on any single person.

### The company continues, not closes

Cinche + Strike would continue to operate Echo4Ever until the business is either sold to a new owner or transferred to existing shareholders. The goal is always continuity of service — not winding down.

This is actually far more than most platforms offer. Large companies like Google, Apple, and Meta don't publish continuity plans at all. When services do shut down (Google+, Vine, Picasa), users typically receive minimal notice and little help. Smaller platforms have been known to lose data outright — Myspace famously lost 12 years of uploaded music during a server migration with no recovery.

Echo4Ever has a named partner, a documented handover plan, and a commitment to keep the lights on.

### Your data is never held hostage

You can request a full export of all your data at any time by contacting contact@echo4ever.com. We provide your photos, videos, documents, and written content in standard, open formats (JPEG, PNG, MP4, PDF, plain text) — not in any proprietary format. There is no lock-in.

### Infrastructure resilience

- Your files are stored on Cloudflare R2 — operated by one of the world's largest and most financially stable infrastructure providers. Your data sits on enterprise infrastructure that isn't going anywhere.
- We don't use proprietary file formats. Your photos are still JPEG. Your videos are still MP4. Your documents are still PDF. There's nothing to "convert" — it's all yours in standard formats.

### Our commitment

The entire purpose of Echo4Ever is multi-generational preservation. Building a platform that could disappear and take your memories with it would betray that mission. Operational continuity — including a named third-party partner ready to take over — is built into how we operate from day one.

---

## Summary

| Concern | How Echo4Ever addresses it |
|---------|---------------------------|
| Hacking / data breach | AES-256 encryption at rest, AES-GCM on sensitive fields, Cloudflare WAF, DDoS protection, Zero Trust admin |
| Password theft | bcrypt hashing, rate limiting, bot protection, short-lived tokens |
| Unauthorised access | Presigned URLs, parameterised queries, privacy-by-default, server-side auth on every request |
| Founder unavailable | Development partner (Cinche + Strike) takes over operations until business is sold or transferred |
| Data portability | Full export at any time in open formats (JPEG, MP4, PDF) — no lock-in |
| Deletion rights | Full GDPR erasure available at any time |

Your memories deserve a platform that's built to last — and built to prove it.

→ [Learn more about Echo4Ever's privacy model](/privacy)
