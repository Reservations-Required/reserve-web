import './navbar.css';
import '../Home/home.css';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { P1, P5 } from '../../styles/fonts.style';
import LOGO from '../../assets/roomservationB.svg';
import icon from '../../assets/profileIcon.svg';
import { logout } from "../../firebase";


const NavBar = () => {
    const [logged, setlogged] = useState(false);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setlogged(true);
        } else {
            setlogged(false);
        }
    });

    return (
        <div className="NavBar">
            <div className='left'>
                <img className="navLogo" src={LOGO} />
            </div>
            <div className='right'>
                <li>
                    <NavLink to="/" className='home' >
                        <P1>Home</P1>
                    </NavLink>
                </li>
                <li>
                    {!logged ? (
                        <NavLink to="/login" className='signin'>
                            <P1>Sign In</P1>
                        </NavLink>
                    ) : (
                        <div className='navdropdown' >
                            <img className='navdropbtn' src={icon}></img>
                            <div className="navdropdown-content">
                                <a href="/profile">
                                    <P5>Profile</P5>
                                </a>
                                <a href="/reservation">
                                    <P5>My Reservations</P5>
                                </a>
                                <a onClick={logout}>
                                    <P5>Sign Out</P5>
                                </a>
                            </div>
                        </div>
                    )}
                </li>
            </div>
        </div>
    );
}

export default NavBar;


