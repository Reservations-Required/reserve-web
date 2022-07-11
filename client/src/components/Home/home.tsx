import './home.css';
import RoomGrid from '../RoomGrid/roomgrid';
import SearchBar from '../SearchBar/searchbar';
import { H2 } from '../../styles/fonts.style';

const Home = () => {

  return (
    <div>
      <H2 className="title">Reservations Made <span className = "title2">Easy</span>. </H2>
      <div className='searchBar'>
        <SearchBar />
      </div>
      <div className="grid">
        <RoomGrid />
      </div>
      <a href = "/admin">Admin</a>
    </div>
  );
}

export default Home;