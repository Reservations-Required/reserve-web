import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home/home';
import Reservation from './components/Reservation/reservation';
import Room from './components/Room/room';
import Admin from './components/Admin/admin';
import Login from './components/Login/login';
import Profile from './components/Profile/profile';
import NavBar from './components/NavBar/navbar';

const WithoutNav = () => <Outlet />

const WithNav = () => {
  return (
    <>
      <NavBar />
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
          
          <Route element={<WithNav />} >
            <Route path='/' element={<Home />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/room' element={<Room room_id={1} />} />
            <Route path='/admin' element={<Admin />} />
            <Route path="/profile" element={< Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
