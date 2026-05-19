# 🏟️ BookMyTurf

A full-stack turf booking web application built with React, TypeScript, and Node.js.

> 💡 This project was built while learning backend development with Node.js, Express, and MongoDB for the first time — after completing the React + TypeScript frontend.

## 🚀 Live Demo
Coming soon

## ✨ Features

- Browse available turfs with details and pricing
- Multi-step booking flow — select date, time slot, and enter details
- Real-time slot availability — booked slots are disabled instantly
- View all your bookings in one place
- Data persisted in MongoDB Atlas (cloud database)

## 🛠️ Tech Stack

**Frontend**
- React + TypeScript
- React Router v6
- Tailwind CSS
- Vite

**Backend**
- Node.js + Express
- MongoDB Atlas + Mongoose
- REST API

## 📁 Project Structure

```
bookmyturf/
├── frontend/         # React + TypeScript app
│   └── src/
│       ├── pages/    # Home, TurfDetails, Bookings, MyBookings
│       ├── components/
│       ├── routes/
│       ├── types/
│       └── api.ts    # All API calls in one place
└── backend/          # Node.js + Express server
    ├── models/       # Mongoose models (Turf, Booking)
    ├── routes/       # API routes
    └── server.js
```

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

```bash
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

App runs at `http://localhost:5173`  
API runs at `http://localhost:5000`

## 📚 What I Learned

- How to build a REST API with Node.js and Express
- How to model and store data in MongoDB using Mongoose
- How to connect a React frontend to a backend API using `fetch`
- How to structure a full-stack project
- Environment variables and keeping secrets safe with `.env`

## 👤 Author

**Harsh Mitali**  
GitHub: [@Mharsh22](https://github.com/Mharsh22)
