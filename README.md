
#  Frontend Developer Assignment – Kamesh H

This project demonstrates a **modern full-stack web application** built with **React.js (frontend)** and **Node.js/Express (backend)**.  
It implements **JWT authentication**, **role-based access**, and **CRUD operations** — all wrapped in a secure, scalable architecture.

---

##  Project Overview

###  Objective
To build a **scalable web app** featuring:
- Secure authentication & authorization  
- Protected dashboard (JWT-based)  
- CRUD operations for a sample entity (e.g., Tasks)  
- Integration between frontend & backend  
- Responsive, clean UI

---

##  Tech Stack

### Frontend
- **React.js**
- **TailwindCSS** (responsive design)
- **Axios** for API calls
- **React Router DOM** for routing & protected routes

### Backend
- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **bcrypt.js** for password hashing
- **jsonwebtoken (JWT)** for authentication
- **CORS** & **dotenv** for security & configuration

---

##  Features Implemented

###  Authentication & Security
- User registration & login with JWT
- Password hashing using bcrypt
- JWT middleware for route protection
- Role-based access (User/Admin)

###  CRUD Operations
- Create, Read, Update, Delete operations on **Tasks**
- CRUD routes protected by JWT
- Frontend UI to manage tasks (Add/Edit/Delete/View)

###  Dashboard
- Displays user profile (fetched from backend)
- Task management table (CRUD)
- Logout functionality
- Success & error messages displayed in real-time

###  Additional Features
- Input validation (client + server)
- API versioning (`/api/v1`)
- Centralized error handling
- Modular folder structure for scalability

---

##  Project Structure

```

frontend-developer-task-kamesh/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   ├── public/
│   └── package.json
│
├── README.md
├── server_logs.txt
└── frontend_api_collection.json



###  Clone the Repository
```bash
git clone https://github.com/kamesh-h/frontend-developer-task-kamesh.git
cd frontend-developer-task-kamesh
````

###  Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the server:

```bash
npm run dev
```

###  Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Access the app at **[http://localhost:3000](http://localhost:3000)**

---

##  API Documentation

### Base URL

```
http://localhost:5000/api/v1
```

### Auth Routes

| Method | Endpoint       | Description             |
| :----- | :------------- | :---------------------- |
| POST   | /auth/register | Register new user       |
| POST   | /auth/login    | Login and get JWT token |

### Task Routes (Protected)

| Method | Endpoint   | Description     |
| :----- | :--------- | :-------------- |
| GET    | /tasks     | Fetch all tasks |
| POST   | /tasks     | Create new task |
| PUT    | /tasks/:id | Update task     |
| DELETE | /tasks/:id | Delete task     |

> Full Postman Collection is included in the repo: `frontend_api_collection.json`

---

##  Security Practices

* Passwords hashed using bcrypt
* JWT tokens stored in HTTP headers
* Input sanitization
* Helmet + CORS configuration
* Modular middleware validation

---

##  Scalability Note

This architecture can scale using:

* **Microservices**: Split auth, task, and UI into separate services
* **Caching**: Use Redis for frequently accessed data
* **Load Balancing**: Use NGINX or AWS ELB for horizontal scaling
* **Docker**: Containerize both frontend & backend for easy deployment

---

##  Deliverables

* ✅ Frontend (React.js) + Backend (Express.js)
* ✅ JWT Authentication & Role-Based Access
* ✅ CRUD APIs with validation
* ✅ Responsive Dashboard UI
* ✅ Postman Collection
* ✅ Log Files (`server_logs.txt`)
* ✅ Scalability Note in README

---

##  Developer

**Name:** Kamesh H
**Role:** Frontend Developer Intern (Assignment Submission)

---

## 📬 Submission Details

**To:**

```
saami@bajarangs.com  
nagasai@bajarangs.com  
chetan@bajarangs.com  
(CC: sonika@primetrade.ai)
```

**Subject:**

```
Frontend Developer Task – Kamesh H
```

**Included in Repository:**
 GitHub Repo (frontend + backend + README)
 Postman API Collection (`frontend_api_collection.json`)
 Log Files (`server_logs.txt`)

---

## 🏁 Thank You

Thank you for reviewing this submission.
This project demonstrates my ability to design, secure, and integrate full-stack applications with professional frontend-backend communication, scalable architecture, and production-ready practices.
"# frontend-developer-task-kamesh" 
