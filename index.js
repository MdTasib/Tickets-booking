const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/", require("./routes/userRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log("Server is running on", PORT));
