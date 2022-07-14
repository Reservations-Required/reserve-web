import { Time } from "./types";

/**
 * Reservation time verification
 * @param start the start time of the desired reservation
 * @param end the end time of the desired reservation
 * @returns either verifies the time or sends the appropriate error message
 */
export function checkTimeSlot(start: Time, end: Time) {
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
