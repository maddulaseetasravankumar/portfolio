# Sravan Kumar – Portfolio (React + Vite)

A fully responsive, animated developer portfolio built with **React 19**, **Vite 8**, **Swiper**, and a **Spline 3D** scene.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 🌐 Deploy to GitHub Pages

1. In `vite.config.js`, update `base` to match your repo name:
   ```js
   base: '/your-repo-name/',
   ```
2. Run:
   ```bash
   npm run build:github
   ```
3. Push the `dist/` folder contents to the `gh-pages` branch, **or** use the [gh-pages](https://www.npmjs.com/package/gh-pages) package:
   ```bash
   npm install --save-dev gh-pages
   # Add to package.json scripts: "deploy": "gh-pages -d dist"
   npm run deploy
   ```

---

## 📁 Project Structure

```
src/
├── App.jsx                   ← Composes all sections
├── main.jsx                  ← React root entry
├── styles/
│   └── global.css            ← CSS variables, resets, animations
├── data/
│   └── portfolioData.js      ← All content arrays (edit here to customize)
├── hooks/
│   └── useReveal.js          ← Scroll-reveal IntersectionObserver hook
└── sections/
    ├── Navbar.jsx / .css
    ├── Hero.jsx / .css
    ├── LogosStrip.jsx / .css
    ├── Stats.jsx / .css
    ├── About.jsx / .css
    ├── Services.jsx / .css
    ├── Projects.jsx / .css
    ├── SkillsSlider.jsx / .css
    ├── Testimonials.jsx / .css
    ├── Contact.jsx / .css
    └── Footer.jsx / .css
```

---

## ✏️ Customization

All content is centralized in **`src/data/portfolioData.js`**. To update:

- **Services** → edit `services[]`
- **Projects** → edit `projects[]` (add your `image` path in `/public/`)
- **Testimonials** → edit `testimonialSlides[]`
- **Skills** → edit `topSkills[]` and `bottomSkills[]`
- **Stats** → edit `stats[]`
- **Contact info** → edit the `Contact.jsx` section directly
- **Social links** → edit `socialLinks` in `portfolioData.js`

To **replace the profile photo**, swap the `<FaUser />` placeholder in `About.jsx` with an `<img>` tag pointing to your photo in `/public/`.

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool |
| Swiper 12 | Skills carousel |
| @splinetool/react-spline | 3D hero animation |
| react-icons 5 | Icon library (replaces Font Awesome CDN) |
| CSS Variables | Theming & design tokens |

---

## 📦 Dependencies Note

If you encounter a `@splinetool/runtime` not found error after `npm install`, run:

```bash
npm install @splinetool/runtime
```

This is a peer dependency of `@splinetool/react-spline`.
