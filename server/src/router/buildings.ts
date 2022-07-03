import express from 'express';
import { db } from '../firebase';
import { BuildingType } from '../types';

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

/***
 *  Removes a building by its ID
 */
router.delete("/:b_id", async (req, res) => {
	const buildingID = req.params.b_id;
	const buildingsCollection = db.collection('buildings');
	const ref = buildingsCollection.doc(buildingID);
	ref.delete();
	res.send(`Deleted building ${buildingID}`);
});


/***
 *  Adds a new building with the next available ID
 */
router.post("/", async (req, res) => {
	const buildingsCollection = await db.collection('buildings');
	const ref = buildingsCollection.doc(req.body.b_id.toString());
	const building: BuildingType = {
		b_id: req.body.b_id,
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

export default router;