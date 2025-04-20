# 🚀 Planit  
Event Management Platform  
**TypeScript** · **React** · **Vite** · **Tailwind CSS** · **React Router** · **shadcn/ui** · **Hono** · **Cloudflare Workers** · **Prisma** · **PostgreSQL** · **Email Notifications**

Planit is a feature-rich event management platform that allows users to book and manage events and venues seamlessly. With a modern, responsive UI and a scalable serverless backend, Planit makes organizing events easy and efficient.

---

## 📋 Features

- **Event Management** – Create, edit, delete, and view upcoming and completed events
- **Venue Booking** – Browse and book venues across the country
- **User Authentication** – Secure user login and signup
- **Calendar Integration** – Visualize events on an interactive calendar
- **Serverless Backend** – Built with Hono on Cloudflare Workers for performance and scalability
- **Responsive UI** – Designed with Tailwind and shadcn/ui for a modern look and feel
- **Prisma ORM** – Type-safe database operations with PostgreSQL

---

## 🛠️ Technologies

### **Frontend**
- **React + TypeScript** – Fully typed UI components
- **Vite** – Blazing-fast build tool
- **Tailwind CSS** – Utility-first styling
- **React Router** – Declarative client-side routing
- **shadcn/ui** – Accessible UI components

### **Backend**
- **TypeScript** – End-to-end type safety
- **Hono** – Lightweight framework for Cloudflare Workers
- **Cloudflare Workers** – Serverless execution environment
- **Prisma ORM** – Type-safe database access
- **PostgreSQL** – Reliable relational database
- **Event Worker** – Automatic event status updates (e.g., marking completed events)

---

## 🖥️ Screenshots
_Add screenshots here showing the event creation page, calendar view, venue listing, etc._

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- PostgreSQL (local or hosted)
- Cloudflare account

---

### Installation

#### 1.Clone the repository
```bash
git clone https://github.com/yashas-salian/PLANiT.git
cd PLANIT
```

#### 2. FrontEnd Setup
```bash
cd frontend
npm install
# or
pnpm install
```
#### 3. BackEnd Setup
```bash
cd ../backend
npm install
# or
pnpm install
```
#### 4. Backend Environment Variables (.env)
```bash
DATABASE_URL=your_postgresql_url
```

#### 5. Generate Prisma Client
```bash
npx prisma generate
```
### 6. Run Locally
```bash
# In frontend/
npm run dev

# In backend/ (local wrangler)
npx wrangler dev
```

### 7. Deploy Backend
```bash 
npx wrangler deploy
```



### 🧩 Project Structure
planit/
├── backend/
│   ├── prisma/                # Prisma schema and migrations
│   ├── src/
│   │   ├── routes/            # API route definitions (events, user, venue)
│   │   ├── workers/           # Scheduled workers (e.g., status updates)
│   │   └── index.ts           # Entry point
│   ├── wrangler.toml          # Cloudflare Workers config
│   ├── .env                   # Backend env vars
│   └── package.json
│
├── frontend/
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── assets/            # Images, icons
│   │   ├── components/        # Reusable UI components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utility functions
│   │   ├── pages/             # Route-specific pages
│   │   ├── config.ts          # Constants and config
│   │   └── main.tsx           # App entry point
│   ├── .env                   # Frontend env vars
│   └── package.json



### 🔄 Api Endpoints
Events
GET /events – Get all events

POST /book-event – Create new event

GET /event-details-upcoming - Get upcoming events details

GET /event-details-completed - Get completed events details

PUT /update-events – Update event

PUT /delete-event – Delete event

Venues
GET /venues – List all venues

POST /venues – Add a new venue

Users
GET /get-details – Get user data

POST /signup – Create new user

POST /Login – Login to existing account


### ✨ TypeScript Benefits
Catch bugs at compile time

Better autocompletion and code intelligence

Shared types between frontend and backend

Easier to maintain and scale the codebase

### 🤝 Contributing
We welcome contributions!

Fork this repo

Create your feature branch (git checkout -b feature/feature-name)

Commit your changes (git commit -m "add feature")

Push to the branch (git push origin feature/feature-name)

Open a Pull Request

### 👨‍💻 Author
Planit was developed with ❤️ by [Your Name]
GitHub: [@yashas-salian]



