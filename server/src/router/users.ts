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

/***
 * Returns information about a user specified by their user ID
 */
router.get("/:u_id", async (req, res) => {
	const userID = req.params.u_id;
	const usersCollection = db.collection('users');
	const ref = usersCollection.doc(userID);
	const doc = await ref.get();
	const data = doc.data();
  
	res.send(data);
});

export default router;

