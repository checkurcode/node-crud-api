const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, this is your deployed Node.js backend!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
