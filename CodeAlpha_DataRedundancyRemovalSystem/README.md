# ☁️ Cloud-Based Data Redundancy Removal System

## 📌 What Is This Project?

This is a simple project that stores user data in a cloud database.

The system:
- Takes user Name and Email
- Checks if the email already exists
- If it exists → it stops duplicate entry
- If it does not exist → it stores the data

This helps remove duplicate (redundant) data.

---

## 🧠 What Is Duplicate Data?

Duplicate data means:
If the same email is entered again and again,
the system will not store it twice.

Example:

First time:
Email = test@gmail.com → Stored ✅

Second time:
Email = test@gmail.com → Rejected ❌

---

## 🛠 Technologies Used

- Python
- MongoDB Atlas (Cloud Database)
- PyMongo (Python library for MongoDB)

Don't worry if you don’t know these.  
Just follow the steps below 🙂

---

# 🚀 How To Run This Project (Step-by-Step)

---

## ✅ Step 1: Install Python

1. Go to: https://www.python.org/downloads/
2. Download Python
3. Install it
4. While installing, make sure to tick:
   ✔ Add Python to PATH

After installation, open Command Prompt and type: py --version

If you see a version number, Python is installed correctly.

---

## ✅ Step 2: Install Required Library

In Command Prompt, type: py -m pip install pymongo dnspython


Wait until installation completes.

---

## ✅ Step 3: Create MongoDB Atlas Account (Cloud Database)

1. Go to: https://www.mongodb.com/atlas
2. Create free account
3. Create a Free Cluster (M0)
4. Create a Database User (set username & password)
5. Go to Network Access → Allow access from anywhere (0.0.0.0/0)
6. Click Connect → Drivers
7. Copy the connection string

It will look like this: mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

Replace:
- username with your username
- password with your database password

---

## ✅ Step 4: Update Connection String in app.py

Open the file `app.py`.

Find this line:
connection_string = "PASTE_YOUR_CONNECTION_STRING_HERE"

Replace it with your actual MongoDB connection string.

Save the file.

---

## ▶️ Step 5: Run the Project

In Command Prompt, go to your project folder.

Then type: py app.py

Enter Name:
Enter Email:


Enter details.

---

# 🔍 What Happens Inside the Project?

1. You enter Name and Email.
2. The system creates a special code (hash) from the email.
3. It checks in cloud database:
   - If email already exists → shows Duplicate message.
   - If email does not exist → stores the data.
4. Database also has protection to avoid duplicates.

---

# ✅ Example Output

First Time:
Enter Name: Prasanna
Enter Email: test@gmail.com
Output:
Unique Data Inserted Successfully.

Second Time (Same Email):
Duplicate Data Found. Not Inserted.