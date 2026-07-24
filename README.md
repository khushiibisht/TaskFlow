# TaskFlow

A full-stack task management app with real-time CRUD operations, built to practice production-style full-stack development — from database design to cloud deployment.

**🔗 Live App:** https://task-flow-beta-orpin.vercel.app
**🔗 Backend API:** https://taskflow-backend-3b2s.onrender.com/tasks

> Note: the backend is on Render's free tier, which spins down after inactivity — the first request after idle time may take 30-60 seconds to respond.

## Features

- Create, view, complete, and delete tasks in real time
- Persistent storage via MongoDB Atlas (cloud-hosted)
- Responsive, clean UI with instant feedback on every action
- RESTful API with proper HTTP status codes and error handling

## Tech Stack

**Frontend:** React, Vite, CSS
**Backend:** Node.js, Express
**Database:** MongoDB, Mongoose
**Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)
**Other:** CORS, dotenv, Git/GitHub

## Architecture

React (Vercel) → HTTP requests → Express API (Render) → Mongoose → MongoDB Atlas

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| GET | /tasks/:id | Get a single task |
| POST | /tasks | Create a new task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

## Running Locally

**Backend:**
```bash
cd backend
npm install
# Create a .env file with MONGODB_URI and PORT
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
# Create a .env file with VITE_API_URL=http://localhost:3000
npm run dev
```

## What I Learned

Building this project involved solving real deployment challenges: configuring CORS for cross-origin requests between frontend and backend, managing environment-specific configuration for local vs. production, and debugging a subtle file-encoding issue (a UTF-8 BOM) that silently broke environment variable loading in Vite.