import './roomgrid.css';
import { Grid } from '@mui/material';
import RoomCard from '../RoomCard/roomcard';

const RoomGrid = () => {
    return (
        <div className='RoomGrid'>
            <Grid container columns={9}>
                {/* {cards.map((card) => <RoomCard {...card}/>)} */}
                <Grid item xs={3}>
                    <RoomCard building='Morrison' room={218} capacity={['5', '7']} favorite={false}></RoomCard>
                </Grid>
                <Grid item xs={3}>
                    <RoomCard building='Morrison' room={219} capacity={['5', '7']} favorite={false}></RoomCard>
                </Grid>
                <Grid item xs={3}>
                    <RoomCard building='Morrison' room={216} capacity={['5', '7']} favorite={false}></RoomCard>
                </Grid>
                <Grid item xs={3}>
                    <RoomCard building='Morrison' room={217} capacity={['5', '7']} favorite={false}></RoomCard>
                </Grid>
                <Grid item xs={3}>
                    <RoomCard building='Morrison' room={215} capacity={['5', '7']} favorite={false}></RoomCard>
                </Grid>
            </Grid>
        </div>
    );
}

export default RoomGrid;