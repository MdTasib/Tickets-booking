const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.status(200).send({ title: "Succesfully setup server" });
});

app.listen(PORT, () => console.log("Server is running on", PORT));
