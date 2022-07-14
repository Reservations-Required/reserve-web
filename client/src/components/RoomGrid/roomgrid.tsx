import './roomgrid.css';
import { Grid } from '@mui/material';
import RoomCard from '../RoomCard/roomcard';
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/searchbar';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const RoomGrid = () => {
    const [data, setData] = useState([]);

    async function retrieveRooms() {
        const res = await fetch(`${SERVER_URL}/rooms`);
        const data = await res.json();
        setData(data);
    }

    useEffect(() => {
        retrieveRooms();
    }, []);

    return (
        <div className='RoomGrid'>
            <div className="searchBar">
                <SearchBar />
            </div>
            <div className="content">
                <div className="filter-panel">Filter Panel</div>
                <div className="grid">
                    <Grid container columns={9}>
                        {data.map((item) => (
                            <Grid item xs={3}>
                                <RoomCard favorite={false} data={item} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>

        </div>
    );
}

export default RoomGrid;