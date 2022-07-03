import express from 'express';
import { db, storage } from '../firebase';
import { RoomType } from '../types';

const router = express.Router();

async function getURL(imageRef: string) {
	const [url] = await storage.bucket("reservations-required.appspot.com").file(imageRef).getSignedUrl({
		version: "v4",
		action: "read",
		expires: Date.now() + 15 * 60 * 1000
	})

	return url;
}

/***
 * Returns information about a room (i hope it does too LOL)
 */
 router.get("/:r_id", async (req, res) => {
	const roomID = req.params.r_id;
	const roomCollection = db.collection('rooms');
	const ref = roomCollection.doc(roomID);
	const doc = await ref.get();
	const roomsInfo = doc.data();
	
	const roomsURL = await getURL(roomsInfo!["image"]);
	roomsInfo!["imageURL"] = roomsURL;
	
	res.send(roomsInfo);
});

/***
 * Adds a new room with the next available ID (i hope it does LOL)
 */
 router.post("/", async (req, res) => {
	const roomsCollection = db.collection('rooms');
	const ref = roomsCollection.doc(req.body.r_id.toString());
    
	const room: RoomType = {
        r_id: req.body.r_id,
        b_id: req.body.b_id,
        room_number: req.body.room_number,
        description: req.body.description,
        amenities: req.body.amenities,
		image: "",
        reservations: []
    }

	await ref.set(room);
	res.send(room);
});


/***
 * Removes a room by its ID (also really hoping this works)
 */
 router.delete("/:r_id", async (req, res) => {
	const roomID = req.params.r_id;
	const roomsCollection = db.collection('rooms');
	const ref = roomsCollection.doc(roomID);
	ref.delete();
    res.send(`Deleted room ${roomID}`);
});


export default router;