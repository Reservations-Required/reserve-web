import express from 'express';
import { FieldValue } from 'firebase-admin/firestore';
import { db } from '../firebase';
import { BuildingType, RoomIDType } from '../types';

const router = express.Router();
const buildingsCollection = db.collection('buildings');

/***
 * Returns information about all buildings
 */
router.get("/", async (req, res) => {
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
	const ref = buildingsCollection.doc(buildingID);
	const doc = await ref.get();
	const data = doc.data();

	res.send(data);
});

/***
 *  Removes a building by its ID
 */
router.delete("/:b_id", async (req, res) => {
	const buildingID = req.params.b_id;
	const ref = buildingsCollection.doc(buildingID);
	ref.delete();
	res.send(`Deleted building ${buildingID}`);
});


/***
 *  Adds a new building with the next available ID
 */
router.post("/", async (req, res) => {
	const ref = buildingsCollection.doc(req.body.b_id.toString());
	const building: BuildingType = {
		description: req.body.description,
		location: req.body.location,
		name: req.body.name,
		short: req.body.short,
		rooms: req.body.rooms,
		image: ""
	};
	await ref.set(building);
	res.send(building);
});

/***
 * Adds a room to the associated building ID
 */
router.post("/:b_id/rooms", async (req, res) => {
	const buildingID = req.params.b_id;
	const ref = buildingsCollection.doc(buildingID);
	const body: RoomIDType = {
		r_id: req.body.r_id,
		b_id: parseInt(req.params.b_id)
	};

	const unionRoom = await ref.update({
		rooms: FieldValue.arrayUnion(body)
	});

	res.send(unionRoom);
});

export default router;