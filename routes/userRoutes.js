const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).send({ title: "Succesfully setup server" });
});

router.post("/", registerUser);

router.post("/login", loginUser);

module.exports = router;
