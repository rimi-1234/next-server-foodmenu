# 🍽️ Food Menu - Backend API

Food Menu Backend is a secure RESTful API built with **Next.js API Routes**, **MongoDB**, and **Mongoose**. It powers the Food Menu application by handling authentication, menu management, database operations, and protected CRUD endpoints. Designed with scalability and security in mind, the backend provides fast API responses and seamless integration with the Next.js frontend.

🌐 **Live API:** https://your-backend-url.vercel.app/

---

# 📸 Preview

![Food Menu Backend Screenshot](https://via.placeholder.com/1200x650.png?text=Food+Menu+Backend)

---

# ✨ Features

- 🔐 Secure API with NextAuth.js Authentication
- 👤 Role-Based Authorization
- 📦 Complete Food Menu CRUD Operations
- ➕ Add New Food Items
- ✏️ Update Existing Food Items
- ❌ Delete Food Items
- 📄 Fetch All Menu Items
- 🔍 Fetch Single Food Details
- 🗄️ MongoDB Database Integration
- ⚡ Fast Serverless API Routes
- 🔒 Environment Variable Security
- 🚀 Optimized for Vercel Deployment

---

# 🛠️ Tech Stack

## Backend

- Next.js 16 API Routes
- Server Actions

## Authentication

- NextAuth.js
- Google OAuth
- JWT Session

## Database

- MongoDB
- Mongoose

## Deployment

- Vercel

---

# 📦 Backend Dependencies

```json
{
  "next": "^16.x",
  "next-auth": "^4.x",
  "mongodb": "^6.x",
  "mongoose": "^8.x"
}
```

---

# 📂 Project Structure

```
food-menu-server/
│
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── foods/
│   │   └── users/
│
├── lib/
├── models/
├── middleware.js
├── .env.local
├── package.json
└── README.md
```

---

# ⚙️ Local Installation & Setup

## Prerequisites

- Node.js (v18 or later)
- npm
- MongoDB Atlas Account
- Google OAuth Credentials

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/rimi-1234/food-menu-backend.git
```

Move into the project directory:

```bash
cd food-menu-backend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a file named:

```
.env.local
```

Add the following:

```env
MONGODB_URI=your_mongodb_connection_string

NEXTAUTH_URL=http://localhost:3000

NEXTAUTH_SECRET=your_nextauth_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 4️⃣ Run the Development Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

# 🚀 Production Build

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

# 📜 Available Scripts

```bash
npm install
```

Install project dependencies.

```bash
npm run dev
```

Start the development server.

```bash
npm run build
```

Create a production build.

```bash
npm start
```

Run the production server.

```bash
npm run lint
```

Run ESLint.

---

# 🌐 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/foods` | Get all food items |
| GET | `/api/foods/:id` | Get a single food item |
| POST | `/api/foods` | Add a new food item |
| PATCH | `/api/foods/:id` | Update a food item |
| DELETE | `/api/foods/:id` | Delete a food item |
| POST | `/api/auth/[...nextauth]` | NextAuth authentication |

---

# 🔐 Authentication

Authentication is handled using **NextAuth.js**.

Supported providers:

- Email & Password
- Google OAuth

Features include:

- Protected API Routes
- Secure Session Management
- JWT-Based Authentication
- Role-Based Authorization

---

# 🗄️ Database

MongoDB stores:

- Users
- Food Items
- Admin Data

Mongoose provides:

- Schema Validation
- Data Modeling
- Query Management

---

# 🌍 Deployment

The backend is optimized for deployment on **Vercel**.

Deploy using:

```bash
vercel
```

Or connect the GitHub repository directly from the Vercel dashboard.

---

# 📸 Screenshots

Replace the placeholders below with your own screenshots.

```md
![API](./screenshots/api.png)

![Database](./screenshots/database.png)

![Dashboard](./screenshots/dashboard.png)
```

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.

2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push the branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Rimi**

GitHub: https://github.com/rimi-1234

---

# 🌐 Live API

https://your-backend-url.vercel.app/
