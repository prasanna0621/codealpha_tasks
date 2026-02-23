# 🔐 Secure Cloud Data Protection System  
*(Before Deployment Version)*

---

## 📌 Project Overview

This project is developed as part of a Cloud Computing Internship Task.

The main objective of this system is to:

- Prevent SQL Injection attacks
- Encrypt sensitive user data using AES-256 Encryption
- Secure login using JWT Authentication
- Implement a Double Layer Security System
- Restrict sensitive operations using a Capability Code Mechanism

⚠ This version runs completely on your local system (No cloud deployment included).

---

## 🧠 What is SQL Injection?

SQL Injection is a cyber attack where a hacker tries to manipulate database queries by inserting malicious input.

Example of dangerous input:

```
' OR 1=1 --
```

If the system is not protected, attackers can:

- Bypass login
- View all database records
- Delete or modify data

This project prevents SQL Injection using:

✔ Prepared Statements  
✔ Input Validation  
✔ Encrypted Storage  

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MySQL
- AES-256 Encryption (Node.js crypto module)
- JSON Web Token (JWT)
- Postman (for API testing)

---

## 📂 Project Structure

```
secure-cloud-system/
│
├── server.js
├── package.json
└── README.md
```

---

## 💻 System Requirements

Before running this project, make sure you have:

- Node.js installed
- MySQL installed and running
- Postman (optional, but recommended)

---

## 🚀 Step 1 – Install Node.js

Download Node.js from:

https://nodejs.org

After installing, verify by running:

```
node -v
npm -v
```

If version numbers appear, Node.js is installed correctly.

---

## 🗄 Step 2 – Setup MySQL Database

Open MySQL and run the following commands:

### Create Database

```
CREATE DATABASE secure_cloud;
```

### Use Database

```
USE secure_cloud;
```

### Create Users Table

```
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  password TEXT
);
```

---

## 📦 Step 3 – Install Project Dependencies

Open your project folder in terminal and run:

```
npm install
```

If needed, you can manually install:

```
npm install express mysql2 jsonwebtoken
```

---

## 🔌 Step 4 – Configure Database Connection

Inside `server.js`, update your database connection:

```js
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_mysql_password",
  database: "secure_cloud"
});
```

Replace:

your_mysql_password

with your actual MySQL password.

---

## ▶ Step 5 – Run the Server

Start the backend server:

```
node server.js
```

If successful, you will see:

```
Server running on port 3000
```

Now open your browser and go to:

```
http://localhost:3000
```

---

## 🧪 Step 6 – Testing Using Postman

### 🔹 Register User

Method: POST  
URL:

```
http://localhost:3000/register
```

Body → JSON:

```json
{
  "username": "prasanna",
  "password": "123456"
}
```

Expected Response:

```
User registered securely
```

---

### 🔹 Login User

Method: POST  
URL:

```
http://localhost:3000/login
```

Body → JSON:

```json
{
  "username": "prasanna",
  "password": "123456"
}
```

Expected Response:

```
JWT Token generated
```

---

## 🔐 Security Features Implemented

### 1️⃣ SQL Injection Prevention
- Uses prepared statements
- Prevents execution of malicious queries

### 2️⃣ AES-256 Encryption
- Encrypts sensitive data before storing
- Protects user credentials

### 3️⃣ JWT Authentication
- Generates secure login tokens
- Restricts access to authorized users

### 4️⃣ Double Layer Security
- Layer 1: Input validation & Prepared statements
- Layer 2: Encrypted data storage + Token verification

### 5️⃣ Capability Code Mechanism
- Special code required for sensitive server access
- Prevents unauthorized operations

---

## ❗ Common Errors & Solutions

### ❌ Server not starting
- Make sure Node.js is installed
- Run `npm install`
- Check if port 3000 is already in use

### ❌ Database connection error
- Ensure MySQL is running
- Verify username and password
- Confirm database name is correct

---

## 📌 Current Project Status

✔ Backend Development Completed  
✔ Database Integration Completed  
✔ Security Features Implemented  
❌ Cloud Deployment (Not Included in This Version)

---

## 👨‍💻 Author

Addagiri Prasanna  
Cloud Computing Internship Project  
