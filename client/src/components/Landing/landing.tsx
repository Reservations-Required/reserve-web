import { Button } from '@mui/material';
import { useState } from 'react';
import './landing.css'

const Landing = () => {
    return (
        <div>
            {/* const buildings = ["Morrison","Olin","Upson","Uris","Carpenter","Rhodes"]; */}
            <p> Reservation Required </p>
            <div className="center"><h1> Popular Locations </h1>
                {/* buildings.map((e) => {<Button> {e} </Button>}) */}
                <Button> Morrison </Button>
                <Button> Olin </Button>
                <Button> Upson </Button>
                <Button> Uris </Button>
                <Button> Carpenter </Button>
                <Button> Rhodes </Button>
            </div>
        </div>
    );
};

export default Landing;