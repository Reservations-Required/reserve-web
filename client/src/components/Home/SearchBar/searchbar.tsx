import LocationIcon from '../../../assets/location.svg';
import DateIcon from '../../../assets/date.svg';
import SearchIcon from '../../../assets/search-icon.svg';
import "./searchbar.css";
import { P2, P5 } from '../../../styles/fonts.style';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <div className="content">
                <div className="location">
                    <div className="location-icon">
                        <img src={LocationIcon} />
                    </div>
                    <div className="location-content">
                        <P5>Location<br />
                            <span className="subheading">
                                Choose a location
                            </span>
                        </P5>
                    </div>
                </div>
                <div className="date-time">
                    <div className="date-time-icon">
                        <img src={DateIcon} />
                    </div>
                    <div className="date-time-content">
                        <P5>Date<br />
                            <span className="subheading">
                                Choose a date
                            </span>
                        </P5>

                    </div>
                </div>
                <div className="search">
                    <img src={SearchIcon} />
                    <Link to = "/roomgrid" style={{ textDecoration: 'none', color: 'white'}}>
                        <P2>Search</P2>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default SearchBar;