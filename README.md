# SRV Media – Education Media & Exhibition Platform

A modern, responsive, and performance-focused web platform designed for **education marketing, school exhibitions, and institutional outreach**.  
This project emphasizes **clean UI, accessibility, scalability, and professional branding**, making it suitable for ed-tech companies, schools, and academic organizations.

---
** Assignment Walkthrough Video - https://youtu.be/1DMR7XURv7s

---

## 🚀 Project Overview

**SRV Media** is a frontend-driven website that showcases:
- School partnerships
- Education exhibitions
- Admissions & outreach campaigns
- Brand and ed-tech collaborations

The interface is designed to feel **premium, trustworthy, and enterprise-ready**, aligning with education and media industry standards.

---

## ✨ Key Features

### 🔹 Modern UI / UX
- Clean, minimal, professional design
- Glass-effect sticky header
- Consistent spacing and typography
- Enterprise-grade visual hierarchy

### 🔹 Hero Slider
- Full-viewport hero section
- Image-based slider
- Overlay content for messaging
- Smooth CSS transitions

> **Note:** The hero section is intentionally kept stable and unchanged to preserve design consistency.

### 🔹 Popup Navigation Menu
- Modal-style popup navigation
- Optimized for mobile and tablet
- Backdrop blur for focus clarity
- Smooth open/close transitions

### 🔹 Partner Logo Marquee
- Infinite horizontal scrolling marquee
- **Original brand colors preserved**
- Hover scaling interaction
- Lightweight CSS animation

### 🔹 School Showcase Section
- Responsive grid layout
- Card-based UI
- Balanced image aspect ratios
- Hover elevation effects

### 🔹 Exhibition Section
- Modular card components
- Easily extensible for future events
- Clean typography and spacing

### 🔹 Accessibility & Performance
- Keyboard-accessible navigation
- `:focus-visible` support
- Reduced motion preferences handled
- Minimal JavaScript usage

---

## 🧱 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup |
| **CSS3** | Layout, animations, responsiveness |
| **JavaScript (Vanilla)** | Popup navigation & slider logic |
| **No Frameworks** | Lightweight and fast |

---

## 📂 Project Structure
```bash
Project
    ├───index.html
    ├───README.md
    │
    └───assets
        ├───css
        │    └───style.css
        │
        ├───images
        │   ├───exhibition
        │   ├───hero
        │   ├───logos
        │   └───schools
        │         
        └───js
            └───main.js
```

---

## 📱 Responsiveness

- Fully responsive across devices
- Mobile-first considerations
- Adaptive grid layouts
- Touch-friendly interactions

---

## ♿ Accessibility

- Clear focus indicators
- High color contrast
- Reduced motion support:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
  }
}
```
---
## ⚡ Performance Philosophy

* No heavy libraries or frameworks
* CSS-first animations
* Optimized images
* Lighthouse-friendly setup
---
