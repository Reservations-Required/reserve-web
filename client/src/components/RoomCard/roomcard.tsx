import './roomcard.css';
import { useEffect } from 'react';
import { P2, P7 } from '../../styles/fonts.style';

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
            <img id={`roomImage`} width = "100" src = ""/>
            <P2>{props.building} {props.room}</P2>
            <P7>{props.capacity[0]}-{props.capacity[1]} people</P7>
        </div>
    );
};

export default RoomCard;