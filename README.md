# House of Bakes — BY Shah 🎂

![House of Bakes](/public/images/logo.jpg)

A premium, production-ready portfolio website built for a custom home bakery based in Vadodara. Crafted with modern web technologies to deliver a luxurious, warm, and highly interactive user experience.

## ✨ Features

- **Next.js 14 App Router**: Utilizing the latest React server components and optimized build system.
- **TypeScript**: End-to-end type safety for rock-solid stability.
- **Framer Motion Animations**: Smooth page transitions, staggered entrance animations, and scroll-triggered parallax effects.
- **Three.js WebGL Background**: A subtle, dynamic 3D bokeh particle field rendered on the hero section (automatically disabled for users with `prefers-reduced-motion` or mobile devices for optimal performance).
- **Custom Design System**: A warm, chocolatey aesthetic (espresso brown and cream) featuring a global noise-grain overlay, glassmorphic UI elements, and modern typography combinations (Playfair Display & DM Sans).
- **Responsive Masonry Gallery**: A categorized, fully animated image/video masonry grid with a custom-built, full-screen interactive lightbox.
- **Floating Action Buttons (FAB)**: Persistent, animated quick-contact buttons for direct WhatsApp messaging and calls.
- **100% Custom SVG Icons**: No bloated icon libraries. Every icon is a handcrafted, accessible, and scalable inline SVG component.

## 🚀 Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- Vanilla CSS Modules (No heavy utility frameworks)

## 📦 Project Structure

```text
├── app/                  # Next.js App Router pages (Home, Gallery, Contact)
├── public/
│   └── images/           # All local media assets (images & videos)
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, Hero, GalleryGrid, etc.)
│   │   └── icons/        # Hand-crafted inline SVG icon library
│   ├── lib/              # Utilities (e.g., getLocalMedia.ts for asset mapping)
│   ├── styles/           # CSS Modules and global design variables
│   └── types/            # TypeScript interface definitions
```

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚢 Deployment

This project is optimized and ready to be deployed on Vercel. 

```bash
npm run build
```

The build is completely static-generated (`next build` with Next.js 14 optimizations) and will deploy with zero errors. Ensure that you link the GitHub repository to your Vercel account for continuous deployment.

---

*Baked with Love, Coded with Joy.*
