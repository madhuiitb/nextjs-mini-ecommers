# 🛒 Next.js Mini E-Commerce Dashboard

![Next.js](https://img.shields.io/badge/Next.js-13+-000000?logo=next.js)  
![React](https://img.shields.io/badge/React-18-61dafb?logo=react)  
![License](https://img.shields.io/badge/License-MIT-green)  
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

A **responsive** mini e-commerce dashboard built with **Next.js (App Router)** and **React**, featuring:

- 🔍 Product search, filtering, sorting, and detailed views  
- 🛒 Persistent shopping cart with local storage  
- 🌗 Dark/light mode toggle with theme preference storage  
- ⏳ Skeleton loaders for better perceived performance and UX  
- 📱 Fully responsive across mobile and desktop devices  

---

## 🚀 Live Demo  

🔗 **Live Demo:** [nextjs-mini-ecommers.vercel.app](https://nextjs-mini-ecommers.vercel.app/)  
🔗 **GitHub Repo:** [madhuiitb/nextjs-mini-ecommers](https://github.com/madhuiitb/nextjs-mini-ecommers/tree/main)


---

## ✨ Features  

| Feature                   | Description |
|---------------------------|-------------|
| **Product Search**        | Dynamically discover products using keywords |
| **Filtering & Sorting**   | Sort products by price, category, etc., and apply multi-faceted filters |
| **Detail View**           | Click on a product to see detailed information and visuals |
| **Persistent Cart**       | Add items to a cart that persists across sessions |
| **Dark/Light Mode**       | Toggle between themes, with preferences stored and applied |
| **Skeleton Loaders**      | Improve UX by showing loaders during data fetches |
| **Responsive Design**     | Optimized UI for both mobile and desktop devices |

---

## 📦 Prerequisites  

- Node.js (v16 or newer recommended)  
- npm, yarn, pnpm, or bun installed  

---

## ⚡ Getting Started  

1. **Clone the repo**
   ```bash
   git clone https://github.com/madhuiitb/nextjs-mini-ecommers.git
   cd nextjs-mini-ecommers
   

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser to explore the app.

---

## 📂 Directory Structure

```
├── public/             # Static assets (images, icons, etc.)
│
├── app/                # Next.js App Router directory
│   ├── layout.js       # Root layout (shared across all pages)
│   ├── page.js         # Home page (product listing / dashboard)
│   ├── product/        # Dynamic product routes
│   │   └── [id]/page.js
│   ├── cart/           # Shopping cart page
│   │   └── page.js
│
├── components/         # Reusable UI components (Navbar, ProductCard, etc.)
├── hooks/              # Custom React hooks (e.g., useCart, useTheme)
├── styles/             # Global styles (Tailwind, CSS modules, etc.)
│
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

---

## 🛠️ Technologies Used

* **Next.js 13+ (App Router)** — File-based routing, layouts, SSR/SSG
* **React 18** — UI components and state management
* **Local Storage** — Cart and theme persistence
* **Tailwind CSS** — Utility-first responsive styling
* **Skeleton Loaders** — Enhanced UX during data fetches

---

## 🌐 Deployment

This app is deployed on **Vercel** for seamless CI/CD:

* Automatic deployments via GitHub integration
* Visit [Vercel Documentation](https://vercel.com/docs) for advanced setup

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add awesome feature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---
## 📌 Future Improvements

🛒 Add checkout and payment flow

👤 Implement user authentication

📊 Add analytics dashboard

---

## 📜 License

This project is open source under the [MIT License](LICENSE).

---
