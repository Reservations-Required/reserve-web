import './home.css';
import RoomGrid from '../RoomGrid/roomgrid';
import { H2 } from '../../styles/fonts.style';

const Home = () => {

  return (
    <div>
      <H2>Some thing reserving rooms is an addiction. </H2>
      <H2>For us, it's a lifestyle.</H2>
      <div className="card">
        <RoomGrid />
      </div>
    </div>
  );
}

export default Home;