import express from 'express';
import { db } from '../firebase';

const router = express.Router();

/***
 * Returns information about each building
 */
router.get("/", async (req, res) => {
	const buildingsCollection = db.collection('Buildings');
	const buildingsSnapshot = await buildingsCollection.get();
	const allBuildings = buildingsSnapshot.docs;
	const buildings = [];
	for (const doc of allBuildings) {
		const building = doc.data();
		buildings.push(building);
	}

	res.send(buildings);
});

router.get("/:b_id", async (req, res) => {
	const buildingID = req.params.b_id;
	const buildingsCollection = db.collection('Buildings');
	const ref = buildingsCollection.doc(buildingID);
	const doc = await ref.get();
	res.send(doc);
});

router.put("/:b_id/buildings/1", (req, res) => {
	res.json({ message: "Added and Updated Building" })
});

router.put("/updateBuilding/buildings/:b_id/room/:r_id", (req, res) => {
	res.json({ message: "Created New rooms!" })
});

export default router;