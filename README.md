# 📚 Fable – Ebook Sharing Platform

<div align="center">

![Fable Banner](https://i.ibb.co.com/nsgfMDRh/Screenshot-2026-06-29-215555.png)

**Discover & Read Original Ebooks — A platform connecting readers with talented writers.**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-Visit_Now-4F46E5?style=for-the-badge)](https://fable-ebooks.vercel.app)
[![Client Repo](https://img.shields.io/badge/💻_Client-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/yourusername/fable-client)
[![Server Repo](https://img.shields.io/badge/🖥️_Server-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/yourusername/fable-server)

</div>

---

## 📖 Project Overview

**Fable** is a full-stack digital platform that democratizes access to literature by connecting ebook lovers and collectors with talented writers. Writers can upload and manage their creations, readers can browse, purchase, and track their reading history — all within a secure, streamlined experience.

> Built with the **MERN Stack** (MongoDB, Express.js, React/Next.js, Node.js) featuring role-based access control, Stripe payment integration, Google OAuth, and real-time analytics dashboards.

---

## 🌐 Live URLs

| Resource       | URL                                                                   |
| -------------- | --------------------------------------------------------------------- |
| 🌍 Live Site   | [https://fable-ebooks.vercel.app](https://fable-ebooks.vercel.app)    |
| 🖥️ Server API  | [https://fable-server.vercel.app](https://fable-server.vercel.app)    |
| 📦 Client Repo | [GitHub – fable-client](https://github.com/yourusername/fable-client) |
| 📦 Server Repo | [GitHub – fable-server](https://github.com/yourusername/fable-server) |

---

## 🔐 Demo Credentials

| Role      | Email            | Password   |
| --------- | ---------------- | ---------- |
| 👑 Admin  | admin@fable.com  | Admin@123  |
| ✍️ Writer | writer@fable.com | Writer@123 |
| 📖 Reader | reader@fable.com | Reader@123 |

---

## ✨ Key Features

### 🔑 Authentication & Authorization

- Email/password registration with JWT (7-day expiry)
- Google OAuth via **BetterAuth**
- Role-based access control: **Reader**, **Writer**, **Admin**
- Protected private routes — no redirect on reload

### 📚 Ebook Browsing & Discovery

- Public ebook browsing (no login required)
- Responsive grid layout (2 → 3 → 4 columns)
- Advanced search by title or writer name
- Filter by genre, price range, and availability
- Sort by newest, price low–high, price high–low
- Server/client-side pagination (6–12 items per page)
- Skeleton loaders and empty state messages

### 🛒 Purchase System (Stripe)

- Secure Stripe Checkout integration
- Purchase history tracked per user
- "Already Purchased" state with full content unlock
- Writer verification one-time payment flow

### 🖊️ Writer Dashboard

- Upload ebooks with cover images via **imgBB API**
- Publish / Unpublish / Edit / Delete own ebooks
- Sales history with buyer info and revenue
- Bookmark management

### 👑 Admin Dashboard

- Manage all users (role change, delete)
- Manage all ebooks (publish/unpublish, delete)
- View all transactions (publishing fees + purchases)
- Analytics: total users, writers, ebooks sold, revenue
- Monthly sales chart & ebooks by genre pie chart

### 🔖 Reader Dashboard

- Purchase history with status tracking
- Purchased ebooks gallery
- Bookmark / wishlist management
- Profile management

### 🎨 UI/UX Highlights

- Framer Motion animations (hero fade-in, staggered card reveal, hover scaling)
- Fully responsive for mobile, tablet, and desktop
- Custom 404 page with illustration
- Error boundary fallback UI
- Global loading spinner with brand colors
- Dark mode toggle with `next-themes` (persists in localStorage)

---

## 🏗️ Tech Stack

### Frontend (Next.js)

| Package                                 | Purpose                      |
| --------------------------------------- | ---------------------------- |
| `next`                                  | React framework with SSR/SSG |
| `react` & `react-dom`                   | UI library                   |
| `tailwindcss`                           | Utility-first CSS framework  |
| `framer-motion`                         | Animations and transitions   |
| `next-themes`                           | Dark mode support            |
| `better-auth`                           | Google OAuth integration     |
| `axios`                                 | HTTP client                  |
| `react-query` / `@tanstack/react-query` | Server state management      |
| `react-hook-form`                       | Form handling and validation |
| `stripe` / `@stripe/stripe-js`          | Stripe payment client        |
| `react-hot-toast`                       | Toast notifications          |
| `recharts`                              | Analytics charts             |
| `react-icons`                           | Icon library                 |
| `swiper`                                | Hero banner carousel/slider  |
| `jwt-decode`                            | JWT token decoding           |

### Backend (Express.js)

| Package             | Purpose                         |
| ------------------- | ------------------------------- |
| `express`           | Node.js web framework           |
| `mongoose`          | MongoDB ODM                     |
| `jsonwebtoken`      | JWT generation & verification   |
| `bcryptjs`          | Password hashing                |
| `stripe`            | Stripe payment server SDK       |
| `cors`              | Cross-origin resource sharing   |
| `dotenv`            | Environment variable management |
| `nodemailer`        | Email notifications             |
| `multer`            | File upload handling            |
| `express-validator` | Request validation              |

---

## 📁 Project Structure

```
fable-client/
├── app/
│   ├── (main)/
│   │   ├── page.jsx               # Home page
│   │   ├── browse/page.jsx        # Browse ebooks
│   │   └── ebooks/[id]/page.jsx   # Ebook details
│   ├── dashboard/
│   │   ├── user/                  # Reader dashboard
│   │   ├── writer/                # Writer dashboard
│   │   └── admin/                 # Admin dashboard
│   ├── login/page.jsx
│   └── register/page.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── EbookCard.jsx
│   └── ...
├── lib/
│   ├── axios.js
│   └── auth.js
└── .env.local

fable-server/
├── controllers/
│   ├── authController.js
│   ├── ebookController.js
│   ├── userController.js
│   └── paymentController.js
├── models/
│   ├── User.js
│   ├── Ebook.js
│   └── Transaction.js
├── routes/
│   ├── auth.js
│   ├── ebooks.js
│   ├── users.js
│   └── payments.js
├── middleware/
│   ├── verifyToken.js
│   └── verifyRole.js
└── index.js
```

---

## ⚙️ Environment Variables

### Client (`.env.local`)

```env
NEXT_PUBLIC_API_URL=https://fable-server.vercel.app
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxx
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
```

### Server (`.env`)

```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/fable
JWT_SECRET=your_super_secret_jwt_key
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx
IMGBB_API_KEY=your_imgbb_api_key
CLIENT_URL=https://fable-ebooks.vercel.app
```

> ⚠️ Never commit `.env` or `.env.local` files to GitHub. Add them to `.gitignore`.

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Stripe account (test mode)
- imgBB API key

### 1. Clone the repositories

```bash
# Client
git clone https://github.com/yourusername/fable-client.git
cd fable-client

# Server
git clone https://github.com/yourusername/fable-server.git
cd fable-server
```

### 2. Install dependencies

```bash
# Client
cd fable-client && npm install

# Server
cd fable-server && npm install
```

### 3. Set up environment variables

Create `.env.local` in the client root and `.env` in the server root using the examples above.

### 4. Run development servers

```bash
# Server (runs on http://localhost:5000)
cd fable-server && npm run dev

# Client (runs on http://localhost:3000)
cd fable-client && npm run dev
```

---

## 📊 Dashboard Routes

| Role      | Route               |
| --------- | ------------------- |
| 📖 Reader | `/dashboard/user`   |
| ✍️ Writer | `/dashboard/writer` |
| 👑 Admin  | `/dashboard/admin`  |

---

## 🎭 User Roles & Permissions

| Feature               | Guest | Reader | Writer | Admin |
| --------------------- | :---: | :----: | :----: | :---: |
| Browse Ebooks         |  ✅   |   ✅   |   ✅   |  ✅   |
| View Ebook Details    |  ✅   |   ✅   |   ✅   |  ✅   |
| Purchase Ebook        |  ❌   |   ✅   |   ✅   |  ✅   |
| Bookmark Ebook        |  ❌   |   ✅   |   ✅   |  ✅   |
| Upload Ebook          |  ❌   |   ❌   |   ✅   |  ✅   |
| Manage Own Ebooks     |  ❌   |   ❌   |   ✅   |  ✅   |
| Manage All Users      |  ❌   |   ❌   |   ❌   |  ✅   |
| Manage All Ebooks     |  ❌   |   ❌   |   ❌   |  ✅   |
| View All Transactions |  ❌   |   ❌   |   ❌   |  ✅   |

---

## 🔄 Git Commit Summary

### Client (20+ commits)

- `feat: initialize Next.js project with Tailwind and folder structure`
- `feat: add Navbar with responsive hamburger menu and active route`
- `feat: build Hero section with Framer Motion animations`
- `feat: implement Google OAuth with BetterAuth`
- `feat: create registration form with role selection`
- `feat: add JWT-based login with email and password`
- `feat: build Browse Ebooks page with grid layout`
- `feat: add search, filter, and sort functionality`
- `feat: implement pagination on Browse Ebooks page`
- `feat: create Ebook Details page with purchase button`
- `feat: integrate Stripe Checkout for ebook purchase`
- `feat: build Reader dashboard with purchase history`
- `feat: add Purchased Ebooks gallery for reader`
- `feat: create Writer dashboard with ebook management table`
- `feat: build Add/Edit Ebook form with imgBB upload`
- `feat: add Sales History table in Writer dashboard`
- `feat: implement Admin dashboard with user management`
- `feat: add analytics charts (Recharts) on Admin dashboard`
- `feat: implement dark mode with next-themes`
- `feat: add skeleton loaders and global loading spinner`
- `feat: build custom 404 and error boundary pages`
- `feat: add bookmark feature for readers and writers`

### Server (12+ commits)

- `init: setup Express server with MongoDB connection`
- `feat: create User, Ebook, Transaction models`
- `feat: implement JWT auth with register and login routes`
- `feat: add Google OAuth callback handler`
- `feat: build ebook CRUD routes with role-based middleware`
- `feat: integrate Stripe payment for ebook purchase`
- `feat: add publishing fee payment route for writers`
- `feat: build admin routes for user and ebook management`
- `feat: add transaction history endpoint`
- `feat: implement analytics aggregation for admin dashboard`
- `feat: add bookmark endpoints for users`
- `fix: resolve CORS issues for production deployment`

---

## 📸 Screenshots

> _(Add screenshots after deployment)_

| Page         | Preview                                   |
| ------------ | ----------------------------------------- |
| 🏠 Home      | ![Home](https://i.ibb.co.com/3y9nt88z/Screenshot-2026-06-29-at-21-58-15-Create-Next-App.png)           |
| 📚 Browse    | ![Browse](./screenshots/browse.png)       |
| 📖 Details   | ![Details](./screenshots/details.png)     |
| 📊 Dashboard | ![Dashboard](./screenshots/dashboard.png) |

---

## 🤝 Contributing

This is an academic project. Contributions are not open at this time.

---

## 📄 License

This project is created for educational purposes as part of a full-stack web development course.

---

<div align="center">

Made with ❤️ by **[Your Name]**

⭐ If you like this project, give it a star on GitHub!

</div>
