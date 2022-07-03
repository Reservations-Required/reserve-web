import './roomcard.css';
import { useEffect } from 'react';

interface RoomCardProps {
    building: string
    room: number
    capacity: string[]
    favorite: boolean
}

const SERVER_URL = "http://localhost:8080/api";

async function getImage() {
    const res = await fetch(`${SERVER_URL}/rooms/1`);
    const roomImageURL = (await res.json())!["imageURL"];

    const img = document.getElementById('roomImage');
    img?.setAttribute('src', roomImageURL);
}

const RoomCard = (props: RoomCardProps) => {
    useEffect(() => {
        getImage();
    })
    
    return (
        <div className='RoomCard'>
            <h3>{props.building} {props.room}</h3>
            <p>{props.capacity[0]}-{props.capacity[1]} people</p>
            <img id={`roomImage`} width = "200" src = ""/>
        </div>
    );
};

export default RoomCard;