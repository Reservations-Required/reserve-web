import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home/home';
import Reservation from './components/Reservation/reservation';
import Room from './components/Room/room';
import Admin from './components/Admin/admin';
import Login from './components/Login/login';
import Profile from './components/Profile/profile';
import Confirmation from './components/Confirmation/confirmation';
import NavBar from './components/NavBar/navbar';
import RoomGrid from './components/RoomGrid/roomgrid';
import Contact from './components/Contact/contact';

const WithoutNav = () => <Outlet />

const WithNav = () => {
  return (
    <>
      <NavBar home={false} />
      <Outlet />
    </>
  )
}

const HomeComponent = () => {
  return (
    <>
      <NavBar home={true} />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNav />} >
            <Route path='/login' element={<Login />} />
          </Route>

          <Route element={<HomeComponent />} >
            <Route path='/' element={<Home />} />
          </Route>

          <Route element={<WithNav />} >
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/roomgrid' element={<RoomGrid />} />
            <Route path='/room/:r_id' element={<Room />} />
            <Route path='/admin' element={<Admin />} />
            <Route path="/profile" element={< Profile />} />
            <Route path="/confirmation" element={<Confirmation room={"Toni Morrison 218"} date={"Wed, Apr 20, 2022"} time={"12:00 PM - 2:00 PM"} />} />
            <Route path ="/contactus" element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
