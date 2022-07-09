import './roomgrid.css';
import { Grid } from '@mui/material';
import RoomCard from '../RoomCard/roomcard';
import { useEffect, useState } from 'react';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const RoomGrid = () => {
    const [data, setData] = useState([]);

    async function retrieveRooms() {
        const res = await fetch(`${SERVER_URL}/rooms`);
        const data = await res.json();
        setData(data);
    }

    // useEffect(() => {
    //     retrieveRooms();
    // });

    return (
        <div className='RoomGrid'>
            <Grid container columns={9}>
                {data.map((item) => (
                    <Grid item xs = {3}>
                        <RoomCard favorite = {false} data = {item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default RoomGrid;