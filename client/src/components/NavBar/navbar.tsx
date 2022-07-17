import './navbar.css';
import '../Home/home.css';
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { P1, P5 } from '../../styles/fonts.style';
import LOGO from '../../assets/roomservationB.svg';
import icon from '../../assets/profileIcon.svg';
import { logout } from "../../firebase";

interface NavBarProps {
    home: boolean
}

const NavBar = (props: NavBarProps) => {
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
        <div className={`${props.home ? "HomeNavBar" : "NavBar"}`}>
            <div className='left'>
                <img className="navLogo" src={LOGO} />
            </div>
            <div className='right'>
                <li>
                    <NavLink to="/" className='home' >
                        <p>Home</p>
                    </NavLink>
                </li>
                <li>
                    {!logged ? (
                        <NavLink to="/login" className='signin'>
                            <p>Sign In</p>
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


