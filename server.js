const express = require("express");
const app = express();

// Middleware (optional)
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Hello, your API is running!");
});

// 🔥 Use Render's assigned port instead of a fixed one
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
