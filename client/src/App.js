import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';

function App() {
  const SERVER_URL = "http://localhost:8080";

  async function fetchBuilding(event) {
    event.preventDefault()

    const res = await fetch(`${SERVER_URL}/register/buildings/1`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const building = await res.json();
    console.log(building);
  }

  return (
    <div className="App">
      <Button onClick={fetchBuilding}>Click to Fetch</Button>
    </div>
  );
}

export default App;
