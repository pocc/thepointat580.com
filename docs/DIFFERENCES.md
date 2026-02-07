# Static Site vs /demo — Comparison

Side-by-side comparison of the legacy GoDaddy monolith at `/` and the React app at `/demo`.

## What the Static Site Does Better

### 1. Homepage — Personal Touch & Property Details
The static homepage includes a warm personal narrative that the /demo version lacked:
- Introduces owners **Olivia and James Jacobs** by name
- Mentions their **environmental consulting practice on-site since 1997**
- Describes the property in specific physical terms (I-580 on-ramp proximity, Richmond-San Rafael Bridge access)
- Highlights **pet-friendly** policy
- Lists shared amenities: **conference room, outdoor garden patio, kitchen, secured gated parking**
- "Approach" section about working toward **long-term tenants** — many have stayed for years

### 2. Listings — Conference Room Rental
The static site lists **conference room rental at $29/hour**, which was missing entirely from /demo.

### 3. Historic Area — Richer Detail
The static site includes:
- **Point Richmond Historic District** listed on the **National Register of Historic Places since 1978**
- More specific attractions: **Nicholl Knob, Keller Beach, Richmond Yacht Club**
- **Public transit info**: AC Transit line 72M, Golden Gate Transit routes 42 and 40

### 4. Forms — Actual Downloadable Documents
The static site has **7 real PDF download links**:
1. 7 Rental Questions
2. Non-Discrimination Policy
3. Rental Application (Credit Information)
4. Residential Lease
5. Virtual Office Agreement
6. Commercial Lease
7. Tenant Insurance Example Form

The /demo page was just a "Coming Soon" placeholder.

### 5. Header — Phone Number Visibility
The static site prominently displays **(510) 590-1099** in the header. The /demo site only shows it in the footer and on the Contact page.

### 6. Contact — Saturday Hours
The static site specifies Saturday hours as **10:00 AM – 4:00 PM (by appointment)**, while /demo just says "By appointment."

## What /demo Does Better

### 1. Page Load Performance
- Static site: **3–8 MB per page** due to base64-inlined images
- /demo: **~250 KB JS + ~1.6 MB images** (loaded on demand, cached across pages)
- SPA navigation between pages is instant (no full page reload)

### 2. Visual Design & Layout
- Clean, modern card-based layout with consistent spacing
- Professional color scheme with clear visual hierarchy
- Responsive grid layouts that adapt to mobile screens
- Hover effects and subtle animations on interactive elements

### 3. Responsive Design
- Mobile-first CSS with proper breakpoints
- Navigation collapses cleanly on small screens
- Card grids reflow from multi-column to single-column
- The static site's GoDaddy template is responsive but heavier and less predictable

### 4. Image Presentation
- Background images with overlays on hero/header sections
- Consistently styled property photos with rounded corners and shadows
- Optimized image sizes (Vite hashes and bundles them)

### 5. Navigation & Routing
- Sticky header stays visible while scrolling
- Active page highlighted in navigation
- Client-side routing = instant page transitions
- Consistent promo banner below header on every page

### 6. Contact Form
- Cleaner form layout with proper labels and focus states
- Message field (textarea) — static site only had name and email
- Better visual feedback on submission

### 7. Footer
- Three-column footer with contact info, quick links, and hours
- More organized and scannable than the static site footer

### 8. Code Maintainability
- Component-based React architecture
- TypeScript type safety
- Single CSS file with organized sections
- Easy to update content without touching giant HTML files

## Content Gaps Addressed

The following content was missing from /demo and has been added:

| Gap | Source Page | Added To |
|-----|-----------|----------|
| Owners' names and personal story | Homepage | Home.tsx |
| Pet-friendly policy | Homepage | Home.tsx |
| Shared amenities (conference room, patio, kitchen, parking) | Homepage | Home.tsx |
| Long-term tenant philosophy | Homepage | Home.tsx |
| Conference room rental ($29/hr) | Listings | Listings.tsx |
| National Register Historic District (1978) | Historic Area | HistoricArea.tsx |
| Additional attractions (Nicholl Knob, Keller Beach, etc.) | Historic Area | HistoricArea.tsx |
| Public transit info | Historic Area | HistoricArea.tsx |
| 7 downloadable form names | Forms | Forms.tsx |
| Phone number in header | All pages | App.tsx |
| Saturday hours detail | Contact | Contact.tsx |
