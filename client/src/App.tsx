import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Reservation from './components/Reservation/reservation';
import Room from './components/Room/room';
import Admin from './components/Admin/admin';
import Login from './components/Login/login';
import Profile from './components/Profile/profile';
import NavBar from './components/NavBar/navbar';

import Summary from './components/Summary/summary';

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/room' element={<Room building='Morrison' room='218E' image='temp string for img' location='north campus' capacity={[4, 6]} amenities={[]} />} />
          <Route path='/admin' element={<Admin />} />
          <Route path="/login" element={< Login />} />
          <Route path="/profile" element={< Profile />} />

          <Route path = "/summary" element = {<Summary building = "Morrison" room = "218" />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
