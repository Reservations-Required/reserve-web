import express from 'express';
import { db } from '../firebase';
import { ReservationType, Time } from '../types'

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

// RESERVATION ROUTES
/**
 * Reservation time verification
 * @param start the start time of the desired reservation
 * @param end the end time of the desired reservation
 * @returns either verifies the time or sends the appropriate error message
 */
function checkTimeSlot(start: Time, end: Time) {
	if (start.hour < 0 || start.hour > 23 || end.hour < 0 || end.hour > 23) {
		return ('This is an invalid time');
	}
	if (start.minute < 0 || start.minute > 59 || end.minute < 0 || end.minute > 59) {
		return ('This is an invalid time');
	}

	if (start.minute % 15 != 0 || end.minute % 15 != 0) {
		return ("Reservations can only be in intervals of 15 minutes")
	}

	if (start.hour > end.hour || (start.hour == end.hour && start.minute >= end.minute)) {
		return ("Reservations must end after the starting time");
	}
	return ("Check");
}

router.post("/reservation", async (req, res) => {
	const reservation: ReservationType = req.body;
	const startTime = reservation.time_start;
	const endTime = reservation.time_end;
	if (checkTimeSlot(startTime, endTime) != 'Check') {
		res.json({ message: checkTimeSlot(startTime, endTime) });
	}

	/* update user */
	const userCollection = db.collection('user');
	const userRef = userCollection.doc(reservation.u_id);
	const userDoc = await userRef.get();
	const userReservations: ReservationType[] = await userDoc.get('my_reservations');
	const updatedUserReservations = [...userReservations, reservation];
	await userRef.update({ my_reservations: updatedUserReservations })

	/* update building */
	const roomCollection = db.collection('room');
	const roomRef = roomCollection.doc(reservation.r_id);
	const roomDoc = await roomRef.get();
	const roomReservations: ReservationType[] = await roomDoc.get('reservations');
	const updatedRoomReservations = [...roomReservations, reservation];
	await userRef.update({ reservation: updatedRoomReservations });

	res.send(reservation);
});


export default router;