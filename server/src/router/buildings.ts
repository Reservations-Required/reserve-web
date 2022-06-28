import express from 'express';
import { db } from '../firebase';
import { BuildingType, RoomIDType, RoomType } from '../types';

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
	res.json({ message: "Created New Rooms!" })
});


/***
 *  Removes a building by its ID
 */
router.delete("/:b_id", async (req, res) => {
	const buildingID = req.params.b_id;
	const buildingsCollection = db.collection('buildings');
	const ref = buildingsCollection.doc(buildingID);
	ref.delete();
});


/***
 *  Adds a new building with the next available ID
 */
router.post("/", async (req, res) => {
	const buildingsCollection = await db.collection('buildings');
	const ref = buildingsCollection.doc(req.body.b_id);
	const building: BuildingType = {
		b_id: req.body.b_id,
		description: req.body.description,
		location: req.body.location,
		name: req.body.name,
		short: req.body.short,
		rooms: req.body.rooms,
	};
	await ref.set(building);
	res.send(building);
});


/***
 * Adds a new room with the next available ID (i hope it does LOL)
 */
router.post("/:b_id/rooms/", async (req, res) => {
	const buildingID = req.params.b_id;
	const buildingsCollection = db.collection('buildings');
	const ref = buildingsCollection.doc(buildingID);

	const doc = await ref.get();
	const rooms: RoomIDType[] = await doc.get('rooms');
	const room: RoomType = req.body;

	const updated_rooms = [...rooms, room];
	res.send(updated_rooms);
	await ref.update({ rooms: updated_rooms });
	res.send(ref);
});

/***
 * Returns information about a room (i hope it does too LOL)
 */
router.get("/:b_id/rooms/:r_id", async (req, res) => {
	const roomID = req.params.r_id;
	const roomCollection = db.collection('rooms');
	const ref = roomCollection.doc(roomID);
	const doc = await ref.get();
	const roomsInfo: RoomType = await doc.get('rooms');
	res.send(roomsInfo);
});


/***
 * Removes a room by its ID (also really hoping this works)
 */
router.delete("/:b_id/rooms/:r_id", async (req, res) => {
	const roomID = req.params.r_id;
	const roomsCollection = db.collection('rooms');
	const ref = roomsCollection.doc(roomID);
	ref.delete();
});


export default router;