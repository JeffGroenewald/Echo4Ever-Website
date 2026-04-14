# Echo4Ever — Chatbot Knowledge Base

> **Purpose:** This document is the single source of truth for the Echo4Ever website chatbot. It covers every feature, benefit, subscription plan, security detail, and frequently asked question. The chatbot should use this document to answer customer queries accurately and consistently.

---

## 1. WHAT IS ECHO4EVER?

Echo4Ever is a private digital memory vault platform. It gives people a secure, permanent place to preserve their life stories — photographs, videos, audio recordings, documents, and written memories — and control exactly who can access them, including time-locked content and post-death legacy transfers.

**Tagline:** "A digital home for human stories — where memories live safely and families stay connected for generations."

**Website:** echo4ever.com
**App:** app.echo4ever.com
**Support email:** contact@echo4ever.com

---

## 2. WHO IS ECHO4EVER FOR?

- Anyone who wants to preserve personal and family memories in a secure, private vault
- Parents and grandparents who want to pass down stories, photos, and wisdom to future generations
- Families who want to share memories safely with trusted relatives — without social media
- People who want to plan their digital legacy and ensure their archive is looked after when they're no longer here
- Anyone who values privacy — Echo4Ever has no public profiles, no social feeds, and no algorithms

---

## 3. CORE FEATURES

### 3.1 Life Story

Write the story of your life in your own words. Each section is like a chapter — childhood memories, lessons learned, people who shaped you, traditions worth keeping.

**Key details:**
- Create unlimited written sections with titles and narration
- Guided prompts to help you get started (e.g. "What's your earliest childhood memory?", "What tradition do you want your family to carry on?", "What's the best advice you were ever given?")
- Attach photos to any section
- Reorder sections by drag-and-drop
- Set privacy on each section individually (Private, Family, or Legacy)
- Bulk select and manage multiple sections at once

### 3.2 Family Tree

Build an interactive, visual family tree that maps out relationships across generations.

**Key details:**
- Add family members with name, relationship, date of birth, date departed, email, and notes
- "Previously Known As" (AKA) field for maiden names, nicknames, and former names
- Colour-coded member cards — 9 presets: Default, Grandparents, Parents, Siblings, Children, Aunts & Uncles, Cousins, In-Laws, Other
- Draw connections between members to show relationships
- Pan and zoom the canvas (mouse wheel, pinch-to-zoom on mobile)
- Drag members to arrange the layout
- Auto fit-to-screen on load
- Set tree visibility: Private, Family, or Legacy
- Link tree members to Echo4Ever accounts if they also have one

### 3.3 Photographs

Upload and organise your most important photos — family portraits, holiday snaps, school photos, wedding albums, and more.

**Key details:**
- Upload photos up to 500 MB per file
- Organise into folders (e.g. by decade, event, or person)
- Add titles and captions to every photo
- Set privacy per photo or per folder (Private, Family, or Legacy)
- Bulk select photos for batch privacy changes or deletion
- Move photos between folders
- Add photos to your Timeline with a date and caption
- Lightbox view for full-size viewing

### 3.4 Videos & Audio

Upload videos and audio recordings — first steps, family songs, voice messages, spoken stories.

**Key details:**
- Upload video and audio files up to 500 MB per file
- In-browser playback (video player and custom audio player with waveform visualisation)
- Organise into folders
- Add titles and narration
- Set privacy per item (Private, Family, or Legacy)
- Add to your Timeline

### 3.5 Documents

Upload and store important documents — birth certificates, handwritten letters, recipes, military records, newspaper clippings, legal paperwork.

**Key details:**
- Upload documents up to 500 MB per file
- Add titles and descriptions
- Organise into folders
- Set privacy per document (Private, Family, or Legacy)
- Add to your Timeline

### 3.6 Time Capsules

Seal a memory, set a date, and let Echo4Ever keep it safe until the right moment arrives.

**Key details:**
- Three unlock types:
  - **On a specific date** — the capsule unlocks automatically when that day arrives (e.g. your son's 18th birthday)
  - **At a personal milestone** — describe the event and unlock it yourself when the moment comes
  - **After memorial activation** — stays sealed until your Heritage Custodian activates memorial mode
- Sealed capsules cannot be viewed by anyone — not even you — until they unlock
- Optional unlock message shown when the capsule opens
- Email notification sent to recipients when a capsule unlocks
- Assign a specific family member as the recipient, or share with all family

### 3.7 Timeline

View all your media — photos, videos, audio, and documents — organised chronologically by decade and year.

**Key details:**
- Assign a year (and optional month, day, and caption) to any uploaded media item
- Bulk assign dates to multiple items at once
- Media grouped automatically by decade headers (e.g. 1960s, 1970s)
- Click any item to view full-size in the lightbox
- Edit dates and captions inline from both the Timeline page and media pages
- "Add to Timeline" option available directly during upload
- Timeline badges appear on media cards showing the assigned date

### 3.8 Family Sharing

Share specific memories with the family members you choose — and only them.

**Key details:**
- Invite family members by email
- Invited members create their own Echo4Ever account (or link an existing one)
- Family members can only see memories you've marked with "Family" or "Legacy" visibility — never your Private content
- Revoke access at any time
- You are always in control of what is shared

### 3.9 Heritage Custodian & Digital Legacy

Plan what happens to your archive after you're no longer here. Appoint someone you trust to look after it.

**Key details:**
- **Heritage Custodian (HC):** A trusted person you nominate to manage your archive when the time comes
- You nominate your HC after signup — a dedicated page explains the role, what they can and cannot do, and who to choose
- HC receives a personalised email invitation explaining their role
- **Heritage Custodial Mode (memorial mode):**
  - When the time comes, the HC submits a memorial mode request
  - An Echo4Ever administrator reviews and approves the request
  - Once approved:
    - The account transitions to memorial mode (irreversible)
    - All "Legacy" memories and time capsules become visible to family
    - The HC is granted a "Curator" role — they can add new memories (tributes) but cannot edit or delete existing ones
    - The subscription is automatically cancelled — the archive is preserved at no cost to the family
    - All family members are notified by email
    - The original account owner can no longer log in
- Family members retain read access to the memorial archive indefinitely
- The archive cannot be deleted

### 3.10 Curator Role

When Heritage Custodial Mode is activated, the Heritage Custodian becomes a Curator.

**What a Curator can do:**
- View all Family and Legacy memories in the archive
- Add new memories (tributes) on behalf of the person
- Invite additional family members to view the archive

**What a Curator cannot do:**
- Edit or delete existing memories
- Change privacy settings on existing content
- Create or modify time capsules
- Create or delete folders
- Modify family tree settings

---

## 4. PRIVACY & SECURITY

### 4.1 Privacy Model

Every memory you create is **private by default**. Sharing is always a conscious choice — never an accident.

Three visibility levels:
- **Private (🔒)** — Only you can see it. No one else. Ever.
- **Family (👨‍👩‍👧)** — Shared with the family members you've invited.
- **Legacy (🕊️)** — Kept safe until Heritage Custodial Mode is activated by your Heritage Custodian. Only visible to family after that point.

There are no public profiles. No social feeds. No algorithms deciding who sees your life. Your archive is yours — and it stays that way.

### 4.2 Account Security

- Passwords hashed with bcrypt (industry-standard one-way encryption)
- JWT access tokens expire after 1 hour; refresh tokens last 30 days
- All sessions can be invalidated at any time (changing your password invalidates all active sessions)
- Cloudflare Turnstile bot protection on signup and login forms (prevents automated attacks)
- Rate limiting on all API endpoints
- Password reset via secure time-limited email link (expires after 1 hour)
- Show/hide password toggle on all password fields

### 4.3 Data Storage & Infrastructure

- All files stored on **Cloudflare R2** (enterprise-grade object storage)
- Database on **Cloudflare D1** (distributed SQLite)
- Application runs on **Cloudflare Workers** (edge computing — fast worldwide)
- Frontend served via **Cloudflare Pages** (global CDN)
- Media files served via pre-signed URLs — never exposed directly
- All data encrypted in transit (HTTPS everywhere)
- Admin dashboard protected by **Cloudflare Access (Zero Trust)**

### 4.4 What We Don't Do

- We cannot see your memories
- We don't sell your data
- We don't share your data with third parties (other than Cloudflare for hosting and Stripe for payments)
- We don't track you with advertising cookies
- We don't have public profiles or social features

---

## 5. SUBSCRIPTION PLANS

All plans include every feature. The only difference is storage space.

### 5.1 What Every Plan Includes

- Photo, video & audio uploads (up to 500 MB per file)
- Document storage
- Life Story writing with guided prompts
- Family sharing & invitations
- Time capsules (all three unlock types)
- Digital legacy planning & Heritage Custodian
- Family tree builder
- Timeline view
- In-app help system
- Dark mode

### 5.2 Plan Tiers & Pricing

Pricing depends on your country (detected at signup):
- **New Zealand → NZD**
- **Australia → AUD**
- **All other countries → USD**

#### Monthly Billing

| Plan | Storage | NZD | USD | AUD |
|---|---|---|---|---|
| **Foundation** | 25 GB | $28.99/mo | $16.99/mo | $23.99/mo |
| **Legacy** | 100 GB | $32.99/mo | $17.99/mo | $26.99/mo |
| **Generations** | 250 GB | $35.99/mo | $23.99/mo | $31.99/mo |

#### Yearly Billing (Save 20%)

| Plan | Storage | NZD/yr | USD/yr | AUD/yr |
|---|---|---|---|---|
| **Foundation** | 25 GB | $347.66 | $203.66 | $287.66 |
| **Legacy** | 100 GB | $395.66 | $215.66 | $323.66 |
| **Generations** | 250 GB | $431.66 | $287.66 | $383.66 |

### 5.3 Plan Changes

- Upgrade or downgrade at any time from the Upgrade page
- Changes are prorated — you only pay the difference
- Manage billing, invoices, and payment methods through the Stripe Customer Portal (accessible from Settings)

### 5.4 Failed Payments

- If a payment fails, your account enters a "past due" state
- You can still view all your existing content (read-only)
- Uploads, new memories, and other write actions are temporarily blocked
- A prominent banner appears on every page with a direct link to update your payment method
- Once payment succeeds, full access is restored automatically

### 5.5 Cancellation & Data Retention

- If you cancel your subscription, your content is **safely archived** — it is never automatically deleted
- The purpose of Echo4Ever is to preserve your legacy for future generations, and we honour that intent by keeping your content safe even after your account is no longer active
- After 6 months of continuous non-payment, your account may be terminated, but your content remains safely archived
- You can request a return of your data at any time by contacting contact@echo4ever.com
- Your content is only deleted if you explicitly request deletion
- If you request permanent deletion, all content is removed from active systems and erased from backups within 30 days

### 5.6 Memorial Archives

When Heritage Custodial Mode is activated, the subscription is automatically cancelled. The memorial archive is preserved permanently at no cost to the family.

---

## 6. GETTING STARTED

### 6.1 Create Your Account

1. Go to app.echo4ever.com and click "Create Account"
2. Enter your full name, email address, date of birth, country, and choose a password
3. Check your email for a verification link and click it to verify your account
4. You're in — you'll be prompted to nominate your Heritage Custodian

### 6.2 Nominate Your Heritage Custodian

After verifying your email, you'll be guided to nominate a Heritage Custodian. This is the person who will look after your archive if you're no longer able to. You can:
- Enter their name and email address
- Write an optional personal note that will be included in their invitation email
- Skip this step and do it later from the Family Sharing page

### 6.3 Choose Your Plan

Before you can start uploading content, you'll need to choose a subscription plan:
- View all three plans side by side on the Upgrade page
- Switch between monthly and yearly billing (save 20% with yearly)
- Complete payment securely through Stripe

### 6.4 Start Adding Memories

Once subscribed, you have full access to all features:
- Upload photos, videos, audio, and documents
- Write your Life Story
- Build your Family Tree
- Create Time Capsules
- Invite family members to view shared content
- Organise everything into folders

---

## 7. FAMILY MEMBER EXPERIENCE

### 7.1 Accepting an Invitation

When someone invites you to view their archive:
1. You receive an email invitation with a personal link
2. Click the link to create your own Echo4Ever account (or link your existing one)
3. Once accepted, you can view the memories they've chosen to share with you

### 7.2 What Family Members Can See

- Only memories marked as "Family" visibility
- "Legacy" memories become visible only after Heritage Custodial Mode is activated
- "Private" memories are never visible to family members

### 7.3 What Family Members Cannot Do

- Upload, edit, or delete content in someone else's archive
- Change privacy settings
- Invite other family members (only the archive owner can invite)
- Access Private memories

### 7.4 Creating Your Own Archive

Family members who want their own archive can create one. They'll need to choose a subscription plan to start uploading their own content.

### 7.5 Vault Switching

If you have your own archive and are also a family member on someone else's, you can switch between vaults using the vault switcher in the navigation bar. A banner shows whose archive you're currently viewing, with a one-click "Return to My Archive" button.

---

## 8. IN-APP HELP

Every feature page has a "How does this page work?" link below the navigation bar. Clicking it opens a slide-out panel with detailed, step-by-step instructions for the current page. No extra cost, no external links — help is always one click away.

Help is available on: Photographs, Videos & Audio, Documents, Life Story, Family Tree, Time Capsules, Family Sharing & Digital Legacy, Timeline, and Settings.

---

## 9. DESIGN & EXPERIENCE

- Clean, warm aesthetic with an ivory/cream colour palette and teal accents
- Custom display font (Ogg) for page titles
- Dark mode toggle available on every page
- Fully responsive — works on desktop, tablet, and mobile
- Hamburger navigation menu on mobile devices
- Nautilus shell watermark as a subtle background motif
- Empty state watermarks on Family Tree and Timeline to show what the page will look like
- Branded HTML email templates for all notifications

---

## 10. SUPPORTED FILE TYPES

- **Photos:** JPEG, PNG, GIF, WebP, and other common image formats
- **Videos:** MP4, MOV, WebM, and other common video formats
- **Audio:** MP3, WAV, M4A, OGG, and other common audio formats
- **Documents:** PDF, Word documents, text files, spreadsheets, and other common document formats
- **Maximum file size:** 500 MB per file

---

## 11. LEGAL

- **Privacy Policy:** Available at app.echo4ever.com/legal/privacy-policy.pdf
- **Terms of Service:** Available at app.echo4ever.com/legal/terms-of-service.pdf
- **Company:** Echo4Ever Limited
- All data processed in accordance with applicable privacy laws
- Third-party service providers: Cloudflare (hosting, storage, CDN), Stripe (payment processing), Resend (transactional email)

---

## 12. FREQUENTLY ASKED QUESTIONS

### General

**Q: What is Echo4Ever?**
A: Echo4Ever is a private digital memory vault where you can preserve photos, videos, audio, documents, and written stories — and control exactly who can see them, including time-locked content and arrangements for after you're no longer here.

**Q: Is Echo4Ever a social media platform?**
A: No. There are no public profiles, no social feeds, and no algorithms. Your archive is completely private. You choose exactly who sees what — and when.

**Q: Can I try Echo4Ever before paying?**
A: You can create an account and explore the app for free, but you'll need to choose a subscription plan before uploading content.

**Q: What devices does Echo4Ever work on?**
A: Echo4Ever works on any modern web browser — desktop, tablet, or mobile. There's no app to download; everything runs in your browser.

### Privacy & Security

**Q: Can Echo4Ever staff see my memories?**
A: No. Your files are stored securely on Cloudflare R2, and we do not access your content. Your memories are yours alone.

**Q: What happens if I forget my password?**
A: Click "Forgot password?" on the login page. You'll receive an email with a secure reset link that expires after one hour.

**Q: Is my data encrypted?**
A: All data is encrypted in transit using HTTPS. Files are stored on Cloudflare's enterprise-grade infrastructure.

**Q: What information does Echo4Ever collect?**
A: Your name, email, date of birth, country, and the content you upload. We use Stripe for payments (we don't store your card details). We don't use advertising cookies or track you across the web.

### Sharing & Family

**Q: How do I share memories with my family?**
A: Go to the Family Sharing page and invite family members by email. Once they accept and create their account, they'll be able to see any memories you've set to "Family" visibility.

**Q: Can my family members edit my memories?**
A: No. Family members have view-only access. Only you can upload, edit, or delete content in your archive.

**Q: Can I revoke someone's access?**
A: Yes. You can remove a family member's access at any time from the Family Sharing page.

**Q: What is a Heritage Custodian?**
A: Your Heritage Custodian is the person you trust to look after your archive when you're no longer able to. They can request the activation of Heritage Custodial Mode, which makes your Legacy memories visible to your family and grants them a Curator role to add tributes to your archive.

**Q: Can a Heritage Custodian delete my content?**
A: No. A Heritage Custodian (as Curator) can add new content but cannot edit, delete, or change the privacy settings on any of your existing memories.

### Time Capsules

**Q: Can I open a time capsule early?**
A: No. Date-based capsules unlock automatically when the date arrives. Milestone capsules can only be unlocked by the owner when they choose. Legacy capsules unlock when Heritage Custodial Mode is activated. Once sealed, a capsule's contents cannot be viewed until the unlock conditions are met.

**Q: Who receives my time capsule?**
A: You can assign a specific family member as the recipient, or have it shared with all your family members on unlock.

### Billing & Plans

**Q: What's the difference between the plans?**
A: All three plans include every feature. The only difference is storage space: Foundation (25 GB), Legacy (100 GB), Generations (250 GB).

**Q: Can I change my plan?**
A: Yes. You can upgrade or downgrade at any time from the Upgrade page. Changes are prorated.

**Q: What happens if my payment fails?**
A: Your account enters a "past due" state. You can still view all existing content, but uploads and new content are temporarily blocked. A banner on every page links you to update your payment method. Once payment succeeds, full access is restored automatically.

**Q: Can I cancel my subscription?**
A: Yes. You can manage your subscription, including cancellation, through the Stripe Customer Portal accessible from your Settings page.

**Q: What happens to my content if I cancel?**
A: Your content is safely archived — it is never automatically deleted. The purpose of Echo4Ever is to preserve your legacy for future generations, and we honour that intent by keeping your content safe even after your account is no longer active. You can request a return of your data at any time by contacting contact@echo4ever.com. Deletion only happens if you explicitly request it.

**Q: What happens to my archive if a memorial is activated?**
A: The subscription is automatically cancelled, and the archive is preserved permanently at no cost to the family. Family members retain access indefinitely.

**Q: Do you offer a free plan?**
A: There is no free tier for uploading content. You need an active subscription to use the vault features. However, family members who have been invited to view someone else's archive do not need their own paid subscription to access shared content.

**Q: Can I get my data back after I cancel?**
A: Yes. Your content is safely archived even after cancellation. You can request a return of your data at any time by contacting contact@echo4ever.com.

**Q: Will my content be deleted if I stop paying?**
A: No. Your content is safely archived and preserved. The whole purpose of Echo4Ever is to preserve your legacy, and we honour that by keeping your content safe — even if your subscription lapses. Deletion only occurs if you explicitly request it.

### Heritage Custodial Mode

**Q: What happens when Heritage Custodial Mode is activated?**
A: The account transitions permanently to a memorial state. All "Legacy" memories and time capsules become visible to family. The Heritage Custodian becomes a Curator who can add tributes. The subscription is cancelled and the archive is preserved at no cost. The original owner can no longer log in.

**Q: Can Heritage Custodial Mode be reversed?**
A: No. Once activated, Heritage Custodial Mode is permanent and irreversible.

**Q: How is Heritage Custodial Mode activated?**
A: The Heritage Custodian submits a request through the app. An Echo4Ever administrator reviews and approves (or rejects) the request. This extra step ensures accuracy and prevents accidental activation.

### Account

**Q: Can I change my email address?**
A: Yes. Go to Settings and use the "Change Email" section. You'll need to confirm your password, and a verification email will be sent to your new address.

**Q: Can I change my password?**
A: Yes. Go to Settings and use the "Change Password" section. You'll need to enter your current password first. Changing your password logs you out of all devices for security.

**Q: How do I contact support?**
A: Use the Help & Support form at the bottom of the Settings page, or email contact@echo4ever.com directly.

---

## 13. KEY TERMINOLOGY

| Term | Definition |
|---|---|
| **Archive / Vault** | Your personal digital memory collection — the central container for all your content |
| **Memory** | A single item in your archive — a photo, video, audio file, document, or written story |
| **Heritage Custodian (HC)** | The trusted person you nominate to manage your archive after you're no longer here |
| **Heritage Custodial Mode** | The permanent memorial state activated for an archive when the time comes — unlocks Legacy content |
| **Curator** | The role granted to the Heritage Custodian after Heritage Custodial Mode is activated — can add but not edit/delete |
| **Viewer** | A family member who has been invited to view shared content in someone else's archive |
| **Time Capsule** | A sealed memory that only becomes visible when specific conditions are met (date, milestone, or memorial activation) |
| **Private** | Visibility setting — only the archive owner can see the content |
| **Family** | Visibility setting — the owner plus invited family members can see the content |
| **Legacy** | Visibility setting — content only becomes visible after Heritage Custodial Mode is activated |
| **Foundation / Legacy / Generations** | The three subscription tiers (25 GB / 100 GB / 250 GB) |

---

*Last updated: April 2026*
*Document version: 1.0*
