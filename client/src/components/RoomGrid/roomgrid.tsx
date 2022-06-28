import './roomgrid.css';
import React, { useEffect, useState} from 'react';
import { Grid } from '@mui/material';
import RoomCard from '../RoomCard/roomcard';

const RoomGrid = () => {
    return (
        <div className='RoomGrid'>
            <Grid container xs={9}>
                {/* {cards.map((card) => <RoomCard {...card}/>)} */}
                <RoomCard building='Morrison' room={218} people={['5','7']} favorite={false}></RoomCard>
                <RoomCard building='Morrison' room={219} people={['5','7']} favorite={false}></RoomCard>
                <RoomCard building='Morrison' room={216} people={['5','7']} favorite={false}></RoomCard>
                <RoomCard building='Morrison' room={217} people={['5','7']} favorite={false}></RoomCard>
                <RoomCard building='Morrison' room={215} people={['5','7']} favorite={false}></RoomCard>
            </Grid>
        </div>
    );
}

export default RoomGrid;