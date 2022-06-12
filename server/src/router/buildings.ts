import express from 'express';
import { db } from '../firebase';

const router = express.Router();

/***
 * Returns information about each building
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

export default router;