import { Button } from '@mui/material';
import { useState } from 'react';
import './landing.css'

const Landing = () => {
    const buildings: string[] = ["Morrison 218", "Morrison 220", "Morrison 222", "Morrison 224"];
    const buildingsMap: React.ReactNode = buildings.map((e) => { return <Button className = "buttons"> {e} </Button>})
    return (
        <div>
            <p> Reservation Required </p>
            <div className = "center"><h1> Suggestions </h1>
            {buildingsMap}
            </div>
        </div>
    );
};

export default Landing;