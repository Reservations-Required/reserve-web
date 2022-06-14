import express from 'express';
import { db } from '../firebase';
import { UserType } from '../types';

const router = express.Router();

/***
 * Adds a new user to the database
 */
router.post("/", async (req, res) => {
	const usersCollection = await db.collection('users');
	const usersDoc = usersCollection.doc(req.body.u_id);
	const newUser: UserType = {
		u_id: req.body.u_id,
		name: req.body.name,
		authProvider: "google",
		email: req.body.email,
		my_reservations: [],
		my_favorites: [],
		status: req.body.status,
	}
	await usersDoc.set(newUser);
	res.send(newUser);
});

export default router;