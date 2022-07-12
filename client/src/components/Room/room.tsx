import './room.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { H2, P1, P3, P4, P6, P7 } from "../../styles/fonts.style"
import Summary from './Summary/summary';
import tv from "../../assets/TV.svg"
import whiteboard from "../../assets/Whiteboard.svg"
import poweroutlet from "../../assets/Power Outlet.svg"
import wheelchairaccessible from "../../assets/Wheelchair Accessible.svg"

const amenitiesDict = new Map([
  ["TV", tv],
  ["Whiteboard", whiteboard],
  ["Power Outlet", poweroutlet],
  ["Wheelchair Accessible", wheelchairaccessible]])

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Room = () => {
  const { r_id } = useParams();

  const [roomData, setRoomData] = useState<any>({});
  async function getRoom() {
    const res = await fetch(`${SERVER_URL}/rooms/${r_id}`)
    const roomData = await res.json()
    setRoomData(roomData);
  }
  useEffect(() => { getRoom() }, [])

  const [buildingData, setBuildingData] = useState<any>({});
  async function getBuilding() {
    const res = await fetch(`${SERVER_URL}/buildings/${roomData['b_id']}`)
    const buildingData = await res.json()
    setBuildingData(buildingData)
  }
  useEffect(() => { getBuilding() })

  return (
    <div className="room">
      <div className="room_left">
        <H2>{buildingData['short']} {roomData['room_number']}</H2>
        <P4>{buildingData['location']} | {buildingData['name']}</P4>
        <img className="image" src={roomData['imageURL']} />
        <div className="attributes">
          <P3>Capacity</P3>
          <P3>Food Allowed</P3>
          <P3>Room Locked</P3>
          <P3>Accessible To</P3>
        </div>
        <div className="attributes_options">
          <P6>{roomData['capacity']} People</P6>
          <P6>{booleanString(roomData['food'])}</P6>
          <P6>{booleanString(roomData['locked'])}</P6>
          <P6>{roomData['accessible']}</P6>
        </div>
        <P1>Amenities & Features</P1>
        <P6>{roomData['amenities']?.map((e: string) => (
          <li><img src={amenitiesDict.get(e)} /> {e}</li>
        ))}</P6>
        <P1>Reservation Policies</P1>
        <P7>Toni Morrison study rooms may only be booked for 2 hours a day per person.</P7>
        <P7>RESERVATIONS HAVE PRIORITY. If you are using a space and do not have a valid reservation,<br></br>you must leave when asked by a group that has a valid reservation.</P7>
      </div>
      <Summary building={buildingData['short']} room={roomData['room_number']} />
    </div>
  );
}

/**
 * Turns a boolean value into its corresponding string
 * @param boolean value
 * @returns string of either "yes" or "no"
 */
function booleanString(bool: boolean) {
  return bool ? "Yes" : "No"
}

export default Room;
