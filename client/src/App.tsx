import './App.css';
import { Button } from '@mui/material';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/home';
import Reservation from './components/Reservation/reservation';
import Room from './components/Room/room';
import Admin from './components/Admin/admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='reservation' element={<Reservation />} />
          <Route path='room' element={<Room />} />
          <Route path='admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
