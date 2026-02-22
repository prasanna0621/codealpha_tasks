from pymongo import MongoClient

# Paste your full connection string inside quotes
connection_string = "mongodb+srv://internUser:internUser123@cluster0.ga41zbr.mongodb.net/?appName=Cluster0"

client = MongoClient(connection_string)

try:
    client.admin.command('ping')
    print("✅ Successfully connected to MongoDB Atlas!")
except Exception as e:
    print("❌ Connection failed:", e)