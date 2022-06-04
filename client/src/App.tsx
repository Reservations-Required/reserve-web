import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from '@mui/material';
import Landing from './components/Landing/landing';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/dashboard';


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
    <div className="App">
      <Button onClick={fetchBuilding}>Click to Fetch</Button>
      <Landing />
      <Router>
        <Routes>
          <Route path="/login" element={< Login />} />
          <Route path="/dashboard" element={< Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
