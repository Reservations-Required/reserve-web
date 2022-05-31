import { Button } from '@mui/material';
import { useState } from 'react';
import './landing.css'

const Landing = () => {
    const buildings: string[] = ["Morrison", "Olin", "Upson", "Uris", "Carpenter", "Rhodes"];
    const buildingsMap: React.ReactNode = buildings.map((e) => { return <Button> {e} </Button> })
    return (
        <div>
            <p> Reservation Required </p>
            <div className="center"><h1> Popular Locations </h1>
                {buildingsMap}
            </div>
        </div>
    );
};

export default Landing;