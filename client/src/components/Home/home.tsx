// import './home.css';
// import { useState } from 'react';
// import { Button } from '@mui/material';
// import Landing from './Landing/landing';
// import RoomCard from '../RoomCard/roomcard';

// const Home = () => {
//   const SERVER_URL = "http://localhost:8080/api";
//   const [test, setTest] = useState('');

//   async function fetchBuilding(x: number) {
//     const res = await fetch(`${SERVER_URL}/buildings/${x}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     });

//     const building = await res.json();
//     setTest(building);
//     console.log(building);
//   }

//   return (
//     <div className="Home">
//       <Button className="b" onClick={() => { fetchBuilding(2) }}>Click to Fetch</Button>

//       <div className="landing">
//         <Landing />
//       </div>

//       <div className="card">
//         <RoomCard building='Morrison' room={218} people={['5', '7']} favorite={false} />
//       </div>

//       <div>
//         {JSON.stringify(test)}
//       </div>
//     </div>
//   );
// }

// export default Home;

import './home.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import Landing from './Landing/landing';
import RoomCard from '../RoomCard/roomcard';
import RoomGrid from '../RoomGrid/roomgrid';

const Home = () => {
  const SERVER_URL = "http://localhost:8080/api";
  const [test, setTest] = useState('');

  async function fetchBuilding(x: number) {
    const res = await fetch(`${SERVER_URL}/buildings/${x}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const building = await res.json();
    setTest(building);
    console.log(building);
  }
  
  async function deleteBuilding(x: number) {
    const res = await fetch(`${SERVER_URL}/buildings/${x}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'DELETE',
    });
  }

  return (
    <div className="Home">
      <Button className="b" onClick={() => { fetchBuilding(2) }}>Click to Fetch</Button>
      <Button className="b" onClick={() => { deleteBuilding(4) }}>Click to Delete</Button>

      <div className="landing">
        <Landing />
      </div>

      <div className="card">
        <RoomGrid />
        {/* <RoomCard building='Morrison' room={218} people={['5', '7']} favorite={false} /> */}
      </div>

      <div>
        {JSON.stringify(test)}
      </div>
    </div>
  );
}

export default Home;