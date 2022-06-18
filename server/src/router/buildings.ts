import express, { json } from 'express';
import { db } from '../firebase';
import { ReservationType, Date, Time, UserType } from '../types'

const router = express.Router();

/***
 * Returns information about all buildings
 */
router.get("/", async (req, res) => {
	const buildingsCollection = db.collection('buildings');
	const buildingsSnapshot = await buildingsCollection.get();
	const allBuildings = buildingsSnapshot.docs;
	const buildings: FirebaseFirestore.DocumentData[] = [];
	for (const doc of allBuildings) {
		const building = doc.data();
		buildings.push(building);
	}

	res.send(buildings);
});

/***
 * Returns information about a specific building, given its 
 * building ID
 */
router.get("/:b_id", async (req, res) => {
	const buildingID = req.params.b_id;
	const buildingsCollection = db.collection('buildings');
	const ref = buildingsCollection.doc(buildingID);
	const doc = await ref.get();
	const data = doc.data();
  
	res.send(data);
});

router.put("/:b_id/buildings/1", (req, res) => {
	res.json({ message: "Added and Updated Building" })
});

router.put("/updateBuilding/buildings/:b_id/room/:r_id", (req, res) => {
	res.json({ message: "Created New rooms!" })
});

function checkTimeSlot(start:Time, end:Time) {
	if (start.hour < 0 || start.hour > 23 || end.hour < 0 || end.hour > 23 ) {
		return('This is an invalid time');
	}
	if (start.minute < 0 || start.minute > 59 || end.minute < 0 || end.minute > 59) {
		return('This is an invalid time');
	}

	if (start.minute % 15 != 0 || end.minute % 15 != 0) {
		return("Reservations can only be in intervals of 15 minutes")
	}

	if (start.hour > end.hour || (start.hour == end.hour && start.minute >= end.minute)) {
		return("Reservations must end after the starting time");
	} 
	return("Check");
}

router.post("/reservation", async (req, res) => {
	const reservation: ReservationType = req.body;
	const startTime = reservation.time_start;
	const endTime = reservation.time_end;
	if (checkTimeSlot(startTime, endTime) != 'Check') {
		res.json({ message: checkTimeSlot(startTime, endTime)});
	}

	/* update user */
	const userCollection = db.collection('user');
	const userRef = userCollection.doc(reservation.u_id);
	const userDoc = await userRef.get();
	const userReservations: ReservationType[] = await userDoc.get('my_reservations');
	const updatedUserReservations = [...userReservations, reservation];
	await userRef.update({my_reservations:updatedUserReservations})

	/* update building */
	const roomCollection = db.collection('room');
	const roomRef = roomCollection.doc(reservation.r_id);
	const roomDoc = await roomRef.get();
	const roomReservations: ReservationType[] = await roomDoc.get('reservations');
	const updatedRoomReservations = [...roomReservations, reservation];
	await userRef.update({ reservation:updatedRoomReservations} );

	res.send(reservation);
});


export default router;