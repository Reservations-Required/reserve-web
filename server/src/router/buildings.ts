import express from 'express';
import { db } from '../firebase.js';

const router = express.Router();

router.get("/:b_id", (req, res) => {
	res.json({ message: `Returned info about building ${req.params.b_id}!` })
});

router.put("/:b_id/buildings/1", (req, res) => {
	res.json({ message: "Added and Updated Building" })
});

router.put("/updateBuilding/buildings/:b_id/room/:r_id", (req, res) => {
	res.json({ message: "Created New rooms!" })
});

export default router;