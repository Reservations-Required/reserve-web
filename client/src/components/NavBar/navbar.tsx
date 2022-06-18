import './navbar.css';
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const BAYMAX = require('../../assets/baymax1.gif');

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
                <img className="pic"
                    src={BAYMAX}
                />
                <p>Morrison Reservations</p>
            </div>
            <div className='right'>
                <li>
                    <NavLink to="/" className='home' >Home</NavLink>
                </li>
                <li>
                    {!logged ? (
                        <NavLink to="/login" className='signin'>Sign In</NavLink>
                    ) : (
                        <NavLink to="/profile" className='signin'>Profile</NavLink>
                    )}
                </li>
            </div>
        </div>
    );
}

export default NavBar;
