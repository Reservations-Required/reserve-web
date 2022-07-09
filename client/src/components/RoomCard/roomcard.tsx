import './roomcard.css';
import { useEffect, useState } from 'react';
import { P2, P7 } from '../../styles/fonts.style';

interface RoomCardProps {
    data: any
    favorite: boolean
}

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const RoomCard = (props: RoomCardProps) => {
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
    getBuilding();
    
    return (
        <div className='RoomCard'>
            <img id={`roomImage`} width="100" src="" />
            <P2>{building} {props.data.room_number}</P2>
            <P7>{props.data.capacity} people</P7>
        </div>
    );
};

export default RoomCard;