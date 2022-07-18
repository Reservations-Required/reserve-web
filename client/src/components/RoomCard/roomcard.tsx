import './roomcard.css';
import { useEffect, useState } from 'react';
import { P2, P7 } from '../../styles/fonts.style';
import { useNavigate } from 'react-router-dom';
import Favorites from '../Favorites/favorites';

interface RoomCardProps {
    data: any
    favorite: boolean
}

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const RoomCard = (props: RoomCardProps) => {
    const navigate = useNavigate();

    const [building, setBuilding] = useState("");

    async function getImage() {
        const res = await fetch(`${SERVER_URL}/rooms/1`);
        const roomImageURL = (await res.json())!["imageURL"];

        const img = document.getElementById('roomImage');
        img?.setAttribute('src', roomImageURL);
    }

    async function getBuilding() {
        const res = await fetch(`${SERVER_URL}/buildings/${props.data.b_id}`);
        const buildingName = (await res.json())!["short"];
        setBuilding(buildingName);
    }

    getImage();
    useEffect(()=>{getBuilding()}, [building]);

    return (
        <div className='RoomCard' onClick={() => { navigate(`/room/${props.data.r_id}`) }}>
            <img id={`roomImage`} width="100" src="" />
            <div className="content">
                <div className="mainInfo">
                    <P2>{building} {props.data.room_number}</P2>
                </div>
                <div className="capacity">
                    <P7>{props.data.capacity} people</P7>
                </div>
                <div className="favorite-room-card">
                    
                </div>
            </div>
        </div>
    );
};

export default RoomCard;

