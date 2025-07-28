# Vansh Agrawal – 3D Portfolio Website

Welcome to the source code of my personal portfolio, an immersive 3-D web experience that highlights my skills, projects and interests.

Live site → [agrawalvansh.me](https://www.agrawalvansh.me)

---

## About Me

I am **Vansh Agrawal**, a passionate front-end / full-stack developer who loves crafting delightful, performant and visually engaging user interfaces. I enjoy combining modern JavaScript frameworks with 3-D graphics to build memorable experiences on the web.

## Built With

This site is built entirely with modern, open-source tools:

| Area | Technology |
|------|------------|
| Framework | [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| 3-D / WebGL | [Three.js](https://threejs.org/) + [react-three-fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) |
| Animations | [GSAP](https://greensock.com/gsap/) & [@gsap/react](https://greensock.com/react/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Routing | [React-Router 7](https://reactrouter.com/) |
| Emails | [EmailJS](https://www.emailjs.com/) |

…and plenty of custom shaders, hooks and components.

## Key Features

• Interactive 3-D hero section powered by WebGL & R3F  
• Smooth, scroll-triggered animations with GSAP  
• Responsive layout – looks great on mobile, tablet and desktop  
• Contact form that sends messages straight to my inbox via EmailJS  
• Clean, modular, component-driven codebase

## Getting Started Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/agrawalvansh/Vansh-Portfolio.git
cd 3d-portfolio
npm install   # or: yarn
```

Run the development server:

```bash
npm run dev
```

Open your browser at `http://localhost:5173` (default Vite port) to view the app.

Build for production & preview locally:

```bash
npm run build
npm run preview
```

## Deployment

The production build in `dist/` is completely static and can be deployed on any static host, e.g. Netlify, Vercel, GitHub Pages.  
The live site is currently deployed on **[agrawalvansh.me](https://www.agrawalvansh.me)**.

## Project Structure (simplified)

```
├── public/            # Static assets (models, textures, favicons…)
├── src/
│   ├── assets/        # Images & 3-D assets imported by code
│   ├── components/    # Reusable UI components
│   ├── sections/      # Page sections (Hero, Experience, Contact, …)
│   ├── constants/     # Data used by components/sections
│   ├── styles/        # Tailwind configuration (if any overrides)
│   └── main.jsx       # Application entry point
├── index.html         # Root HTML template used by Vite
└── vite.config.js     # Vite + Tailwind + R3F configuration
```
