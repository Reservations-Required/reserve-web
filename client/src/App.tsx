import './App.css';
import { Button } from '@mui/material';
import Landing from './components/Landing/landing';
import Account from './components/Account/account';
import RoomCard from './components/RoomCard/roomcard';

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
      <Account name = {"Clara Lee"} email = {"cl123@ebnet.org"} />
      <RoomCard building='Morrison' room={218} people={['5','7']} favorite={false}/>
    </div>
  );
}

export default App;
