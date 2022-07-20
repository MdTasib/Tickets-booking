const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

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
