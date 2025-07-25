const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@school.com" && password === "admin123") {
    return res.json({ message: "Login successful" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

// ⬇️ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
