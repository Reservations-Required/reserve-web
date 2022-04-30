import React, { useState, useEffect } from "react";
import { Button } from '@mui/material';

function App() {

  async function fetchBuilding() {
    const res = await fetch('http://localhost:8080/api/register/buildings/1', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const building = await res.json();
    return building;
  }

  fetchBuilding().then(building => {
    return building;
  })

  return (
    <div className="App">
      <Button onClick={fetchBuilding}>Click to Fetch</Button>
    </div>
  );
}

export default App;
