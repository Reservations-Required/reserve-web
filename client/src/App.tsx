import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from '@mui/material';
import Landing from './components/Landing/landing';
import Login from './components/Login/login';



function App() {
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
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={< Login />} />
        </Routes>
      </Router>
    </div>
    // <div className="App">
    //   <Button onClick={fetchBuilding}>Click to Fetch</Button>
    //   <Landing />
    // </div>
  );
}

export default App;
