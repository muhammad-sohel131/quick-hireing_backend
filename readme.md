# Job Portal Backend API

A RESTful backend API for a **Job Portal platform** called QuickHire, where administrators can manage job postings and users can apply for jobs.

This project is built using **Node.js, Express.js, TypeScript, MongoDB, and Mongoose**.
It provides secure authentication, job management, and job application handling.

---

# 🚀 Features

* JWT Authentication
* Role-based access (Super Admin)
* Create, Read, Delete Jobs
* Submit Job Applications
* MongoDB Database Integration
* Secure Password Hashing with Bcrypt
* RESTful API structure
* Environment-based configuration

---

# 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **TypeScript**
* **MongoDB**
* **Mongoose**
* **JWT Authentication**
* **Bcrypt**
* **CORS**


# ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following variables.

```
PORT=5000

DB_URL=mongodb+srv://username:password@cluster0.l1cudpz.mongodb.net/?appName=Cluster0

NODE_ENV=development

JWT_ACCESS_SECRET=sdfjfjlkas923omande2
JWT_ACCESS_EXPIRES=30d

BCRYPT_SALT_ROUND=10

SUPER_ADMIN_EMAIL=super.admin@gmail.com
SUPER_ADMIN_PASSWORD=123456

FRONTEND_URL=http://localhost:3000
```

---

# 📦 Installation

Clone the repository

```
git clone https://github.com/muhammad-sohel131/quick-hireing_backend.git
```

Go to the project directory

```
cd quick-hireing_backend
```

Install dependencies

```
npm install
```

---

# ▶️ Run the Project

### Development mode

```
npm run dev
```

### Production build

```
npm run build
npm start
```

Server will run at:

```
http://localhost:5000
```

---

# 🔑 Super Admin Login

The system automatically creates a **Super Admin** using the environment variables.

```
Email: super.admin@gmail.com
Password: 123456
```

---

# 📡 API Endpoints

### Auth

```
POST /api/auth/login
```

### Jobs

```
GET /api/jobs
GET /api/jobs/:id
POST /api/jobs
DELETE /api/jobs/:id
```

### Job Applications

```
POST /api/applications
GET /api/applications
```

# 🧪 Example API Response

### Get Jobs

```
GET /api/jobs
```

Response:

```json
{
  "success": true,
  "data": [
    {
      "title": "Frontend Developer",
      "company": "Tech Corp",
      "location": "Remote",
      "category": "Technology",
      "description": "React developer needed",
      "createdAt": "2026-03-05"
    }
  ]
}
```

---

# 📌 Notes

* Make sure MongoDB connection string is correct.
* Ensure `.env` file is added before running the project.
* Do **not commit `.env` files** to the repository.

---

# 👨‍💻 Author

**Md Sohel**
Full Stack Developer — Sardar IT
Aspiring Software Engineer
