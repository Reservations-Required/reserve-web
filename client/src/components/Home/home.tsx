import './home.css';
import React from 'react';
import { Button } from '@mui/material';
import Landing from '../Landing/landing';
import RoomCard from '../RoomCard/roomcard';
import Dashboard from '../Dashboard/dashboard';

const Home = () => {
  const SERVER_URL = "http://localhost:8080/api";

  async function fetchBuilding() {
    const res = await fetch(`${SERVER_URL}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const building = await res.json();
    console.log(building);
  }

  return (
    <div className="Home">
      <Button onClick={fetchBuilding}>Click to Fetch</Button>
      <Landing />
      <RoomCard building='Morrison' room={218} people={['5','7']} favorite={false}/>
    </div>
  );
}

export default Home;
