
#  Scalable REST API with Authentication & Role-Based Access  

### **Backend Developer Intern – Project Assignment**  

This project is a **scalable REST API** built using **Node.js + Express + MongoDB (Mongoose)** that demonstrates secure authentication, role-based access, and CRUD operations.  
A minimal **React.js frontend** is also included to test and visualize API functionality.  

---

##  Features Overview  

###  **Backend (Primary Focus)**  
- 🔐 **User Authentication** – Register/Login with JWT-based authentication  
- 🧑‍💼 **Role-Based Access Control** – User vs Admin  
- 🗃️ **CRUD APIs** – Example entity: `Tasks`  
- 🧩 **API Versioning** – `/api/v1/` prefix  
- ⚙️ **Validation & Error Handling** – Centralized middleware  
- 📜 **API Documentation** – Postman Collection or Swagger UI  
- 🧱 **Database** – MongoDB (Mongoose ORM)  

---

###  **Frontend (Supportive)**  
- ⚛️ **React.js** UI for testing API endpoints  
- 👤 Register & Login pages  
- 🔑 Dashboard with JWT-based access  
- ✏️ CRUD actions on “Tasks” (Create, Read, Update, Delete)  
- 🧾 Real-time error/success message handling  

---

##  Tech Stack  

| Layer | Technology |
|-------|-------------|
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT (JSON Web Token) + bcrypt |
| Frontend | React.js |
| Docs | Postman |


---

## Folder Structure  

```

📦 scalable-api-assignment
├── backend
│   ├── src
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── src/
│   ├── package.json
│   └── public/
│
├── README.md
└── postman_collection.json

````

---

##  Setup Instructions  

###  **Backend Setup**

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install


**Run backend**

```bash
npm run dev
```

Server runs at: `http://localhost:5000/api/v1`

---

###  **Frontend Setup**

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3000`

---

##  API Documentation

### **Auth Routes**

| Method | Endpoint              | Description         | Access |
| ------ | --------------------- | ------------------- | ------ |
| POST   | /api/v1/auth/register | Register a new user | Public |
| POST   | /api/v1/auth/login    | Login and get JWT   | Public |

### **Task Routes**

| Method | Endpoint          | Description     | Access    |
| ------ | ----------------- | --------------- | --------- |
| GET    | /api/v1/tasks     | Get all tasks   | Protected |
| POST   | /api/v1/tasks     | Create new task | Protected |
| PUT    | /api/v1/tasks/:id | Update task     | Protected |
| DELETE | /api/v1/tasks/:id | Delete task     | Admin     |

 ##  Included Deliverables

-  **Postman Collection:** [backend_api_collection.json](./backend_api_collection.json)
-  **Server Logs:** [server_logs.txt](./server_logs.txt)

---

##  Security Practices
* Passwords hashed with **bcrypt**
* JWT stored securely in **HTTP headers**
* Input sanitized with **express-validator**
* Centralized error handling for clean responses

---

##  Scalability Notes

This backend can easily scale using:

* **Microservices architecture** for user & task modules
* **Redis caching** for repeated API calls
* **Load balancing** via Nginx or AWS ELB
* **Docker containers** for deployment
* **Horizontal scaling** with Kubernetes or serverless functions

---

##  Developer

**Name:** Kamesh H
**Role:** Backend Developer Intern Applicant

---

## Submission

Send your:

*  GitHub Repo link
*  Postman collection
*  Log files

To:

```
saami@bajarangs.com  
nagasai@bajarangs.com  
chetan@bajarangs.com  
(CC: sonika@primetrade.ai)
```

**Subject:** Backend Developer Task – Kamesh H

---

