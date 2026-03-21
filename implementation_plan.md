# Sleek Portfolio Website for Irfan Ansari

Build a visually stunning, dark-themed portfolio website using **Next.js** and **Tailwind CSS**. The site features a hero header strip, bio section, capsule-style skill badges with colorful logos, horizontal project cards, and a separate "View More Projects" page.

## Proposed Changes

### Project Initialization

#### [NEW] Next.js + Tailwind project
- Initialize with `npx -y create-next-app@latest ./` using TypeScript, Tailwind CSS, App Router, and ESLint
- Clean up boilerplate files

---

### Layout & Global Styles

#### [NEW] `app/layout.tsx`
- Import Google Font **Inter** for modern typography
- Dark gradient background (`#0a0a0f` → `#111827`)
- Global smooth scrolling, subtle noise-texture overlay

#### [MODIFY] `app/globals.css`
- Custom CSS variables for color palette (deep navy, electric blue `#3b82f6`, violet `#8b5cf6`, emerald `#10b981`)
- Glassmorphism utility classes
- Capsule badge styles with hover micro-animations

---

### Header Strip Component

#### [NEW] `components/Header.tsx`
- **Left side**: Circular bordered profile picture frame (gradient border), name "Irfan Ansari", subtitle "Full Stack Developer · Engineer"
- **Right side**: 4 social link circle buttons (GitHub, LinkedIn, Twitter/X, Email) with hover glow effects
- Flexbox row layout, responsive (stacks on mobile)

#### [NEW] `public/profile.jpg`
- Generate a placeholder profile image using the image generation tool

---

### Bio Section

#### [NEW] `components/Bio.tsx`
- Glassmorphism card with the bio text
- Subtle fade-in animation on scroll

---

### Skills Section

#### [NEW] `components/Skills.tsx`
- Capsule-shaped badges for each technology
- Each badge: colorful icon/logo + tech name
- Technologies: C++, Express, React, JS, Next.js, Tailwind CSS, Shadcn UI, Node.js, Express.js, Prisma, Postgres, MongoDB, Redis, Vercel, Docker, Git, Anthropic Claude, OpenAI
- Hover scale + glow animation per badge

---

### Project Cards Section

#### [NEW] `components/ProjectCard.tsx`
- Horizontal card: left side = generated thumbnail image, right side = project name, description, tags, status badge, live link button, GitHub link button
- Glassmorphism card with border gradient on hover

#### [NEW] `components/Projects.tsx`
- Show 2 project cards with sample data
- "View More Projects" button linking to `/projects` page

---

### View More Projects Page

#### [NEW] `app/projects/page.tsx`
- Full page listing additional project cards (4-6 sample projects)
- Back-to-home navigation link

---

### Home Page

#### [MODIFY] `app/page.tsx`
- Compose: Header → Bio → Skills → Projects sections
- Full single-page portfolio layout

## Verification Plan

### Automated Tests
- Run `npm run build` to confirm zero build errors

### Browser Verification
- Open `http://localhost:3000` in browser and verify:
  1. Header strip renders with profile pic on left, social icons on right
  2. Bio section displays correctly with glassmorphism styling
  3. Skills section shows capsule badges with proper colors
  4. 2 project cards render horizontally with thumbnails
  5. "View More Projects" button navigates to `/projects`
  6. `/projects` page shows additional projects
  7. Responsive behavior on smaller viewports
