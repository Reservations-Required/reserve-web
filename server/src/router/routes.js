import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
	res.json({ message: "Hello from server!" });
});

// USER ROUTES
router.post("/book/buildings", (req, res) => {
	res.json({ message: "Book a specific room" })
});

router.get("/search/buildings/1", (req, res) => {
	res.json({ message: "Returned info about the rooms available for the building" })
});
	
export default router;