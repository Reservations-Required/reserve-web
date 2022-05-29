import express from 'express';
import { db } from './firebase.js';

const router = express.Router();

router.get("/", (req, res) => {
	res.json({ message: "Hello from server!" });
	res.json({ message: "hi"});
});

// ADMIN ROUTES
router.post("/register/buildings", (req, res) => {
	res.json({ message: "Created a building!" });
})

router.get("/register/buildings/1", (req, res) => {
	res.json({ message: "Returned info about building 1!" })
})

router.put("/updateBuilding/buildings/1", (req, res) => {
	res.json({ message: "Added and Updated Building" })
})

router.put("/updateBuilding/buildings/1/room/1", (req, res) => {
	res.json({ message: "Created New rooms!" })
})

// USER ROUTES
router.post("/book/buildings", (req, res) => {
	res.json({ message: "Book a specific room" })
})

router.get("/search/buildings/1", (req, res) => {
	res.json({ message: "Returned info about the rooms available for the building" })
})

export default router;