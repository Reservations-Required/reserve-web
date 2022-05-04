module.exports = () => {
	const express = require("express");
	const router = express.Router();

	router.get("/:b_id", (req, res) => {
		res.json({ message: `Returned info about building ${req.params.b_id}!` })
	});

	router.put("/:b_id/buildings/1", (req, res) => {
		res.json({ message: "Added and Updated Building" })
	});

	router.put("/updateBuilding/buildings/1/room/1", (req, res) => {
		res.json({ message: "Created New rooms!" })
	});

	return router;
}
