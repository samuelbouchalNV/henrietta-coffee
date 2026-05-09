# Product Requirements Document (PRD): Henrietta Coffee Website

## 1. Project Overview
- **Project Name:** Henrietta Coffee Web Presentation
- **Version:** 1.0
- **Primary Objective:** Create a high-performance, mobile-first website that showcases a mobile cafe (Citroën H Van 1975), drives B2B catering leads, and connects B2C customers to the parent family roastery (Pražírna HENRI).
- **Target Platforms:** Responsive Web (Mobile-First focus)

---

## 2. Business Context & Strategy
### 2.1 Brand Synergy
Henrietta Coffee is backed by **Pražírna kávy HENRI, s. r. o.** (Olomouc-Holice) with 30+ years of history. The website must bridge the gap between the mobile nature of the van and the physical stability of the family roastery and its two Olomouc shops (Ostružnická 5, Náves Svobody 17).

### 2.2 Key User Flows
1.  **B2C (The Visitor):** "Where is the van today?" -> Check map/calendar -> View menu -> Link to e-shop (henri.cz) for bean purchase.
2.  **B2B (The Event Organizer):** "I need premium coffee for a wedding/event" -> View catering options -> Fill out the smart inquiry wizard.

### 2.3 Core KPIs
- **Form Conversion Rate:** Number of catering inquiries.
- **E-commerce CTR:** Clicks to henri.cz.
- **Performance:** LCP < 1.5s on mobile networks.

---

## 3. Sitemap & Functional Requirements

### 3.1 Homepage (Hero)
- **Visuals:** High-quality imagery of the restored 1975 Citroën H Van.
- **CTAs:** - Secondary: "Najděte nás" (Current location).
    - Primary: "Poptat catering" (Lead generation).
- **Social Proof:** Live Instagram feed integration (showing the van in action).

### 3.2 About Us / Our Story
- **Focus:** The story of the van restoration and the 30-year heritage of Pražírna HENRI.
- **Synergy:** Explicitly mention the Olomouc stone shops as pickup points.

### 3.3 Coffee Catering (B2B Landing Page)
- **Capacity:** Highlighting the ability to serve up to 1,200 coffees/day.
- **Equipment:** Options for the Citroën Van or portable "Party Stalls" for indoor events.
- **Service Packages:**
    - Basic: 1 barista / 6h (~7-8k CZK + VAT).
    - Extended: 2 baristas / Full day (~13-14k CZK + VAT).
- **Add-ons:** Own confectionery production (sweets), homemade lemonades.

### 3.4 Locations & Calendar
- **Interactive Map:** Integration with Google Maps API.
- **Real-time Status:** A dynamic widget showing the latest Facebook/Instagram post for "today's" status updates (weather changes, etc.).

### 3.5 Menu & Coffee
- **Presentation:** Focus on origin profiles (Ethiopia, Colombia, Brazil).
- **Direct Links:** "Koupit domů" button for each coffee category leading to specific categories on `henri.cz`.

### 3.6 Contact
- **Details:** Phone (+420 774 227 074), Email (kava@henri.cz), IČ: 17731470.
- **HQ:** Address of the roastery in Olomouc-Holice.

---

## 4. Technical Specification: Catering Wizard
The inquiry form must act as a logic-based filter to save the owner's time.

| Step | Section | Logic / Required Fields |
| :--- | :--- | :--- |
| 1 | Event Type | Wedding, Corporate, Festival, Conference + Date/Time. |
| 2 | Logistics | Location, parking availability for the Van vs. Stall. |
| 3 | Scale | Number of guests, Package selection (Basic/Extended). |
| 4 | Technical | **Critical:** Access to electrical power confirmation. |
| 5 | Submission | Contact details + GDPR. |

**Automation Goal:** Upon submission, the system triggers an automated email with a recap PDF containing technical requirements and a price estimate.

---

## 5. Non-Functional Requirements

### 5.1 Performance & SEO
- **Images:** All images must be in WebP format with lazy loading.
- **SEO:** Schema.org markup (`LocalBusiness` and `Event`).
- **Mobile-First:** Navigation must be optimized for one-hand operation.

### 5.2 Technology Stack (Recommended)
- **CMS:** Headless CMS or WordPress (Elementor/Gutenberg).
- **Deployment:** Vercel/Netlify for speed or high-quality hosting with CDN.
- **Security:** SSL, reCAPTCHA v3 on forms.

---

## 6. Design Guidelines (UI/UX)
- **Vibe:** Retro-premium, family-oriented, clean, and artisanal.
- **Color Palette:** Coffee browns, cream white, and metallic accents reflecting the Citroën Van.
- **Typography:** Mix of a classic serif (for heritage) and a clean sans-serif (for readability).
