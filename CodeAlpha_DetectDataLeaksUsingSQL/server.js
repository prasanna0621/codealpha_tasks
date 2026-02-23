const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.createHash('sha256').update("my_encryption_key").digest();
const iv = Buffer.alloc(16, 0); // Initialization vector

function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(text) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Connect to MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pps@137.",  // ⚠ use YOUR root password
    database: "secure_cloud_db"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL Database ✅");
});

app.get('/', (req, res) => {
    res.send("Secure Cloud Backend Running 🚀");
});

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send("Access Denied ❌ No Token Provided");
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send("Invalid or Expired Token ❌");
        }
        req.user = decoded;
        next();
    });
}

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Parameterized query (prevents SQL injection)
        const encryptedSecret = encrypt("Sensitive user private data");
        const query = "INSERT INTO users (email, password, secret_data) VALUES (?, ?, ?)";
        
        db.query(query, [email, hashedPassword, encryptedSecret],(err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error registering user");
            }
            res.send("User Registered Securely ✅");
        });

    } catch (error) {
        res.status(500).send("Server error");
    }
});

const jwt = require('jsonwebtoken');
const SECRET_KEY = "my_super_secret_key";

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = "SELECT * FROM users WHERE email = ?";

    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).send("Server error");

        if (results.length === 0) {
            return res.status(400).send("User not found");
        }

        const user = results[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).send("Wrong password");
        }

        // Create JWT Token (Capability Code)
        const token = jwt.sign(
            { id: user.id, email: user.email },
            SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.json({ message: "Login successful ✅", token });
    });
});

app.get('/protected', verifyToken, (req, res) => {
    res.json({
        message: "Protected Data Accessed Successfully 🔐",
        user: req.user
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});