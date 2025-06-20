<div align="center">

🌿  
# SproutHub  
_Your cozy GitHub contribution garden_

</div>

<p align="center">
  <picture>
    <source srcset="https://sprouthub-widget.vercel.app/preview-dark.png" media="(prefers-color-scheme: dark)">
    <img src="https://sprouthub-widget.vercel.app/preview-light.png" width="200" alt="My cozy coding plant" />
  </picture>
</p>

---

SproutHub is a tiny, embeddable widget that visualizes your GitHub activity as a growing emoji plant.  
Each day you commit, it grows 🌱 → 🌿 → 🌼 → 🌷 → 🌳 ... a gentle reminder that your work matters.

Built with a soft, lofi aesthetic and soothing animations 🍵🎧

---

## 🧸 Features

- 🪴 5 animated emoji plant stages
- 🌓 Light and dark mode support (`?theme=`)
- 💾 Progress persists using localStorage
- 🧩 Embed in your site via `<iframe>`
- 🔁 GitHub Action updates preview images daily

---

## 🖼️ Embed It Anywhere

```html
<iframe
  src="https://sprouthub-widget.vercel.app/?user=yourgithubusername"
  width="300"
  height="200"
  style="border: none; border-radius: 12px;"
></iframe>
```

---

## 🛠 Local Dev

```bash
npm install
npm run dev
```

Then open:  
[http://localhost:5173/?user=yourgithubusername](http://localhost:5173/?user=yourgithubusername)

---

## 🚀 Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/devinnicholson/sprouthub-widget)

---

## 🤖 Auto-Generated Previews

- `preview-light.png` and `preview-dark.png` are auto-snapshotted daily using Playwright
- They’re included in this README via `<picture>` for theme-aware display

---

## 🌼 Built With

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Playwright](https://playwright.dev/) (GitHub Action)

---

> “Even the smallest sprout dreams of touching the sky.” 🌾
