import './home.css';
import React from 'react';
import { Button } from '@mui/material';
import Landing from '../Landing/landing';
import Account from '../Account/account';


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
      <Account name = {"Clara Lee"} email = {"cl123@ebnet.org"} />
    </div>
  );
}

export default Home;
