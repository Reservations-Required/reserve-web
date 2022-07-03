import './room.css';
import Summary from '../Summary/summary';

interface RoomProps {
  building: string
  room: string
  image: string // string for now
  location: string
  capacity: number[]
  amenities: string[]
}

const Room = (props: RoomProps) => {
  return (
    <div className="Room">
      <p>{props.building} {props.room}</p>
      <p>{props.image}</p>
      <p>Location: {props.location}</p>
      <p>Capacity: {props.capacity[0]}-{props.capacity[1]} People</p>
      <p>Amenities: {ToString(props.amenities)}</p>
      <Summary building = "Morrison" room = "218" />
    </div>
  );
}

/**
 * Formats an array into a readable string
 * @param an array with at least 1 element
 * @returns readable string with list elements
 */
 function ToString(arr: string[]) {
  if (arr.length == 0) {
    return 'None'
  }
  var str = arr[0]
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      str += ', ' + arr[i]
    }
  return str
  }
}

export default Room;
