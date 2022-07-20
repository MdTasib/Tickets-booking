const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(errorHandler);

// Routes
app.use("/", require("./routes/userRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Middlewares
app.use(errorHandler);

app.listen(PORT, () => console.log("Server is running on", PORT));
