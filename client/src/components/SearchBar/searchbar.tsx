import LocationIcon from '../../assets/location.svg';
import DateIcon from '../../assets/date.svg';
import "./searchbar.css";

const SearchBar = () => {
    return (
        <div className = "SearchBar">
            <img src={LocationIcon} />
            <h1>Location</h1>
            <h1>Choose a location</h1>
            <img src={DateIcon} />
            <h1>Date</h1>
            <h1>Choose a date</h1>
            <h1>Search</h1>
        </div>
    )
}

export default SearchBar;