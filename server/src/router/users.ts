import express from 'express';
import { db } from '../firebase';

const router = express.Router();

/***
 * Adds a new user to the database
 */
router.post("/", async (req, res) => {
	const usersCollection = await db.collection('users');
	const usersDoc = usersCollection.doc(req.body.uid);
	const user = req.body;
	await usersDoc.set(user);
	res.send(user);
});

export default router;