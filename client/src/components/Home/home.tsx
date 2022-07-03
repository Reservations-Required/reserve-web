import './home.css';
import RoomGrid from '../RoomGrid/roomgrid';
import { H2 } from '../../styles/fonts.style';

const Home = () => {

  return (
    <div>
      <H2 className = "title">Some think reserving rooms is an addiction. </H2>
      <H2 className = "title">For us, it's a <span className="title2">lifestyle</span>.</H2>
      <div className="card">
        <RoomGrid />
      </div>
    </div>
  );
}

export default Home;