import './home.css';
import {useState} from 'react';
import { Button } from '@mui/material';
import Landing from '../Landing/landing';
import RoomCard from '../RoomCard/roomcard';

const Home = () => {
  const SERVER_URL = "http://localhost:8080/api";

  async function fetchBuilding(x: number) {
    const res = await fetch(`${SERVER_URL}/buildings/${x}`, {
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
      <Button onClick={() => {fetchBuilding(2)}}>Click to Fetch</Button>
      <Landing />
      <RoomCard building='Morrison' room={218} people={['5','7']} favorite={false}/>
    </div>
  );
}

export default Home;
