# 🖌️ Theme Editor Pro – React + Tailwind CSS Integration Example

This project demonstrates how to integrate themes exported from **Theme Editor Pro** into a **React** application styled with **Tailwind CSS**. It includes dynamic light/dark theme switching using your custom theme tokens.

---

## ✨ Features

- Import and apply CSS variables from Theme Editor Pro.
- Tailwind CSS configuration to use custom theme tokens.
- Light/dark mode toggling via React context.
- Example components styled using Tailwind utilities.

---

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) installed
- Code editor (e.g., VS Code)
- A CSS theme exported from **Theme Editor Pro**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository_url_for_this_demo> theme-editor-pro-react-tailwind-demo
cd theme-editor-pro-react-tailwind-demo
```

Or [download this project as ZIP](<insert_download_link_if_applicable>) and extract it.

---

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

---

### 3. Export Your Theme from Theme Editor Pro

- Export your theme as a **CSS file**.
- It should include:

```css
:root {
  /* Light theme variables */
  --primary: #your-light-primary;
  --background: #your-light-background;
  ...
}

.dark {
  /* Dark theme variables */
  --primary: #your-dark-primary;
  --background: #your-dark-background;
  ...
}
```

---

### 4. Replace the Placeholder Theme File

1. Open `src/styles/app-themes.css`.
2. Delete its contents.
3. Copy your exported CSS content.
4. Paste it into `app-themes.css`.

---

### 5. Check `tailwind.config.js` Compatibility

Open `tailwind.config.js` and verify:

- CSS variable names in `app-themes.css` match the `var(--...)` references in `tailwind.config.js`.

If your variables differ, update the `tailwind.config.js` accordingly.  
This repo assumes the default structure from Theme Editor Pro exports.

---

### 6. Start the Dev Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧠 How It Works

| File / Component | Purpose |
|------------------|---------|
| `src/styles/app-themes.css` | Your custom theme variables (light & dark) |
| `src/index.css` | Imports Tailwind base styles and your theme |
| `tailwind.config.js` | Maps Tailwind theme tokens (colors, font, etc.) to your CSS variables |
| `src/contexts/AppContextThemeSwitcher.jsx` | Manages light/dark mode via React context |
| `src/components/ThemeToggleButton.jsx` | Button to switch between light/dark modes |
| `src/App.jsx` | Example UI using Tailwind utilities mapped to your theme |

---

## 🛠 Customize Further

- Tweak `src/styles/app-themes.css` to modify your theme live.
- Add components in `src/App.jsx` using Tailwind classes.
- Extend `tailwind.config.js` to map more of your theme tokens (e.g., `--text-error`, `--surface1`, etc.).

---

## 📚 Learn More

- [Theme Editor Pro](https://themeeditor.pro)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite](https://vitejs.dev/)

---

## 📌 Summary

This repo is a ready-to-go setup for integrating **Theme Editor Pro** themes in a **React + Tailwind CSS** app. You can easily extend, theme, and toggle your UI using custom design tokens.
