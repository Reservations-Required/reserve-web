import React, { useState } from 'react';
import './roomcard.css';

interface RoomCardProps {
    building: string
    room: number
    people: string[]
    favorite: boolean
}

const RoomCard = (props: RoomCardProps) => {
    return (
        <div className='RoomCard'>
            <h3>{props.building} {props.room}</h3>
            <p>{props.people[0]}-{props.people[1]} people</p>
        </div>
    );
};

export default RoomCard