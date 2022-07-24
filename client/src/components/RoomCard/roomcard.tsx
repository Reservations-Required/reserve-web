import './roomcard.css';
import { useEffect, useState } from 'react';
import { P2, P5, P7 } from '../../styles/fonts.style';
import { useNavigate, Link } from 'react-router-dom';
import Favorites from '../Favorites/favorites';

interface RoomCardProps {
    data: any
    favorite: boolean
}

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const RoomCard = (props: RoomCardProps) => {
    const navigate = useNavigate();

    const [roomData, setRoomData] = useState<any>({});
    async function getRoomData() {
        const res = await fetch(`${SERVER_URL}/rooms/${props.data.r_id}`)
        const roomData = await res.json()
        setRoomData(roomData);
    }
    useEffect(() => { getRoomData() }, [])

    const img = document.getElementById(`roomImage-${props.data.r_id}`);
    img?.setAttribute('src', roomData["imageURL"])

    const [building, setBuilding] = useState("");

    async function getBuilding() {
        const res = await fetch(`${SERVER_URL}/buildings/${props.data.b_id}`);
        const buildingName = (await res.json())!["short"];
        setBuilding(buildingName);
    }

    useEffect(() => { getBuilding() }, [building]);

    return (
        <div className='RoomCard'>
            <Link to={`/room/${props.data.r_id}`}><img className={"roomImage"} id={`roomImage-${props.data.r_id}`} width="100" src="" /></Link>
            <div className="room-card-content">
                <div className="room-card-content-left" >
                    <Link to={`/room/${props.data.r_id}`} style={{ textDecoration: 'none' }} >
                        <div className="room-card-content-left-1">
                            <div className="room-card-info">
                                <P2>{building} {props.data.room_number}</P2>
                            </div>
                            <div className="room-card-time">
                                <P5>12:00 PM - 3:00 PM</P5>
                            </div>
                        </div>
                        <div className="room-card-content-left-2">
                            <P7>{props.data.capacity} people</P7>
                        </div>
                    </Link>
                </div>
                <div className="room-card-content-right">
                    <Favorites r_id={props.data.r_id} b_id={props.data.b_id} />
                </div>
            </div>
        </div>
    );
};

export default RoomCard;

