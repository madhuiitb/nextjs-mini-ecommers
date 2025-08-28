A **responsive** mini e-commerce dashboard built with **Next.js (App Router)** and **React**, featuring:

- 🔍 Product search, filtering, sorting, and detailed views  
- 🛒 Persistent shopping cart with local storage  
- 🌗 Dark/light mode toggle with theme preference storage  
- ⏳ Skeleton loaders for better perceived performance and UX  
- 📱 Fully responsive across mobile and desktop devices  

---

## 🚀 Live Demo  

🔗 [View the live app on Vercel](https://nextjs-mini-ecommers.vercel.app/)  

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
````

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

## 📸 Screenshots

<img width="842" height="896" alt="Screenshot 2025-08-28 at 3 03 17 PM" src="https://github.com/user-attachments/assets/c9c8d12f-45ab-45e8-8ac2-515e73bc15f0" />
<img width="368" height="877" alt="Screenshot 2025-08-28 at 3 02 28 PM" src="https://github.com/user-attachments/assets/c0ee7372-b477-42b5-b094-3b84eb87d61c" />
<img width="881" height="871" alt="Screenshot 2025-08-28 at 3 01 56 PM" src="https://github.com/user-attachments/assets/b3d3b7aa-937b-4423-827f-90ea82b5420c" />
<img width="401" height="863" alt="Screenshot 2025-08-28 at 3 01 38 PM" src="https://github.com/user-attachments/assets/548cb209-5bf3-407e-97f2-3bb9ee2e719b" />
<img width="1709" height="922" alt="Screenshot 2025-08-28 at 3 01 21 PM" src="https://github.com/user-attachments/assets/d08686b1-ac4b-4658-a1f0-a287a728c4a3" />
<img width="844" height="931" alt="Screenshot 2025-08-28 at 5 25 50 PM" src="https://github.com/user-attachments/assets/d077a945-a3ee-4909-b40a-a3ae35c2f977" />
<img width="738" height="930" alt="Screenshot 2025-08-28 at 5 25 37 PM" src="https://github.com/user-attachments/assets/379207ef-29c0-4e2a-a496-b1bc674f6118" />
<img width="788" height="920" alt="Screenshot 2025-08-28 at 5 25 14 PM" src="https://github.com/user-attachments/assets/96927c52-16b5-4e9c-81b7-96748a1e284f" />
<img width="1415" height="926" alt="Screenshot 2025-08-28 at 5 25 06 PM" src="https://github.com/user-attachments/assets/476e46ab-6eba-4383-b447-f10cc04be758" />
<img width="826" height="886" alt="Screenshot 2025-08-28 at 5 24 47 PM" src="https://github.com/user-attachments/assets/2c405859-b9c2-418a-91ce-a9230ed614c6" />


---

## 📜 License

This project is open source under the [MIT License](LICENSE).

---
