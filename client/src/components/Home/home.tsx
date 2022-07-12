import './home.css';
import SearchBar from '../SearchBar/searchbar';
import { H2 } from '../../styles/fonts.style';
import design from '../../assets/homeDesign.svg';
import Feedback from './/feedback';
import Footer from './/footer';

const Home = () => {

  return (
    <div className='Home'>
      <img className="homedesign" src={design} />
      
      <div className='top'>
        <H2 className="title">Reservations Made <span className="title2">Easy</span>. </H2>
        <div className='searchBar'>
          <SearchBar />
        </div>
      </div>

      <div className='feedback-container'>
        <Feedback/>
      </div>

      <div className='footer'>
        <Footer/>
      </div>

    </div>

  );
}

export default Home;