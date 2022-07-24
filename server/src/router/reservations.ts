import express from 'express';
import fetch from 'node-fetch';
import { db } from '../firebase';
import { checkTimeSlot } from '../functions';
import { ReservationType } from '../types';

const router = express.Router();
const SERVER_URL = "http://localhost:8080/api";
const roomCollection = db.collection('rooms');

/***
 * Return all reservations given a room ID
 */
router.get("/:r_id", async (req, res) => {
    const roomID = req.params.r_id;
    const reservationSnapshot = await roomCollection.doc(roomID).collection('reservations').get();
    const allReservations = reservationSnapshot.docs;
    const reservations: FirebaseFirestore.DocumentData[] = [];
    for (const doc of allReservations) {
        const reservation = doc.data();
        reservations.push(reservation);
    }

    res.send(reservations);
});

/***
 * Add a reservation by its room ID, also adds to user's reservations
 */
router.post("/:r_id", async (req, res) => {
    const roomID = req.params.r_id;
    const reservation: ReservationType = {
        u_id: req.body.u_id,
        r_id: parseInt(roomID),
        start: req.body.start,
        end: req.body.end,
        reservation_id: req.body.reservation_id
    };

    const startTime = reservation.start;
    const endTime = reservation.end;

    if (checkTimeSlot(startTime, endTime) != 'Check') {
        res.send({ message: checkTimeSlot(startTime, endTime) });
    } else {
        const reservationRef = roomCollection.doc(roomID).collection('reservations').doc(reservation.reservation_id.toString());
        await reservationRef.set(reservation);

        await fetch(`${SERVER_URL}/users/${req.body.u_id}/reservations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                r_id: parseInt(roomID),
                start: req.body.start,
                end: req.body.end,
                reservation_id: req.body.reservation_id
            })
        })

        res.send(reservation);
    }
});

/***
 * Remove a reservation by its room ID, remove from user's reservations
 */
router.delete("/:r_id/cancel/:reservation", async (req, res) => {
    const roomID = req.params.r_id;
    const reservationID = req.params.reservation;

    const reservationCollection = roomCollection.doc(roomID).collection('reservations');
    const ref = reservationCollection.doc(reservationID);
    const data = (await ref.get()).data();

    await fetch(`${SERVER_URL}/users/${data!["u_id"]}/reservations`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            u_id: data!["u_id"],
            start: data!["start"],
            end: data!["end"],
            reservation_id: parseInt(req.params.reservation),
            r_id: parseInt(roomID)
        })
    })

    ref.delete();

    res.send(`Deleted reservation ${reservationID} from room ${roomID}`);
});

export default router;