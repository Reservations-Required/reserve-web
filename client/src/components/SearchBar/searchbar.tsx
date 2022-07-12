import LocationIcon from '../../assets/location.svg';
import DateIcon from '../../assets/date.svg';
import "./searchbar.css";
import {P5} from "../../styles/fonts.style"

const SearchBar = () => {
    return (
        <div className = "SearchBar">
            <img src={LocationIcon} />
            <P5>Location</P5>
            <P5>Choose a location</P5>
            <img src={DateIcon} />
            <P5>Date</P5>
            <P5>Choose a date</P5>
            <P5>Search</P5>
        </div>
    )
}

export default SearchBar;