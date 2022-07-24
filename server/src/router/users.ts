import express from 'express';
import { db } from '../firebase';
import { FieldValue } from 'firebase-admin/firestore';
import { ReservationType, RoomIDType, UserType } from '../types';

const router = express.Router();
const users = db.collection('users');

/***
 * Get all users
 */
router.get("/", async (req, res) => {
	const usersSnapshot = await users.get();
	const allUsers = usersSnapshot.docs;
	const userData: FirebaseFirestore.DocumentData[] = [];
	for (const doc of allUsers) {
		const user = doc.data();
		userData.push(user);
	}

	res.send(userData);
});

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
	const ref = users.doc(userID);
	const doc = await ref.get();
	const data = doc.data();
  
	res.send(data);
});

/***
 * Returns the user's favorited rooms
 */
router.get("/:u_id/favorites", async (req, res) => {
	const userID = req.params.u_id;
	const ref = users.doc(userID);
	const doc = await ref.get();
	const data = doc.data();
	const favorites: RoomIDType = data!["my_favorites"];

	res.send(favorites);
});

/***
 * Returns the user's reservations
 */
 router.get("/:u_id/reservations", async (req, res) => {
	const userID = req.params.u_id;
	const ref = users.doc(userID);
	const doc = await ref.get();
	const data = doc.data();
	const reservations: ReservationType = data!["my_reservations"];

	res.send(reservations);
});

/***
 * Adds user's favorites
 */
router.post("/:u_id/favorites", async (req, res) => {
	const userID = req.params.u_id;
	const ref = users.doc(userID);
	const body: RoomIDType = req.body;
	const unionFavorites = await ref.update({
		my_favorites: FieldValue.arrayUnion(body)
	});

	res.send(unionFavorites)
});

/***
 * Removes user's favorites
 */
router.delete("/:u_id/favorites", async (req, res) => {
	const userID = req.params.u_id;
	const ref = users.doc(userID);
	const body: RoomIDType = req.body;
	const removeFavorites = await ref.update({
		my_favorites: FieldValue.arrayRemove(body)
	})

	res.send(removeFavorites)
});

/***
 * Adds user's reservations
 */
 router.post("/:u_id/reservations", async (req, res) => {
	const userID = req.params.u_id;
	const ref = users.doc(userID);
	const body: ReservationType = {
		u_id: userID,
		r_id: req.body.r_id,
		start: req.body.start,
		end: req.body.end,
		reservation_id: req.body.reservation_id
	};
	const unionFavorites = await ref.update({
		my_reservations: FieldValue.arrayUnion(body)
	})

	res.send(unionFavorites)
});

/***
 * Removes user's reservations
 */
 router.delete("/:u_id/reservations", async (req, res) => {
	const userID = req.params.u_id;
	const ref = users.doc(userID);
	const body: ReservationType = req.body;
	const removeReservations = await ref.update({
		my_reservations: FieldValue.arrayRemove(body)
	})

	res.send(removeReservations)
});


/***
 * Removes a user by their ID
 */
router.delete("/:u_id", async (req, res) => {
	const userID = req.params.u_id;
	const ref = users.doc(userID);
	ref.delete();

	res.send(`Deleted user ${userID}`);
});

/***
 * Change user status
 * Options are: student, admin, restricted
 */
router.post("/:u_id", async (req, res) => {
	const userID = req.params.u_id;
	const ref = users.doc(userID);
	ref.update({
		"status": req.body.status
	});

	res.send(`Updated ${userID} to ${req.body.status}`);
})

export default router;

