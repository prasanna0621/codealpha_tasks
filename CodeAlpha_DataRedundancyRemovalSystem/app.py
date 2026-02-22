from pymongo import MongoClient
import hashlib

# 🔹 Paste your working connection string here
connection_string = "mongodb+srv://internUser:internUser123@cluster0.ga41zbr.mongodb.net/?appName=Cluster0"

client = MongoClient(connection_string)
db = client["internship_db"]
collection = db["users"]

# 🔹 Create unique index on email (prevents duplicates automatically)
collection.create_index("email", unique=True)

def generate_hash(email):
    return hashlib.sha256(email.encode()).hexdigest()

def add_user(name, email):
    data_hash = generate_hash(email)

    # Check if hash already exists
    existing = collection.find_one({"data_hash": data_hash})

    if existing:
        print("❌ Duplicate Data Found. Not Inserted.")
        return

    user_data = {
        "name": name,
        "email": email,
        "data_hash": data_hash
    }

    collection.insert_one(user_data)
    print("✅ Unique Data Inserted Successfully.")

# 🔹 Test Input
name_input = input("Enter Name: ")
email_input = input("Enter Email: ")

add_user(name_input, email_input)