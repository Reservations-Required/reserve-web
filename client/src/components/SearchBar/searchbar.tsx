import LocationIcon from '../../assets/location.svg';
import DateIcon from '../../assets/date.svg';
import SearchIcon from '../../assets/search-icon.svg';
import "./searchbar.css";
import { P2, P5 } from '../../styles/fonts.style';

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <div className="content">
                <div className="location">
                    <div className="location-icon">
                        <img src={LocationIcon} />
                    </div>
                    <div className="location-content">
                        <P5>Location<br />Choose a location</P5>
                    </div>
                </div>
                <div className="date-time">
                    <div className="date-time-icon">
                        <img src={DateIcon} />
                    </div>
                    <div className="date-time-content">
                        <P5>Date<br/>
                        Choose a date</P5>
                    </div>
                </div>
            </div>
            <div className="search">
                <img src={SearchIcon} />
                <P2>Search</P2>
            </div>
        </div>
    )
}

export default SearchBar;